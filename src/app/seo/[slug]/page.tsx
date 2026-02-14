import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FORMALITY_OPTIONS,
  RELATIONSHIP_OPTIONS,
  generateMessages,
  getCategoryInfo,
  type Formality,
  type Relationship,
  type Category,
} from "@/lib/templates";
import { SEO_PAGES, getSeoPageData } from "@/lib/seo-data";

export function generateStaticParams() {
  return SEO_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const pageData = getSeoPageData(slug);
  if (!pageData) return {};

  return {
    title: pageData.metaTitle,
    description: pageData.metaDescription,
    keywords: pageData.keywords,
    openGraph: {
      title: pageData.metaTitle,
      description: pageData.metaDescription,
      type: "article",
      locale: "ko_KR",
    },
  };
}

function getAllMessagesForCategory(categorySlug: Category) {
  const allMessages: {
    ribbon: string;
    full: string;
    formality: string;
    formalityLabel: string;
    relationship: string;
    relationshipLabel: string;
  }[] = [];

  const formalityLabels: Record<string, string> = {
    formal: "격식체",
    normal: "일반",
    casual: "친근한",
  };
  const relationshipLabels: Record<string, string> = {
    boss: "직장 상사/선배",
    colleague: "직장 동료",
    business: "거래처/비즈니스",
    friend: "친구/지인",
    family: "가족/친척",
  };

  for (const f of FORMALITY_OPTIONS) {
    for (const r of RELATIONSHIP_OPTIONS) {
      const msgs = generateMessages({
        category: categorySlug,
        formality: f.value,
        relationship: r.value,
      });
      for (const msg of msgs) {
        allMessages.push({
          ...msg,
          formality: f.value,
          formalityLabel: formalityLabels[f.value] || f.value,
          relationship: r.value,
          relationshipLabel: relationshipLabels[r.value] || r.value,
        });
      }
    }
  }

  return allMessages;
}

