<script setup>
import CodePreview from '../components/guide/CodePreview.vue'
import HyundaiLogo from '../components/guide/HyundaiLogo.vue'

const policyLinks = [
  { label: '모바일 App', strong: false },
  { label: '저작권안내', strong: false },
  { label: '개인정보 처리방침', strong: true },
  { label: '이용약관', strong: false },
  { label: '프라이버시 센터', strong: false },
  { label: '윤리경영 사이버 감사실', strong: false },
  { label: '사이트맵', strong: false },
]

const socials = ['mdi-youtube', 'mdi-instagram', 'mdi-facebook', 'mdi-alpha-x', 'mdi-text-box']

const familySites = [
  '현대자동차그룹',
  '제네시스닷컴',
  '캐스퍼 온라인',
  'N 브랜드',
  '현대인증중고차',
  '인재채용',
  '경제산업연구센터',
  '현대 모터스튜디오',
  '동반성장 사이트',
  '현대 드라이빙 아카데미',
  '현대 컬렉션 온라인샵',
  '전북 현대모터스 축구단',
]

const certMarks = [
  ['웹 접근성 품질인증'],
  ['우수디자인 지식경제부선정'],
  ['가족친화 우수기관'],
  ['2025년 한국서비스품질지수(KS-SQI)', '조사대상 전 부문 1위 수상', '(자동차A/S 및 자동차판매서비스)'],
  ['2026년 국가고객만족도(NCSI)', '조사대상 전 부문 1위 수상', '(컴팩트승용, 중형, 준대형, 대형, 컴팩트RV, 대형RV, 전기차)'],
  ['2025년 한국산업의 고객만족도(KCSI)', '조사대상 전 부문 1위 수상', '(일반승용차, RV승용차, 경형승용차, 전기차, 프리미엄)'],
  ['2025년 한국품질만족지수(KS-QEI) 조사', '12개 부문 1위', '(승용-준중형/중형/대형, SUV-소형/준중형/대형, 럭셔리-D,E세단/대형SUV, 전기차, 자동차AS, 스마트 모빌리티 서비스앱)'],
]

