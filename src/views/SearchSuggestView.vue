<script setup>
import { ref } from 'vue'
import CodePreview from '../components/guide/CodePreview.vue'

const searchOpen = ref(true)
const query = ref('')
const popularSearches = [
  '사양조회',
  '아반떼',
  '제네시스',
  '캐스퍼',
  '네비게이션 업데이트',
  '네비게이션',
  '코나',
  '소나타',
  '그랜저',
  '팰리세이드',
]

const code = `<v-btn
  :icon="searchOpen ? 'mdi-close' : 'mdi-magnify'"
  variant="text"
  @click="searchOpen = !searchOpen"
/>

<v-expand-transition>
  <v-sheet v-if="searchOpen" class="pa-6">
    <v-text-field
      v-model="query"
      variant="solo"
      flat
      clearable
      density="comfortable"
      placeholder="검색어를 입력해주세요"
      append-inner-icon="mdi-magnify"
    />

    <v-row class="mt-2">
      <v-col cols="12" sm="6">
        <div class="d-flex justify-space-between align-center mb-2">
          <span class="font-weight-bold">최근 검색어</span>
          <v-btn variant="text" size="small">검색기록 삭제</v-btn>
        </div>
        <p class="text-caption text-medium-emphasis">최근 검색어가 없습니다.</p>
      </v-col>

      <v-col cols="12" sm="6">
        <p class="font-weight-bold mb-2">인기 검색어 Top10</p>
        <v-list density="compact">
          <v-list-item v-for="(term, i) in popularSearches" :key="term" :title="\`\${i + 1}위. \${term}\`" />
        </v-list>
      </v-col>
    </v-row>
  </v-sheet>
</v-expand-transition>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-h5 font-weight-bold mb-2">검색 패널</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">
      헤더의 검색 아이콘을 <strong>클릭</strong>하면 열리는 전체 폭 패널입니다.
      검색창 아래 최근 검색어와 인기 검색어 Top10을 나란히 보여줍니다.
      <code>v-expand-transition</code>으로 열고 닫히는 애니메이션을 넣었습니다.
    </p>

    <CodePreview :code="code">
      <v-btn
        :icon="searchOpen ? 'mdi-close' : 'mdi-magnify'"
        variant="text"
        @click="searchOpen = !searchOpen"
      />

      <v-expand-transition>
        <v-sheet v-if="searchOpen" class="pa-6" rounded="lg">
          <v-text-field
            v-model="query"
            variant="solo"
            flat
            clearable
            density="comfortable"
            placeholder="검색어를 입력해주세요"
            append-inner-icon="mdi-magnify"
          />

          <v-row class="mt-2">
            <v-col cols="12" sm="6">
              <div class="d-flex justify-space-between align-center mb-2">
                <span class="font-weight-bold">최근 검색어</span>
                <v-btn variant="text" size="small">검색기록 삭제</v-btn>
              </div>
              <p class="text-caption text-medium-emphasis">최근 검색어가 없습니다.</p>
            </v-col>

            <v-col cols="12" sm="6">
              <p class="font-weight-bold mb-2">인기 검색어 Top10</p>
              <v-list density="compact">
                <v-list-item v-for="(term, i) in popularSearches" :key="term" :title="`${i + 1}위. ${term}`" />
              </v-list>
            </v-col>
          </v-row>
        </v-sheet>
      </v-expand-transition>
    </CodePreview>
  </v-container>
</template>
