<template>
  <v-container class="guide-container">
    <div class="mb-10">
      <h1 class="text-h4 font-weight-bold mb-2">개요</h1>
      <p class="text-body-1 text-medium-emphasis">
        현대자동차 홈페이지(hyundai.com/kr/ko/e)의 레이아웃 패턴을 참고하여 정리한 컴포넌트 퍼블리싱
        가이드입니다.<br />왼쪽 메뉴에서 섹션별 마크업과 코드를 확인할 수 있습니다.
      </p>
    </div>

    <h2 class="text-h6 font-weight-bold mb-4">사용 기술</h2>
    <v-sheet border rounded="lg" class="mb-10 pa-2">
      <v-list density="comfortable">
        <v-list-item prepend-icon="mdi-vuejs" title="Vue 3" subtitle="UI 프레임워크" />
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

    <h2 class="text-h6 font-weight-bold mb-4">폴더 구조</h2>
    <pre class="folder-tree mb-10">
      <code>
pub-guide/
  ├── public/
  │   ├── favicon.svg
  │   └── icons.svg
  ├── src/
  │   ├── App.vue                       # 최상위 레이아웃 (앱바 + 좌측 네비게이션 드로어)
  │   ├── main.js                       # 앱 진입점 (router, vuetify 플러그인 등록)
  │   ├── assets/
  │   │   └── hero.png                  # 히어로/카드/캐러셀 섹션 예시 이미지
  │   ├── plugins/
  │   │   └── vuetify.js                # Vuetify 인스턴스 설정 (테마 컬러, 컴포넌트/디렉티브 등록)
  │   ├── router/
  │   │   └── index.js                  # 섹션별 라우트 정의
  │   ├── data/
  │   │   └── navItems.js               # 좌측 네비게이션 메뉴 목록
  │   ├── components/
  │   │   └── guide/
  │   │       ├── CodePreview.vue       # 미리보기/코드 탭 전환 + 반응형 뷰포트 토글 (공용 컴포넌트)
  │   │       └── HyundaiLogo.vue       # 실제 헤더 로고 SVG (공용 컴포넌트)
  │   └── views/                        # 섹션 페이지 (현대차 UI 패턴 1개당 1개 파일)
  │       ├── OverviewView.vue          # 개요
  │       ├── ColorsTypographyView.vue  # 컬러/타이포그래피
  │       ├── HeaderView.vue            # 헤더 / GNB
  │       ├── NavigationView.vue        # 슬라이드 네비게이션
  │       ├── HeroView.vue              # 히어로 배너
  │       ├── CardsView.vue             # 카드 섹션
  │       ├── CarouselView.vue          # 캐러셀 / 슬라이더
  │       ├── FooterView.vue            # 푸터
  │       ├── FullMenuView.vue          # 전체메뉴 풀스크린 오버레이
  │       └── SearchSuggestView.vue     # 검색 패널
  ├── eslint.config.js
  ├── .prettierrc
  └── vite.config.js
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
  margin: 0;
  padding: 20px 24px;
  background: #f6f3f2;
  border-radius: 8px;
  font-family: 'Menlo', 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.6;
  overflow: auto;
}
</style>
