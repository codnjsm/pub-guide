# 2026-08-20 — 모든 페이지 제목의 죽은 타이포 클래스를 text-scale-*로 교체

## Plan vs actual
- What went as planned: 1차 실행(S1: 매핑대로 치환, S2: build/lint 검증)은 그릴링에서 합의한 대로 착지했다.
- Divergences: UAT 단계에서 "Overview만 크게 둔 이유가 뭐냐, 다 통일해달라"는 요청으로 그릴링 때 합의한 매핑(상대적 크기 유지)이 뒤집혔다. 나머지 9개 페이지의 `<h1>`도 `text-scale-h2` → `text-scale-h1`로 재교체해 전체 32px/700으로 통일했다.

## Learnings
- Do differently next time: 이 프로젝트에서 크기·색·간격 같은 "눈으로 판단하는 값"이 그릴링 합의와 UAT 결과가 어긋나는 패턴이 이번이 다섯 번째(검색 패널·전체메뉴·nav 폰트 크기·Cards 카드 그리드·이번)다. `nav-font-size` 회고에서 "또 나오면 회고 로그를 넘어선다"고 예고했던 문턱을 넘겼다고 판단해 ADR로 승급했다.

## Doc updates
- CONTEXT.md promotion: none
- ADR added: `.forge/adr/260820-170158-visual-values-need-fg-visual-upfront.md` — 시각 판단이 개입되는 값은 그릴링 때 fg-visual을 기본으로 제안하기로 한 결정
