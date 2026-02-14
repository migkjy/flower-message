# 플라워 메시지 (FloralLetter) - 경조사 화환 문구 자동 생성 서비스

## 프로젝트 개요

**플라워 메시지** -- 한국 경조사 화환 문구를 자동 생성하는 SNS 스타일 서비스 플랫폼.
6개 카테고리(축하/추모/승진/개업/결혼/생일)의 맞춤형 문구를 생성하여 복사/공유하고,
화원 연결을 통해 화환 주문까지 이어지는 구매 플로우를 제공.

## 피벗 이력

- **v1 (꽃말 보관소)**: 꽃말 사전 + 화환 문구 생성. NeonDB에 꽃 데이터 200건 저장, /gallery, /flower/[slug] 페이지 존재
- **v2 (플라워 메시지) -- 현재**: CEO 피벗 지시(2026-02-12). 꽃 데이터 페이지 전면 삭제, SNS 갤러리 스타일 + 소셜 기능 + 화원 연결 구매 플로우로 전환

### v2에서 삭제된 것
- `/gallery` 페이지 (꽃 갤러리)
- `/flower/[slug]` 페이지 (개별 꽃 상세)
- DB 레이어: `src/lib/db.ts`, `src/lib/queries.ts`, `src/lib/schema.ts`
- 패키지: `@neondatabase/serverless`, `drizzle-orm`
- `scripts/seed-flowers.sql`

### v2에서 추가된 것
- SNS 갤러리 스타일 홈페이지 (masonry 카드 레이아웃)
- 소셜 기능: 좋아요/저장/공유 (localStorage 기반, 로그인 없음)
- 화원 연결 CTA 배너 (홈, 문구 생성 결과, 카테고리 페이지)
- `src/lib/sample-messages.ts` (홈 갤러리용 샘플 문구 데이터)
- `src/app/message-card-grid.tsx` (인터랙티브 카드 그리드 컴포넌트)

## 브랜딩

- **한글명**: 플라워 메시지
- **영문명**: FloralLetter
- **프로덕션 URL**: https://flower-message.vercel.app
- **GitHub**: https://github.com/migkjy/flower-message

## Goal

SNS 스타일 갤러리 + 리본 문구 자동 생성 + 소셜 기능(좋아요/저장/공유) + 화원 연결 구매 플로우

## 기술 스택

- **프레임워크**: Next.js 16 (App Router, TypeScript, Tailwind CSS v4)
- **UI**: shadcn/ui
- **문구 생성**: 템플릿 기반 조합 로직 (AI API 연동은 추후)
- **소셜 기능**: localStorage 기반 (좋아요, 저장 - 로그인 없이)
- **배포**: Vercel (git push -> 자동 배포)
- **SEO**: 한국어 타겟 (화환 문구, 축하 화환 메시지, 승진 축하 문구 등)
- **DB**: 없음 (v2에서 제거. 모든 데이터는 정적)

## 빌드 & 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm start        # 프로덕션 실행
```

## 프로젝트 경로

`/Users/nbs22/(Claude)/(claude).projects/business-builder/projects/flower-message/`

## 라우트 맵

| 라우트 | 파일 | 렌더링 | 설명 |
|--------|------|--------|------|
| `/` | `src/app/page.tsx` | Static | SNS 갤러리 홈 (Hero + 카테고리 링크 + 인기 문구 카드 + 문구 모음 링크 + 화원 CTA) |
| `/generate` | `src/app/generate/page.tsx` | Dynamic | 문구 생성기 (카테고리/관계/격식 선택 -> 문구 6개 + 화원 CTA) |
| `/category/[slug]` | `src/app/category/[slug]/page.tsx` | SSG | 카테고리별 문구 예시 + FAQ (SEO용) |
| `/seo/[slug]` | `src/app/seo/[slug]/page.tsx` | SSG | 롱테일 SEO 페이지 (카테고리별 문구 30선 + 작성 팁 + 예절 + 관련 검색어) |
| `/sitemap.xml` | `src/app/sitemap.ts` | Static | 사이트맵 |
| `/robots.txt` | `src/app/robots.ts` | Static | 로봇 설정 |

## 핵심 파일 구조

```
src/
├── app/
│   ├── page.tsx                    # 홈 (SNS 갤러리)
│   ├── message-card-grid.tsx       # 인터랙티브 카드 그리드 (좋아요/저장/공유/복사)
│   ├── layout.tsx                  # 레이아웃 (헤더/푸터, 브랜딩)
│   ├── generate/
│   │   ├── page.tsx                # 문구 생성 페이지
│   │   └── generator-form.tsx      # 생성 폼 (client component)
│   ├── category/[slug]/page.tsx    # 카테고리별 SEO 페이지
│   ├── seo/[slug]/page.tsx        # 롱테일 SEO 페이지 (문구 30선 + 팁)
│   ├── not-found.tsx
│   ├── opengraph-image.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── lib/
│   ├── templates.ts                # 문구 템플릿 데이터 + 생성 로직 (핵심, 6개 카테고리 x 90개 = 540개)
│   ├── seo-data.ts                 # SEO 페이지 메타데이터, 작성 팁, 예절, 키워드
│   ├── sample-messages.ts          # 홈 갤러리용 샘플 메시지 12건
│   └── utils.ts                    # cn() 유틸
└── components/ui/                  # shadcn/ui 컴포넌트
```

## 카테고리

| 카테고리 | 슬러그 | 설명 |
|---------|--------|------|
| 축하 | congratulation | 일반 축하 (승진/취임 외) |
| 추모 | condolence | 장례/조문 |
| 승진 | promotion | 승진/취임/영전 |
| 개업 | opening | 개업/창업/이전 |
| 결혼 | wedding | 결혼/약혼 |
| 생일 | birthday | 생일/환갑/칠순 |

## 주요 기능

1. **SNS 갤러리 홈**: Pinterest/Instagram 스타일 masonry 카드 레이아웃, 카테고리 필터 탭
2. **문구 생성기**: 카테고리 + 관계(5종) + 격식(3종) 선택 -> 맞춤 문구 5개 생성
3. **소셜 기능**: 좋아요(하트+카운트), 저장(북마크), 공유(Web Share API + clipboard 폴백) - 모두 localStorage 기반, 로그인 불요
4. **화원 연결 CTA**: 문구 생성 결과 하단 + 홈 배너 + 카테고리 페이지에 화원 외부 링크 (cultwo-flower.com, f-mans.com)

## 문구 생성 방식

MVP는 템플릿 기반 (`src/lib/templates.ts`):
- 카테고리별 5개 리본(한자) + 격식x관계 조합별 5개 메시지
- 총 6 카테고리 x 3 격식 x 5 관계 = 90개 조합, 각 6개 = 540개 문구
- 격식 수준: 격식(formal) / 일반(normal) / 친근(casual)
- 관계: 직장상사(boss) / 동료(colleague) / 거래처(business) / 친구(friend) / 가족(family)

## localStorage 키

| 키 | 용도 |
|----|------|
| `fm_likes` | 홈 갤러리 좋아요 ID Set |
| `fm_saves` | 홈 갤러리 저장 ID Set |
| `fm_gen_saves` | 문구 생성 결과 저장 키 Set |
