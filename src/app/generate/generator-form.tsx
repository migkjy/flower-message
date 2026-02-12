"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
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

export function GeneratorForm({ initialCategory }: GeneratorFormProps) {
  const [category, setCategory] = useState<Category | "">(
    (initialCategory as Category) || ""
  );
  const [formality, setFormality] = useState<Formality>("normal");
  const [relationship, setRelationship] = useState<Relationship>("colleague");
  const [results, setResults] = useState<GeneratedMessage[]>([]);
  const [copied, setCopied] = useState<number | null>(null);
  const [shared, setShared] = useState<number | null>(null);

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

  async function handleCopy(text: string, index: number) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(index);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Fallback for HTTP
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(index);
      setTimeout(() => setCopied(null), 2000);
    }
  }

  async function handleShare(text: string, index: number) {
    const shareData = {
      title: "화환 문구",
      text: text,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShared(index);
        setTimeout(() => setShared(null), 2000);
      } else {
        await handleCopy(text, index);
      }
    } catch {
      // User cancelled share dialog
    }
  }

  function handleKakaoShare(msg: GeneratedMessage) {
    const url = `https://flower-message.vercel.app/generate?category=${category}`;
    const kakaoUrl = `https://sharer.kakao.com/talk/friends/picker/link?app_key=&url=${encodeURIComponent(url)}&text=${encodeURIComponent(`${msg.ribbon}\n\n${msg.full}`)}`;
    // Fallback: copy and alert user to paste in KakaoTalk
    handleCopy(`${msg.ribbon}\n\n${msg.full}`, -1);
    alert("문구가 클립보드에 복사되었습니다.\n카카오톡에 붙여넣기 해주세요.");
  }

  const selectedCat = CATEGORIES.find((c) => c.slug === category);

  return (
    <div className="space-y-8">
      {/* Step 1: Category */}
      <div>
        <h2 className="text-lg font-semibold mb-4">1. 상황 선택</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => {
                setCategory(cat.slug);
                setResults([]);
              }}
              className={`rounded-lg border-2 p-4 text-center transition-all ${
                category === cat.slug
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border hover:border-primary/30 hover:shadow-sm"
              }`}
            >
              <div className="text-2xl mb-1">{cat.icon}</div>
              <div className="text-sm font-medium">{cat.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Relationship */}
      <div>
        <h2 className="text-lg font-semibold mb-4">2. 관계 선택</h2>
        <div className="flex flex-wrap gap-2">
          {RELATIONSHIP_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setRelationship(opt.value);
                setResults([]);
              }}
              className={`rounded-full px-4 py-2 text-sm border transition-all ${
                relationship === opt.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Step 3: Formality */}
      <div>
        <h2 className="text-lg font-semibold mb-4">3. 격식 수준</h2>
        <div className="flex gap-2">
          {FORMALITY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setFormality(opt.value);
                setResults([]);
              }}
              className={`rounded-full px-4 py-2 text-sm border transition-all ${
                formality === opt.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <Button
        size="lg"
        className="w-full text-base py-6"
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
          {results.map((msg, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="bg-muted/30 py-3 px-4">
                <CardTitle className="text-base font-bold tracking-wider text-center">
                  {msg.ribbon}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm leading-relaxed mb-4">{msg.full}</p>
                <div className="flex flex-wrap gap-2 justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleCopy(`${msg.ribbon}\n\n${msg.full}`, i)
                    }
                  >
                    {copied === i ? "복사됨!" : "전체 복사"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(msg.full, i + 100)}
                  >
                    {copied === i + 100 ? "복사됨!" : "메시지만 복사"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleShare(`${msg.ribbon}\n\n${msg.full}`, i + 200)
                    }
                  >
                    {shared === i + 200 ? "공유됨!" : "공유하기"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-yellow-700 border-yellow-300 hover:bg-yellow-50"
                    onClick={() => handleKakaoShare(msg)}
                  >
                    카카오톡 전송
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
