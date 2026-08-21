<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { useRoute } from 'vue-router'
import { navItems } from './data/navItems'
import HyundaiLogo from './components/guide/HyundaiLogo.vue'

const route = useRoute()
const { mobile, xs } = useDisplay()
const drawer = ref(!mobile.value)

watch(
  () => drawer.value && mobile.value,
  (locked) => {
    document.documentElement.classList.toggle('nav-drawer-locked', locked)
  },
  { immediate: true },
)
</script>

<template>
  <v-app>
    <v-app-bar
      color="white"
      elevation="0"
      height="64"
      class="app-bar-border"
      :class="{ 'app-bar--center-title': xs }"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="d-flex align-center">
        <HyundaiLogo />
        <span class="font-weight-bold text-primary ml-2 app-title-text">퍼블리싱 가이드</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" width="260">
      <v-list nav density="comfortable">
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          :active="route.path === item.to"
          rounded="lg"
          class="mb-1"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
.v-application {
  font-family: 'HyundaiSansHeadKRR', 'HyundaiSansTextKR', 'Pretendard', -apple-system, sans-serif !important;
}

.guide-container {
  max-width: 1080px;
}

.v-container {
  padding: 30px;
}

@media (max-width: 375px) {
  .v-container {
    padding: 16px;
  }
}

.app-bar-border {
  border-bottom: 1px solid #e5e5e5;
  background: hsla(0, 0%, 100%, 0.9);
}

.app-title-text {
  line-height: 1;
}

.nav-drawer-locked {
  overflow: hidden;
}

/* 좌측 네비 메뉴 글자 — Vuetify 기본값(13px) 대신 PC/태블릿 15px, 모바일(xs) 13px.
   Vuetify의 규칙은 @layer 안에 있어 레이어 밖인 이 전역 규칙이 !important 없이 이긴다.
   line-height도 같이 지정한다 — Vuetify가 1rem을 걸어두고 overflow: hidden도 적용한다. */
.v-list-item--nav .v-list-item-title {
  font-size: 15px;
  line-height: 22px;
}

@media (max-width: 599.98px) {
  .v-list-item--nav .v-list-item-title {
    font-size: 13px;
    line-height: 20px;
  }
}

.app-bar--center-title .v-toolbar-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  margin-inline-start: 0;
}

.text-scale-h1 {
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
}

.text-scale-h2 {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
}

.text-scale-h3 {
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;
}

.text-scale-body {
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
}

.text-scale-caption {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
}
</style>
