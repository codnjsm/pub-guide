<script setup>
import CodePreview from '../components/guide/CodePreview.vue'
import HyundaiLogo from '../components/guide/HyundaiLogo.vue'

const menuItems = ['모델', '구매/이벤트', '서비스/멤버십', '디지털/고객지원', '브랜드', 'Shop사양백과']

const code = `<v-toolbar color="white" elevation="0" height="64">
  <HyundaiLogo class="ml-4" />

  <div class="d-flex ga-6 ml-8">
    <v-btn v-for="item in menuItems" :key="item" variant="text" size="small">
      {{ item }}
    </v-btn>
  </div>

  <v-spacer />

  <v-menu open-on-hover>
    <template #activator="{ props }">
      <v-btn v-bind="props" variant="text" size="small" append-icon="mdi-menu-down">
        KR
      </v-btn>
    </template>
    <v-list density="compact">
      <v-list-item title="EN" />
      <v-list-item title="CN" />
      <v-list-item title="월드와이드" />
      <v-list-item title="상용글로벌" />
    </v-list>
  </v-menu>

  <v-divider vertical class="mx-2" />

  <v-menu open-on-hover>
    <template #activator="{ props }">
      <v-btn v-bind="props" icon="mdi-account-outline" variant="text" size="small" />
    </template>
    <v-list density="compact">
      <v-list-item title="개인 로그인" append-icon="mdi-chevron-right" />
      <v-list-item title="법인 로그인" append-icon="mdi-chevron-right" />
    </v-list>
  </v-menu>

  <v-btn icon="mdi-magnify" variant="text" />
  <v-btn icon="mdi-menu" variant="text" class="ml-2" />
</v-toolbar>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-h5 font-weight-bold mb-2">헤더 / GNB</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">
      로고, 인라인 메뉴, 언어 선택, 로그인, 검색, 전체 메뉴로 구성된 상단 영역입니다.
      검색어 입력 없이 아이콘만 노출하고, 언어 선택·로그인은 <strong>호버 시</strong>
      드롭다운이 열립니다(마우스를 올려보세요). 검색 아이콘은 <strong>클릭</strong>하면
      열리는데, 그 패턴은 "검색 패널" 섹션에서 확인할 수 있습니다. 모바일 폭에서는
      메뉴/언어/로그인을 감추고 검색·햄버거 아이콘만 남깁니다.
    </p>

    <CodePreview :code="code">
      <template #default="{ viewport }">
        <v-toolbar color="white" elevation="0" height="64" class="header-preview-toolbar">
          <HyundaiLogo class="ml-4" />

          <template v-if="viewport !== 'mobile'">
            <div class="d-flex ga-6 ml-8">
              <v-btn v-for="item in menuItems" :key="item" variant="text" size="small">
                {{ item }}
              </v-btn>
            </div>
          </template>

          <v-spacer />

          <template v-if="viewport !== 'mobile'">
            <v-menu open-on-hover>
              <template #activator="{ props }">
                <v-btn v-bind="props" variant="text" size="small" append-icon="mdi-menu-down">
                  KR
                </v-btn>
              </template>
              <v-list density="compact">
                <v-list-item title="EN" />
                <v-list-item title="CN" />
                <v-list-item title="월드와이드" />
                <v-list-item title="상용글로벌" />
              </v-list>
            </v-menu>

            <v-divider vertical class="mx-2" />

            <v-menu open-on-hover>
              <template #activator="{ props }">
                <v-btn v-bind="props" icon="mdi-account-outline" variant="text" size="small" />
              </template>
              <v-list density="compact">
                <v-list-item title="개인 로그인" append-icon="mdi-chevron-right" />
                <v-list-item title="법인 로그인" append-icon="mdi-chevron-right" />
              </v-list>
            </v-menu>
          </template>

          <v-btn icon="mdi-magnify" variant="text" />
          <v-btn icon="mdi-menu" variant="text" class="ml-2" />
        </v-toolbar>
      </template>
    </CodePreview>
  </v-container>
</template>

<style lang="scss" scoped>
.header-preview-toolbar {
  border-radius: 8px;
  border-bottom: 1px solid #f6f3f2;
}
</style>
