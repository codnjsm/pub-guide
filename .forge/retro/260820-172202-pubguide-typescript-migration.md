# 2026-08-20 — 앱 소스코드 전체를 JavaScript에서 TypeScript로 전환

## Plan vs actual
- What went as planned: 대부분 계획대로.
- Divergences: `eslint.config.js`에서 `typescript-eslint`를 `eslint-plugin-vue`보다 먼저 배치해야 함(순서가 반대면 `.vue` 파일 전체 파싱 에러) — 실행 중 발견. `CardsView`의 `categories`에 인라인 타입 하나를 붙여야 했음(항목마다 `badges` 모양이 달라 유니온이 좁아져 컴파일 에러 — "인터페이스 없이 추론에 맡긴다" 합의의 유일한 예외).

## Learnings
- Do differently next time: flat config에서 `typescript-eslint`와 `eslint-plugin-vue`를 같이 쓸 때는 `tseslint.configs.recommended`를 `pluginVue.configs['flat/recommended']`보다 먼저 배치한다(반대 순서면 tseslint의 전역 파서 설정이 vue-eslint-parser를 덮어씀).

## Doc updates
- CONTEXT.md promotion: none
- ADR added: none
