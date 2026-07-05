import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "90px",
          background: "#0A0F1A",
          backgroundImage:
            "radial-gradient(circle at 78% 25%, rgba(124,58,237,0.35), transparent 55%), radial-gradient(circle at 15% 85%, rgba(20,184,166,0.25), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 44 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #8B5CF6 0%, #0F766E 100%)",
            }}
          >
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 30c-4-3.8-8-8.6-8-13.2A8 8 0 0 1 20 8a8 8 0 0 1 8 8.8c0 4.6-4 9.4-8 13.2z"
                stroke="white"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M16.5 16.6l2.4 2.4 4.6-4.6" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#F9FAFB" }}>Fresco AI</div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 66,
            fontWeight: 700,
            color: "#F9FAFB",
            lineHeight: 1.15,
            maxWidth: 980,
            letterSpacing: "-0.02em",
          }}
        >
          Field reports that write themselves.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9CA3AF", marginTop: 28, maxWidth: 820 }}>
          Voice, photo, and video from the job site — turned into a
          structured, approved report automatically.
        </div>
      </div>
    ),
    { ...size }
  );
}
