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
            "linear-gradient(135deg, #fff1f2 0%, #ffffff 40%, #fff7ed 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>&#x1F490;</div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          플라워 메시지
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#6b7280",
            textAlign: "center",
            maxWidth: 800,
            marginBottom: 8,
          }}
        >
          축하 / 추모 / 승진 / 개업 / 결혼 / 생일
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#9ca3af",
            marginTop: 12,
          }}
        >
          FloralLetter - 무료 맞춤형 화환 리본 문구 생성
        </div>
      </div>
    ),
    { ...size },
  );
}
