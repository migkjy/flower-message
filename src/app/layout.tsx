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
    default: "플라워 메시지 - 경조사 화환 문구 자동 생성 | FloralLetter",
    template: "%s | 플라워 메시지",
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
    "플라워 메시지",
    "화환 주문",
  ],
  openGraph: {
    title: "플라워 메시지 - 경조사 화환 문구 자동 생성 | FloralLetter",
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
        <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl">&#x1F490;</span>
              <span className="text-lg font-bold text-foreground">
                플라워 메시지
              </span>
            </a>
            <nav className="flex items-center gap-1 text-sm">
              <a
                href="/"
                className="rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              >
                홈
              </a>
              <a
                href="/generate"
                className="rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              >
                문구 생성
              </a>
              <a
                href="/generate"
                className="ml-1 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                무료 생성
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-border bg-muted/30 mt-16">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
            <div className="grid gap-8 md:grid-cols-3 mb-8">
              <div>
                <p className="font-medium text-foreground mb-3">
                  플라워 메시지 (FloralLetter)
                </p>
                <p>
                  경조사 화환 문구를 무료로 생성하고, 화원에서 바로 주문하세요.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-3">문구 모음</p>
                <ul className="space-y-1.5">
                  <li><a href="/seo/congratulation-wreath-message" className="hover:text-foreground transition-colors">축하 화환 문구 모음</a></li>
                  <li><a href="/seo/condolence-wreath-message" className="hover:text-foreground transition-colors">근조 화환 문구 모음</a></li>
                  <li><a href="/seo/promotion-message" className="hover:text-foreground transition-colors">승진 축하 문구 모음</a></li>
                  <li><a href="/seo/opening-message" className="hover:text-foreground transition-colors">개업 축하 문구 모음</a></li>
                  <li><a href="/seo/wedding-message" className="hover:text-foreground transition-colors">결혼 축하 문구 모음</a></li>
                  <li><a href="/seo/birthday-message" className="hover:text-foreground transition-colors">생일 축하 문구 모음</a></li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-3">바로가기</p>
                <ul className="space-y-1.5">
                  <li><a href="/generate" className="hover:text-foreground transition-colors">문구 생성</a></li>
                  <li><a href="/category/congratulation" className="hover:text-foreground transition-colors">축하 화환 문구</a></li>
                  <li><a href="/category/condolence" className="hover:text-foreground transition-colors">근조 화환 문구</a></li>
                  <li><a href="/category/promotion" className="hover:text-foreground transition-colors">승진 축하 문구</a></li>
                </ul>
              </div>
            </div>
            <div className="text-center border-t border-border pt-4">
              <p>&copy; 2026 플라워 메시지 (FloralLetter). All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
