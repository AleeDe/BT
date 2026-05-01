import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { DISALLOWED_EMAIL_DOMAINS, DISALLOWED_MESSAGE_WORDS } from '@/lib/contact';

export const runtime = 'nodejs';

type SubmissionState = {
  status: 'processing' | 'success' | 'failed';
  error?: string;
  updatedAt: number;
};

const submissionStore = new Map<string, SubmissionState>();
const SUBMISSION_TTL_MS = 30 * 60 * 1000;

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getEmailDomain(email: string): string {
  return email.split('@')[1]?.trim().toLowerCase() || '';
}

function containsOnlyAscii(value: string): boolean {
  return /^[\x09\x0A\x0D\x20-\x7E]*$/.test(value);
}

function containsHtml(value: string): boolean {
  return /<[^>]*>|&(?:[a-z\d]+|#\d+|#x[a-f\d]+);/i.test(value);
}

function containsDisallowedWord(value: string): boolean {
  return DISALLOWED_MESSAGE_WORDS.some((word) => new RegExp(`\\b${word}\\b`, 'i').test(value));
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validatePayload(payload: Partial<ContactPayload>): string | null {
  if (!payload.name || payload.name.trim().length < 2) {
    return 'Please enter a valid name.';
  }
  if (!payload.email || !isValidEmail(payload.email)) {
    return 'Please enter a valid email address.';
  }
  if (DISALLOWED_EMAIL_DOMAINS.has(getEmailDomain(payload.email))) {
    return 'Please use a business email address instead of a free email provider.';
  }
  if (!payload.subject || payload.subject.trim().length < 2) {
    return 'Please enter a valid subject.';
  }
  if (!payload.message || payload.message.trim().length < 5) {
    return 'Please enter a valid message.';
  }
  const subject = payload.subject.trim();
  const message = payload.message.trim();
  if (!containsOnlyAscii(subject) || !containsOnlyAscii(message)) {
    return 'Subject and message may contain ASCII characters only.';
  }
  if (containsDisallowedWord(subject) || containsDisallowedWord(message)) {
    return 'Subject and message contain blocked words. Please provide a real project inquiry.';
  }
  if (containsHtml(subject) || containsHtml(message)) {
    return 'HTML, scripts, tags, and encoded HTML are not allowed in subject or message.';
  }
  return null;
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function normalizeClientError(error: unknown): string {
  const err = error as { message?: string; code?: string; status?: number };

  if (err?.message?.includes('Missing required environment variable:')) {
    return err.message;
  }
  if (err?.code === 'EAUTH') {
    return 'SMTP authentication failed. Check SMTP user/password and provider settings.';
  }
  if (err?.status === 403 || err?.message?.toLowerCase().includes('does not have permission')) {
    return 'Google Sheets access denied. Share the sheet with your service account email as Editor.';
  }

  return 'Could not process the submission in background. Please contact support if you do not receive a reply email.';
}

function cleanupSubmissionStore(): void {
  const now = Date.now();
  for (const [id, state] of submissionStore.entries()) {
    if (now - state.updatedAt > SUBMISSION_TTL_MS) {
      submissionStore.delete(id);
    }
  }
}

async function sendEmail(payload: ContactPayload, submittedAt: string, ip: string, userAgent: string) {
  const smtpHost = getRequiredEnv('SMTP_HOST');
  const smtpPort = Number(getRequiredEnv('SMTP_PORT'));
  const smtpUser = getRequiredEnv('SMTP_USER');
  const smtpPass = getRequiredEnv('SMTP_PASS');
  const toEmail = getRequiredEnv('CONTACT_TO_EMAIL');

  const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser;
  const fromName = process.env.SMTP_FROM_NAME || 'BabulTech Contact Form';
  const safePayload = {
    name: escapeHtml(payload.name),
    email: escapeHtml(payload.email),
    subject: escapeHtml(payload.subject),
    message: escapeHtml(payload.message).replace(/\n/g, '<br/>'),
  };
  const safeMeta = {
    submittedAt: escapeHtml(submittedAt),
    ip: escapeHtml(ip),
    userAgent: escapeHtml(userAgent),
  };

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const info = await transporter.sendMail({
    from: `${fromName} <${fromEmail}>`,
    to: toEmail,
    replyTo: payload.email,
    subject: `[Contact Form] ${payload.subject}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Subject: ${payload.subject}`,
      `Message:`,
      payload.message,
      '',
      `Submitted At: ${submittedAt}`,
      `IP: ${ip}`,
      `User Agent: ${userAgent}`,
    ].join('\n'),
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safePayload.name}</p>
      <p><strong>Email:</strong> ${safePayload.email}</p>
      <p><strong>Subject:</strong> ${safePayload.subject}</p>
      <p><strong>Message:</strong><br/>${safePayload.message}</p>
      <hr/>
      <p><strong>Submitted At:</strong> ${safeMeta.submittedAt}</p>
      <p><strong>IP:</strong> ${safeMeta.ip}</p>
      <p><strong>User Agent:</strong> ${safeMeta.userAgent}</p>
    `,
  });

  console.log('Contact email accepted by SMTP:', {
    messageId: info.messageId,
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
  });
}

async function sendClientAcknowledgement(payload: ContactPayload) {
  const smtpHost = getRequiredEnv('SMTP_HOST');
  const smtpPort = Number(getRequiredEnv('SMTP_PORT'));
  const smtpUser = getRequiredEnv('SMTP_USER');
  const smtpPass = getRequiredEnv('SMTP_PASS');
  const toEmail = getRequiredEnv('CONTACT_TO_EMAIL');

  const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser;
  const fromName = process.env.SMTP_FROM_NAME || 'BabulTech Website';
  const safePayload = {
    name: escapeHtml(payload.name),
    subject: escapeHtml(payload.subject),
    message: escapeHtml(payload.message).replace(/\n/g, '<br/>'),
  };
  const safeToEmail = escapeHtml(toEmail);

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const info = await transporter.sendMail({
    from: `${fromName} <${fromEmail}>`,
    to: payload.email,
    replyTo: toEmail,
    subject: `We received your message: ${payload.subject}`,
    text: [
      `Hi ${payload.name},`,
      '',
      'Thank you for contacting BabulTech.',
      'We have received your message and our team will get back to you shortly.',
      '',
      `Your subject: ${payload.subject}`,
      'Your message:',
      payload.message,
      '',
      `If needed, you can reply directly to: ${toEmail}`,
      '',
      'Best regards,',
      'BabulTech Team',
    ].join('\n'),
    html: `
      <p>Hi ${safePayload.name},</p>
      <p>Thank you for contacting <strong>BabulTech</strong>.</p>
      <p>We have received your message and our team will get back to you shortly.</p>
      <p><strong>Your subject:</strong> ${safePayload.subject}</p>
      <p><strong>Your message:</strong><br/>${safePayload.message}</p>
      <p>If needed, you can reply directly to: <a href="mailto:${safeToEmail}">${safeToEmail}</a></p>
      <p>Best regards,<br/>BabulTech Team</p>
    `,
  });

  console.log('Client acknowledgment email accepted by SMTP:', {
    messageId: info.messageId,
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
  });
}

async function appendToGoogleSheet(payload: ContactPayload, submittedAt: string, ip: string, userAgent: string) {
  const spreadsheetId = getRequiredEnv('GOOGLE_SHEETS_ID');
  const serviceAccountEmail = getRequiredEnv('GOOGLE_SERVICE_ACCOUNT_EMAIL');
  const privateKeyRaw = getRequiredEnv('GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY');
  const sheetName = process.env.GOOGLE_SHEET_NAME || 'Sheet1';

  const privateKey = privateKeyRaw.replace(/\\n/g, '\n');

  const auth = new google.auth.JWT({
    email: serviceAccountEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:G`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[submittedAt, payload.name, payload.email, payload.subject, payload.message, ip, userAgent]],
    },
  });
}

