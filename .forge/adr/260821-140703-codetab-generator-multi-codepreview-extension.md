---
author: anchaewon
decided: 2026-08-21 14:07
---

# 코드탭 생성기는 한 파일에 여러 CodePreview도 (재작성 없이) 정규식 확장으로 지원한다

## 배경

`ButtonsView.vue`는 카테고리별로 별도의 "미리보기/코드" 박스를 두기 위해 `<CodePreview>`를 파일 하나에 3번 썼다. 기존 `scripts/gen-codetab.mjs`는 "파일당 CodePreview 하나·`code` 변수 하나"를 전제로 짜여 있었고, 이는 정확히 `.forge/adr/260820-141939-codetab-generator-regex-approach.md`가 못박은 재검토 조건("뷰의 구조가 다양해진다")에 해당한다.

## 결정

**진짜 파서(`@vue/compiler-sfc`)로 전면 재작성하지 않고, 같은 단일 블록 추출 로직을 파일 안의 CodePreview 개수만큼 반복 적용하는 방식으로 확장했다.** `buildCodeMulti`/`renderMulti`가 각 `<CodePreview :code="이름">` 블록마다, 그 블록의 템플릿에서 실제로 참조하는 최상위 `const`/`type` 선언만 골라(`splitTopLevelDecls`) 독립된 코드 탭 문자열을 만든다. 기존 단일 블록 뷰(8개)의 경로는 그대로 두고, CodePreview가 2개 이상인 파일만 새 경로를 탄다.

## 근거

- 이전 ADR의 근거("가이드 프로젝트 내부 도구, Node 내장 모듈만으로 유지")가 여전히 유효하다 — 여러 블록 지원도 정규식 매칭을 늘린 것일 뿐, 새 의존성이나 아키텍처 변경은 없다.
- "구조가 다양해진다"는 재검토 신호였지만, 실제로 필요했던 건 **같은 알고리즘의 반복 적용**이었다 — SFC를 더 다르게 파싱해야 하는 문제가 아니라, 이미 있던 단일-블록 로직을 블록 수만큼 부르는 문제였다.
- 기존 8개 뷰는 전혀 건드리지 않아(회귀 없음을 `npm run build`/`npm run lint`로 반복 확인) 위험을 새 경로에만 국한시켰다.

## 재검토 조건

- 이 확장이 4번째 결함을 낸다면(정규식 접근 자체의 반복 결함 패턴), 그때는 실제 파서 전면 재작성을 재검토한다 — 이전 ADR의 조건을 그대로 이어받는다.
- 한 블록의 코드가 "다른 블록의 선언을 참조해야 하는" 경우가 생기면(지금은 카테고리별로 완전히 독립적이라 문제없음) `splitTopLevelDecls`의 단순 이름-매칭 방식이 부족해질 수 있다.

## 관련

- `.forge/adr/260820-141939-codetab-generator-regex-approach.md` — 선행 ADR (정규식 유지 결정, 재검토 조건 원본)
- `.forge/retro/260821-*-pubguide-buttons-guide.md` (이번 회고)
