import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "화환 문구 생성기 - 경조사 화환 메시지 자동 생성";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #f0fdf4 0%, #fce7f3 50%, #fef3c7 100%)",
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
            fontSize: 48,
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          화환 문구 생성기
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#6b7280",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          축하 / 추모 / 승진 / 개업 / 결혼 / 생일
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#9ca3af",
            marginTop: 16,
          }}
        >
          무료 맞춤형 화환 리본 문구 생성
        </div>
      </div>
    ),
    { ...size },
  );
}
