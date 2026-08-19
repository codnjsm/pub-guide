<script setup>
import { ref, computed } from 'vue'
import CodePreview from '../components/guide/CodePreview.vue'

const items = [
  { icon: 'mdi-calculator-variant-outline', label: '견적내기' },
  { icon: 'mdi-headset', label: '구매상담' },
  { icon: 'mdi-steering', label: '시승신청' },
  { icon: 'mdi-map-marker-radius-outline', label: '판매처 검색' },
  { icon: 'mdi-gift-outline', label: '구매혜택' },
  { icon: 'mdi-tools', label: '정비예약' },
  { icon: 'mdi-file-download-outline', label: '카달로그·가격표' },
  { icon: 'mdi-alpha-b-box-outline', label: '블루멤버스' },
  { icon: 'mdi-alpha-p-circle-outline', label: '포인트 사용' },
  { icon: 'mdi-navigation-variant-outline', label: '내비 업데이트' },
  { icon: 'mdi-shield-car', label: '보증수리 안내' },
  { icon: 'mdi-autorenew', label: '중고차' },
]

const pageSize = 6
const pages = computed(() => {
  const result = []
  for (let i = 0; i < items.length; i += pageSize) {
    result.push(items.slice(i, i + pageSize))
  }
  return result
})

const currentPage = ref(0)

function goToPage(index) {
  currentPage.value = index
}
function nextPage() {
  currentPage.value = (currentPage.value + 1) % pages.value.length
}
function prevPage() {
  currentPage.value = (currentPage.value - 1 + pages.value.length) % pages.value.length
}

const code = `<div class="nav-pagination">
  <div class="d-flex align-center">
    <v-btn icon="mdi-chevron-left" variant="text" density="comfortable" @click="prevPage" />

    <div class="nav-items-grid">
      <div v-for="item in pages[currentPage]" :key="item.label" class="nav-item">
        <v-icon :icon="item.icon" size="32" />
        <span class="nav-item-label">{{ item.label }}</span>
      </div>
    </div>

    <v-btn icon="mdi-chevron-right" variant="text" density="comfortable" @click="nextPage" />
  </div>

  <div class="d-flex justify-center mt-4">
    <button
      v-for="(page, i) in pages"
      :key="i"
      class="nav-dot"
      :class="{ 'nav-dot--active': i === currentPage }"
      @click="goToPage(i)"
    />
  </div>
</div>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-h5 font-weight-bold mb-2">Slide Navigation</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">
      주요 카테고리를 아이콘+라벨 그리드로 배치하고, 좌우 화살표 버튼과 하단 점 인디케이터로
      페이지를 넘길 수 있는 패턴입니다. 화살표는 양방향으로 순환하며(마지막 페이지에서 다음 → 첫
      페이지), 점을 클릭해도 해당 페이지로 바로 이동합니다.
    </p>

    <CodePreview :code="code">
      <template #default>
        <div class="nav-pagination">
          <div class="d-flex align-center">
            <v-btn icon="mdi-chevron-left" variant="text" density="comfortable" @click="prevPage" />

            <div class="nav-items-grid">
              <div v-for="item in pages[currentPage]" :key="item.label" class="nav-item">
                <v-icon :icon="item.icon" size="32" />
                <span class="nav-item-label">{{ item.label }}</span>
              </div>
            </div>

            <v-btn
              icon="mdi-chevron-right"
              variant="text"
              density="comfortable"
              @click="nextPage"
            />
          </div>

          <div class="d-flex justify-center mt-4">
            <button
              v-for="(page, i) in pages"
              :key="i"
              class="nav-dot"
              :class="{ 'nav-dot--active': i === currentPage }"
              @click="goToPage(i)"
            />
          </div>
        </div>
      </template>
    </CodePreview>
  </v-container>
</template>

<style lang="scss" scoped>
.nav-items-grid {
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 96px;
}

.nav-item-label {
  font-size: 0.8125rem;
  text-align: center;
  white-space: nowrap;
}

.nav-dot {
  width: 30px;
  height: 2px;
  border: none;
  padding: 0;
  cursor: pointer;
  background: #e5e5e5;
  transition: background-color 0.3s;
}

.nav-dot--active {
  background: #002c5f;
}
</style>
