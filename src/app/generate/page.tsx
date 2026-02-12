import type { Metadata } from "next";
import { Suspense } from "react";
import { GeneratorForm } from "./generator-form";

export const metadata: Metadata = {
  title: "화환 문구 생성",
  description:
    "상황, 관계, 격식 수준을 선택하여 맞춤형 화환 문구를 무료로 생성하세요. 축하, 추모, 승진, 개업, 결혼, 생일 등 모든 경조사에 적합한 문구를 제공합니다.",
};

export default async function GeneratePage(props: {
  searchParams: Promise<{ category?: string }>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
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
