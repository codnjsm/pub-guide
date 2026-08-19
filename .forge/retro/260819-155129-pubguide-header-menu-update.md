# 2026-08-19 — 헤더/GNB 메뉴 항목 업데이트

## Plan vs actual
- What went as planned: 'Shop사양백과' → 'Shop' 라벨 변경, "내차 추천받기" 링크 추가는 계획대로 됐다.
- Divergences: "내차 추천받기" 추가로 태블릿(768px) 폭에서 콘텐츠 오버플로우 회귀가 발생 — 결국 태블릿도 모바일과 동일하게 축소하는 구조로 변경. 전체메뉴 오버레이를 헤더에 실제 연동할지 논의 후 분리 유지 + 안내 문구 추가로 결론. 좌측 네비 순서도 재배치.

## Learnings
- Do differently next time: 고정폭 툴바에 항목을 추가할 때는 데스크톱/모바일 양 끝만 보지 말고 중간(태블릿) 폭도 같이 확인한다. 다만 이건 README에 반영할 재사용 규칙이 아니라 일반적인 작업 습관 수준이라 승급하지 않음.

## Doc updates
- CONTEXT.md promotion: none
- ADR added: none
