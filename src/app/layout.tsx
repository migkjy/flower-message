import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flower-message.vercel.app"),
  title: {
    default: "꽃말 전달소 - 경조사 화환 문구 자동 생성 | FloralLetter",
    template: "%s | 꽃말 전달소",
  },
  description:
    "축하, 추모, 승진, 개업, 결혼, 생일 등 모든 경조사 화환 문구를 무료로 생성하세요. 관계와 격식에 맞는 맞춤형 화환 리본 문구를 제공합니다.",
  keywords: [
    "화환 문구",
    "축하 화환",
    "근조 화환 문구",
    "승진 축하 문구",
    "개업 축하 문구",
    "결혼 축하 문구",
    "화환 메시지",
    "경조사 문구",
    "화환 리본 문구",
    "꽃말",
    "꽃말 모음",
    "꽃 종류",
    "꽃 갤러리",
  ],
  openGraph: {
    title: "꽃말 전달소 - 경조사 화환 문구 자동 생성 | FloralLetter",
    description:
      "모든 경조사 화환 문구를 무료로 생성하세요. 상황, 관계, 격식에 맞는 맞춤형 문구를 제공합니다.",
    type: "website",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        <header className="border-b border-border bg-white">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <a href="/" className="text-xl font-bold text-foreground">
              꽃말 전달소
            </a>
            <nav className="flex gap-4 text-sm text-muted-foreground">
              <a href="/" className="hover:text-foreground transition-colors">
                홈
              </a>
              <a
                href="/gallery"
                className="hover:text-foreground transition-colors"
              >
                꽃 갤러리
              </a>
              <a
                href="/generate"
                className="hover:text-foreground transition-colors"
              >
                문구 생성
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-border bg-muted/30 mt-16">
          <div className="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-muted-foreground">
            <p>200가지 이상의 꽃말 정보와 경조사 화환 문구를 무료로 제공합니다.</p>
            <p className="mt-1">
              <a href="/gallery" className="hover:text-foreground underline transition-colors">꽃 갤러리</a>
              {" "}&middot;{" "}
              <a href="/generate" className="hover:text-foreground underline transition-colors">문구 생성</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
