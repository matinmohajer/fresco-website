import { ImageResponse } from "next/og";

// Node.js runtime (the default) rather than edge: the edge bundle for this
// route pushed past Vercel's 1 MB Hobby-plan Edge Function limit.
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
            "radial-gradient(circle at 78% 25%, rgba(34,197,94,0.32), transparent 55%), radial-gradient(circle at 15% 85%, rgba(20,184,166,0.22), transparent 50%)",
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
              background: "linear-gradient(135deg, #22C55E 0%, #15803D 100%)",
            }}
          >
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
              <path d="M13 20.5l4.8 4.8L27.5 15" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#F9FAFB" }}>Fresco AI</div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 700,
            color: "#F9FAFB",
            lineHeight: 1.15,
            maxWidth: 980,
            letterSpacing: "-0.02em",
          }}
        >
          To Do Lists that create themselves — and sign themselves off.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9CA3AF", marginTop: 28, maxWidth: 820 }}>
          A spoken walk-through becomes a structured To Do List, dispatched to
          the right team member, and returned as a verified, signed-off
          report.
        </div>
      </div>
    ),
    { ...size }
  );
}
