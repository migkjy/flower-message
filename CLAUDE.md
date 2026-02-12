# Flower Message - 화환 문구 AI 서비스

## 프로젝트 개요

한국 경조사 화환 문구를 자동 생성하는 서비스 플랫폼.
6개 카테고리(축하/추모/승진/개업/결혼/생일)의 맞춤형 문구를 생성하여 복사/공유.

## Goal

화환 문구 기반 서비스 플랫폼 구축 + 실제 동작 확인 + 소비자 대상 상용화 서비스 런칭

## 기술 스택

- **프레임워크**: Next.js (App Router, TypeScript, Tailwind CSS v4)
- **UI**: shadcn/ui
- **문구 생성**: 템플릿 기반 조합 로직 (AI API 연동은 추후)
- **배포**: Vercel
- **SEO**: 한국어 타겟 (화환 문구, 축하 화환 메시지, 승진 축하 문구 등)

## 빌드 & 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm start        # 프로덕션 실행
```

## 프로젝트 경로

`/Users/nbs22/(Claude)/(claude).projects/business-builder/projects/flower-message/`

## 카테고리

| 카테고리 | 슬러그 | 설명 |
|---------|--------|------|
| 축하 | congratulation | 일반 축하 (승진/취임 외) |
| 추모 | condolence | 장례/조문 |
| 승진 | promotion | 승진/취임/영전 |
| 개업 | opening | 개업/창업/이전 |
| 결혼 | wedding | 결혼/약혼 |
| 생일 | birthday | 생일/환갑/칠순 |

## 문구 생성 방식

MVP는 템플릿 기반:
- 카테고리별 15-20개 템플릿
- 변수 슬롯: {보내는사람}, {받는사람}, {직위} 등
- 격식 수준: 격식/일반/친근
- 관계: 직장상사/동료/거래처/친구/가족
