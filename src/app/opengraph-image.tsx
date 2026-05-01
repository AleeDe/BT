import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export const runtime = "edge";
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 20% 0%, rgba(16,185,129,0.25), transparent 50%), radial-gradient(circle at 100% 100%, rgba(99,102,241,0.25), transparent 50%), #020617",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "28px",
            opacity: 0.85,
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "9999px",
              background: "#10b981",
              boxShadow: "0 0 24px #10b981",
            }}
          />
          <span style={{ letterSpacing: "0.2em", textTransform: "uppercase" }}>
            {SITE_NAME}
          </span>
        </div>

        <div
          style={{
            fontSize: "84px",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ color: "#cbd5e1" }}>Certified Expertise.</span>
          <span
            style={{
              backgroundImage: "linear-gradient(90deg,#10b981,#34d399)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Rapid Resolution.
          </span>
        </div>

        <div
          style={{
            marginTop: "40px",
            fontSize: "30px",
            color: "#94a3b8",
            maxWidth: "900px",
            lineHeight: 1.35,
          }}
        >
          Enterprise IT Solutions · CRM Implementation · Technical Partnership
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            color: "#64748b",
          }}
        >
          <span>Salesforce · AWS · Azure · Google Cloud · Boomi</span>
          <span>babultech.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
