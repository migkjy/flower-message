"use client";

import { useState, useCallback, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CATEGORIES,
  FORMALITY_OPTIONS,
  RELATIONSHIP_OPTIONS,
  generateMessages,
  type Category,
  type Formality,
  type Relationship,
  type GeneratedMessage,
} from "@/lib/templates";

interface GeneratorFormProps {
  initialCategory?: string;
}

function getStoredSet(key: string): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const stored = localStorage.getItem(key);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

function storeSet(key: string, set: Set<string>) {
  try {
    localStorage.setItem(key, JSON.stringify([...set]));
  } catch {
    // localStorage not available
  }
}

const subscribeNoop = () => () => {};
const getSnapshotTrue = () => true;
const getServerSnapshotFalse = () => false;

export function GeneratorForm({ initialCategory }: GeneratorFormProps) {
  const [category, setCategory] = useState<Category | "">(
    (initialCategory as Category) || ""
  );
  const [formality, setFormality] = useState<Formality>("normal");
  const [relationship, setRelationship] = useState<Relationship>("colleague");
  const [results, setResults] = useState<GeneratedMessage[]>([]);
  const [copied, setCopied] = useState<number | null>(null);
  const [savedIds, setSavedIds] = useState<Set<string>>(() => getStoredSet("fm_gen_saves"));
  const mounted = useSyncExternalStore(subscribeNoop, getSnapshotTrue, getServerSnapshotFalse);

  function handleGenerate() {
    if (!category) return;
    const msgs = generateMessages({
      category,
      formality,
      relationship,
    });
    setResults(msgs);
    setCopied(null);
  }

  const handleCopy = useCallback(async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(index);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(index);
      setTimeout(() => setCopied(null), 2000);
    }
  }, []);

  const handleShare = useCallback(
    async (text: string) => {
      const shareData = {
        title: "화환 문구 - 플라워 메시지",
        text: text,
        url: `https://flower-message.vercel.app/generate?category=${category}`,
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
          return;
        }
      } catch {
        // User cancelled
      }
      // Fallback: copy
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        // ignore
      }
    },
    [category],
  );

  const toggleSave = useCallback((msgKey: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(msgKey)) next.delete(msgKey);
      else next.add(msgKey);
      storeSet("fm_gen_saves", next);
      return next;
    });
  }, []);

  const selectedCat = CATEGORIES.find((c) => c.slug === category);

  return (
    <div className="space-y-8">
      {/* Step 1: Category */}
      <fieldset>
        <legend className="text-lg font-semibold mb-4">1. 상황 선택</legend>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3" role="radiogroup" aria-label="상황 카테고리 선택">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              role="radio"
              aria-checked={category === cat.slug}
              onClick={() => {
                setCategory(cat.slug);
                setResults([]);
              }}
              className={`rounded-xl border-2 p-4 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                category === cat.slug
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border hover:border-primary/30 hover:shadow-sm"
              }`}
            >
              <div className="text-2xl mb-1" aria-hidden="true">{cat.icon}</div>
              <div className="text-sm font-medium">{cat.name}</div>
            </button>
          ))}
        </div>
      </fieldset>

      {/* Step 2: Relationship */}
      <fieldset>
        <legend className="text-lg font-semibold mb-4">2. 관계 선택</legend>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="관계 선택">
          {RELATIONSHIP_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              role="radio"
              aria-checked={relationship === opt.value}
              onClick={() => {
                setRelationship(opt.value);
                setResults([]);
              }}
              className={`rounded-full px-4 py-2 text-sm border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                relationship === opt.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Step 3: Formality */}
      <fieldset>
        <legend className="text-lg font-semibold mb-4">3. 격식 수준</legend>
        <div className="flex gap-2" role="radiogroup" aria-label="격식 수준 선택">
          {FORMALITY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              role="radio"
              aria-checked={formality === opt.value}
              onClick={() => {
                setFormality(opt.value);
                setResults([]);
              }}
              className={`rounded-full px-4 py-2 text-sm border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                formality === opt.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Generate Button */}
      <Button
        size="lg"
        className="w-full text-base py-6 rounded-xl"
        onClick={handleGenerate}
        disabled={!category}
      >
        {category ? "문구 생성하기" : "상황을 선택해주세요"}
      </Button>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-4">
          <Separator />
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-lg font-semibold">생성된 문구</h2>
            {selectedCat && (
              <Badge variant="secondary">
                {selectedCat.icon} {selectedCat.name}
              </Badge>
            )}
          </div>
          {results.map((msg, i) => {
            const msgKey = `${category}-${formality}-${relationship}-${i}`;
            const isSaved = mounted && savedIds.has(msgKey);

            return (
              <Card key={i} className="overflow-hidden rounded-2xl">
                <CardHeader className="bg-muted/30 py-3 px-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-bold tracking-wider">
                      {msg.ribbon}
                    </CardTitle>
                    <button
                      onClick={() => toggleSave(msgKey)}
                      className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded"
                      aria-label={isSaved ? "저장 취소" : "저장"}
                    >
                      {isSaved ? (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-primary"
                        >
                          <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1z" />
                        </svg>
                      ) : (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm leading-relaxed mb-4">{msg.full}</p>
                  <div className="flex flex-wrap gap-2 justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                      onClick={() =>
                        handleCopy(`${msg.ribbon}\n\n${msg.full}`, i)
                      }
                    >
                      {copied === i ? "복사됨!" : "전체 복사"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                      onClick={() => handleCopy(msg.full, i + 100)}
                    >
                      {copied === i + 100 ? "복사됨!" : "메시지만 복사"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                      onClick={() =>
                        handleShare(`${msg.ribbon}\n\n${msg.full}`)
                      }
                    >
                      공유하기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Florist CTA after results */}
          <div className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 text-center">
            <p className="text-sm text-green-800 font-medium mb-2">
              문구가 마음에 드셨나요?
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
        </div>
      )}
    </div>
  );
}
