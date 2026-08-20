<script setup lang="ts">
import CodePreview from '../components/guide/CodePreview.vue'

const breadcrumb = ['홈', '구매/이벤트', '모델탐색', 'Trendy Hyundai']

const code = `<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { xs } = useDisplay()

const breadcrumb = ['홈', '구매/이벤트', '모델탐색', 'Trendy Hyundai']
<\/script>

<template>
  <div class="hero" :class="{ 'hero--mobile': xs }">
    <v-icon icon="mdi-image" size="40" class="hero__icon" />

    <ul v-if="!xs" class="hero__breadcrumb">
      <li v-for="(crumb, i) in breadcrumb" :key="crumb" class="hero__crumb">
        <v-icon v-if="i > 0" icon="mdi-chevron-right" size="14" class="hero__crumb-sep" />
        <a v-if="i < breadcrumb.length - 1" href="#">{{ crumb }}</a>
        <span v-else class="hero__crumb-current">{{ crumb }}</span>
      </li>
    </ul>

    <div class="hero__title-wrap">
      <p class="hero__sub">2026 3Q Trend Report</p>
      <h2 class="hero__title">Trendy Hyundai</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  aspect-ratio: 2028 / 984;
  border-radius: 8px;
  overflow: hidden;
  background: #4a4a4a;
}

.hero__icon {
  position: absolute;
  top: 64%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  opacity: 0.28;
}

.hero__breadcrumb {
  position: absolute;
  top: 6%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 0 7%;
  list-style: none;
}

.hero__crumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
}

.hero__crumb a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}

.hero__crumb-current {
  color: #fff;
  font-weight: 700;
}

.hero__crumb-sep {
  color: rgba(255, 255, 255, 0.5);
}

/* 세로 위치는 top으로 잡는다 — padding의 %는 높이가 아니라 폭 기준이라 원하는 지점에 안 온다 */
.hero__title-wrap {
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  padding: 0 7%;
}

.hero__sub {
  margin: 0 0 10px;
  color: #fff;
  font-size: 18px;
  line-height: 1.3;
  opacity: 0.92;
}

.hero__title {
  margin: 0;
  color: #fff;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.015em;
}

.hero--mobile {
  aspect-ratio: 535 / 778;
}

.hero--mobile .hero__title-wrap {
  padding: 0 5%;
  text-align: center;
}

.hero--mobile .hero__sub {
  margin-bottom: 8px;
  font-size: 14px;
}

.hero--mobile .hero__title {
  font-size: 34px;
}
</style>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-scale-h1 mb-2">Hero Banner</h1>
    <p class="text-scale-body text-high-emphasis mb-2">
      페이지 최상단을 채우는 키 비주얼입니다. 배경 이미지 위에 breadcrumb과 서브타이틀·타이틀을
      얹는 구성이고, 타이틀은 상단 20% 지점에서 시작합니다.
    </p>
    <ul class="text-scale-body text-high-emphasis pl-5 mb-8">
      <li>
        데스크톱·태블릿: 가로로 넓은 비율, 좌측 정렬, breadcrumb 표시
      </li>
      <li>
        모바일: 세로로 긴 비율, 중앙 정렬, breadcrumb 숨김(뷰포트 토글로
        확인해 보세요)
      </li>
      <li>배경은 실제 이미지 대신 회색 플레이스홀더로 표시</li>
    </ul>

    <CodePreview :code="code">
      <template #default="{ viewport }">
        <div class="hero" :class="{ 'hero--mobile': viewport === 'mobile' }">
          <v-icon icon="mdi-image" size="40" class="hero__icon" />

          <ul v-if="viewport !== 'mobile'" class="hero__breadcrumb">
            <li v-for="(crumb, i) in breadcrumb" :key="crumb" class="hero__crumb">
              <v-icon v-if="i > 0" icon="mdi-chevron-right" size="14" class="hero__crumb-sep" />
              <a v-if="i < breadcrumb.length - 1" href="#">{{ crumb }}</a>
              <span v-else class="hero__crumb-current">{{ crumb }}</span>
            </li>
          </ul>

          <div class="hero__title-wrap">
            <p class="hero__sub">2026 3Q Trend Report</p>
            <h2 class="hero__title">Trendy Hyundai</h2>
          </div>
        </div>
      </template>
    </CodePreview>
  </v-container>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  aspect-ratio: 2028 / 984;
  border-radius: 8px;
  overflow: hidden;
  background: #4a4a4a;
}

.hero__icon {
  position: absolute;
  top: 64%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  opacity: 0.28;
}

.hero__breadcrumb {
  position: absolute;
  top: 6%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 0 7%;
  list-style: none;
}

.hero__crumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
}

.hero__crumb a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}

.hero__crumb-current {
  color: #fff;
  font-weight: 700;
}

.hero__crumb-sep {
  color: rgba(255, 255, 255, 0.5);
}

/* 세로 위치는 top으로 잡는다 — padding의 %는 높이가 아니라 폭 기준이라 원하는 지점에 안 온다 */
.hero__title-wrap {
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  padding: 0 7%;
}

.hero__sub {
  margin: 0 0 10px;
  color: #fff;
  font-size: 18px;
  line-height: 1.3;
  opacity: 0.92;
}

.hero__title {
  margin: 0;
  color: #fff;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.015em;
}

.hero--mobile {
  aspect-ratio: 535 / 778;
}

.hero--mobile .hero__title-wrap {
  padding: 0 5%;
  text-align: center;
}

.hero--mobile .hero__sub {
  margin-bottom: 8px;
  font-size: 14px;
}

.hero--mobile .hero__title {
  font-size: 34px;
}
</style>
