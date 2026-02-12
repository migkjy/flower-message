import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "플라워 메시지 - 경조사 화환 문구 자동 생성 | FloralLetter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(145deg, #fdf2f8 0%, #ffffff 30%, #fff7ed 60%, #fdf2f8 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background elements */}
        <div
          style={{
            position: "absolute",
            top: -30,
            left: -20,
            fontSize: 120,
            opacity: 0.07,
            display: "flex",
          }}
        >
          🌸
        </div>
        <div
          style={{
            position: "absolute",
            bottom: -20,
            right: -10,
            fontSize: 140,
            opacity: 0.07,
            display: "flex",
          }}
        >
          🌺
        </div>
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 80,
            fontSize: 80,
            opacity: 0.05,
            display: "flex",
          }}
        >
          🌼
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 60,
            fontSize: 70,
            opacity: 0.05,
            display: "flex",
          }}
        >
          🌷
        </div>

        {/* Top accent line */}
        <div
          style={{
            width: 80,
            height: 3,
            background: "linear-gradient(90deg, #ec4899, #f97316)",
            borderRadius: 2,
            marginBottom: 28,
            display: "flex",
          }}
        />

        {/* Flower icons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 20,
          }}
        >
          <span style={{ fontSize: 48 }}>💐</span>
          <span style={{ fontSize: 36, opacity: 0.5 }}>✨</span>
          <span style={{ fontSize: 48 }}>🌺</span>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#be185d",
            marginBottom: 12,
            textAlign: "center",
            display: "flex",
          }}
        >
          플라워 메시지
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#374151",
            textAlign: "center",
            marginBottom: 24,
            display: "flex",
          }}
        >
          경조사 화환 문구 자동 생성
        </div>

        {/* Category row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 32,
            fontSize: 18,
            color: "#6b7280",
          }}
        >
          <span>🎉 축하</span>
          <span style={{ color: "#d1d5db" }}>|</span>
          <span>🕊️ 추모</span>
          <span style={{ color: "#d1d5db" }}>|</span>
          <span>📈 승진</span>
          <span style={{ color: "#d1d5db" }}>|</span>
          <span>🏪 개업</span>
          <span style={{ color: "#d1d5db" }}>|</span>
          <span>💍 결혼</span>
          <span style={{ color: "#d1d5db" }}>|</span>
          <span>🎂 생일</span>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            width: 60,
            height: 3,
            background: "linear-gradient(90deg, #f97316, #ec4899)",
            borderRadius: 2,
            marginBottom: 16,
            display: "flex",
          }}
        />

        {/* URL */}
        <div
          style={{
            fontSize: 16,
            color: "#9ca3af",
            letterSpacing: "0.05em",
            display: "flex",
          }}
        >
          FloralLetter · flower-message.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