const code = `<v-footer class="footer-dark d-flex flex-column pa-0" rounded="lg">
  <v-container class="footer-inner">
    <v-row>
      <v-col cols="12" md="2">
        <HyundaiLogo class="footer-logo" />
      </v-col>

      <v-col cols="12" md="7">
        <div class="d-flex flex-wrap align-center mb-4">
          <template v-for="(link, i) in policyLinks" :key="link.label">
            <span v-if="i > 0" class="footer-sep">|</span>
            <a href="#" class="footer-link" :class="{ 'footer-link--strong': link.strong }">
              {{ link.label }}
            </a>
          </template>
        </div>
        <p class="footer-text mb-2">고객센터 : 080-600-6000</p>
        <p class="footer-text footer-text--dim">
          COPYRIGHT ⓒ HYUNDAI MOTOR COMPANY. ALL RIGHTS RESERVED.
        </p>
      </v-col>

      <v-col cols="12" md="3">
        <div class="d-flex justify-space-between mb-4">
          <v-btn
            v-for="icon in socials"
            :key="icon"
            :icon="icon"
            variant="text"
            size="small"
            class="footer-social-btn"
          />
        </div>

        <v-menu location="top">
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              variant="outlined"
              block
              append-icon="mdi-menu-down"
              rounded="0"
              class="footer-family-btn"
            >
              Family Site
            </v-btn>
          </template>
          <v-list density="compact" max-height="280">
            <v-list-item v-for="site in familySites" :key="site" :title="site" />
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

    <v-divider class="footer-divider" />

    <v-row>
      <v-col v-for="(lines, i) in certMarks" :key="i" cols="12" sm="6" md="3">
        <div class="d-flex ga-3">
          <div class="cert-mark" />
          <div class="footer-text footer-text--dim">
            <p v-for="line in lines" :key="line">{{ line }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</v-footer>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-h5 font-weight-bold mb-2">Footer</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">
      어두운 배경 위에 로고, 정책 링크, 고객센터·저작권, SNS 아이콘과 Family Site
      드롭다운을 배치하고, 구분선 아래에 인증마크를 그리드로 나열한 하단 영역입니다.
      Family Site는 <strong>클릭</strong>하면 목록이 열립니다. 인증마크의 로고 자리는
      실제 이미지 대신 회색 플레이스홀더로 표시했습니다.
    </p>

    <CodePreview :code="code">
      <v-footer class="footer-dark d-flex flex-column pa-0" rounded="lg">
        <v-container class="footer-inner">
          <v-row>
            <v-col cols="12" md="2">
              <HyundaiLogo class="footer-logo" />
            </v-col>

            <v-col cols="12" md="7">
              <div class="d-flex flex-wrap align-center mb-4">
                <template v-for="(link, i) in policyLinks" :key="link.label">
                  <span v-if="i > 0" class="footer-sep">|</span>
                  <a href="#" class="footer-link" :class="{ 'footer-link--strong': link.strong }">
                    {{ link.label }}
                  </a>
                </template>
              </div>
              <p class="footer-text mb-2">고객센터 : 080-600-6000</p>
              <p class="footer-text footer-text--dim">
                COPYRIGHT ⓒ HYUNDAI MOTOR COMPANY. ALL RIGHTS RESERVED.
              </p>
            </v-col>

            <v-col cols="12" md="3">
              <div class="d-flex justify-space-between mb-4">
                <v-btn
                  v-for="icon in socials"
                  :key="icon"
                  :icon="icon"
                  variant="text"
                  size="small"
                  class="footer-social-btn"
                />
              </div>

              <v-menu location="top">
                <template #activator="{ props }">
                  <v-btn
                    v-bind="props"
                    variant="outlined"
                    block
                    append-icon="mdi-menu-down"
                    rounded="0"
                    class="footer-family-btn"
                  >
                    Family Site
                  </v-btn>
                </template>
                <v-list density="compact" max-height="280">
                  <v-list-item v-for="site in familySites" :key="site" :title="site" />
                </v-list>
              </v-menu>
            </v-col>
          </v-row>

          <v-divider class="footer-divider" />

          <v-row>
            <v-col v-for="(lines, i) in certMarks" :key="i" cols="12" sm="6" md="3">
              <div class="d-flex ga-3">
                <div class="cert-mark" />
                <div class="footer-text footer-text--dim">
                  <p v-for="line in lines" :key="line">{{ line }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </CodePreview>
  </v-container>
</template>

<style lang="scss" scoped>
.footer-dark {
  background: #1c1b1b;
  color: #999;
}

.footer-inner {
  max-width: 1080px;
  padding: 48px 40px;
}

.footer-logo :deep(path) {
  fill: #fff;
}

.footer-link {
  color: #999;
  font-size: 0.875rem;
  text-decoration: none;
}

.footer-link--strong {
  color: #fff;
  font-weight: 700;
}

.footer-sep {
  margin: 0 12px;
  color: #555;
}

.footer-text {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.6;
}

.footer-text p {
  margin: 0;
}

.footer-text--dim {
  color: #999;
}

.footer-social-btn {
  color: #999;
}

.footer-social-btn :deep(.v-icon) {
  font-size: 26px;
}

.footer-family-btn {
  height: 30px;
  padding: 0 13px;
  border: 1px solid #676767;
  color: #999;
  background-color: #1c1b1b;
  justify-content: space-between;
}

.footer-divider {
  margin: 32px 0;
  border-color: #2a2a2a;
  opacity: 1;
}

.cert-mark {
  flex-shrink: 0;
  width: 40px;
  height: 28px;
  border-radius: 2px;
  background: #4a4a4a;
}
</style>
