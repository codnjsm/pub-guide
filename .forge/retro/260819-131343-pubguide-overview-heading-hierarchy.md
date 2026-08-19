# 2026-08-19 — 개요 페이지 h1/h2 위계 및 섹션 간 구분 개선

## Plan vs actual
- What went as planned: h1/h2 위계를 명확히 한다는 목표 자체는 유지됐다.
- Divergences: 계획한 구현(색상 dimming + font-weight-medium)은 사용자 피드백으로 반려됐고, 계획의 Non-goal이었던 "구분선 추가"가 최종 해법이 됐다. 대시/점 가상요소 장식을 시도했다가 전부 철회. 범위도 `OverviewView.vue`에서 `ColorsTypographyView.vue`까지 확장. `.folder-tree` margin이 Vuetify 유틸리티를 무시하던 부수 버그도 발견/수정.

## Learnings
- Do differently next time: "위계/구분 개선" 같은 시각적 폴리싱 작업은 계획 단계에서 구체적 구현(색상값 등)을 못박기보다, 목표만 정하고 실행 중 반복 조정을 기본 전제로 삼는 게 낫다.
- Confirmed: CSS `@layer` 안의 Vuetify 유틸리티 클래스는 컴포넌트 scoped 스타일(레이어 밖)이 같은 속성을 건드리면 항상 진다 — README에 반영함.

## Doc updates
- CONTEXT.md promotion: none
- ADR added: none
- 기타: README.md "스타일링 규칙"에 Vuetify 유틸리티 클래스 vs scoped 스타일 `@layer` 우선순위 규칙 추가
