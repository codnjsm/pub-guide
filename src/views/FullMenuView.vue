<script setup>
import { ref } from 'vue'
import CodePreview from '../components/guide/CodePreview.vue'

const menuTabs = [
  {
    id: 'model',
    title: '모델',
    categories: [
      {
        title: '수소 / 전기차',
        links: [
          { label: '넥쏘' },
          { label: '코나 Electric' },
          { label: '아이오닉 5' },
          { label: '아이오닉 9' },
          { label: '더 뉴 아이오닉 6' },
          { label: '2027 캐스퍼 일렉트릭', external: true },
        ],
      },
      {
        title: 'N',
        links: [{ label: '아이오닉 6 N' }, { label: '아이오닉 5 N' }, { label: '아반떼 N' }],
      },
      {
        title: '승용',
        links: [
          { label: '디 올 뉴 아반떼' },
          { label: '디 올 뉴 아반떼 Hybrid' },
          { label: '더 뉴 그랜저' },
          { label: '쏘나타 디 엣지' },
        ],
      },
      {
        title: 'SUV',
        links: [
          { label: '베뉴' },
          { label: '코나' },
          { label: '디 올 뉴 팰리세이드' },
          { label: '싼타페' },
          { label: '투싼' },
          { label: '2027 캐스퍼', external: true },
        ],
      },
      {
        title: 'MPV',
        links: [
          { label: '더 뉴 스타리아' },
          { label: '더 뉴 스타리아 라운지' },
          { label: '더 뉴 스타리아 킨더' },
        ],
      },
      {
        title: '소형트럭&택시',
        links: [{ label: '더 뉴 그랜저 택시' }, { label: '쏘나타 택시' }, { label: '포터 II' }],
      },
      {
        title: '트럭',
        links: [{ label: '더 뉴 마이티' }, { label: '더 뉴 파비스' }, { label: '더 뉴 엑시언트' }],
      },
      {
        title: '버스',
        links: [{ label: '쏠라티' }, { label: '카운티' }, { label: '일렉시티' }, { label: '유니버스' }],
      },
    ],
  },
  {
    id: 'purchase',
    title: '구매/이벤트',
    categories: [
      {
        title: '모델탐색',
        links: [
          { label: 'Trendy Hyundai' },
          { label: '내 차 추천받기' },
          { label: '모델 비교' },
          { label: '사양백과' },
        ],
      },
      {
        title: '구매',
        links: [
          { label: 'All-in-One 구매 가이드' },
          { label: '내 차 만들기(견적)' },
          { label: '구매상담신청' },
          { label: '카탈로그/가격표' },
        ],
      },
      {
        title: '전시/시승',
        links: [
          { label: '승용 판매/시승 네트워크' },
          { label: '상용 판매 네트워크' },
          { label: '시승신청' },
          { label: '신규전시장 안내' },
        ],
      },
      {
        title: '구매혜택',
        links: [{ label: '이달의 구매혜택' }, { label: '특별기획전' }],
      },
      {
        title: '이벤트',
        links: [{ label: '진행중 이벤트' }, { label: '구매후기' }],
      },
      {
        title: '정책 안내',
        links: [
          { label: '차량 구매 절차' },
          { label: '차량 구매 제도/규정' },
          { label: '보증수리 안내' },
          { label: '중고차 가격보장 프로그램' },
        ],
      },
    ],
  },
  {
    id: 'service',
    title: '서비스/멤버십',
    categories: [
      {
        title: '내 차',
        links: [{ label: '마이페이지' }, { label: '사양조회' }, { label: '친환경 폐차' }],
      },
      {
        title: '블루멤버스',
        links: [
          { label: '블루멤버스 소개' },
          { label: 'Hyundai Mobility 카드' },
          { label: '포인트 안내' },
          { label: '패밀리 등록' },
        ],
      },
      {
        title: '서비스 네트워크 찾기',
        links: [
          { label: '서비스 예약 안내 (ARS)' },
          { label: '서비스 네트워크 검색/예약' },
          { label: '특장 서비스 네트워크' },
          { label: '부품 가격/보유점 조회', external: true },
        ],
      },
      {
        title: '블루핸즈 가맹사업',
        links: [{ label: '가맹사업 소개' }, { label: '가맹점 개설 안내' }, { label: '가맹점 모집' }],
      },
      {
        title: '전기차/수소차',
        links: [
          { label: 'Hi, EV' },
          { label: '2026 EV 에브리케어' },
          { label: '현대 EV 충전 솔루션' },
          { label: '전기/수소차 충전소 찾기' },
        ],
      },
    ],
  },
  {
    id: 'digital',
    title: '디지털/고객지원',
    categories: [
      {
        title: '업데이트',
        links: [
          { label: '차량 소프트웨어 업데이트', external: true },
          { label: '블루링크 스토어', external: true },
        ],
      },
      {
        title: '디지털 서비스',
        links: [
          { label: '마이현대 앱' },
          { label: '블루링크' },
          { label: '인카페이먼트' },
          { label: 'Hyundai N App' },
        ],
      },
      {
        title: 'Help Desk',
        links: [
          { label: '고객센터' },
          { label: 'FAQ (자주하는 질문)' },
          { label: '1:1 문의' },
          { label: '사용설명서 다운로드 (자료실)' },
        ],
      },
      {
        title: '공지/뉴스',
        links: [{ label: '공지사항' }, { label: '뉴스' }],
      },
    ],
  },
  {
    id: 'brand',
    title: '브랜드',
    categories: [
      {
        title: '브랜드 스토리',
        links: [
          { label: '브랜드 철학' },
          { label: '브랜드 저널', external: true },
          { label: '헤리티지' },
          { label: '모델 히스토리' },
        ],
      },
      {
        title: '모터 스포츠',
        links: [{ label: 'WRC' }, { label: 'WTCR' }, { label: '뉘르부르크링 24시' }],
      },
      {
        title: '패밀리 사이트',
        links: [
          { label: '현대 모터스튜디오' },
          { label: '드라이빙 익스피리언스', external: true },
          { label: '현대 컬렉션', external: true },
          { label: '인재채용', external: true },
        ],
      },
      {
        title: '사업망',
        links: [
          { label: '국내 사업망 소개' },
          { label: '해외 사업망 소개', external: true },
          { label: '공장 견학' },
        ],
      },
    ],
  },
  {
    id: 'company',
    title: '회사소개',
    categories: [
      {
        title: '기업정보',
        links: [
          { label: '기업이념' },
          { label: '연혁' },
          { label: '주요관계사' },
          { label: 'CI' },
          { label: '수상내역' },
        ],
      },
      {
        title: 'IR 정보',
        links: [{ label: 'IR 정보', external: true }, { label: '배당조회', external: true }],
      },
      {
        title: '지속가능 경영',
        links: [
          { label: '지속가능 경영' },
          { label: 'CSV 소개' },
          { label: '지속가능성보고서' },
        ],
      },
    ],
  },
]

