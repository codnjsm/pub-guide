# 2026-08-19 — 컬러 팔레트를 실제 클래스로 쓸 수 있게 등록 + 사용법 표시

## Plan vs actual
- What went as planned: Border 테마 컬러 등록, 팔레트 카드에 사용법 표시라는 핵심 목표는 달성됨.
- Divergences: 계획에 없던 타이포그래피 스케일용 커스텀 클래스(`text-scale-*`)까지 범위가 확장됨. 사용법 표시 형식이 여러 번 바뀌며 반복(각 카드) → 대표 예시 1개(Primary/H1) 방식으로 정착. `@layer` 마진 버그가 재발.

## Learnings
- Do differently next time: 없음(구조적으로는 계획대로).
- Confirmed(중요): `@layer` 마진 버그가 README에 문서화된 후에도 재발했다 — "주의하라"는 서술형 규칙만으론 부족해서, "커스텀 클래스에 margin/padding을 두는 엘리먼트엔 Vuetify spacing 유틸리티를 아예 같이 쓰지 않는다"는 더 강한 예방적 규칙으로 README를 업데이트함.

## Doc updates
- CONTEXT.md promotion: none
- ADR added: none
- 기타: README.md 스타일링 규칙의 `@layer` 관련 문구를 예방적 규칙으로 강화
