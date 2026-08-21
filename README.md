# pub-guide

hyundai.com(kr/ko/e) 페이지의 UI 패턴을 참고해 Vue 3 + Vuetify로 재현한 컴포넌트 스타일가이드입니다. 컬러/폰트/로고는 실제 hyundai.com에서 추출한 값을 반영했습니다.

- 저장소: https://github.com/codnjsm/pub-guide
- 화면 링크 (GitHub Pages): https://codnjsm.github.io/pub-guide/

## 실행

```bash
npm install
npm run dev         # 개발 서버
npm run build       # 프로덕션 빌드
npm run lint        # ESLint + 타입 체크 + 코드 탭 동기화 검사
npm run type-check  # vue-tsc 타입 체크만
npm run codetab     # 코드 탭 재생성
npm run format      # Prettier
```

## 사용 기술

- Vue 3 — UI 프레임워크
- TypeScript — 정적 타입
- Vuetify — 컴포넌트 라이브러리
- Vue Router — 라우팅
- Vite — 빌드 도구
- Sass (SCSS) — 스타일
- Material Design Icons (@mdi/font) — 아이콘

## 파일 구조

```
pub-guide/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.vue                       # 최상위 레이아웃 (앱바 + 좌측 네비게이션 드로어)
│   ├── main.ts                       # 앱 진입점 (router, vuetify 플러그인 등록)
│   ├── assets/
│   │   └── carousel-car.svg          # Carousel 섹션 차량 실루엣 SVG
│   ├── plugins/
│   │   └── vuetify.ts                # Vuetify 인스턴스 설정 (테마 컬러, 컴포넌트/디렉티브 등록)
│   ├── router/
│   │   └── index.ts                  # 섹션별 라우트 정의
│   ├── data/
│   │   └── navItems.ts               # 좌측 네비게이션 메뉴 목록
│   ├── components/
│   │   └── guide/
│   │       ├── CodePreview.vue       # 미리보기/코드 탭 전환 + 반응형 뷰포트 토글 (공용 컴포넌트)
│   │       └── HyundaiLogo.vue       # 실제 헤더 로고 SVG (공용 컴포넌트)
│   └── views/                        # 섹션 페이지 (현대차 UI 패턴 1개당 1개 파일)
│       ├── OverviewView.vue          # Overview
│       ├── ColorsTypographyView.vue  # Colors / Typography
│       ├── HeaderView.vue            # Header / GNB
│       ├── NavigationView.vue        # Slide Navigation
│       ├── HeroView.vue              # Hero Banner
│       ├── CardsView.vue             # Cards
│       ├── CarouselView.vue          # Carousel / Slider
│       ├── FooterView.vue            # Footer
│       ├── FullMenuView.vue          # Full Menu Overlay
│       └── SearchSuggestView.vue     # Search Panel
├── scripts/
│   └── gen-codetab.mjs               # 각 섹션 페이지의 코드 탭을 뷰 내용에서 재생성 (npm run codetab)
├── eslint.config.js
├── .prettierrc
├── tsconfig.json
└── vite.config.ts
```

## 스타일링 규칙

### 전역/파일별 스타일 배치

- 스타일 블록은 모두 `<style lang="scss">` (SCSS, `sass` devDependency 필요). **SCSS 중첩(`&`)은 쓰지 않는다** — 이 프로젝트 툴체인에서 scoped CSS 처리기가 중첩 블록을 깨진 선택자로 컴파일하는 문제가 있어, 모든 규칙은 평탄한(flat) 선택자로 작성한다.
- 전역 스타일은 `App.vue`에만 둔다 — 폰트 폴백 스택, 모든 섹션 페이지가 재사용하는 `.guide-container`(`max-width: 1080px`) 공용 클래스, 그리고 `.v-container` 기본 패딩(`30px`, 화면폭 375px 이하에서는 `16px`).
- 섹션 페이지별로만 쓰이는 스타일(검색창 폭, 프리뷰 컨테이너 높이 등)은 각 파일의 `<style lang="scss" scoped>` 블록에 파일 전용 클래스로 둔다. 인라인 `style="..."` 속성은 쓰지 않는다 — 단, 런타임 값에 따라 바뀌는 경우(배경 이미지, 컬러 스와치, 뷰포트 폭)는 `:style` 바인딩으로 남겨둔다.
- Vuetify 내부 요소(`.v-list-item-title` 등)를 스타일링할 땐 scoped 블록에서 `:deep()`으로 감싼다.

### Vuetify 유틸리티 클래스와의 충돌 (`@layer`)

