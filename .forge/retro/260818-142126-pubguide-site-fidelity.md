# 2026-08-18 — 실사이트 컬러/폰트/로고 반영

## Plan vs actual
- What went as planned: S1~S4 모두 계획대로 진행됨 (실제 CSS에서 컬러/폰트 추출, vuetify.js 테마 갱신, 로고 이미지 반영, 빌드 검증).
- Divergences:
  - OverviewView.vue의 하드코딩된 컬러 팔레트 표도 함께 갱신함 (계획엔 없었으나, 테마만 바꾸고 이 표를 방치하면 가이드 문서 자체가 모순된 정보를 보여주게 됨).
  - 계획은 "헤더 로고"를 지정했으나, curl로 받은 SSR HTML엔 헤더 전용 로고 에셋이 없어(클라이언트 JS 렌더링으로 추정) footer 로고 파일(alt="현대자동차")로 대체.

## Learnings
- Do differently next time: 테마/컬러 같은 source-of-truth 값을 바꿀 때는, 같은 값을 별도로 하드코딩해 복제해둔 곳(문서 표, 다른 컴포넌트 등)이 있는지 항상 같이 확인할 것 — 안 그러면 소스는 갱신됐는데 문서/표만 낡은 값으로 남는 모순이 생긴다.
- Do differently next time: curl 기반 정적 스크래핑은 클라이언트 JS가 렌더링하는 자산(이번엔 헤더 로고)은 찾지 못한다는 한계가 있다. 이런 자산이 필요하면 처음부터 "정확히 그 요소의 에셋"이 아니라 "같은 브랜드의 대체 가능한 에셋"으로 타협할 수 있다는 걸 계획 단계에서 미리 알아둘 것.

## Doc updates
- CONTEXT.md promotion: none
- ADR added: none
