<script setup lang="ts">
import { ref, computed } from 'vue'
import CodePreview from '../components/guide/CodePreview.vue'
import carImg from '../assets/carousel-car.svg'

const slides = [
  { title: 'Title 1', subtitle: 'subTitle 1', image: carImg },
  { title: 'Title 2', subtitle: 'subTitle 2', image: carImg },
  { title: 'Title 3', subtitle: 'subTitle 3', image: carImg },
  { title: 'Title 4', subtitle: 'subTitle 4', image: carImg },
  { title: 'Title 5', subtitle: 'subTitle 5', image: carImg },
  { title: 'Title 6', subtitle: 'subTitle 6', image: carImg },
  { title: 'Title 7', subtitle: 'subTitle 7', image: carImg },
]

const model = ref(0)
const playing = ref(true)

const prevTitle = computed(() => slides[(model.value - 1 + slides.length) % slides.length].title)
const nextTitle = computed(() => slides[(model.value + 1) % slides.length].title)

function bgStyle(image: string) {
  return { backgroundImage: 'url("' + image + '")' }
}

const code = `<script setup lang="ts">
import { ref, computed } from 'vue'
import carImg from '../assets/carousel-car.svg'
import { useDisplay } from 'vuetify'

const { xs } = useDisplay()

const slides = [
  { title: 'Title 1', subtitle: 'subTitle 1', image: carImg },
  { title: 'Title 2', subtitle: 'subTitle 2', image: carImg },
  { title: 'Title 3', subtitle: 'subTitle 3', image: carImg },
  { title: 'Title 4', subtitle: 'subTitle 4', image: carImg },
  { title: 'Title 5', subtitle: 'subTitle 5', image: carImg },
  { title: 'Title 6', subtitle: 'subTitle 6', image: carImg },
  { title: 'Title 7', subtitle: 'subTitle 7', image: carImg },
]

const model = ref(0)
const playing = ref(true)

const prevTitle = computed(() => slides[(model.value - 1 + slides.length) % slides.length].title)
const nextTitle = computed(() => slides[(model.value + 1) % slides.length].title)

function bgStyle(image: string) {
  return { backgroundImage: 'url("' + image + '")' }
}
<\/script>

<template>
  <div>
    <v-carousel
      v-model="model"
      :cycle="playing"
      height="420"
      hide-delimiters
      class="carousel-preview"
    >
      <template #prev="{ props }">
        <button class="carousel-nav carousel-nav--prev" @click="props.onClick">
          <v-icon icon="mdi-chevron-left" size="20" />
          <span class="carousel-nav__label">{{ prevTitle }}</span>
        </button>
      </template>

      <template #next="{ props }">
        <button class="carousel-nav carousel-nav--next" @click="props.onClick">
          <span class="carousel-nav__label">{{ nextTitle }}</span>
          <v-icon icon="mdi-chevron-right" size="20" />
        </button>
      </template>

      <v-carousel-item v-for="slide in slides" :key="slide.title">
        <div class="carousel-slide">
          <div
            class="carousel-slide__image"
            :class="{ 'carousel-slide__image--contain': xs }"
            :style="bgStyle(slide.image)"
          />
          <h2 class="carousel-slide__title">{{ slide.title }}</h2>
          <p class="carousel-slide__subtitle">{{ slide.subtitle }}</p>
        </div>
      </v-carousel-item>
    </v-carousel>

    <div class="carousel-controls">
      <button
        v-for="(slide, i) in slides"
        :key="slide.title"
        class="carousel-dot"
        :class="{ 'carousel-dot--active': i === model }"
        @click="model = i"
      />
      <button class="carousel-play" @click="playing = !playing">
        <v-icon :icon="playing ? 'mdi-pause' : 'mdi-play'" size="14" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-preview {
  border-radius: 8px;
  overflow: hidden;
}

.carousel-slide {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 90px;
  background: #f6f3f2;
}

.carousel-slide__image {
  position: absolute;
  inset: 0;
  background: #e5e5e5 no-repeat center top / auto 100%;
}

.carousel-slide__image--contain {
  background-position: center bottom;
  background-size: contain;
}

.carousel-slide__title {
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  max-width: 480px;
}

.carousel-slide__subtitle {
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #444;
  max-width: 480px;
}

.carousel-nav {
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: none;
  padding: 8px;
  font-size: 0.8125rem;
  color: #333;
  cursor: pointer;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background: #e5e5e5;
}

.carousel-dot--active {
  background: #002c5f;
}

.carousel-play {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  margin-left: 8px;
  background: #333;
  color: #fff;
  cursor: pointer;
}
</style>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-scale-h1 mb-2">Carousel / Slider</h1>
    <p class="text-scale-body text-high-emphasis mb-2">
      이미지 위에 타이틀/서브타이틀이 겹쳐지고, 좌우 끝에 이전/다음 모델명이 붙은 화살표로 넘기는
      브랜드 슬라이더 패턴입니다.
    </p>
    <ul class="text-scale-body text-high-emphasis pl-5 mb-8">
      <li>화살표는 양방향으로 순환</li>
      <li>하단 점을 클릭해도 해당 슬라이드로 이동</li>
      <li>재생/일시정지 버튼으로 자동재생 토글</li>
      <li>배경은 실제 이미지 대신 회색 플레이스홀더로 표시</li>
      <li>실제 이미지 권장 사이즈: 1920×420px 이상(가로로 넓은 배너, 높이 420px 고정에 맞춤)</li>
    </ul>

    <CodePreview :code="code">
      <template #default="{ viewport }">
        <div>
          <v-carousel
            v-model="model"
            :cycle="playing"
            height="420"
            hide-delimiters
            class="carousel-preview"
          >
            <template #prev="{ props }">
              <button class="carousel-nav carousel-nav--prev" @click="props.onClick">
                <v-icon icon="mdi-chevron-left" size="20" />
                <span class="carousel-nav__label">{{ prevTitle }}</span>
              </button>
            </template>

            <template #next="{ props }">
              <button class="carousel-nav carousel-nav--next" @click="props.onClick">
                <span class="carousel-nav__label">{{ nextTitle }}</span>
                <v-icon icon="mdi-chevron-right" size="20" />
              </button>
            </template>

            <v-carousel-item v-for="slide in slides" :key="slide.title">
              <div class="carousel-slide">
                <div
                  class="carousel-slide__image"
                  :class="{ 'carousel-slide__image--contain': viewport === 'mobile' }"
                  :style="bgStyle(slide.image)"
                />
                <h2 class="carousel-slide__title">{{ slide.title }}</h2>
                <p class="carousel-slide__subtitle">{{ slide.subtitle }}</p>
              </div>
            </v-carousel-item>
          </v-carousel>

          <div class="carousel-controls">
            <button
              v-for="(slide, i) in slides"
              :key="slide.title"
              class="carousel-dot"
              :class="{ 'carousel-dot--active': i === model }"
              @click="model = i"
            />
            <button class="carousel-play" @click="playing = !playing">
              <v-icon :icon="playing ? 'mdi-pause' : 'mdi-play'" size="14" />
            </button>
          </div>
        </div>
      </template>
    </CodePreview>
  </v-container>
</template>

<style lang="scss" scoped>
.carousel-preview {
  border-radius: 8px;
  overflow: hidden;
}

.carousel-slide {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 90px;
  background: #f6f3f2;
}

.carousel-slide__image {
  position: absolute;
  inset: 0;
  background: #e5e5e5 no-repeat center top / auto 100%;
}

.carousel-slide__image--contain {
  background-position: center bottom;
  background-size: contain;
}

.carousel-slide__title {
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  max-width: 480px;
}

.carousel-slide__subtitle {
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #444;
  max-width: 480px;
}

.carousel-nav {
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: none;
  padding: 8px;
  font-size: 0.8125rem;
  color: #333;
  cursor: pointer;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background: #e5e5e5;
}

.carousel-dot--active {
  background: #002c5f;
}

.carousel-play {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  margin-left: 8px;
  background: #333;
  color: #fff;
  cursor: pointer;
}
</style>
