import Link from "next/link";
import { CATEGORIES } from "@/lib/templates";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "꽃말 전달소",
    alternateName: "FloralLetter",
    url: "https://flower-message.vercel.app",
    description:
      "축하, 추모, 승진, 개업, 결혼, 생일 등 모든 경조사 화환 문구를 무료로 생성하세요.",
    inLanguage: "ko",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://flower-message.vercel.app/generate?category={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "꽃말 전달소",
    alternateName: "FloralLetter",
    url: "https://flower-message.vercel.app",
    logo: "https://flower-message.vercel.app/opengraph-image",
    description:
      "경조사 화환 리본 문구 자동 생성 서비스. 축하, 추모, 승진, 개업, 결혼, 생일 화환 문구를 무료로 제공합니다.",
    sameAs: [],
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
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
          왜 꽃말 전달소인가요?
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

      {/* Popular Messages TOP 10 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-2">
          인기 화환 문구 TOP 10
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-sm">
          가장 많이 사용되는 화환 문구를 모았습니다
        </p>
        <div className="space-y-3">
          {[
            {
              rank: 1,
              ribbon: "\u795D \u6176\u8CC0",
              text: "\uACBD\uD558\uB4DC\uB9BD\uB2C8\uB2E4. \uC55E\uC73C\uB85C\uB3C4 \uB354\uC6B1 \uBE5B\uB098\uB294 \uC131\uACFC\uB97C \uC774\uB8E8\uC2DC\uAE38 \uC9C4\uC2EC\uC73C\uB85C \uAE30\uC6D0\uD569\uB2C8\uB2E4.",
              cat: "\uCD95\uD558",
            },
            {
              rank: 2,
              ribbon: "\u8B39\u5F14",
              text: "\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE4C\uBA70, \uC720\uC871\uBD84\uB4E4\uAED8 \uAE4A\uC740 \uC704\uB85C\uC758 \uB9D0\uC500\uC744 \uB4DC\uB9BD\uB2C8\uB2E4.",
              cat: "\uCD94\uBAA8/\uC870\uBB38",
            },
            {
              rank: 3,
              ribbon: "\u795D \u6607\u9032",
              text: "\uC2B9\uC9C4\uC744 \uC9C4\uC2EC\uC73C\uB85C \uCD95\uD558\uB4DC\uB9BD\uB2C8\uB2E4. \uADF8\uAC04\uC758 \uB178\uACE0\uC640 \uD5CC\uC2E0\uC774 \uBE5B\uC744 \uBC1C\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4.",
              cat: "\uC2B9\uC9C4/\uCDE8\uC784",
            },
            {
              rank: 4,
              ribbon: "\u795D \u958B\u696D",
              text: "\uAC1C\uC5C5\uC744 \uC9C4\uC2EC\uC73C\uB85C \uCD95\uD558\uB4DC\uB9BD\uB2C8\uB2E4. \uC0C8\uB85C\uC6B4 \uB3C4\uC804\uC5D0 \uBB34\uADB6\uD55C \uBC1C\uC804\uACFC \uBC88\uC601\uC774 \uD568\uAED8\uD558\uC2DC\uAE38 \uAE30\uC6D0\uD569\uB2C8\uB2E4.",
              cat: "\uAC1C\uC5C5/\uCC3D\uC5C5",
            },
            {
              rank: 5,
              ribbon: "\u795D \u7D50\u5A5A",
              text: "\uACB0\uD63C\uC744 \uC9C4\uC2EC\uC73C\uB85C \uCD95\uD558\uB4DC\uB9BD\uB2C8\uB2E4. \uB450 \uBD84\uC758 \uC55E\uB0A0\uC5D0 \uC0AC\uB791\uACFC \uD589\uBCF5\uC774 \uB298 \uD568\uAED8\uD558\uC2DC\uAE38 \uAE30\uC6D0\uD569\uB2C8\uB2E4.",
              cat: "\uACB0\uD63C",
            },
            {
              rank: 6,
              ribbon: "\u795D \u751F\u8FB0",
              text: "\uC0DD\uC2E0\uC744 \uC9C4\uC2EC\uC73C\uB85C \uCD95\uD558\uB4DC\uB9BD\uB2C8\uB2E4. \uB298 \uAC74\uAC15\uD558\uC2DC\uACE0, \uD558\uC2DC\uB294 \uBAA8\uB4E0 \uC77C\uC5D0 \uC88B\uC740 \uACB0\uACFC\uAC00 \uD568\uAED8\uD558\uC2DC\uAE38 \uAE30\uC6D0\uD569\uB2C8\uB2E4.",
              cat: "\uC0DD\uC77C/\uC7A5\uC218",
            },
            {
              rank: 7,
              ribbon: "\u795D \u69AE\u8F49",
              text: "\uC601\uC804\uC744 \uACBD\uD558\uB4DC\uB9BD\uB2C8\uB2E4. \uD0C1\uC6D4\uD55C \uB9AC\uB354\uC2ED\uC73C\uB85C \uB354 \uD070 \uC131\uACFC\uB97C \uC774\uB8E8\uC2DC\uAE38 \uC9C4\uC2EC\uC73C\uB85C \uAE30\uC6D0\uD569\uB2C8\uB2E4.",
              cat: "\uC2B9\uC9C4/\uCDE8\uC784",
            },
            {
              rank: 8,
              ribbon: "\u795D \u7E41\u660C",
              text: "\uAC1C\uC5C5\uC744 \uC9C4\uC2EC\uC73C\uB85C \uCD95\uD558\uB4DC\uB9AC\uBA70, \uADC0 \uC5C5\uCCB4\uC758 \uBB34\uADB6\uD55C \uBC88\uCC3D\uC744 \uAE30\uC6D0\uD569\uB2C8\uB2E4.",
              cat: "\uAC1C\uC5C5/\uCC3D\uC5C5",
            },
            {
              rank: 9,
              ribbon: "\u767E\u5E74\u4F73\u7D04",
              text: "\uD654\uD63C\uC744 \uACBD\uD558\uB4DC\uB9BD\uB2C8\uB2E4. \uBC31\uB144\uD574\uB85C\uD558\uC2DC\uBA70 \uB298 \uD589\uBCF5\uD55C \uAC00\uC815\uC744 \uC774\uB8E8\uC2DC\uAE38 \uBC14\uB78D\uB2C8\uB2E4.",
              cat: "\uACB0\uD63C",
            },
            {
              rank: 10,
              ribbon: "\u8FFD\u6155",
              text: "\uBE44\uBCF4\uC5D0 \uC811\uD558\uC5EC \uC0BC\uAC00 \uC870\uC758\uB97C \uD45C\uD569\uB2C8\uB2E4. \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.",
              cat: "\uCD94\uBAA8/\uC870\uBB38",
            },
          ].map((item) => (
            <div
              key={item.rank}
              className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {item.rank}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold tracking-wider">
                    {item.ribbon}
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {item.cat}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/generate">
            <Button variant="outline">
              나만의 문구 생성하기
            </Button>
          </Link>
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
          꽃말 전달소는 6가지 카테고리(축하, 추모, 승진, 개업, 결혼, 생일)와
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
