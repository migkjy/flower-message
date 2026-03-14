# Constraints - Flower Message

## 영구 제약사항

### DB 관련
- v2 피벗에서 DB 완전 제거 (NeonDB, Drizzle 삭제)
- 새로운 DB 연결 추가는 CEO 승인 필수
- 모든 데이터는 정적 (템플릿 기반)

### 삭제된 기능 (복원 금지)
- `/gallery` 꽃 갤러리 페이지
- `/flower/[slug]` 개별 꽃 상세 페이지
- `@neondatabase/serverless`, `drizzle-orm` 패키지
- `src/lib/db.ts`, `src/lib/queries.ts`, `src/lib/schema.ts`

### 배포
- Vercel CLI 단독 배포 금지 (git push만)
- main -> staging -> production 순서 필수
- main -> production 직행 PR 절대 금지
- 새 Vercel 프로젝트 생성 금지

### 콘텐츠/브랜딩
- 샘플/더미 데이터 10개 초과 생성 금지 (CEO 승인 없이)
- .vercel.app 링크 외부 노출 금지
- 서비스 간 크로스 프로모션 금지

### 개발 프로세스
- plan 없이 코딩 착수 금지
- VP 승인 없이 execute-plan 착수 금지
- TDD 미적용 코드 머지 거부
- ralph-loop 미사용 PL 실행 결과 미완료 처리

### 보고
- 프로젝트명 `[flower-message]` 접두사 필수 (모든 보고서/커밋)
- 배포 완료 보고 전 실제 URL curl 검증 필수
