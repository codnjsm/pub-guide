# 2026-08-20 — 섹션 페이지 설명문을 목록 형식으로 재구성

## Plan vs actual
- What went as planned: 1차 실행(S1: 8개 페이지 줄글 → 소개 1줄 + 불릿 목록, S2: build/lint 검증)은 계획서 그대로 착지했다.
- Divergences: 1차 UAT 이후 실질적으로 범위가 커졌다.
  1. 불릿 개수 축약 — Header/FullMenu가 6개로 너무 많다는 피드백을 받아 4개로 정리.
  2. `<strong>` 전면 제거 + `text-medium-emphasis` → `text-high-emphasis`(글씨를 더 진하게).
  3. 계획서에 명시적으로 **제외**했던 `ColorsTypographyView`/`OverviewView`까지 같은 색상 조정을 확장 적용.
  4. 예정에 없던 버그 발견·수정 — 이 프로젝트의 Vuetify(4.1.10)가 M3 타이포 체계로 바뀌면서 `text-h1~h6`/`text-body-1`/`text-body-2`/`text-caption` 같은 레거시 클래스명이 CSS를 전혀 생성하지 않는다는 걸 확인했다(색 계열 유틸리티는 정상). 설명 블록 23곳을 프로젝트 자체 `text-scale-body`/`text-scale-caption`으로 교체해 실제로 의도한 크기/굵기가 먹게 고쳤다.

## Learnings
- Do differently next time:
  1. **시각적 톤 조정(색·강조·불릿 개수)은 UAT 이후에도 여러 라운드로 이어질 걸 예상하고 그릴링 때 한 번에 물어본다.** 이번엔 "설명문을 목록으로"라는 구조 변경만 그릴링했고, 색 진하기·강조 표시 여부는 실행 후 화면을 보고서야 나왔다. `nav-font-size`·`search-panel`·`cards-vehicle-grid` 회고에서 이미 세 번 지적된 "눈으로 판단하는 값은 말로 왕복하게 된다"는 패턴이 이번이 네 번째다 — fg-visual 제안을 그릴링 단계에서 더 적극적으로 검토할 필요가 있다(이번엔 색상 톤이라 fg-visual 없이도 무리 없이 끝났지만, 라운드 수가 쌓이는 건 동일했다).
  2. **CSS 유틸리티 클래스를 쓸 때, 그 클래스가 실제로 CSS를 생성하는지 한 번은 빌드 결과물에서 확인한다.** 이번 프로젝트는 Vuetify 버전이 레거시 타이포 클래스명을 지원하지 않는데, 시각적으로 "일단 렌더링은 되니 문제없어 보이는" 상태라 아무도 눈치채지 못하고 있었다. `grep dist/assets/*.css`로 클래스가 실제로 CSS 규칙을 만드는지 확인하는 습관이 이런 종류의 "죽은 클래스" 버그를 조기에 잡아준다.

## Doc updates
- CONTEXT.md promotion: none (모두 프로세스/구현 학습, 도메인 용어 아님)
- ADR added: 260820-163417-typography-scale-over-legacy-classes.md — 레거시 Vuetify 타이포 클래스 대신 프로젝트 자체 `text-scale-*`를 표준으로 쓰기로 한 결정
- 후속 backlog: `pubguide-heading-scale-fix` (task 25) — 모든 페이지 `<h1>`/`<h2>` 제목이 여전히 죽은 `text-h4/h5/h6` 클래스를 쓰고 있어 같은 문제가 남아있음. 별도 작업으로 등록.
