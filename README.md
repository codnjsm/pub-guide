# pub-guide

hyundai.com(kr/ko/e) 페이지의 UI 패턴을 참고해 Vue 3 + Vuetify로 재현한 컴포넌트 스타일가이드입니다. 컬러/폰트/로고는 실제 hyundai.com에서 추출한 값을 반영했습니다.

- 저장소: https://github.com/codnjsm/pub-guide

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run lint     # ESLint
npm run format   # Prettier
```

## 사용 기술

- Vue 3 — UI 프레임워크
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
```

## 스타일링 규칙

- 스타일 블록은 모두 `<style lang="scss">` (SCSS, `sass` devDependency 필요). **SCSS 중첩(`&`)은 쓰지 않는다** — 이 프로젝트 툴체인에서 scoped CSS 처리기가 중첩 블록을 깨진 선택자로 컴파일하는 문제가 있어, 모든 규칙은 평탄한(flat) 선택자로 작성한다.
- 전역 스타일은 `App.vue`에만 둔다 — 폰트 폴백 스택, 모든 섹션 페이지가 재사용하는 `.guide-container`(`max-width: 1080px`) 공용 클래스, 그리고 `.v-container` 기본 패딩(`30px`, 화면폭 375px 이하에서는 `16px`).
- 섹션 페이지별로만 쓰이는 스타일(검색창 폭, 프리뷰 컨테이너 높이 등)은 각 파일의 `<style lang="scss" scoped>` 블록에 파일 전용 클래스로 둔다. 인라인 `style="..."` 속성은 쓰지 않는다 — 단, 런타임 값에 따라 바뀌는 경우(배경 이미지, 컬러 스와치, 뷰포트 폭)는 `:style` 바인딩으로 남겨둔다.
- Vuetify 내부 요소(`.v-list-item-title` 등)를 스타일링할 땐 scoped 블록에서 `:deep()`으로 감싼다.
