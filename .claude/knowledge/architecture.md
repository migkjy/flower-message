# Architecture - Flower Message

## Overview
Next.js 16 App Router 기반 정적 사이트. DB 없이 템플릿 기반 문구 생성.

## Route Map
| Route | Rendering | Description |
|-------|-----------|-------------|
| `/` | Static | SNS 갤러리 홈 (masonry 카드 + 카테고리 탭) |
| `/generate` | Dynamic | 문구 생성기 (카테고리/관계/격식 선택 -> 6개 문구) |
| `/category/[slug]` | SSG | 카테고리별 문구 예시 + FAQ |
| `/seo/[slug]` | SSG | 롱테일 SEO 페이지 (문구 30선 + 팁 + 예절) |
| `/sitemap.xml` | Static | 사이트맵 |
| `/robots.txt` | Static | 로봇 설정 |

## File Structure
```
src/
├── app/
│   ├── page.tsx                  # 홈 (SNS 갤러리)
│   ├── message-card-grid.tsx     # 인터랙티브 카드 그리드 (Client Component)
│   ├── layout.tsx                # 레이아웃 (헤더/푸터)
│   ├── generate/
│   │   ├── page.tsx              # 문구 생성 페이지
│   │   └── generator-form.tsx    # 생성 폼 (Client Component)
│   ├── category/[slug]/page.tsx  # 카테고리 SEO 페이지
│   ├── seo/[slug]/page.tsx       # 롱테일 SEO 페이지
│   ├── opengraph-image.tsx       # OG 이미지
│   ├── sitemap.ts / robots.ts
│   └── not-found.tsx
├── lib/
│   ├── templates.ts              # 핵심: 문구 템플릿 + 생성 로직
│   ├── seo-data.ts               # SEO 메타/키워드
│   ├── sample-messages.ts        # 홈 갤러리 샘플 12건
│   └── utils.ts                  # cn() 유틸
└── components/ui/                # shadcn/ui
```

## Message Generation Logic
- 6개 카테고리: 축하/추모/승진/개업/결혼/생일
- 3 격식 레벨: formal / normal / casual
- 5 관계 타입: boss / colleague / business / friend / family
- 총 90개 조합 x 6개 문구 = 540개 문구
- 순수 템플릿 기반 (AI API 연동은 추후 계획)

## Social Features (localStorage)
- `fm_likes` — 좋아요 ID Set
- `fm_saves` — 저장 ID Set
- `fm_gen_saves` — 생성 결과 저장 키 Set
- 로그인 불요, 브라우저 로컬 저장

## Deployment
- Vercel: production + staging 브랜치만 배포 활성화
- main/master/preview 배포 비활성화 (vercel.json 설정)
- 화원 외부 링크: cultwo-flower.com, f-mans.com
