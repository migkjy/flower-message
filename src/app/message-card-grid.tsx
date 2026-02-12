"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { SampleMessage } from "@/lib/sample-messages";

interface MessageCardGridProps {
  messages: SampleMessage[];
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

export const MessageCardGrid = memo(function MessageCardGrid({ messages }: MessageCardGridProps) {
  const [filter, setFilter] = useState<string | null>(null);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLikedIds(getStoredSet("fm_likes"));
    setSavedIds(getStoredSet("fm_saves"));
    setMounted(true);
  }, []);

  const toggleLike = useCallback(
    (id: string) => {
      setLikedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        storeSet("fm_likes", next);
        return next;
      });
    },
    [],
  );

  const toggleSave = useCallback(
    (id: string) => {
      setSavedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        storeSet("fm_saves", next);
        return next;
      });
    },
    [],
  );

  const handleCopy = useCallback(async (msg: SampleMessage) => {
    const text = `${msg.ribbon}\n\n${msg.text}`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopiedId(msg.id);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const handleShare = useCallback(async (msg: SampleMessage) => {
    const text = `${msg.ribbon}\n\n${msg.text}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${msg.category} 화환 문구`,
          text,
          url: `https://flower-message.vercel.app/generate?category=${msg.categorySlug}`,
        });
        return;
      }
    } catch {
      // User cancelled
    }
    // Fallback to copy
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(msg.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // ignore
    }
  }, []);

  const categories = Array.from(new Set(messages.map((m) => m.category)));
  const filtered = filter
    ? messages.filter((m) => m.category === filter)
    : messages;

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="카테고리 필터">
        <button
          role="tab"
          aria-selected={!filter}
          onClick={() => setFilter(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
            !filter
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-white text-muted-foreground border-border hover:border-primary/40"
          }`}
        >
          전체
        </button>
        {categories.map((cat) => (
          <button
            role="tab"
            aria-selected={filter === cat}
            key={cat}
            onClick={() => setFilter(filter === cat ? null : cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              filter === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-white text-muted-foreground border-border hover:border-primary/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((msg) => {
          const isLiked = mounted && likedIds.has(msg.id);
          const isSaved = mounted && savedIds.has(msg.id);
          const isCopied = copiedId === msg.id;

          return (
            <div
              key={msg.id}
              className={`break-inside-avoid rounded-2xl border bg-gradient-to-br ${msg.gradient} p-5 hover:shadow-lg transition-all duration-300 group`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <Badge
                  variant="secondary"
                  className="text-xs font-medium gap-1"
                >
                  <span>{msg.icon}</span> {msg.category}
                </Badge>
                <button
                  onClick={() => toggleSave(msg.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded"
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

              {/* Ribbon */}
              <p className="text-lg font-bold tracking-wider text-center mb-3 text-foreground/80">
                {msg.ribbon}
              </p>

              {/* Message */}
              <p className="text-sm leading-relaxed text-foreground/70 mb-4">
                {msg.text}
              </p>

              {/* Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-border/30">
                <div className="flex items-center gap-3">
                  {/* Like */}
                  <button
                    onClick={() => toggleLike(msg.id)}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-red-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded"
                    aria-label={isLiked ? "좋아요 취소" : "좋아요"}
                  >
                    {isLiked ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-red-500"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    )}
                    <span className="text-xs">
                      {msg.likes + (isLiked ? 1 : 0)}
                    </span>
                  </button>

                  {/* Share */}
                  <button
                    onClick={() => handleShare(msg)}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded"
                    aria-label="공유"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
                    </svg>
                  </button>
                </div>

                {/* Copy */}
                <button
                  onClick={() => handleCopy(msg)}
                  aria-label={isCopied ? "문구가 복사되었습니다" : "문구 복사"}
                  className={`text-xs font-medium px-3 py-1 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isCopied
                      ? "bg-green-100 text-green-700"
                      : "bg-white/80 text-muted-foreground hover:bg-white hover:text-foreground border border-border/50"
                  }`}
                >
                  {isCopied ? "복사됨!" : "복사"}
                </button>
              </div>

              {/* Generate Link */}
              <div className="mt-3 text-center">
                <Link
                  href={`/generate?category=${msg.categorySlug}`}
                  className="text-xs text-primary hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded"
                >
                  이 카테고리로 문구 만들기 &rarr;
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
});
