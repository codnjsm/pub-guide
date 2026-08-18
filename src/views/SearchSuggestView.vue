<script setup>
import { ref } from 'vue'
import CodePreview from '../components/guide/CodePreview.vue'

const query = ref('아이오닉')
const suggestions = ['아이오닉 6', '아이오닉 5', '아이오닉 9', '아이오닉 브랜드 스토리']

const code = `<v-menu :model-value="suggestions.length > 0" :close-on-content-click="false">
  <template #activator="{ props }">
    <v-text-field
      v-bind="props"
      v-model="query"
      density="compact"
      variant="solo"
      flat
      hide-details
      placeholder="검색어를 입력하세요"
      prepend-inner-icon="mdi-magnify"
    />
  </template>

  <v-list density="compact">
    <v-list-item
      v-for="item in suggestions"
      :key="item"
      :title="item"
      prepend-icon="mdi-magnify"
    />
  </v-list>
</v-menu>`
</script>

<template>
  <v-container class="py-10" style="max-width: 1080px">
    <h1 class="text-h5 font-weight-bold mb-2">검색 자동완성 드롭다운</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">
      검색바에 입력하는 동안 하단에 추천 검색어를 드롭다운으로 보여주는
      패턴입니다. <code>v-menu</code>로 텍스트필드 아래 <code>v-list</code>를
      띄웠습니다.
    </p>

    <CodePreview :code="code">
      <v-menu :model-value="true" :close-on-content-click="false">
        <template #activator="{ props }">
          <v-text-field
            v-bind="props"
            v-model="query"
            density="compact"
            variant="solo"
            flat
            hide-details
            placeholder="검색어를 입력하세요"
            prepend-inner-icon="mdi-magnify"
            style="max-width: 360px"
          />
        </template>

        <v-list density="compact">
          <v-list-item
            v-for="item in suggestions"
            :key="item"
            :title="item"
            prepend-icon="mdi-magnify"
          />
        </v-list>
      </v-menu>
    </CodePreview>
  </v-container>
</template>
