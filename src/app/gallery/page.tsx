import type { Metadata } from "next";
import { getAllFlowers, getFlowerCategories } from "@/lib/queries";
import { FlowerGallery } from "./flower-gallery";

export const metadata: Metadata = {
  title: "꽃 갤러리 - 200가지 꽃말 모음",
  description:
    "장미, 튤립, 벚꽃, 라벤더 등 200가지 이상의 꽃과 꽃말을 만나보세요. 계절별, 용도별로 꽃말을 검색하고 아름다운 사진과 함께 감상하세요.",
  keywords: [
    "꽃말",
    "꽃말 모음",
    "꽃 종류",
    "꽃 사전",
    "장미 꽃말",
    "튤립 꽃말",
    "벚꽃 꽃말",
    "꽃 갤러리",
    "탄생화",
    "결혼식 꽃",
  ],
  openGraph: {
    title: "꽃 갤러리 - 200가지 꽃말 모음 | 꽃말 전달소",
    description:
      "200가지 이상의 꽃과 꽃말, 아름다운 사진을 만나보세요.",
  },
};

export const revalidate = 3600;

export default async function GalleryPage() {
  const [allFlowers, categories] = await Promise.all([
    getAllFlowers(),
    getFlowerCategories(),
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "꽃 갤러리 - 200가지 꽃말 모음",
    description:
      "장미, 튤립, 벚꽃, 라벤더 등 200가지 이상의 꽃과 꽃말을 만나보세요.",
    url: "https://flower-message.vercel.app/gallery",
    numberOfItems: allFlowers.length,
    inLanguage: "ko",
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-3 md:text-4xl">
          꽃 갤러리
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          200가지 이상의 꽃과 꽃말을 만나보세요.
          검색하거나 카테고리별로 필터링할 수 있습니다.
        </p>
      </section>
      <FlowerGallery flowers={allFlowers} categories={categories} />
    </div>
  );
}