- Vuetify의 유틸리티 클래스(`mb-10` 등)는 CSS `@layer` 안에 있다. 컴포넌트 자체 `<style scoped>`에서 같은 엘리먼트의 같은 속성(예: `margin`)을 건드리는 규칙이 있으면, 레이어 밖(unlayered) 스타일이 항상 이겨서 유틸리티 클래스가 조용히 무시된다 — **커스텀 클래스에서 `margin`/`padding` 등을 다루는 엘리먼트에는 Vuetify spacing 유틸리티 클래스(`mb-10` 등)를 같이 쓰지 않는다. 필요한 여백은 커스텀 클래스 안에 직접 명시한다.**
- 같은 이유로, `App.vue`의 전역 `.v-container { padding: 30px }`이 **모든** `v-container`의 패딩을 고정한다 — 개별 `v-container`에 `py-*`/`px-*` 유틸리티를 줘도 조용히 무시된다. 특정 섹션에서 다른 패딩이 필요하면 그 컨테이너 전용 scoped 클래스로 지정한다(예: `FooterView.vue`의 `.footer-inner`).

### 이미지 URL

- import한 이미지(특히 작은 SVG)를 배경으로 쓸 때 `:style="{ backgroundImage: \`url(${변수})\` }"`처럼 따옴표 없이 감싸지 않는다 — Vite가 작은 SVG를 data URI로 인라인하면 그 안의 홑따옴표가 `url()`과 충돌해 CSS가 깨진다. 항상 `url("${변수}")`처럼 따옴표로 감싼다(필요하면 헬퍼 함수로 분리).

### 코드 탭 규칙

**각 섹션 페이지의 "코드" 탭 예시 문자열(`code` 변수)은 복사해서 붙여넣으면 프리뷰와 같은 컴포넌트가 나오는 완성된 `.vue` 파일 한 장이어야 한다.** 구체적으로:

- `<script setup lang="ts">` + `<template>` + `<style lang="scss" scoped>` 세 블록을 **모두** 담는다. 데이터·ref·함수도 줄이지 않고 그대로 넣는다 — 커스텀 클래스 정의가 빠지면 스타일이 조금 다른 게 아니라 **구조가 다른 화면**이 나온다(예: `.fullmenu__links`가 없으면 가로로 흐르던 링크가 세로로 쌓인다).
- 가이드 껍데기는 **뺀다** — `<v-container class="guide-container">`, `<h1>`, 설명문 `<p>`, `<CodePreview>` 자체.
- `CodePreview`가 넘겨주는 `viewport` slot prop은 **코드 탭에 남기지 않는다** — 사용자 프로젝트엔 `CodePreview`가 없어 undefined가 된다. Vuetify `useDisplay()`로 옮겨 적는다(프리뷰 폭 기준: desktop→`mdAndUp`, mobile→`xs`).
- 프로젝트 전용 파일을 import하는 경우(`HyundaiLogo.vue`, `carousel-car.svg`) import 문은 그대로 두고, **그 페이지 설명문에 함께 가져가야 할 파일을 명시한다.**
- 위 네 가지 외의 차이는 허용하지 않는다 — 구조·클래스·prop·텍스트는 프리뷰와 1:1로 맞춘다.
- **코드 탭은 손으로 고치지 않는다 — 뷰를 수정한 뒤 `npm run codetab`을 돌려 재생성한다.** `npm run lint`가 `--check` 모드로 어긋남을 잡으므로, 깜빡하면 lint가 실패한다. 뷰별 예외(`viewport` 치환)는 `scripts/gen-codetab.mjs`의 `VIEWPORT_MAP`에 있다.
- **문자열 안의 닫는 스크립트 태그는 `<\/script>`로 쓴다.** Vue SFC 파서는 `<script>` 블록을 첫 `</script>`에서 끝내므로, 이스케이프하지 않으면 스크립트 블록이 거기서 끊겨 파일이 깨진다. JS 템플릿 리터럴에서 `\/`는 `/`이므로 코드 탭에는 `</script>`로 정상 표시된다.

## 인터랙션 패턴

- **열고 닫히는 패널(Search Panel, Full Menu Overlay 등)은 토글 버튼을 패널 바깥에 두고, 아이콘만 바꾼다.** 패널 안에 닫기 버튼을 두면 닫힌 뒤 다시 열 방법이 사라져 별도 "열기" 버튼을 또 만들어야 한다. `SearchSuggestView.vue`/`FullMenuView.vue`가 쓰는 형태를 그대로 따른다:

  ```html
  <v-btn :icon="open ? 'mdi-close' : 'mdi-menu'" variant="text" @click="open = !open" />

  <v-expand-transition>
    <div v-if="open" class="...">…</div>
  </v-expand-transition>
  ```

  아이콘은 닫힌 상태에서 그 패널을 여는 트리거를 쓴다(Search Panel은 `mdi-magnify`, Full Menu Overlay는 `mdi-menu`), 열린 상태는 `mdi-close`로 통일.
