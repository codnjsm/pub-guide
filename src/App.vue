<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { navItems } from './data/navItems'
import HyundaiLogo from './components/guide/HyundaiLogo.vue'

const drawer = ref(true)
const route = useRoute()
</script>

<template>
  <v-app>
    <v-app-bar color="white" elevation="0" height="64" class="app-bar-border">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="d-flex align-center">
        <HyundaiLogo />
        <span class="font-weight-bold text-primary ml-2 app-title-text">퍼블리싱 가이드</span>
      </v-toolbar-title>
      <v-spacer />
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
</style>
