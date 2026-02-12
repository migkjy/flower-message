"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Flower } from "@/lib/schema";
import { Badge } from "@/components/ui/badge";

interface FlowerGalleryProps {
  flowers: Flower[];
  categories: string[];
}

export function FlowerGallery({ flowers, categories }: FlowerGalleryProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = flowers;
    if (selectedCategory) {
      result = result.filter((f) => f.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          (f.nameEn && f.nameEn.toLowerCase().includes(q)) ||
          f.meaning.toLowerCase().includes(q),
      );
    }
    return result;
  }, [flowers, search, selectedCategory]);

  return (
    <>
      {/* Search + Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="꽃 이름, 영문명, 꽃말로 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-sm"
            >
              &#10005;
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
              !selectedCategory
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-muted-foreground border-border hover:border-primary/50"
            }`}
          >
            전체 ({flowers.length})
          </button>
          {categories.map((cat) => {
            const count = flowers.filter((f) => f.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() =>
                  setSelectedCategory(selectedCategory === cat ? null : cat)
                }
                className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Result count */}
      {(search || selectedCategory) && (
        <p className="text-sm text-muted-foreground mb-4">
          {filtered.length}개의 꽃을 찾았습니다
        </p>
      )}

      {/* Masonry Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            검색 결과가 없습니다. 다른 키워드로 검색해보세요.
          </p>
        </div>
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((flower, i) => (
            <FlowerCard key={flower.id} flower={flower} index={i} />
          ))}
        </div>
      )}
    </>
  );
}

function FlowerCard({ flower, index }: { flower: Flower; index: number }) {
  const heights = ["h-56", "h-64", "h-72", "h-48", "h-60", "h-52"];
  const heightClass = heights[index % heights.length];

  return (
    <Link href={`/flower/${flower.slug}`} className="block break-inside-avoid">
      <div className="group relative rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300">
        {flower.imageUrl ? (
          <div className={`relative ${heightClass} w-full overflow-hidden`}>
            <Image
              src={flower.imageUrl}
              alt={`${flower.name} - ${flower.meaning}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading={index < 8 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <h3 className="font-bold text-sm leading-tight">{flower.name}</h3>
              {flower.nameEn && (
                <p className="text-[10px] opacity-70 mt-0.5">{flower.nameEn}</p>
              )}
              <p className="text-xs mt-1 line-clamp-2 opacity-90">
                {flower.meaning}
              </p>
            </div>
          </div>
        ) : (
          <div className={`${heightClass} bg-muted flex flex-col items-center justify-center p-4`}>
            <span className="text-4xl mb-2">&#127804;</span>
            <h3 className="font-bold text-sm text-center">{flower.name}</h3>
            {flower.nameEn && (
              <p className="text-[10px] text-muted-foreground mt-0.5">
                {flower.nameEn}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1 text-center line-clamp-2">
              {flower.meaning}
            </p>
          </div>
        )}
        {flower.isPopular && (
          <Badge
            variant="secondary"
            className="absolute top-2 right-2 text-[10px] bg-white/90 text-foreground"
          >
            인기
          </Badge>
        )}
      </div>
    </Link>
  );
}
