import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "오프라인",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
      <span className="mb-4 text-6xl" aria-hidden="true">
        &#x1F490;
      </span>
      <h1 className="mb-3 text-2xl font-bold text-foreground">
        오프라인 상태입니다
      </h1>
      <p className="mb-6 text-muted-foreground">
        인터넷 연결이 끊어져 이 페이지를 불러올 수 없습니다.
        <br />
        네트워크 연결을 확인한 후 다시 시도해 주세요.
      </p>
      <Link
        href="/"
        className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
