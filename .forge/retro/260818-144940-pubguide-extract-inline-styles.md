# 2026-08-18 — 인라인 style 제거 → `<style>` 블록으로 정리

## Plan vs actual
- What went as planned: S1~S5 모두 계획대로 진행됨 (공용 클래스 추가, 9개 뷰 outer container 교체, 파일별 고유 style 이동, 예시 코드 갱신, 빌드/린트 통과).
- Divergences: 없음.

## Learnings
- Do differently next time: Definition of Done이 "프로젝트 전체"를 명시하는 작업에서는, S5 검증 시 이번 세션에서 실제로 손댄 파일 목록이 아니라 프로젝트 전체 파일 목록(`find`로 다시 뽑은)을 기준으로 grep/확인할 것. 손댄 파일만 확인하면 "내가 어디를 안 건드렸는지" 자체를 놓치는 맹점이 생긴다 — 이번엔 결과가 우연히 맞았지만, 사용자가 재확인을 요구하고 나서야 `src/data/`, `src/router/`, `src/plugins/`, `main.js`, `index.html`까지 포함한 진짜 전체 검색을 했다.

## Doc updates
- CONTEXT.md promotion: none
- ADR added: none
