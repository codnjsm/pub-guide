<template>
  <v-container class="guide-container">
    <div class="mb-10">
      <h1 class="text-scale-h1 mb-2">Overview</h1>
      <p class="text-scale-body text-high-emphasis">
        현대자동차 홈페이지(hyundai.com/kr/ko/e)의 레이아웃 패턴을 참고하여 정리한 컴포넌트 퍼블리싱
        가이드입니다.<br />왼쪽 메뉴에서 섹션별 마크업과 코드를 확인할 수 있습니다.
      </p>
    </div>

    <v-divider class="mb-10" />
    <h2 class="text-scale-h3 mb-4">사용 기술</h2>
    <v-sheet border rounded="lg" class="mb-10 pa-2">
      <v-list density="comfortable">
        <v-list-item prepend-icon="mdi-vuejs" title="Vue 3" subtitle="UI 프레임워크" />
        <v-list-item
          prepend-icon="mdi-language-typescript"
          title="TypeScript"
          subtitle="정적 타입 언어"
        />
        <v-list-item prepend-icon="mdi-vuetify" title="Vuetify" subtitle="컴포넌트 라이브러리" />
        <v-list-item prepend-icon="mdi-router" title="Vue Router" subtitle="라우팅" />
        <v-list-item prepend-icon="mdi-lightning-bolt" title="Vite" subtitle="빌드 도구" />
        <v-list-item prepend-icon="mdi-sass" title="Sass (SCSS)" subtitle="스타일" />
        <v-list-item
          prepend-icon="mdi-shape"
          title="Material Design Icons (@mdi/font)"
          subtitle="아이콘"
        />
      </v-list>
    </v-sheet>

    <v-divider class="mb-10" />
    <h2 class="text-scale-h3 mb-4">폴더 구조</h2>
    <pre class="folder-tree">
      <code>
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
      </code>
    </pre>

    <v-divider class="mb-10" />
    <h2 class="text-scale-h3 mb-4">새 가이드 추가하는 법</h2>
    <ol class="text-scale-body pl-5">
      <li>
        <code>src/views/</code>에 새 <code>XxxView.vue</code> 작성 (다른 섹션 페이지처럼
        <code>CodePreview</code>로 미리보기/코드 감싸기)
      </li>
      <li><code>src/router/index.ts</code>에 라우트 등록</li>
      <li><code>src/data/navItems.ts</code>에 메뉴 항목 추가</li>
      <li>
        스타일은 <code>&lt;style lang="scss" scoped&gt;</code> + 중첩(<code>&amp;</code>) 금지,
        평탄한 선택자만 사용
      </li>
    </ol>

    <v-divider class="mb-10" />
    <h2 class="text-scale-h3 mb-4">개발 명령어</h2>
    <pre class="folder-tree">
      <code>
npm install
npm run dev         # 개발 서버
npm run build        # 프로덕션 빌드
npm run lint         # ESLint + 타입 체크 + 코드 탭 동기화 검사
npm run type-check   # vue-tsc 타입 체크만
npm run codetab      # 코드 탭 재생성
npm run format       # Prettier
      </code>
    </pre>
  </v-container>
</template>

<style lang="scss" scoped>
:deep(.v-list-item-title) {
  font-weight: 700;
}

:deep(.v-list-item__content) {
  display: flex;
  gap: 12px;
  align-items: center;
}

.folder-tree {
  margin: 0 0 40px;
  padding: 20px 24px;
  background: #f6f3f2;
  border-radius: 8px;
  font-family: 'Menlo', 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.6;
  overflow: auto;
}
</style>
