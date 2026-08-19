<script setup>
import CodePreview from '../components/guide/CodePreview.vue'
import heroImg from '../assets/hero.png'

const code = `<v-row>
  <v-col cols="12" md="6">
    <v-card variant="flat">
      <v-img :src="heroImg" height="200" cover rounded="lg" />
      <v-card-title class="px-0">Trendy Hyundai</v-card-title>
      <v-card-text class="px-0 text-medium-emphasis">
        지금 가장 주목받는 현대자동차 소식을 만나보세요
      </v-card-text>
      <v-btn variant="text" color="primary" append-icon="mdi-chevron-right">
        자세히 보기
      </v-btn>
    </v-card>
  </v-col>

  <v-col cols="12" md="6">
    <v-card variant="flat">
      <div class="d-flex justify-space-between align-center mb-2">
        <span class="text-h6 font-weight-bold">HyundaiShop Best</span>
        <v-btn variant="text" size="small">더보기</v-btn>
      </div>
      <p class="text-body-2 text-medium-emphasis mb-4">
        지금 HyundaiShop에서 인기 있는 상품이에요
      </p>
      <v-row dense>
        <v-col v-for="n in 3" :key="n" cols="4">
          <v-img :src="heroImg" aspect-ratio="1" cover rounded="lg" />
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</v-row>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-h5 font-weight-bold mb-2">카드 섹션</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">
      이미지 + 텍스트 + "자세히 보기/더보기" 링크로 구성된 소식/상품 소개 섹션입니다.
      (Trendy Hyundai, HyundaiShop Best 참고)
    </p>

    <CodePreview :code="code">
      <v-row>
        <v-col cols="12" md="6">
          <v-card variant="flat">
            <v-img :src="heroImg" height="200" cover rounded="lg" />
            <v-card-title class="px-0">Trendy Hyundai</v-card-title>
            <v-card-text class="px-0 text-medium-emphasis">
              지금 가장 주목받는 현대자동차 소식을 만나보세요
            </v-card-text>
            <v-btn variant="text" color="primary" append-icon="mdi-chevron-right">
              자세히 보기
            </v-btn>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card variant="flat">
            <div class="d-flex justify-space-between align-center mb-2">
              <span class="text-h6 font-weight-bold">HyundaiShop Best</span>
              <v-btn variant="text" size="small">더보기</v-btn>
            </div>
            <p class="text-body-2 text-medium-emphasis mb-4">
              지금 HyundaiShop에서 인기 있는 상품이에요
            </p>
            <v-row dense>
              <v-col v-for="n in 3" :key="n" cols="4">
                <v-img :src="heroImg" aspect-ratio="1" cover rounded="lg" />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </CodePreview>
  </v-container>
</template>
