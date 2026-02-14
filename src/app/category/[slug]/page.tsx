import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CATEGORIES,
  generateMessages,
  getCategoryInfo,
  type Formality,
  type Relationship,
  type Category,
} from "@/lib/templates";
import { SEO_PAGES } from "@/lib/seo-data";

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
      {
        q: "축하 화환은 언제 보내는 것이 좋나요?",
        a: "축하 화환은 경사 당일 또는 전날에 도착하도록 보내는 것이 예의입니다. 행사장이 있는 경우 행사 시작 1~2시간 전에 도착하도록 주문하세요. 개인 자택으로 보내는 경우 당일 오전 중 배송이 적합합니다.",
      },
      {
        q: "축하 화환에 보내는 사람 이름은 어떻게 적나요?",
        a: "리본 하단에 보내는 분의 이름이나 단체명을 적습니다. 개인은 '홍길동 드림' 또는 '홍길동 배상', 회사는 '(주)OO 대표이사 홍길동', 단체는 'OO동기회 일동' 형태로 기재합니다.",
      },
      {
        q: "축하 화환 문구에서 피해야 할 표현이 있나요?",
        a: "지나치게 가벼운 표현이나 농담, 과장된 표현은 피하는 것이 좋습니다. 또한 받는 분보다 높은 위치에서 말하는 듯한 표현은 삼가세요. 진심 어린 축하와 미래에 대한 긍정적 기원을 담는 것이 가장 적합합니다.",
      },
      {
        q: "축하 화환의 일반적인 가격대는 얼마인가요?",
        a: "축하 화환은 3단 기준 5만~8만원, 대형 화환은 10만~15만원대가 일반적입니다. 화분이나 꽃바구니 형태는 3만~7만원 선입니다. 관계와 상황에 따라 적절한 규모를 선택하세요.",
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
      {
        q: "근조 화환은 언제까지 보내야 하나요?",
        a: "근조 화환은 부고 소식을 접한 즉시 주문하는 것이 좋습니다. 일반적으로 발인 전까지 장례식장에 도착해야 합니다. 3일장 기준 첫째 날이나 둘째 날에 보내는 것이 적합하며, 발인 당일 도착은 피하는 것이 예의입니다.",
      },
      {
        q: "근조 화환 문구에서 주의할 점은 무엇인가요?",
        a: "근조 화환 문구는 간결하고 정중해야 합니다. 고인의 사인을 언급하거나, 지나치게 감정적인 표현, 종교적 색채가 강한 문구는 피하세요. '삼가 조의를 표합니다', '고인의 명복을 빕니다' 등 보편적이고 절제된 표현이 적합합니다.",
      },
      {
        q: "근조 화환에 보내는 사람 이름은 어떻게 적나요?",
        a: "리본에 '근조 + 보내는 분 이름/단체명'을 적습니다. 개인은 '근조 홍길동', 회사는 '근조 (주)OO 대표이사 홍길동', 단체는 '근조 OO동기회 일동' 형태입니다. 직장 동료들이 공동으로 보내는 경우 '근조 OO부서 일동'으로 적습니다.",
      },
      {
        q: "근조 화환의 적절한 가격대는 얼마인가요?",
        a: "근조 화환은 3단 기준 5만~8만원, 대형은 10만~15만원대가 일반적입니다. 가까운 관계일수록 큰 화환을 보내는 것이 관례이며, 회사 대표 명의일 경우 10만원 이상이 적합합니다.",
      },
      {
        q: "기독교/불교/천주교 등 종교별로 근조 문구가 다른가요?",
        a: "종교에 따라 표현이 달라질 수 있습니다. 기독교는 '하나님의 위로가 함께하시길', 불교는 '극락왕생을 기원합니다', 천주교는 '영원한 안식을 빕니다' 등을 사용합니다. 고인의 종교를 모를 경우 종교 중립적인 '삼가 고인의 명복을 빕니다'가 가장 무난합니다.",
      },
    ],
    promotion: [
      {
        q: "승진 축하 화환 문구는 어떻게 작성하나요?",
        a: "승진 축하 화환은 받는 분의 직위와 관계에 맞춰 격식을 갖추는 것이 중요합니다. '승진을 진심으로 축하드립니다. 그간의 노고와 헌신이 빛을 발한 결과입니다'와 같은 문구가 적합합니다.",
      },
      {
        q: "승진/취임/영전 화환에 사용하는 한자 문구는?",
        a: "승진 화환의 한자 리본 문구로는 '祝 昇進(축 승진)', '祝 榮轉(축 영전)', '祝 就任(축 취임)' 등을 사용합니다. 받는 분의 상황에 맞는 한자를 선택하세요.",
      },
      {
        q: "승진 축하 화환은 언제 보내야 하나요?",
        a: "인사 발령 소식을 확인한 후 가능한 빨리 보내는 것이 좋습니다. 취임식이 있는 경우 당일 행사장에 도착하도록, 별도 행사가 없다면 발령 다음 날까지 사무실로 보내는 것이 적합합니다.",
      },
      {
        q: "승진과 영전, 취임은 어떻게 구분하나요?",
        a: "승진은 같은 조직 내에서 직급이 올라가는 것이고, 영전은 더 좋은 자리나 부서로 이동하는 것입니다. 취임은 새로운 직책에 부임하는 것을 말합니다. 리본 문구에 '祝 昇進', '祝 榮轉', '祝 就任'을 각각 상황에 맞게 사용합니다.",
      },
      {
        q: "거래처 승진 축하 화환 문구는 어떻게 다른가요?",
        a: "거래처에 보내는 승진 축하 화환은 비즈니스 격식을 갖추되, 앞으로의 협력 관계에 대한 기대를 함께 표현합니다. '승진을 진심으로 경하드리며, 앞으로도 좋은 인연 이어가길 바랍니다'와 같은 문구가 적합합니다.",
      },
      {
        q: "승진 축하 화환의 적절한 규모는?",
        a: "직장 상사에게는 3단 화환(5만~8만원), 거래처 임원에게는 대형 화환(10만~15만원)이 일반적입니다. 동료에게는 꽃바구니(3만~5만원)도 적합합니다. 관계와 직급에 따라 적절한 규모를 선택하세요.",
      },
    ],
    opening: [
      {
        q: "개업 축하 화환 문구는 어떻게 작성하나요?",
        a: "개업 축하 화환 문구는 새로운 시작을 응원하고 사업의 번창을 기원하는 내용이 좋습니다. '개업을 진심으로 축하드립니다. 무궁한 발전과 번영이 함께하시길 기원합니다'와 같은 문구가 적합합니다.",
      },
      {
        q: "개업/창업 화환에 사용하는 한자 문구는 무엇인가요?",
        a: "개업 화환의 한자 리본 문구로는 '祝 開業(축 개업)', '祝 繁昌(축 번창)', '祝 新裝開業(축 신장개업)' 등이 일반적입니다. 이전 개업은 '祝 移轉開業(축 이전개업)'을 사용합니다.",
      },
      {
        q: "개업 축하 화환은 언제 보내야 하나요?",
        a: "개업 당일 오전 중에 도착하도록 보내는 것이 가장 좋습니다. 개업식 행사가 있다면 행사 시작 1~2시간 전 도착이 적합합니다. 개업 전날 보내도 되지만, 꽃이 시들 수 있으므로 당일 배송을 추천합니다.",
      },
      {
        q: "개업 화환 대신 화분을 보내도 되나요?",
        a: "네, 개업 축하에는 화환 외에도 관엽식물(대형 화분), 난초(동양란), 꽃바구니 등을 보낼 수 있습니다. 관엽식물은 오래 유지되어 실내 인테리어로도 활용할 수 있어 최근 선호도가 높아지고 있습니다.",
      },
      {
        q: "거래처 개업 축하 화환은 어떤 규모가 적절한가요?",
        a: "주요 거래처에는 3단 화환(7만~10만원) 이상이 적합하며, 일반 거래처는 축하 화분이나 꽃바구니(3만~7만원)도 좋습니다. 회사 대표 명의로 보내는 경우 대형 화환(10만~15만원)이 격식에 맞습니다.",
      },
      {
        q: "개업 축하 문구에서 '대박'이라는 표현을 써도 되나요?",
        a: "친한 사이라면 '대박 나세요!'와 같은 친근한 표현도 괜찮습니다. 다만 비즈니스 관계에서는 '무궁한 발전과 번영을 기원합니다'처럼 격식 있는 표현이 더 적합합니다. 받는 분과의 관계에 맞게 톤을 조절하세요.",
      },
    ],
    wedding: [
      {
        q: "결혼 축하 화환 문구는 어떻게 작성하나요?",
        a: "결혼 축하 화환 문구는 두 사람의 결합을 축복하고 행복한 미래를 기원하는 내용이 적합합니다. 친구, 가족, 직장 동료 등 관계에 따라 톤을 조절하세요.",
      },
      {
        q: "결혼 화환에 사용하는 한자 리본 문구는?",
        a: "결혼 화환의 한자 리본 문구로는 '祝 結婚(축 결혼)', '祝 華婚(축 화혼)', '百年佳約(백년가약)' 등을 사용합니다. 약혼에는 '祝 約婚(축 약혼)'을 사용합니다.",
      },
      {
        q: "결혼식 축하 화환은 언제 보내야 하나요?",
        a: "결혼식 당일 식장에 도착하도록 보내는 것이 일반적입니다. 예식 시작 2~3시간 전에 도착하도록 주문하세요. 식장에 따라 화환 반입 규정이 다를 수 있으니, 사전에 식장에 확인하는 것이 좋습니다.",
      },
      {
        q: "결혼 축하 화환 대신 꽃바구니를 보내도 되나요?",
        a: "네, 결혼 축하에는 화환 외에 꽃바구니나 꽃다발도 적합합니다. 특히 소규모 웨딩이나 스몰 웨딩에서는 꽃바구니가 공간에 더 어울릴 수 있습니다. 관계와 식장 분위기에 맞게 선택하세요.",
      },
      {
        q: "직장 동료 결혼 축하 화환 문구는 어떻게 쓰나요?",
        a: "직장 동료에게 보내는 결혼 축하 문구는 '결혼을 진심으로 축하합니다. 행복한 가정을 이루시길 기원합니다'와 같이 정중하면서도 따뜻한 톤이 적합합니다. 부서 공동 명의로 보내는 경우 'OO팀 일동'으로 기재합니다.",
      },
      {
        q: "재혼이나 늦은 결혼 축하 문구는 다르게 쓰나요?",
        a: "기본적으로 같은 축하 문구를 사용하면 됩니다. '결혼을 축하드립니다. 두 분의 앞날에 행복이 가득하시길 바랍니다'와 같이 보편적인 축복의 메시지가 적합합니다. 특별히 재혼을 언급할 필요는 없습니다.",
      },
      {
        q: "결혼 축하 화환의 적절한 가격대는?",
        a: "결혼 축하 화환은 3단 기준 5만~8만원이 일반적입니다. 가까운 가족이나 친구에게는 대형 화환(10만원 이상)을, 직장 동료에게는 꽃바구니(3만~5만원)를 보내기도 합니다.",
      },
    ],
    birthday: [
      {
        q: "생일 축하 화환 문구는 어떻게 작성하나요?",
        a: "생일 축하 화환은 건강과 행복을 기원하는 내용이 좋습니다. 환갑, 칠순 등 특별한 생신에는 격식을 갖춘 문구가 적합합니다.",
      },
      {
        q: "생일/환갑/칠순 화환에 사용하는 한자 문구는?",
        a: "생일 화환의 한자 리본 문구로는 '祝 生辰(축 생신)', '祝 壽宴(축 수연)', '祝 回甲(축 회갑)', '祝 古稀(축 고희/칠순)' 등이 사용됩니다.",
      },
      {
        q: "환갑과 칠순, 팔순의 차이는 무엇인가요?",
        a: "환갑(回甲)은 만 60세, 칠순(古稀)은 만 70세, 팔순(傘壽)은 만 80세를 뜻합니다. 각각의 한자 리본 문구가 다르며, 환갑은 '祝 回甲', 칠순은 '祝 古稀', 팔순은 '祝 傘壽'를 사용합니다.",
      },
      {
        q: "어르신 생신 축하 화환 문구는 어떻게 다른가요?",
        a: "어르신 생신에는 건강과 장수를 기원하는 내용이 중심이 됩니다. '생신을 진심으로 축하드리며, 만수무강하시길 기원합니다'와 같이 존대 표현과 장수 기원을 함께 담는 것이 적합합니다.",
      },
      {
        q: "생일 축하에 화환 대신 다른 선물을 보내도 되나요?",
        a: "일반 생일에는 꽃다발이나 꽃바구니가 더 적합할 수 있습니다. 대형 화환은 환갑/칠순 등 큰 생신 잔치에 어울립니다. 관계와 상황에 따라 꽃다발(2만~5만원), 꽃바구니(3만~7만원), 화환(5만원~)을 선택하세요.",
      },
      {
        q: "직장 상사 생일 축하 문구는 어떤 톤이 적절한가요?",
        a: "직장 상사에게는 격식 있는 표현이 적합합니다. '생신을 진심으로 축하드립니다. 늘 건강하시고, 하시는 모든 일에 좋은 결과가 함께하시길 기원합니다'와 같은 문구가 좋습니다. 지나치게 친근하거나 가벼운 표현은 피하세요.",
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

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href={`/generate?category=${cat.slug}`}>
          <Button variant="outline" size="lg">
            더 많은 {cat.name} 문구 생성하기
          </Button>
        </Link>
        {(() => {
          const seoPage = SEO_PAGES.find((p) => p.categorySlug === cat.slug);
          if (!seoPage) return null;
          return (
            <Link href={`/seo/${seoPage.slug}`}>
              <Button variant="secondary" size="lg">
                {cat.name} 문구 모음 30선 보기
              </Button>
            </Link>
          );
        })()}
      </div>

      {/* Florist CTA */}
      <div className="mt-8 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 text-center">
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

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">
            {cat.name} 화환 문구 자주 묻는 질문
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, fi) => (
              <div key={fi} className="rounded-lg border p-4">
                <h3 className="font-semibold text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

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
              한자 리본 문구로는 &apos;謹弔(근조)&apos;, &apos;追慕(추모)&apos;, &apos;哀悼(애도)&apos; 등이
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
              한자 리본 문구로는 &apos;祝 昇進(축 승진)&apos;, &apos;祝 榮轉(축 영전)&apos;,
              &apos;祝 就任(축 취임)&apos; 등을 사용합니다. 인사 시즌에는 수요가 급증합니다.
            </p>
          </div>
        ) : cat.slug === "opening" ? (
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              개업/창업 축하 화환 문구는 새로운 시작을 응원하고 사업의 번창을
              기원하는 내용이 좋습니다. 거래처나 비즈니스 파트너에게 보내는 경우가 많습니다.
            </p>
            <p>
              한자 리본 문구로는 &apos;祝 開業(축 개업)&apos;, &apos;祝 繁昌(축 번창)&apos;,
              &apos;祝 新裝開業(축 신장개업)&apos; 등이 일반적입니다.
            </p>
          </div>
        ) : cat.slug === "wedding" ? (
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              결혼 축하 화환 문구는 두 사람의 결합을 축복하고 행복한 미래를 기원하는
              내용이 적합합니다. 친구, 가족, 직장 동료 등 관계에 따라 톤을 조절하세요.
            </p>
            <p>
              한자 리본 문구로는 &apos;祝 結婚(축 결혼)&apos;, &apos;祝 華婚(축 화혼)&apos;,
              &apos;百年佳約(백년가약)&apos; 등을 사용합니다.
            </p>
          </div>
        ) : cat.slug === "birthday" ? (
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              생일 축하 화환은 건강과 행복을 기원하는 내용이 좋습니다.
              환갑, 칠순 등 특별한 생신에는 격식을 갖춘 문구가 적합합니다.
            </p>
            <p>
              한자 리본 문구로는 &apos;祝 生辰(축 생신)&apos;, &apos;祝 壽宴(축 수연)&apos;,
              &apos;祝 回甲(축 회갑)&apos; 등이 사용됩니다.
            </p>
          </div>
        ) : (
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              축하 화환 문구는 기쁜 소식에 대한 진심 어린 축하와 앞날에 대한
              좋은 기원을 담으면 됩니다. 받는 분과의 관계에 맞게 격식을 조절하세요.
            </p>
            <p>
              한자 리본 문구로는 &apos;祝 慶賀(축 경하)&apos;, &apos;祝 祝賀(축 축하)&apos; 등을
              사용합니다. 상황에 따라 구체적인 표현을 추가하면 좋습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