const open = ref(true)
const query = ref('')
const sectionRefs = ref({})

function setSectionRef(id, el) {
  if (el) sectionRefs.value[id] = el
}

function scrollToSection(id) {
  sectionRefs.value[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const code = `<script setup>
import { ref } from 'vue'

const menuTabs = [
  {
    id: 'model',
    title: '모델',
    categories: [
      {
        title: '수소 / 전기차',
        links: [
          { label: '넥쏘' },
          { label: '코나 Electric' },
          { label: '아이오닉 5' },
          { label: '아이오닉 9' },
          { label: '더 뉴 아이오닉 6' },
          { label: '2027 캐스퍼 일렉트릭', external: true },
        ],
      },
      {
        title: 'N',
        links: [{ label: '아이오닉 6 N' }, { label: '아이오닉 5 N' }, { label: '아반떼 N' }],
      },
      {
        title: '승용',
        links: [
          { label: '디 올 뉴 아반떼' },
          { label: '디 올 뉴 아반떼 Hybrid' },
          { label: '더 뉴 그랜저' },
          { label: '쏘나타 디 엣지' },
        ],
      },
      {
        title: 'SUV',
        links: [
          { label: '베뉴' },
          { label: '코나' },
          { label: '디 올 뉴 팰리세이드' },
          { label: '싼타페' },
          { label: '투싼' },
          { label: '2027 캐스퍼', external: true },
        ],
      },
      {
        title: 'MPV',
        links: [
          { label: '더 뉴 스타리아' },
          { label: '더 뉴 스타리아 라운지' },
          { label: '더 뉴 스타리아 킨더' },
        ],
      },
      {
        title: '소형트럭&택시',
        links: [{ label: '더 뉴 그랜저 택시' }, { label: '쏘나타 택시' }, { label: '포터 II' }],
      },
      {
        title: '트럭',
        links: [{ label: '더 뉴 마이티' }, { label: '더 뉴 파비스' }, { label: '더 뉴 엑시언트' }],
      },
      {
        title: '버스',
        links: [{ label: '쏠라티' }, { label: '카운티' }, { label: '일렉시티' }, { label: '유니버스' }],
      },
    ],
  },
  {
    id: 'purchase',
    title: '구매/이벤트',
    categories: [
      {
        title: '모델탐색',
        links: [
          { label: 'Trendy Hyundai' },
          { label: '내 차 추천받기' },
          { label: '모델 비교' },
          { label: '사양백과' },
        ],
      },
      {
        title: '구매',
        links: [
          { label: 'All-in-One 구매 가이드' },
          { label: '내 차 만들기(견적)' },
          { label: '구매상담신청' },
          { label: '카탈로그/가격표' },
        ],
      },
      {
        title: '전시/시승',
        links: [
          { label: '승용 판매/시승 네트워크' },
          { label: '상용 판매 네트워크' },
          { label: '시승신청' },
          { label: '신규전시장 안내' },
        ],
      },
      {
        title: '구매혜택',
        links: [{ label: '이달의 구매혜택' }, { label: '특별기획전' }],
      },
      {
        title: '이벤트',
        links: [{ label: '진행중 이벤트' }, { label: '구매후기' }],
      },
      {
        title: '정책 안내',
        links: [
          { label: '차량 구매 절차' },
          { label: '차량 구매 제도/규정' },
          { label: '보증수리 안내' },
          { label: '중고차 가격보장 프로그램' },
        ],
      },
    ],
  },
  {
    id: 'service',
    title: '서비스/멤버십',
    categories: [
      {
        title: '내 차',
        links: [{ label: '마이페이지' }, { label: '사양조회' }, { label: '친환경 폐차' }],
      },
      {
        title: '블루멤버스',
        links: [
          { label: '블루멤버스 소개' },
          { label: 'Hyundai Mobility 카드' },
          { label: '포인트 안내' },
          { label: '패밀리 등록' },
        ],
      },
      {
        title: '서비스 네트워크 찾기',
        links: [
          { label: '서비스 예약 안내 (ARS)' },
          { label: '서비스 네트워크 검색/예약' },
          { label: '특장 서비스 네트워크' },
          { label: '부품 가격/보유점 조회', external: true },
        ],
      },
      {
        title: '블루핸즈 가맹사업',
        links: [{ label: '가맹사업 소개' }, { label: '가맹점 개설 안내' }, { label: '가맹점 모집' }],
      },
      {
        title: '전기차/수소차',
        links: [
          { label: 'Hi, EV' },
          { label: '2026 EV 에브리케어' },
          { label: '현대 EV 충전 솔루션' },
          { label: '전기/수소차 충전소 찾기' },
        ],
      },
    ],
  },
  {
    id: 'digital',
    title: '디지털/고객지원',
    categories: [
      {
        title: '업데이트',
        links: [
          { label: '차량 소프트웨어 업데이트', external: true },
          { label: '블루링크 스토어', external: true },
        ],
      },
      {
        title: '디지털 서비스',
        links: [
          { label: '마이현대 앱' },
          { label: '블루링크' },
          { label: '인카페이먼트' },
          { label: 'Hyundai N App' },
        ],
      },
      {
        title: 'Help Desk',
        links: [
          { label: '고객센터' },
          { label: 'FAQ (자주하는 질문)' },
          { label: '1:1 문의' },
          { label: '사용설명서 다운로드 (자료실)' },
        ],
      },
      {
        title: '공지/뉴스',
        links: [{ label: '공지사항' }, { label: '뉴스' }],
      },
    ],
  },
  {
    id: 'brand',
    title: '브랜드',
    categories: [
      {
        title: '브랜드 스토리',
        links: [
          { label: '브랜드 철학' },
          { label: '브랜드 저널', external: true },
          { label: '헤리티지' },
          { label: '모델 히스토리' },
        ],
      },
      {
        title: '모터 스포츠',
        links: [{ label: 'WRC' }, { label: 'WTCR' }, { label: '뉘르부르크링 24시' }],
      },
      {
        title: '패밀리 사이트',
        links: [
          { label: '현대 모터스튜디오' },
          { label: '드라이빙 익스피리언스', external: true },
          { label: '현대 컬렉션', external: true },
          { label: '인재채용', external: true },
        ],
      },
      {
        title: '사업망',
        links: [
          { label: '국내 사업망 소개' },
          { label: '해외 사업망 소개', external: true },
          { label: '공장 견학' },
        ],
      },
    ],
  },
  {
    id: 'company',
    title: '회사소개',
    categories: [
      {
        title: '기업정보',
        links: [
          { label: '기업이념' },
          { label: '연혁' },
          { label: '주요관계사' },
          { label: 'CI' },
          { label: '수상내역' },
        ],
      },
      {
        title: 'IR 정보',
        links: [{ label: 'IR 정보', external: true }, { label: '배당조회', external: true }],
      },
      {
        title: '지속가능 경영',
        links: [
          { label: '지속가능 경영' },
          { label: 'CSV 소개' },
          { label: '지속가능성보고서' },
        ],
      },
    ],
  },
]

const open = ref(true)
const query = ref('')
const sectionRefs = ref({})

function setSectionRef(id, el) {
  if (el) sectionRefs.value[id] = el
}

function scrollToSection(id) {
  sectionRefs.value[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
<\/script>

<template>
  <div class="d-flex justify-end">
    <v-btn :icon="open ? 'mdi-close' : 'mdi-menu'" variant="text" @click="open = !open" />
  </div>

  <v-expand-transition>
    <div v-if="open" class="fullmenu">
      <div class="fullmenu__head">
        <v-text-field
          v-model="query"
          variant="plain"
          placeholder="검색어를 입력해 주세요."
          append-inner-icon="mdi-magnify"
          hide-details
          class="fullmenu__search"
        />
      </div>

      <div class="fullmenu__tabs">
        <button
          v-for="tab in menuTabs"
          :key="tab.id"
          class="fullmenu__tab"
          @click="scrollToSection(tab.id)"
        >
          {{ tab.title }}
        </button>
      </div>

      <div class="fullmenu__body">
        <section
          v-for="tab in menuTabs"
          :key="tab.id"
          :ref="(el) => setSectionRef(tab.id, el)"
          class="fullmenu__section"
        >
          <h2 class="fullmenu__section-title">{{ tab.title }}</h2>

          <div v-for="cat in tab.categories" :key="cat.title" class="fullmenu__category">
            <p class="fullmenu__category-title">{{ cat.title }}</p>
            <div class="fullmenu__links">
              <a v-for="link in cat.links" :key="link.label" href="#" class="fullmenu__link">
                {{ link.label }}
                <v-icon v-if="link.external" icon="mdi-open-in-new" size="12" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </v-expand-transition>
</template>

<style lang="scss" scoped>
.fullmenu {
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow: hidden;
  border-radius: 8px;
  background: #f6f3f2;
}

.fullmenu__head {
  flex-shrink: 0;
  padding: 0 24px 48px;
}

.fullmenu__search {
  width: 48.58%;
  min-width: min(480px, 100%);
  margin: 0 auto;
  padding: 80px 0 0;
}

.fullmenu__search :deep(.v-field) {
  --v-field-padding-start: 0px;
  border-bottom: 1px solid #ccc;
}

.fullmenu__search :deep(input) {
  font-size: 16px;
  text-align: center;
}

.fullmenu__search :deep(.v-field__append-inner .v-icon) {
  color: #000;
  font-size: 32px;
  opacity: 1;
}

.fullmenu__tabs {
  display: flex;
  flex-shrink: 0;
  background: #3c3c3c;
}

.fullmenu__tab {
  flex: 1;
  padding: 20px 8px;
  border: none;
  background: none;
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 700;
  cursor: pointer;
}

.fullmenu__body {
  flex: 1;
  overflow-y: auto;
  padding: 0 24px;
}

.fullmenu__section {
  padding: 40px 0;
  border-bottom: 1px solid #e5e5e5;
}

.fullmenu__section-title {
  margin: 0 0 32px;
  font-size: 1.75rem;
  font-weight: 700;
}

.fullmenu__category {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 24px;
  margin-bottom: 32px;
}

.fullmenu__category-title {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 700;
}

.fullmenu__links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px 24px;
}

.fullmenu__link {
  color: #666;
  font-size: 0.9375rem;
  text-decoration: none;
}
</style>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-h5 font-weight-bold mb-2">Full Menu Overlay</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">
      헤더의 메뉴 버튼을 누르면 전체 화면을 덮는 형태로 모든 카테고리를 한눈에 보여주는
      패턴입니다. 상단에 검색창과 닫기 버튼, 그 아래 어두운 1depth 탭 바가 있고, 본문에는
      6개 섹션이 세로로 쌓여 카테고리별 링크가 다단 그리드로 배치됩니다. 탭 바의 항목을
      <strong>클릭</strong>하면 해당 섹션으로 스크롤되고, 우측 상단 버튼으로 메뉴를 열고
      닫습니다. 링크 항목은 패턴 전달에 필요한 만큼만 추려서 넣었습니다.
    </p>

    <CodePreview :code="code">
      <div class="d-flex justify-end">
        <v-btn :icon="open ? 'mdi-close' : 'mdi-menu'" variant="text" @click="open = !open" />
      </div>

      <v-expand-transition>
        <div v-if="open" class="fullmenu">
          <div class="fullmenu__head">
            <v-text-field
              v-model="query"
              variant="plain"
              placeholder="검색어를 입력해 주세요."
              append-inner-icon="mdi-magnify"
              hide-details
              class="fullmenu__search"
            />
          </div>

          <div class="fullmenu__tabs">
            <button
              v-for="tab in menuTabs"
              :key="tab.id"
              class="fullmenu__tab"
              @click="scrollToSection(tab.id)"
            >
              {{ tab.title }}
            </button>
          </div>

          <div class="fullmenu__body">
            <section
              v-for="tab in menuTabs"
              :key="tab.id"
              :ref="(el) => setSectionRef(tab.id, el)"
              class="fullmenu__section"
            >
              <h2 class="fullmenu__section-title">{{ tab.title }}</h2>

              <div v-for="cat in tab.categories" :key="cat.title" class="fullmenu__category">
                <p class="fullmenu__category-title">{{ cat.title }}</p>
                <div class="fullmenu__links">
                  <a v-for="link in cat.links" :key="link.label" href="#" class="fullmenu__link">
                    {{ link.label }}
                    <v-icon v-if="link.external" icon="mdi-open-in-new" size="12" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </v-expand-transition>
    </CodePreview>
  </v-container>
</template>

<style lang="scss" scoped>
.fullmenu {
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow: hidden;
  border-radius: 8px;
  background: #f6f3f2;
}

.fullmenu__head {
  flex-shrink: 0;
  padding: 0 24px 48px;
}

.fullmenu__search {
  width: 48.58%;
  min-width: min(480px, 100%);
  margin: 0 auto;
  padding: 80px 0 0;
}

.fullmenu__search :deep(.v-field) {
  --v-field-padding-start: 0px;
  border-bottom: 1px solid #ccc;
}

.fullmenu__search :deep(input) {
  font-size: 16px;
  text-align: center;
}

.fullmenu__search :deep(.v-field__append-inner .v-icon) {
  color: #000;
  font-size: 32px;
  opacity: 1;
}

.fullmenu__tabs {
  display: flex;
  flex-shrink: 0;
  background: #3c3c3c;
}

.fullmenu__tab {
  flex: 1;
  padding: 20px 8px;
  border: none;
  background: none;
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 700;
  cursor: pointer;
}

.fullmenu__body {
  flex: 1;
  overflow-y: auto;
  padding: 0 24px;
}

.fullmenu__section {
  padding: 40px 0;
  border-bottom: 1px solid #e5e5e5;
}

.fullmenu__section-title {
  margin: 0 0 32px;
  font-size: 1.75rem;
  font-weight: 700;
}

.fullmenu__category {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 24px;
  margin-bottom: 32px;
}

.fullmenu__category-title {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 700;
}

.fullmenu__links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px 24px;
}

.fullmenu__link {
  color: #666;
  font-size: 0.9375rem;
  text-decoration: none;
}
</style>
