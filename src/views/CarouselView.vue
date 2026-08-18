<script setup>
import CodePreview from '../components/guide/CodePreview.vue'
import heroImg from '../assets/hero.png'

const code = `<div>
  <div class="d-flex justify-space-between align-center mb-4">
    <h2 class="text-h6 font-weight-bold">
      지속가능한 미래로의 연결
    </h2>
    <div>
      <v-btn icon="mdi-chevron-left" variant="text" size="small" />
      <v-btn icon="mdi-chevron-right" variant="text" size="small" />
    </div>
  </div>

  <v-carousel
    height="320"
    hide-delimiters
    :show-arrows="false"
    cycle
  >
    <v-carousel-item v-for="n in 3" :key="n" :src="slideSrc" cover />
  </v-carousel>
</div>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-h5 font-weight-bold mb-2">캐러셀 / 슬라이더</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">
      제목 옆 좌우 화살표로 넘기는 브랜드/이벤트 슬라이더 패턴입니다.
      <code>v-carousel</code>의 기본 화살표 대신 헤더에 커스텀 버튼을 배치했습니다.
    </p>

    <CodePreview :code="code">
      <div>
        <div class="d-flex justify-space-between align-center mb-4">
          <h2 class="text-h6 font-weight-bold">지속가능한 미래로의 연결</h2>
          <div>
            <v-btn icon="mdi-chevron-left" variant="text" size="small" />
            <v-btn icon="mdi-chevron-right" variant="text" size="small" />
          </div>
        </div>

        <v-carousel height="320" hide-delimiters :show-arrows="false" cycle rounded="lg">
          <v-carousel-item v-for="n in 3" :key="n" :src="heroImg" cover />
        </v-carousel>
      </div>
    </CodePreview>
  </v-container>
</template>
