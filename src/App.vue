<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { navItems } from './data/navItems'

const drawer = ref(true)
const route = useRoute()
</script>

<template>
  <v-app>
    <v-app-bar color="white" elevation="1" height="64">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="font-weight-bold text-primary">
        HYUNDAI 퍼블리싱 가이드
      </v-toolbar-title>
      <v-spacer />
      <v-chip variant="tonal" color="secondary" size="small" class="mr-4">
        Vue 3 + Vuetify
      </v-chip>
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

<style>
.v-application {
  font-family: 'HyundaiSansHeadKRR', 'HyundaiSansTextKR', 'Pretendard', -apple-system, sans-serif !important;
}
</style>
