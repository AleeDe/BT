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
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 15% 0%, rgba(16,185,129,0.32), transparent 55%), radial-gradient(circle at 100% 100%, rgba(99,102,241,0.28), transparent 50%), #020617",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Brand row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "26px",
            fontWeight: 700,
            color: "#10b981",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              background: "#10b981",
              boxShadow: "0 0 28px #10b981",
            }}
          />
          <span>{SITE_NAME}</span>
        </div>

        {/* Main headline — large, prominent, single focal point */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "44px",
            fontSize: "108px",
            fontWeight: 900,
            lineHeight: 0.98,
            letterSpacing: "-0.035em",
          }}
        >
          <span style={{ color: "#f8fafc" }}>Architecting</span>
          <span
            style={{
              backgroundImage: "linear-gradient(90deg,#10b981 0%,#34d399 50%,#6ee7b7 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Enterprise IT.
          </span>
        </div>

        {/* Subheading */}
        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: "32px",
            color: "#cbd5e1",
            fontWeight: 500,
            maxWidth: "920px",
            lineHeight: 1.3,
          }}
        >
          Salesforce · AWS · Azure · Google Cloud · Boomi — certified, end to end.
        </div>

        {/* Bottom row: CTA button + URL */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "18px 36px",
              fontSize: "28px",
              fontWeight: 700,
              color: "#020617",
              background: "linear-gradient(90deg,#10b981,#34d399)",
              borderRadius: "9999px",
              boxShadow: "0 12px 40px rgba(16,185,129,0.45)",
            }}
          >
            <span>Start Your Transformation</span>
            <span style={{ fontSize: "32px", lineHeight: 1 }}>→</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "#94a3b8",
              fontWeight: 500,
            }}
          >
            babultech.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
