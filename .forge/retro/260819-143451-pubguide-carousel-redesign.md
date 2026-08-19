# 2026-08-19 — 캐러셀/슬라이더 전면 교체

## Plan vs actual
- What went as planned: 좌우 끝 이전/다음 모델명 화살표, 하단 점 클릭 이동, 재생/일시정지 토글이라는 핵심 패턴은 계획대로 구현됨.
- Divergences: 배경 이미지 방식이 여러 번 바뀜(아이콘 → img → CSS background div), 슬라이드 데이터가 실제 EV 모델명에서 범용 플레이스홀더로 교체됨, 차량 이미지 에셋이 없어 SVG를 직접 제작함. 그 과정에서 두 개의 실질적 버그(Vite SVG data URI가 `url()` 홑따옴표와 충돌, `background-size: cover`가 SVG 특정 영역을 크롭해 이미지가 사라져 보임)를 발견/수정. 또한 원래 계획엔 없던 "다른 파일 코드 탭 동기화" 작업까지 범위가 확장됨(HeaderView의 모바일 반응형 분기 누락 버그 포함).

## Learnings
- Do differently next time: 실제 사진 에셋이 없는 UI 패턴을 재현할 때는 처음부터 "사진 없음"을 전제로 플레이스홀더 전략(아이콘/일러스트/생상 배경)을 미리 정하고 시작하면 왕복이 줄어들 것 같다.
- Confirmed: import한 작은 이미지를 `url(${변수})`로 따옴표 없이 감싸면 위험하다는 것, 그리고 "코드" 탭과 실제 프리뷰가 어긋나는 게 이 프로젝트에서 반복되는 패턴이라는 것 — 둘 다 README에 반영함.

## Doc updates
- CONTEXT.md promotion: none
- ADR added: none
- 기타: README.md "스타일링 규칙"에 (1) SVG data URI + `url()` 따옴표 규칙, (2) "코드 탭 == 실제 프리뷰 동기화 필수" 규칙 추가
