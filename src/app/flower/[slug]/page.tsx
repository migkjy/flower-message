import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getFlowerBySlug, getAllFlowerSlugs, getFlowersByCategory } from "@/lib/queries";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllFlowerSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const flower = await getFlowerBySlug(slug);
  if (!flower) return { title: "꽃을 찾을 수 없습니다" };

  return {
    title: `${flower.name} 꽃말 - ${flower.meaning}`,
    description: `${flower.name}(${flower.nameEn || ""})의 꽃말은 "${flower.meaning}"입니다. ${flower.description || ""} 꽃말 전달소에서 더 많은 꽃말을 확인하세요.`,
    keywords: [
      `${flower.name} 꽃말`,
      `${flower.name}`,
      flower.nameEn || "",
      flower.meaning,
      "꽃말",
      "꽃말 사전",
    ].filter(Boolean),
    openGraph: {
      title: `${flower.name} 꽃말 - ${flower.meaning} | 꽃말 전달소`,
      description: `${flower.name}의 꽃말은 "${flower.meaning}"입니다.`,
      images: flower.imageUrl ? [flower.imageUrl] : undefined,
    },
  };
}

export const revalidate = 3600;

export default async function FlowerDetailPage({ params }: Props) {
  const { slug } = await params;
  const flower = await getFlowerBySlug(slug);
  if (!flower) notFound();

  const relatedFlowers = flower.category
    ? (await getFlowersByCategory(flower.category)).filter((f) => f.id !== flower.id).slice(0, 6)
    : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${flower.name} 꽃말 - ${flower.meaning}`,
    description: flower.description || `${flower.name}의 꽃말은 "${flower.meaning}"입니다.`,
    image: flower.imageUrl || undefined,
    author: { "@type": "Organization", name: "꽃말 전달소" },
    publisher: { "@type": "Organization", name: "꽃말 전달소" },
    datePublished: flower.createdAt?.toISOString(),
    dateModified: flower.updatedAt?.toISOString(),
    inLanguage: "ko",
    mainEntityOfPage: `https://flower-message.vercel.app/flower/${slug}`,
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          홈
        </Link>
        <span className="mx-2">/</span>
        <Link href="/gallery" className="hover:text-foreground transition-colors">
          꽃 갤러리
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{flower.name}</span>
      </nav>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
          {flower.imageUrl ? (
            <Image
              src={flower.imageUrl}
              alt={`${flower.name} - ${flower.meaning}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-8xl">&#127804;</span>
              <p className="text-muted-foreground mt-4">이미지 준비 중</p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="flex items-start gap-3 mb-2">
            <h1 className="text-3xl font-bold">{flower.name}</h1>
            {flower.isPopular && (
              <Badge variant="secondary" className="mt-1">
                인기
              </Badge>
            )}
          </div>

          {flower.nameEn && (
            <p className="text-muted-foreground text-sm mb-1">
              {flower.nameEn}
            </p>
          )}
          {flower.scientificName && (
            <p className="text-muted-foreground text-xs italic mb-4">
              {flower.scientificName}
            </p>
          )}

          {/* Flower meaning highlight */}
          <div className="bg-primary/5 rounded-xl p-5 mb-6 border border-primary/10">
            <p className="text-xs text-muted-foreground mb-1 font-medium">
              꽃말
            </p>
            <p className="text-lg font-semibold text-primary">
              {flower.meaning}
            </p>
          </div>

          {/* Description */}
          {flower.description && (
            <div className="mb-6">
              <h2 className="text-sm font-semibold mb-2 text-muted-foreground">
                설명
              </h2>
              <p className="text-sm leading-relaxed">{flower.description}</p>
            </div>
          )}

          {/* Meta info */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {flower.color && (
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">색상</p>
                <p className="text-sm font-medium">{flower.color}</p>
              </div>
            )}
            {flower.category && (
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">분류</p>
                <p className="text-sm font-medium">{flower.category}</p>
              </div>
            )}
            {flower.season && flower.season.length > 0 && (
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">계절</p>
                <div className="flex flex-wrap gap-1">
                  {flower.season.map((s) => (
                    <Badge key={s} variant="outline" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {flower.occasions && flower.occasions.length > 0 && (
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">용도</p>
                <div className="flex flex-wrap gap-1">
                  {flower.occasions.map((o) => (
                    <Badge key={o} variant="outline" className="text-xs">
                      {o}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-auto pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-3">
              이 꽃으로 화환 문구를 작성해보세요
            </p>
            <Link href="/generate">
              <Button className="w-full">화환 문구 생성하기</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Related flowers */}
      {relatedFlowers.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-bold mb-6">
            같은 분류의 꽃
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {relatedFlowers.map((rf) => (
              <Link key={rf.id} href={`/flower/${rf.slug}`}>
                <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                  {rf.imageUrl ? (
                    <div className="relative h-32 w-full">
                      <Image
                        src={rf.imageUrl}
                        alt={rf.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="h-32 bg-muted flex items-center justify-center">
                      <span className="text-3xl">&#127804;</span>
                    </div>
                  )}
                  <CardHeader className="p-3">
                    <CardTitle className="text-sm">{rf.name}</CardTitle>
                    <CardDescription className="text-xs line-clamp-1">
                      {rf.meaning}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* SEO content */}
      <section className="mt-16 bg-muted/30 rounded-lg p-6">
        <h2 className="text-lg font-bold mb-3">
          {flower.name} 꽃말 안내
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {flower.name}
          {flower.nameEn ? `(${flower.nameEn})` : ""}의 꽃말은
          &ldquo;{flower.meaning}&rdquo;입니다.
          {flower.description ? ` ${flower.description}` : ""}
          {flower.season && flower.season.length > 0
            ? ` 주로 ${flower.season.join(", ")}에 볼 수 있으며,`
            : ""}
          {flower.occasions && flower.occasions.length > 0
            ? ` ${flower.occasions.join(", ")} 등의 상황에 어울립니다.`
            : ""}
          {" "}꽃말 전달소에서는 200가지 이상의 꽃과 꽃말 정보를 무료로 제공하고 있으며,
          경조사 화환 문구 생성 서비스도 함께 이용하실 수 있습니다.
        </p>
      </section>
    </div>
  );
}