async function processSubmissionInBackground(
  submissionId: string,
  payload: ContactPayload,
  submittedAt: string,
  ip: string,
  userAgent: string
) {
  try {
    await sendEmail(payload, submittedAt, ip, userAgent);
    await sendClientAcknowledgement(payload);
    await appendToGoogleSheet(payload, submittedAt, ip, userAgent);
    submissionStore.set(submissionId, {
      status: 'success',
      updatedAt: Date.now(),
    });
  } catch (error) {
    console.error('Background contact submission failed:', error);
    submissionStore.set(submissionId, {
      status: 'failed',
      error: normalizeClientError(error),
      updatedAt: Date.now(),
    });
  }
}

export async function GET(req: NextRequest) {
  const submissionId = req.nextUrl.searchParams.get('submissionId')?.trim();

  if (!submissionId) {
    return NextResponse.json({ error: 'Missing submissionId query parameter.' }, { status: 400 });
  }

  cleanupSubmissionStore();
  const state = submissionStore.get(submissionId);

  if (!state) {
    return NextResponse.json({ error: 'Submission status not found or expired.' }, { status: 404 });
  }

  return NextResponse.json({
    submissionId,
    status: state.status,
    error: state.error,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;
    const validationError = validatePayload(body);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const payload: ContactPayload = {
      name: body.name!.trim(),
      email: body.email!.trim(),
      subject: body.subject!.trim(),
      message: body.message!.trim(),
    };

    const forwardedFor = req.headers.get('x-forwarded-for') || '';
    const ip = forwardedFor.split(',')[0]?.trim() || 'Unknown';
    const userAgent = req.headers.get('user-agent') || 'Unknown';
    const submittedAt = new Date().toISOString();

    cleanupSubmissionStore();
    const submissionId = crypto.randomUUID();
    submissionStore.set(submissionId, {
      status: 'processing',
      updatedAt: Date.now(),
    });

    setTimeout(() => {
      void processSubmissionInBackground(submissionId, payload, submittedAt, ip, userAgent);
    }, 0);

    return NextResponse.json({
      ok: true,
      queued: true,
      submissionId,
      message: 'Form received. We are processing your request in background.',
    });
  } catch (error) {
    console.error('Contact form submission failed:', error);

    return NextResponse.json(
      { error: normalizeClientError(error) },
      { status: 500 }
    );
  }
}
