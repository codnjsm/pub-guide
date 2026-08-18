<script setup>
import CodePreview from '../components/guide/CodePreview.vue'
import heroImg from '../assets/hero.png'

const code = `<v-sheet
  :style="{ backgroundImage: \`url(\${heroImg})\`, backgroundSize: 'cover' }"
  height="420"
  class="d-flex flex-column justify-center px-12"
>
  <p class="text-caption text-white mb-2">Hi, EV</p>
  <h2 class="text-h4 font-weight-bold text-white mb-4 hero-title">
    지구 환경을 품은 현대자동차의
    미래형 모빌리티를 경험해보세요
  </h2>
  <p class="text-body-2 text-white mb-6">
    현대자동차의 전기차를 처음 만나는 순간
  </p>

  <div>
    <v-btn color="white" variant="flat" rounded="pill" class="text-primary mr-4">
      자세히 보기
    </v-btn>
    <v-btn variant="text" class="text-white mr-4">충전소 찾기</v-btn>
    <v-btn variant="text" class="text-white">N브랜드 급속 충전소</v-btn>
  </div>
</v-sheet>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-h5 font-weight-bold mb-2">히어로 배너</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">
      풀 너비 배경 이미지 위에 타이틀·설명·CTA 버튼을 배치하는 패턴입니다.
      <code>v-sheet</code>에 배경 이미지를 지정하고 좌측 정렬 텍스트를 얹었습니다.
    </p>

    <CodePreview :code="code">
      <v-sheet
        :style="{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
        height="420"
        rounded="lg"
        class="d-flex flex-column justify-center px-12"
      >
        <p class="text-caption text-white mb-2">Hi, EV</p>
        <h2 class="text-h4 font-weight-bold text-white mb-4 hero-title">
          지구 환경을 품은 현대자동차의 미래형 모빌리티를 경험해보세요
        </h2>
        <p class="text-body-2 text-white mb-6">
          현대자동차의 전기차를 처음 만나는 순간
        </p>

        <div>
          <v-btn color="white" variant="flat" rounded="pill" class="text-primary mr-4">
            자세히 보기
          </v-btn>
          <v-btn variant="text" class="text-white mr-4">충전소 찾기</v-btn>
          <v-btn variant="text" class="text-white">N브랜드 급속 충전소</v-btn>
        </div>
      </v-sheet>
    </CodePreview>
  </v-container>
</template>

<style lang="scss" scoped>
.hero-title {
  max-width: 480px;
}
</style>
