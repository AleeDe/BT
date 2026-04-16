This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact Form: Email + Google Sheets

The contact form is configured to submit to `POST /api/contact`.

`POST /api/contact` now returns success immediately with a `submissionId`, then the backend processes email + sheet tasks in background.

You can check processing state with `GET /api/contact?submissionId=...`.

Each submission does two things:

1. Sends an email notification to your inbox.
2. Appends the same submission to your Google Sheet.
3. Sends an acknowledgment email to the client who submitted the form.

### 1. Set environment variables

Copy `.env.example` to `.env.local` and fill in your values.

Required groups:

- SMTP settings for email delivery.
- Google Sheets + service account credentials for row append.

### 2. Google Sheets setup

1. Create a Google Cloud service account.
2. Enable Google Sheets API for the project.
3. Generate a JSON key for the service account.
4. Put the service account email and private key into `.env.local`.
5. Share your target Google Sheet with the service account email (Editor access).

### 3. Sheet columns

The API appends columns in this order:

1. `Submitted At`
2. `Name`
3. `Email`
4. `Subject`
5. `Message`
6. `IP`
7. `User Agent`
