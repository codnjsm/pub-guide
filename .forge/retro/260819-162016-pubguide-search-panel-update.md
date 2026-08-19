# 2026-08-19 — 검색 패널 실제 마크업 기준 정리

## Plan vs actual
- What went as planned: 계획한 5가지(빈 상태 문구 제거, 인기 검색어 실제 순서, 컬럼 구분선, "자동 완성 끄기" 버튼, placeholder 마침표)가 모두 그대로 반영됨.
- Divergences: 실행 후 사용자 피드백으로 시각적 마감 4건이 추가됨 — 검색창 아래 가로 구분선, `hide-details`로 불필요 여백 제거, 가로/세로 구분선 사이 여백 제거, 플레이스홀더 왼쪽 정렬. 모두 같은 화면의 마감 작업이라 구조 변경은 없었음.

## Learnings
- Do differently next time: 특별히 없음. "실제 캡쳐 기준으로 맞춘 뒤 눈으로 보며 미세 조정"은 이 프로젝트의 정상적인 흐름.
- Confirmed(승급하지 않음): Vuetify `v-text-field`는 유효성 메시지 영역(`.v-input__details`)을 비어 있어도 항상 예약해 여백을 만든다 — `hide-details`로 제거. README 승급은 보류했는데, 현재 프로젝트에서 `v-text-field`를 쓰는 곳이 이 파일 하나뿐이라 아직 반복되는 함정이 아니기 때문. 다른 파일에서 또 걸리면 그때 README로 올린다.

## Doc updates
- CONTEXT.md promotion: none
- ADR added: none
