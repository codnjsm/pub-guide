<script setup>
import CodePreview from '../components/guide/CodePreview.vue'

const menuGroups = [
  { title: '차량', links: ['전체 차량', '전기차(EV)', 'N 브랜드', '상용차'] },
  { title: '구매', links: ['견적내기', '구매상담', '시승신청', '구매혜택'] },
  { title: '서비스', links: ['정비예약', '판매처 검색', '카달로그·가격표'] },
  { title: '고객지원', links: ['공지사항', 'FAQ', '1:1 문의', '리콜 조회'] },
]

const code = `<v-overlay v-model="menuOpen" scrim="white" opacity="1" location-strategy="static">
  <v-sheet class="d-flex flex-column pa-8" height="100vh">
    <div class="d-flex justify-space-between align-center mb-10">
      <span class="text-h6 font-weight-bold">HYUNDAI</span>
      <v-btn icon="mdi-close" variant="text" @click="menuOpen = false" />
    </div>

    <v-row>
      <v-col v-for="group in menuGroups" :key="group.title" cols="6" sm="3">
        <p class="font-weight-bold mb-4">{{ group.title }}</p>
        <div v-for="link in group.links" :key="link" class="mb-3">
          <a href="#" class="text-decoration-none text-medium-emphasis">
            {{ link }}
          </a>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</v-overlay>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-h5 font-weight-bold mb-2">전체메뉴 풀스크린 오버레이</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">
      헤더의 메뉴 버튼을 누르면 전체 화면을 덮는 형태로 모든 카테고리를 한눈에
      보여주는 패턴입니다. <code>v-overlay</code>로 화면 전체를 덮고, 내부는
      다단 그리드로 구성했습니다.
    </p>

    <CodePreview :code="code">
      <v-sheet class="d-flex flex-column pa-8 fullmenu-preview" rounded="lg">
        <div class="d-flex justify-space-between align-center mb-10">
          <span class="text-h6 font-weight-bold">HYUNDAI</span>
          <v-btn icon="mdi-close" variant="text" />
        </div>

        <v-row>
          <v-col v-for="group in menuGroups" :key="group.title" cols="6" sm="3">
            <p class="font-weight-bold mb-4">{{ group.title }}</p>
            <div v-for="link in group.links" :key="link" class="mb-3">
              <a href="#" class="text-decoration-none text-medium-emphasis">
                {{ link }}
              </a>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </CodePreview>
  </v-container>
</template>

<style lang="scss" scoped>
.fullmenu-preview {
  min-height: 420px;
}
</style>
