<script setup>
import { ref } from 'vue'
import CodePreview from '../components/guide/CodePreview.vue'

const searchOpen = ref(true)
const query = ref('')
const popularSearches = [
  '사양조회',
  '아반떼',
  '제네시스',
  '네비게이션 업데이트',
  '캐스퍼',
  '코나',
  '소나타',
  '전시시승',
  '네비게이션',
  '블루링크',
]

const code = `<script setup>
import { ref } from 'vue'

const searchOpen = ref(true)
const query = ref('')
const popularSearches = [
  '사양조회',
  '아반떼',
  '제네시스',
  '네비게이션 업데이트',
  '캐스퍼',
  '코나',
  '소나타',
  '전시시승',
  '네비게이션',
  '블루링크',
]
<\/script>

<template>
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
        placeholder="검색어를 입력해주세요."
        append-inner-icon="mdi-magnify"
        hide-details
        class="search-field"
      />

      <v-divider />

      <v-row no-gutters>
        <v-col cols="12" sm="6" class="pt-4 pr-sm-6">
          <div class="d-flex justify-space-between align-center mb-2">
            <span class="font-weight-bold">최근 검색어</span>
            <v-btn variant="text" size="small">검색기록 삭제</v-btn>
          </div>
        </v-col>

        <v-divider vertical class="d-none d-sm-flex" />

        <v-col cols="12" sm="6" class="pt-4 pl-sm-6">
          <p class="font-weight-bold mb-2">인기 검색어 Top10</p>
          <v-list density="compact">
            <v-list-item v-for="(term, i) in popularSearches" :key="term" :title="\`\${i + 1}위. \${term}\`" />
          </v-list>
        </v-col>
      </v-row>

      <div class="d-flex justify-end mt-4">
        <v-btn variant="text" size="small">자동 완성 끄기</v-btn>
      </div>
    </v-sheet>
  </v-expand-transition>
</template>

<style lang="scss" scoped>
.search-field :deep(.v-field) {
  --v-field-padding-start: 0px;
}
</style>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-h5 font-weight-bold mb-2">Search Panel</h1>
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
            placeholder="검색어를 입력해주세요."
            append-inner-icon="mdi-magnify"
            hide-details
            class="search-field"
          />

          <v-divider />

          <v-row no-gutters>
            <v-col cols="12" sm="6" class="pt-4 pr-sm-6">
              <div class="d-flex justify-space-between align-center mb-2">
                <span class="font-weight-bold">최근 검색어</span>
                <v-btn variant="text" size="small">검색기록 삭제</v-btn>
              </div>
            </v-col>

            <v-divider vertical class="d-none d-sm-flex" />

            <v-col cols="12" sm="6" class="pt-4 pl-sm-6">
              <p class="font-weight-bold mb-2">인기 검색어 Top10</p>
              <v-list density="compact">
                <v-list-item v-for="(term, i) in popularSearches" :key="term" :title="`${i + 1}위. ${term}`" />
              </v-list>
            </v-col>
          </v-row>

          <div class="d-flex justify-end mt-4">
            <v-btn variant="text" size="small">자동 완성 끄기</v-btn>
          </div>
        </v-sheet>
      </v-expand-transition>
    </CodePreview>
  </v-container>
</template>

<style lang="scss" scoped>
.search-field :deep(.v-field) {
  --v-field-padding-start: 0px;
}
</style>
