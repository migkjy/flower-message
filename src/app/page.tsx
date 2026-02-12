import Link from "next/link";
import { CATEGORIES } from "@/lib/templates";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCardGrid } from "./message-card-grid";
import { SAMPLE_MESSAGES } from "@/lib/sample-messages";

export default function HomePage() {
  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "플라워 메시지",
    alternateName: "FloralLetter",
    url: "https://flower-message.vercel.app",
    description:
      "축하, 추모, 승진, 개업, 결혼, 생일 등 모든 경조사 화환 문구를 무료로 생성하세요.",
    inLanguage: "ko",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://flower-message.vercel.app/generate?category={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "플라워 메시지",
    alternateName: "FloralLetter",
    url: "https://flower-message.vercel.app",
    logo: "https://flower-message.vercel.app/opengraph-image",
    description:
      "경조사 화환 리본 문구 자동 생성 서비스. 축하, 추모, 승진, 개업, 결혼, 생일 화환 문구를 무료로 제공합니다.",
    sameAs: [],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdOrganization),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <Badge variant="secondary" className="mb-4 text-xs">
            &#x2728; 무료 화환 문구 생성 서비스
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight mb-4 md:text-5xl lg:text-6xl">
            마음을 전하는
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              플라워 메시지
            </span>
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8 md:text-lg">
            축하, 추모, 승진, 개업, 결혼, 생일
            <br className="md:hidden" />
            {" "}모든 상황에 맞는 화환 리본 문구를 바로 생성하세요.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/generate">
              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-full shadow-lg shadow-primary/20"
              >
                문구 생성하기
              </Button>
            </Link>
            <a href="#messages">
              <Button
                variant="outline"
                size="lg"
                className="text-base px-6 py-6 rounded-full"
              >
                인기 문구 보기
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Category Quick Links */}
      <section className="py-10 border-b">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/generate?category=${cat.slug}`}
                className="group flex items-center gap-2 rounded-full border-2 border-border px-5 py-2.5 hover:border-primary/40 hover:shadow-md transition-all bg-white"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
                <span className="text-sm font-medium">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SNS Gallery - Message Cards */}
      <section id="messages" className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2 md:text-3xl">
              인기 화환 문구
            </h2>
            <p className="text-muted-foreground">
              다른 사람들이 보낸 따뜻한 메시지를 구경하세요
            </p>
          </div>
          <MessageCardGrid messages={SAMPLE_MESSAGES} />
          <div className="text-center mt-10">
            <Link href="/generate">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8"
              >
                나만의 문구 만들기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-center mb-10 md:text-3xl">
            3단계로 완성하는 화환 문구
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-3xl">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">상황 선택</h3>
              <p className="text-sm text-muted-foreground">
                축하, 추모, 승진, 개업, 결혼, 생일 중 선택하세요.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">문구 생성</h3>
              <p className="text-sm text-muted-foreground">
                관계와 격식 수준에 맞는 맞춤 문구가 즉시 생성됩니다.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">복사 & 주문</h3>
              <p className="text-sm text-muted-foreground">
                문구를 복사하고, 화원에서 바로 화환을 주문하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Florist CTA Banner */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-8 md:p-12 text-white text-center">
            <div className="relative z-10">
              <p className="text-sm font-medium opacity-90 mb-2">
                문구를 만들었다면
              </p>
              <h2 className="text-2xl font-bold mb-3 md:text-3xl">
                화원에서 바로 화환을 주문하세요
              </h2>
              <p className="opacity-90 mb-6 max-w-lg mx-auto">
                전국 어디든 당일 배송 가능한 화원에서 문구와 함께 화환을
                보내보세요.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://www.flowershop.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-green-700 px-6 py-3 font-medium hover:bg-white/90 transition-colors"
                >
                  &#127803; 꽃배달 전문점
                </a>
                <a
                  href="https://www.ggotbaedal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/20 text-white border border-white/30 px-6 py-3 font-medium hover:bg-white/30 transition-colors"
                >
                  &#127801; 전국 꽃배달
                </a>
              </div>
            </div>
            <div className="absolute -right-8 -top-8 text-[120px] opacity-10 select-none">
              &#127804;
            </div>
            <div className="absolute -left-4 -bottom-4 text-[80px] opacity-10 select-none">
              &#127802;
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">
            화환 문구 작성이 어려우신가요?
          </h2>
          <p className="text-muted-foreground mb-4">
            경조사 화환을 보낼 때 가장 고민되는 것이 리본에 들어갈 문구입니다.
            직장 상사의 승진 축하, 거래처 개업 축하, 친구의 결혼 축하, 장례식
            근조 화환까지 — 상황과 관계에 따라 적절한 표현이 달라지기
            때문입니다.
          </p>
          <p className="text-muted-foreground mb-4">
            플라워 메시지는 6가지 카테고리(축하, 추모, 승진, 개업, 결혼,
            생일)와 5가지 관계(상사, 동료, 거래처, 친구, 가족), 3가지 격식
            수준을 조합하여 상황에 딱 맞는 화환 리본 문구를 제공합니다.
          </p>
          <p className="text-muted-foreground">
            한자 리본 문구(祝 昇進, 謹弔 등)와 한글 메시지를 함께 제공하여,
            화환 주문 시 바로 사용할 수 있습니다. 무료로 이용하세요.
          </p>
        </div>
      </section>
    </div>
  );
}
