# 2026-08-19 — 푸터 전면 교체

## Plan vs actual
- What went as planned: 계획한 4개 슬라이스(데이터 정의, 상단부 마크업, 인증마크 그리드, 코드 탭 동기화+검증)가 모두 그대로 수행됐고, 그릴링에서 정한 결정(3단 그리드 제거, 플레이스홀더 박스, `#1c1b1b` scoped 값, 실제 드롭다운)도 전부 지켜졌다.
- Divergences: 실행 후 사용자 피드백으로 시각적 마감 8건이 추가됨 — 드롭다운 방향/높이, 버튼 모양(전역 pill 기본값 override), 인증마크 텍스트 마진, SNS 아이콘 교체·크기·정렬, 색상 `#999` 통일, Family Site 버튼 실제 CSS 적용, 컨테이너 패딩과 구분선. 구조 변경은 없었고 전부 같은 화면의 마감 작업.

## Learnings
- Do differently next time: 특별히 없음. 실제 캡쳐 기준으로 구조를 맞춘 뒤 눈으로 보며 세부를 조정하는 흐름은 이 프로젝트의 정상 패턴.
- Confirmed(중요): **`@layer` 함정이 세 번째 재발**했고, 이번엔 새로운 변종이었다. 앞선 두 번은 "같은 파일 내 커스텀 클래스가 유틸리티를 잡아먹은" 경우라 기존 README 규칙이 커버했지만, 이번엔 `App.vue`의 **전역** `.v-container { padding: 30px }`이 다른 파일(`FooterView.vue`)의 `py-10`을 무시시킨 것이라 기존 규칙으로는 못 잡았다 → README에 이 변종을 별도 항목으로 추가.
- 보류한 대안: 근본 해결(전역 `.v-container` 규칙을 `@layer`에 넣기)은 전역 레이아웃에 영향을 주는 변경이라 별도 태스크로 미뤘다. 같은 함정이 또 나오면 그때 정식으로 다룬다.

## Doc updates
- CONTEXT.md promotion: none
- ADR added: none
- 기타: README.md 스타일링 규칙에 "전역 `.v-container` 패딩이 개별 `py-*`/`px-*` 유틸리티를 무시한다" 항목 추가