export default async function SeoPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const pageData = getSeoPageData(slug);
  if (!pageData) notFound();

  const cat = getCategoryInfo(pageData.categorySlug);
  if (!cat) notFound();

  const allMessages = getAllMessagesForCategory(pageData.categorySlug);

  // Pick a curated set: 2 from each formality level across different relationships
  const curatedMessages: typeof allMessages = [];
  const seen = new Set<string>();

  // Priority order: formal-boss, formal-business, formal-colleague, normal-colleague, normal-business, normal-friend, normal-family, casual-friend, casual-family, casual-colleague
  const comboPriority: [Formality, Relationship][] = [
    ["formal", "boss"],
    ["formal", "business"],
    ["formal", "colleague"],
    ["formal", "family"],
    ["formal", "friend"],
    ["normal", "colleague"],
    ["normal", "business"],
    ["normal", "boss"],
    ["normal", "friend"],
    ["normal", "family"],
    ["casual", "friend"],
    ["casual", "family"],
    ["casual", "colleague"],
    ["casual", "boss"],
    ["casual", "business"],
  ];

  for (const [f, r] of comboPriority) {
    const matched = allMessages.filter(
      (m) => m.formality === f && m.relationship === r
    );
    for (const m of matched) {
      const key = m.full;
      if (!seen.has(key) && curatedMessages.length < 30) {
        seen.add(key);
        curatedMessages.push(m);
      }
    }
  }

  // JSON-LD BreadcrumbList
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: "https://flower-message.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageData.title,
        item: `https://flower-message.vercel.app/seo/${slug}`,
      },
    ],
  };

  // JSON-LD Article
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageData.title,
    description: pageData.metaDescription,
    author: {
      "@type": "Organization",
      name: "플라워 메시지",
      url: "https://flower-message.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "플라워 메시지",
    },
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
    mainEntityOfPage: `https://flower-message.vercel.app/seo/${slug}`,
    inLanguage: "ko",
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted-foreground">
        <ol className="flex items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              홈
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium">{pageData.title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">{cat.icon}</div>
        <h1 className="text-3xl font-bold mb-3 md:text-4xl">
          {pageData.heroTitle}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {pageData.heroDescription}
        </p>
        <div className="mt-6">
          <Link href={`/generate?category=${cat.slug}`}>
            <Button size="lg" className="px-8 rounded-full">
              {cat.name} 문구 직접 생성하기
            </Button>
          </Link>
        </div>
      </div>

      {/* Message Count Badge */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">
          {pageData.title} {curatedMessages.length}선
        </h2>
        <Badge variant="secondary" className="text-xs">
          {cat.icon} 총 {allMessages.length}개 문구 보유
        </Badge>
      </div>

      {/* Message Cards */}
      <div className="space-y-4">
        {curatedMessages.map((msg, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="bg-muted/30 py-3 px-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-bold tracking-wider">
                  {msg.ribbon}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {msg.formalityLabel}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {msg.relationshipLabel}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-sm leading-relaxed">{msg.full}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Generate CTA */}
      <div className="mt-10 text-center">
        <Link href={`/generate?category=${cat.slug}`}>
          <Button size="lg" variant="outline" className="rounded-full px-8">
            나만의 {cat.name} 문구 만들기
          </Button>
        </Link>
      </div>

      {/* Writing Tips */}
      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4">
          {cat.name} 화환 문구 작성 팁
        </h2>
        <div className="bg-muted/30 rounded-xl p-6 space-y-3">
          {pageData.writingTips.map((tip, i) => (
            <div key={i} className="flex gap-3">
              <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-sm text-muted-foreground">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Etiquette */}
      <section className="mt-8">
        <h2 className="text-xl font-bold mb-4">
          {cat.name} 화환 보내기 예절
        </h2>
        <div className="bg-muted/30 rounded-xl p-6 space-y-3">
          {pageData.etiquette.map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-primary" />
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Florist CTA */}
      <div className="mt-10 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 text-center">
        <p className="text-sm text-green-800 font-medium mb-2">
          문구가 준비되셨나요?
        </p>
        <p className="text-lg font-bold text-green-900 mb-4">
          화원에서 화환과 함께 보내보세요
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.cultwo-flower.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-green-700 transition-colors"
          >
            &#127803; 꽃배달 전문점
          </a>
          <a
            href="https://www.f-mans.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-green-300 text-green-700 px-5 py-2.5 text-sm font-medium hover:bg-green-50 transition-colors"
          >
            &#127801; 전국 꽃배달
          </a>
        </div>
      </div>

      {/* Related Searches */}
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">관련 검색어</h2>
        <div className="flex flex-wrap gap-2">
          {pageData.relatedSearches.map((search, i) => (
            <span
              key={i}
              className="rounded-full bg-muted px-4 py-1.5 text-sm text-muted-foreground"
            >
              {search}
            </span>
          ))}
        </div>
      </section>

      {/* Other Categories */}
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-4">다른 카테고리 문구 모음</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {SEO_PAGES.filter((p) => p.slug !== slug).map((page) => {
            const pageCat = getCategoryInfo(page.categorySlug);
            if (!pageCat) return null;
            return (
              <Link
                key={page.slug}
                href={`/seo/${page.slug}`}
                className="rounded-xl border-2 border-border p-4 text-center hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-1">{pageCat.icon}</div>
                <div className="text-sm font-medium">{page.title}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="mt-12 border-t pt-8">
        <h2 className="text-lg font-bold mb-3">
          {pageData.title} - 플라워 메시지
        </h2>
        <p className="text-sm text-muted-foreground mb-3">
          플라워 메시지는 경조사 화환 리본 문구를 무료로 제공하는 서비스입니다.{" "}
          {cat.name} 화환 문구를 포함하여 축하, 추모, 승진, 개업, 결혼, 생일 등
          6가지 카테고리의 맞춤형 문구를 관계와 격식 수준에 따라 생성할 수
          있습니다.
        </p>
        <p className="text-sm text-muted-foreground">
          화환 주문 시 리본에 들어갈 문구가 고민된다면, 플라워 메시지에서 상황에
          맞는 문구를 찾아보세요. 한자 리본 문구와 한글 메시지를 함께 제공하여
          바로 사용할 수 있습니다.
        </p>
      </section>
    </div>
  );
}
