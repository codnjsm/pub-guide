# 2026-08-21 — Buttons 섹션 페이지 신설 — 버튼 종류 사전

## Plan vs actual
- What went as planned: 라우팅·네비게이션 등록(S4), 코드 탭 동기화 자체의 흐름(재생성→build→lint)은 계획대로였다.
- Divergences: 계획은 "5개 카테고리·단일 CodePreview"였는데, 최종은 "3개 카테고리·카테고리별 독립 CodePreview 3세트 + variant 비교 기능"으로 구조 자체가 바뀌었다. 로그인·전이/소셜·외부링크 카테고리는 UAT에서 "화면당 1회만 쓰임"을 이유로 제거됐고, "카테고리별 별도 프리뷰"라는 UAT 요구가 `gen-codetab.mjs`의 "파일당 CodePreview 하나" 전제와 충돌해 생성기 자체를 확장해야 했다(계획 범위 밖의 도구 변경). 구현 중 발견하지 못하고 UAT(사용자 화면/devtools)에서야 드러난 버그도 2건 있었다 — v-btn `icon` prop이 default slot에 밀리는 문제, `grid-auto-columns` 고정폭이 넓은 버튼을 겹치게 하는 문제.

## Learnings
- Do differently next time:
  - "자주 쓰이는 X 카탈로그" 같은 작업을 그릴링할 때 "이 항목이 여러 화면에 반복되는가"를 명시적으로 물어본다 — 이번엔 UAT에서야 드러나 카테고리 2개를 통째로 뺐다.
  - `v-btn`에 `icon` prop과 default slot을 동시에 주지 않는다 — 슬롯이 있으면 Vuetify가 아이콘보다 슬롯을 우선한다. 아이콘/텍스트를 섞어야 하면 태그를 `v-if`/`v-else`로 분리한다. (README에도 반영)
  - 페이지 UI를 "이 프로젝트에 이미 있는 도구(코드 탭 생성기)의 전제와 맞는가"까지 그릴링에서 짚었으면 좋았을 것 — 이번엔 구조를 다 바꾼 뒤에야 생성기 확장이 필요하다는 게 드러났다.

## Doc updates
- CONTEXT.md promotion: "섹션 페이지"(여러 패턴에 걸친 컴포넌트 카탈로그도 포함하도록 범위 확장), "CodePreview"(한 페이지에 여러 번 쓰일 수 있음을 명시)
- ADR added: ADR `260821-140703`(코드탭 생성기의 다중 CodePreview 확장 — 재작성 대신 정규식 확장을 택한 이유)
- README.md: "v-btn 아이콘 전용 버튼" 섹션 추가 (icon prop + slot 함정)
