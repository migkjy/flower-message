import Link from "next/link";
import { CATEGORIES } from "@/lib/templates";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">
          경조사 화환 문구,<br />
          <span className="text-primary">고민 없이 바로 생성</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          축하, 추모, 승진, 개업, 결혼, 생일 등 모든 상황에 맞는
          화환 리본 문구를 무료로 생성하세요.
          관계와 격식 수준에 따라 맞춤형 문구를 제공합니다.
        </p>
        <Link href="/generate">
          <Button size="lg" className="text-base px-8 py-6">
            지금 문구 생성하기
          </Button>
        </Link>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          상황별 화환 문구
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link key={cat.slug} href={`/generate?category=${cat.slug}`}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary/30">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{cat.icon}</div>
                  <CardTitle className="text-lg">{cat.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {cat.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          왜 화환문구인가요?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center p-6">
            <div className="text-3xl mb-3">&#9889;</div>
            <h3 className="font-semibold mb-2">즉시 생성</h3>
            <p className="text-sm text-muted-foreground">
              카테고리와 관계만 선택하면 바로 맞춤 문구를 받아보세요.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-3">&#128172;</div>
            <h3 className="font-semibold mb-2">격식에 맞는 문구</h3>
            <p className="text-sm text-muted-foreground">
              격식체, 일반, 친근한 등 상황에 맞는 톤을 선택할 수 있습니다.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-3">&#128203;</div>
            <h3 className="font-semibold mb-2">리본 문구 포함</h3>
            <p className="text-sm text-muted-foreground">
              한자 리본 문구와 본문 메시지를 함께 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-muted/30 rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4">
          화환 문구 작성이 어려우신가요?
        </h2>
        <p className="text-muted-foreground mb-4">
          경조사 화환을 보낼 때 가장 고민되는 것이 리본에 들어갈 문구입니다.
          직장 상사의 승진 축하, 거래처 개업 축하, 친구의 결혼 축하,
          장례식 근조 화환까지 — 상황과 관계에 따라 적절한 표현이 달라지기 때문입니다.
        </p>
        <p className="text-muted-foreground mb-4">
          화환문구 생성기는 6가지 카테고리(축하, 추모, 승진, 개업, 결혼, 생일)와
          5가지 관계(상사, 동료, 거래처, 친구, 가족), 3가지 격식 수준을 조합하여
          상황에 딱 맞는 화환 리본 문구를 제공합니다.
        </p>
        <p className="text-muted-foreground">
          한자 리본 문구(祝 昇進, 謹弔 등)와 한글 메시지를 함께 제공하여,
          화환 주문 시 바로 사용할 수 있습니다. 무료로 이용하세요.
        </p>
      </section>
    </div>
  );
}
