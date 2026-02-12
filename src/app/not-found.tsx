import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <div className="text-6xl mb-6">&#x1F490;</div>
      <h1 className="text-3xl font-bold mb-4">페이지를 찾을 수 없습니다</h1>
      <p className="text-muted-foreground mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
        <br />
        꽃말 전달소에서 맞춤 문구를 만들어보세요.
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/">
          <Button size="lg">홈으로 가기</Button>
        </Link>
        <Link href="/generate">
          <Button size="lg" variant="outline">
            문구 생성하기
          </Button>
        </Link>
      </div>
    </div>
  );
}
