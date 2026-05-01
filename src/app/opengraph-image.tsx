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
          backgroundColor: "#020617",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(16,185,129,0.32), transparent 55%), radial-gradient(circle at 100% 100%, rgba(99,102,241,0.28), transparent 50%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              backgroundColor: "#10b981",
              boxShadow: "0 0 28px #10b981",
            }}
          />
          <span
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#10b981",
              letterSpacing: "5px",
              textTransform: "uppercase",
            }}
          >
            {SITE_NAME}
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "44px",
          }}
        >
          <span
            style={{
              fontSize: "108px",
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              color: "#f8fafc",
            }}
          >
            Architecting
          </span>
          <span
            style={{
              fontSize: "108px",
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              color: "#10b981",
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
            maxWidth: "920px",
          }}
        >
          <span
            style={{
              fontSize: "32px",
              color: "#cbd5e1",
              fontWeight: 500,
              lineHeight: 1.3,
            }}
          >
            Salesforce, AWS, Azure, Google Cloud, and Boomi certified — end to end.
          </span>
        </div>

        {/* Bottom row: CTA + URL */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px 36px",
              backgroundColor: "#10b981",
              borderRadius: "9999px",
              boxShadow: "0 12px 40px rgba(16,185,129,0.45)",
            }}
          >
            <span
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#020617",
                marginRight: "14px",
              }}
            >
              Start Your Transformation
            </span>
            <span
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#020617",
                lineHeight: 1,
              }}
            >
              →
            </span>
          </div>
          <span
            style={{
              fontSize: "24px",
              color: "#94a3b8",
              fontWeight: 500,
            }}
          >
            babultech.com
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
