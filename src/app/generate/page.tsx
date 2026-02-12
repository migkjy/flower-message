import type { Metadata } from "next";
import { Suspense } from "react";
import { GeneratorForm } from "./generator-form";

export const metadata: Metadata = {
  title: "화환 문구 생성기 - 경조사 화환 리본 문구 무료 생성",
  description:
    "축하, 추모, 승진, 개업, 결혼, 생일 화환 문구를 무료로 생성하세요. 카테고리, 관계, 격식 수준을 선택하면 맞춤형 화환 리본 문구와 한자 문구를 즉시 제공합니다.",
  keywords: [
    "화환 문구 생성",
    "화환 리본 문구 만들기",
    "축하 화환 문구",
    "근조 화환 문구",
    "경조사 문구 자동 생성",
  ],
};

export default async function GeneratePage(props: {
  searchParams: Promise<{ category?: string }>;
}) {
  const searchParams = await props.searchParams;

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "플라워 메시지 - 화환 문구 생성기",
    alternateName: "FloralLetter Generator",
    url: "https://flower-message.vercel.app/generate",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
    description:
      "경조사 화환 리본 문구를 무료로 생성하는 웹 앱. 축하, 추모, 승진, 개업, 결혼, 생일 등 6가지 카테고리별 맞춤 문구를 제공합니다.",
    inLanguage: "ko",
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
      />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">화환 문구 생성</h1>
        <p className="text-muted-foreground">
          상황과 관계를 선택하면 맞춤형 화환 문구를 생성합니다.
        </p>
      </div>
      <Suspense fallback={<div className="text-center py-8">로딩 중...</div>}>
        <GeneratorForm initialCategory={searchParams.category} />
      </Suspense>
    </div>
  );
}
