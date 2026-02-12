import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CATEGORIES,
  FORMALITY_OPTIONS,
  RELATIONSHIP_OPTIONS,
  generateMessages,
  getCategoryInfo,
  type Formality,
  type Relationship,
  type Category,
} from "@/lib/templates";

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const cat = getCategoryInfo(slug);
  if (!cat) return {};

  const titleMap: Record<string, string> = {
    congratulation: "축하 화환 문구 모음 - 경사 축하 메시지",
    condolence: "근조 화환 문구 모음 - 조문 추모 메시지",
    promotion: "승진 축하 화환 문구 - 영전 취임 축하 메시지",
    opening: "개업 축하 화환 문구 - 창업 이전 축하 메시지",
    wedding: "결혼 축하 화환 문구 - 웨딩 축하 메시지",
    birthday: "생일 축하 화환 문구 - 환갑 칠순 축하 메시지",
  };

  return {
    title: titleMap[slug] || `${cat.name} 화환 문구`,
    description: `${cat.name} 화환 문구 예시와 맞춤형 문구 생성. 관계와 격식에 맞는 ${cat.name} 화환 리본 문구를 무료로 제공합니다.`,
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const cat = getCategoryInfo(slug);
  if (!cat) notFound();

  // Generate sample messages for display
  const samples: {
    relationship: string;
    formality: string;
    messages: { ribbon: string; full: string }[];
  }[] = [];

  const sampleCombos: [Formality, Relationship, string, string][] = [
    ["formal", "boss", "격식체", "직장 상사"],
    ["normal", "colleague", "일반", "직장 동료"],
    ["normal", "business", "일반", "거래처"],
    ["casual", "friend", "친근한", "친구"],
  ];

  for (const [f, r, fLabel, rLabel] of sampleCombos) {
    const msgs = generateMessages({
      category: slug as Category,
      formality: f,
      relationship: r,
    });
    if (msgs.length > 0) {
      samples.push({
        relationship: rLabel,
        formality: fLabel,
        messages: msgs.slice(0, 2),
      });
    }
  }

  const faqMap: Record<string, { q: string; a: string }[]> = {
    congratulation: [
      {
        q: "축하 화환 문구는 어떻게 작성하나요?",
        a: "축하 화환 문구는 기쁜 소식에 대한 진심 어린 축하와 앞날에 대한 좋은 기원을 담아 작성합니다. 받는 분과의 관계에 맞게 격식을 조절하세요. 한자 리본 문구로는 '祝 慶賀(축 경하)' 등을 사용합니다.",
      },
      {
        q: "축하 화환 리본에 한자 문구는 꼭 넣어야 하나요?",
        a: "필수는 아니지만, 한자 리본 문구는 격식을 갖추는 데 도움이 됩니다. '祝 慶賀', '祝 祝賀' 등이 일반적으로 사용되며, 한글 메시지와 함께 기재하는 것이 관례입니다.",
      },
    ],
    condolence: [
      {
        q: "근조 화환 문구는 어떻게 작성하나요?",
        a: "근조 화환 문구는 고인과 유가족에 대한 존경과 위로를 담아야 합니다. 간결하고 진심 어린 표현이 적합하며, '삼가 고인의 명복을 빕니다'와 같은 문구가 대표적입니다.",
      },
      {
        q: "조문 화환에 사용하는 한자 리본 문구는 무엇인가요?",
        a: "조문 화환의 한자 리본 문구로는 '謹弔(근조)', '追慕(추모)', '哀悼(애도)' 등이 일반적으로 사용됩니다. 보내는 분의 이름이나 단체명을 함께 기재합니다.",
      },
    ],
    promotion: [
      {
        q: "승진 축하 화환 문구는 어떻게 작성하나요?",
        a: "승진 축하 화환은 받는 분의 직위와 관계에 맞춰 격식을 갖추는 것이 중요합니다. '승진을 진심으로 축하드립니다. 그간의 노고와 헌신이 빛을 발한 결과입니다'와 같은 문구가 적합합니다.",
      },
      {
        q: "승진/취임/영전 화환에 사용하는 한자 문구는?",
        a: "승진 화환의 한자 리본 문구로는 '祝 昇進(축 승진)', '祝 榮轉(축 영전)', '祝 就任(축 취임)' 등을 사용합니다.",
      },
    ],
    opening: [
      {
        q: "개업 축하 화환 문구는 어떻게 작성하나요?",
        a: "개업 축하 화환 문구는 새로운 시작을 응원하고 사업의 번창을 기원하는 내용이 좋습니다. '개업을 진심으로 축하드립니다. 무궁한 발전과 번영이 함께하시길 기원합니다'와 같은 문구가 적합합니다.",
      },
      {
        q: "개업/창업 화환에 사용하는 한자 문구는 무엇인가요?",
        a: "개업 화환의 한자 리본 문구로는 '祝 開業(축 개업)', '祝 繁昌(축 번창)', '祝 新裝開業(축 신장개업)' 등이 일반적입니다.",
      },
    ],
    wedding: [
      {
        q: "결혼 축하 화환 문구는 어떻게 작성하나요?",
        a: "결혼 축하 화환 문구는 두 사람의 결합을 축복하고 행복한 미래를 기원하는 내용이 적합합니다. 친구, 가족, 직장 동료 등 관계에 따라 톤을 조절하세요.",
      },
      {
        q: "결혼 화환에 사용하는 한자 리본 문구는?",
        a: "결혼 화환의 한자 리본 문구로는 '祝 結婚(축 결혼)', '祝 華婚(축 화혼)', '百年佳約(백년가약)' 등을 사용합니다.",
      },
    ],
    birthday: [
      {
        q: "생일 축하 화환 문구는 어떻게 작성하나요?",
        a: "생일 축하 화환은 건강과 행복을 기원하는 내용이 좋습니다. 환갑, 칠순 등 특별한 생신에는 격식을 갖춘 문구가 적합합니다.",
      },
      {
        q: "생일/환갑/칠순 화환에 사용하는 한자 문구는?",
        a: "생일 화환의 한자 리본 문구로는 '祝 生辰(축 생신)', '祝 壽宴(축 수연)', '祝 回甲(축 회갑)' 등이 사용됩니다.",
      },
    ],
  };

  const faqs = faqMap[slug] || [];

  const jsonLdFaq =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">{cat.icon}</div>
        <h1 className="text-3xl font-bold mb-2">{cat.name} 화환 문구</h1>
        <p className="text-muted-foreground">{cat.description}</p>
      </div>

      <div className="text-center mb-8">
        <Link href={`/generate?category=${cat.slug}`}>
          <Button size="lg" className="px-8">
            {cat.name} 문구 직접 생성하기
          </Button>
        </Link>
      </div>

      <h2 className="text-xl font-bold mb-4">{cat.name} 화환 문구 예시</h2>

      <div className="space-y-6">
        {samples.map((sample, si) => (
          <Card key={si}>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <CardTitle className="text-base">
                  {sample.relationship}
                </CardTitle>
                <Badge variant="secondary">{sample.formality}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {sample.messages.map((msg, mi) => (
                <div key={mi} className="rounded-lg bg-muted/30 p-3">
                  <p className="text-xs font-bold text-muted-foreground mb-1 tracking-wider">
                    {msg.ribbon}
                  </p>
                  <p className="text-sm">{msg.full}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href={`/generate?category=${cat.slug}`}>
          <Button variant="outline" size="lg">
            더 많은 {cat.name} 문구 생성하기
          </Button>
        </Link>
      </div>

      {/* SEO content */}
      <div className="mt-12 bg-muted/30 rounded-lg p-6">
        <h2 className="text-lg font-bold mb-3">
          {cat.name} 화환 문구 작성 팁
        </h2>
        {cat.slug === "condolence" ? (
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              근조 화환 문구는 고인과 유가족에 대한 존경과 위로를 담아야 합니다.
              지나치게 감정적이거나 긴 문구보다는, 간결하고 진심 어린 표현이 적합합니다.
            </p>
            <p>
              한자 리본 문구로는 '謹弔(근조)', '追慕(추모)', '哀悼(애도)' 등이
              일반적으로 사용됩니다. 보내는 분의 이름이나 단체명을 함께 기재합니다.
            </p>
          </div>
        ) : cat.slug === "promotion" ? (
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              승진/취임/영전 축하 화환은 직장 내 관계에서 가장 많이 보내는 화환입니다.
              받는 분의 직위와 보내는 분의 관계에 따라 격식을 맞추는 것이 중요합니다.
            </p>
            <p>
              한자 리본 문구로는 '祝 昇進(축 승진)', '祝 榮轉(축 영전)',
              '祝 就任(축 취임)' 등을 사용합니다. 인사 시즌에는 수요가 급증합니다.
            </p>
          </div>
        ) : cat.slug === "opening" ? (
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              개업/창업 축하 화환 문구는 새로운 시작을 응원하고 사업의 번창을
              기원하는 내용이 좋습니다. 거래처나 비즈니스 파트너에게 보내는 경우가 많습니다.
            </p>
            <p>
              한자 리본 문구로는 '祝 開業(축 개업)', '祝 繁昌(축 번창)',
              '祝 新裝開業(축 신장개업)' 등이 일반적입니다.
            </p>
          </div>
        ) : cat.slug === "wedding" ? (
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              결혼 축하 화환 문구는 두 사람의 결합을 축복하고 행복한 미래를 기원하는
              내용이 적합합니다. 친구, 가족, 직장 동료 등 관계에 따라 톤을 조절하세요.
            </p>
            <p>
              한자 리본 문구로는 '祝 結婚(축 결혼)', '祝 華婚(축 화혼)',
              '百年佳約(백년가약)' 등을 사용합니다.
            </p>
          </div>
        ) : cat.slug === "birthday" ? (
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              생일 축하 화환은 건강과 행복을 기원하는 내용이 좋습니다.
              환갑, 칠순 등 특별한 생신에는 격식을 갖춘 문구가 적합합니다.
            </p>
            <p>
              한자 리본 문구로는 '祝 生辰(축 생신)', '祝 壽宴(축 수연)',
              '祝 回甲(축 회갑)' 등이 사용됩니다.
            </p>
          </div>
        ) : (
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              축하 화환 문구는 기쁜 소식에 대한 진심 어린 축하와 앞날에 대한
              좋은 기원을 담으면 됩니다. 받는 분과의 관계에 맞게 격식을 조절하세요.
            </p>
            <p>
              한자 리본 문구로는 '祝 慶賀(축 경하)', '祝 祝賀(축 축하)' 등을
              사용합니다. 상황에 따라 구체적인 표현을 추가하면 좋습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
