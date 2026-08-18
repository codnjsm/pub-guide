<script setup>
import CodePreview from '../components/guide/CodePreview.vue'
import logoSrc from '../assets/hyundai-logo.png'

const code = `<v-toolbar color="white" elevation="0" height="72">
  <v-img :src="logoSrc" width="58" aspect-ratio="58/31" class="ml-4" />

  <v-spacer />

  <v-text-field
    density="compact"
    variant="solo"
    flat
    hide-details
    placeholder="검색어를 입력하세요"
    prepend-inner-icon="mdi-magnify"
    style="max-width: 280px"
  />

  <v-btn-toggle v-model="lang" mandatory density="compact" class="ml-4">
    <v-btn value="kr" size="small">KR</v-btn>
    <v-btn value="en" size="small">EN</v-btn>
    <v-btn value="cn" size="small">CN</v-btn>
  </v-btn-toggle>

  <v-btn variant="text" class="ml-2">로그인</v-btn>
  <v-btn icon="mdi-menu" variant="text" class="ml-2" />
</v-toolbar>`
</script>

<template>
  <v-container class="py-10" style="max-width: 1080px">
    <h1 class="text-h5 font-weight-bold mb-2">헤더 / GNB</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">
      로고, 검색바, 언어 선택, 로그인, 전체 메뉴 토글로 구성된 상단 영역입니다.
      흰색 배경에 검은색 텍스트를 사용한 미니멀한 스타일을 <code>v-toolbar</code>로
      구현했습니다. 모바일 폭에서는 검색바/언어선택/로그인을 감추고 검색 아이콘과
      햄버거 메뉴만 남깁니다 (미리보기 상단의 뷰포트 토글로 확인해보세요).
    </p>

    <CodePreview :code="code">
      <template #default="{ viewport }">
        <v-toolbar color="white" elevation="0" height="72" style="border-radius: 8px">
          <v-img :src="logoSrc" width="58" aspect-ratio="58/31" class="ml-4" />

          <v-spacer />

          <template v-if="viewport === 'mobile'">
            <v-btn icon="mdi-magnify" variant="text" />
          </template>
          <template v-else>
            <v-text-field
              density="compact"
              variant="solo"
              flat
              hide-details
              placeholder="검색어를 입력하세요"
              prepend-inner-icon="mdi-magnify"
              style="max-width: 280px"
            />

            <v-btn-toggle mandatory density="compact" class="ml-4">
              <v-btn value="kr" size="small">KR</v-btn>
              <v-btn value="en" size="small">EN</v-btn>
              <v-btn value="cn" size="small">CN</v-btn>
            </v-btn-toggle>

            <v-btn variant="text" class="ml-2">로그인</v-btn>
          </template>

          <v-btn icon="mdi-menu" variant="text" class="ml-2" />
        </v-toolbar>
      </template>
    </CodePreview>
  </v-container>
</template>
