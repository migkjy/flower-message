# Flower Message (플라워 메시지) - PL Session Rules

## Project Identity
- **Name**: 플라워 메시지 (FloralLetter)
- **Purpose**: 한국 경조사 화환 리본 문구 자동 생성 서비스
- **Production**: https://flower-message.vercel.app
- **GitHub**: migkjy/flower-message

## Tech Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- shadcn/ui + Radix UI
- No DB (v2에서 제거, 모든 데이터 정적)
- localStorage 기반 소셜 기능 (로그인 없음)
- Vercel 배포 (production/staging 브랜치만)

## Commands
```bash
npm run dev       # 개발 서버 (localhost:3000)
npm run build     # 프로덕션 빌드
npm run lint      # ESLint
```

## Session Protocol
- 자비스 회신: `scripts/project-reply.sh "메시지" "flower-message"`
- 과업 완료 후 반드시 자비스에게 결과 보고

## Development Rules
1. **TDD 필수**: 테스트 먼저 작성 -> 구현 -> 통과
2. **ralph-loop 필수**: /ralph-loop 스킬 사용
3. **plan 없이 코딩 금지**: VP 승인된 plan 기반으로만 실행
4. **production 브랜치 존재**: main push 후 main->staging->production PR 필수
5. **Vercel CLI 배포 금지**: git push로만 배포
6. **DB 없음**: 새 DB 연결 추가 시 CEO 승인 필요

## Key Directories
- `src/lib/templates.ts` — 문구 템플릿 핵심 로직 (540개 조합)
- `src/lib/seo-data.ts` — SEO 메타데이터/키워드
- `src/app/generate/` — 문구 생성기
- `src/app/category/[slug]/` — 카테고리별 SEO 페이지
- `src/app/seo/[slug]/` — 롱테일 SEO 페이지

## Knowledge
- `.claude/knowledge/architecture.md` — 아키텍처 상세
- `.claude/knowledge/constraints.md` — 제약사항/금지사항
- `.claude/knowledge/api-keys.md` — API 키 (gitignored)
- `.claude/knowledge/history.md` — 피벗/변경 이력
- `.claude/knowledge/learnings.md` — 세션 간 학습사항

## Commit Convention
- `feat:`, `fix:`, `chore:`, `docs:` prefix 사용
- 커밋 메시지에 프로젝트명 포함: `[flower-message] ...`
