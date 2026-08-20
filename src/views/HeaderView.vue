<script setup lang="ts">
import CodePreview from '../components/guide/CodePreview.vue'
import HyundaiLogo from '../components/guide/HyundaiLogo.vue'

const menuItems = ['모델', '구매/이벤트', '서비스/멤버십', '디지털/고객지원', '브랜드', 'Shop']

const code = `<script setup lang="ts">
import HyundaiLogo from '../components/guide/HyundaiLogo.vue'
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()

const menuItems = ['모델', '구매/이벤트', '서비스/멤버십', '디지털/고객지원', '브랜드', 'Shop']
<\/script>

<template>
  <v-toolbar color="white" elevation="0" height="64" class="header-preview-toolbar">
    <HyundaiLogo class="ml-4" />

    <template v-if="mdAndUp">
      <div class="d-flex ga-6 ml-8">
        <v-btn v-for="item in menuItems" :key="item" variant="text" size="small">
          {{ item }}
        </v-btn>
      </div>
    </template>

    <v-spacer />

    <template v-if="mdAndUp">
      <v-btn variant="text" size="small" class="font-weight-bold">내차 추천받기</v-btn>

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

      <v-divider vertical class="mx-1" />

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

<style lang="scss" scoped>
.header-preview-toolbar {
  border-radius: 8px;
  border-bottom: 1px solid #f6f3f2;
}
</style>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-scale-h1 mb-2">Header / GNB</h1>
    <p class="text-scale-body text-high-emphasis mb-2">
      로고, 인라인 메뉴, 언어 선택, 로그인, 검색, 전체 메뉴로 구성된 상단 영역입니다.
    </p>
    <ul class="text-scale-body text-high-emphasis pl-5 mb-8">
      <li>언어 선택·로그인은 호버 시 드롭다운이 열림(마우스를 올려보세요)</li>
      <li>
        검색·햄버거 아이콘을 클릭하면 각각 "Search Panel"·"Full Menu Overlay"
        섹션의 패턴이 열림
      </li>
      <li>태블릿/모바일 폭에서는 검색·햄버거 아이콘만 남김</li>
      <li>코드 탭을 복사할 땐 <code>components/guide/HyundaiLogo.vue</code>도 함께 가져가야 함</li>
    </ul>

    <CodePreview :code="code">
      <template #default="{ viewport }">
        <v-toolbar color="white" elevation="0" height="64" class="header-preview-toolbar">
          <HyundaiLogo class="ml-4" />

          <template v-if="viewport === 'desktop'">
            <div class="d-flex ga-6 ml-8">
              <v-btn v-for="item in menuItems" :key="item" variant="text" size="small">
                {{ item }}
              </v-btn>
            </div>
          </template>

          <v-spacer />

          <template v-if="viewport === 'desktop'">
            <v-btn variant="text" size="small" class="font-weight-bold">내차 추천받기</v-btn>

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

            <v-divider vertical class="mx-1" />

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
