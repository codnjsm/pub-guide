<script setup lang="ts">
import CodePreview from '../components/guide/CodePreview.vue'

const ctaItems = [
  { text: '견적내기', caption: 'primary · flat' },
  { text: '구매상담', caption: 'primary · flat' },
  { text: '시승신청', caption: 'primary · flat' },
]
const ctaVariants = [
  { variant: 'flat', caption: 'flat' },
  { variant: 'outlined', caption: 'outlined' },
  { variant: 'tonal', caption: 'tonal' },
  { variant: 'text', caption: 'text' },
] as const

const textLinkItems = [
  { text: '자세히 보기', caption: 'text · arrow-right' },
  { text: '더보기', caption: 'text · arrow-right' },
]
const textLinkVariants = [
  { variant: 'text', caption: 'text' },
  { variant: 'outlined', caption: 'outlined' },
  { variant: 'plain', caption: 'plain' },
] as const

const navIconItems = [
  { icon: 'mdi-chevron-left', caption: '이전 슬라이드 · icon-only' },
  { icon: 'mdi-chevron-right', caption: '다음 슬라이드 · icon-only' },
]
const navIconVariants = [
  { variant: 'text', caption: 'text' },
  { variant: 'outlined', caption: 'outlined' },
  { variant: 'tonal', caption: 'tonal' },
] as const

const ctaCode = `<script setup lang="ts">
const ctaItems = [
  { text: '견적내기', caption: 'primary · flat' },
  { text: '구매상담', caption: 'primary · flat' },
  { text: '시승신청', caption: 'primary · flat' },
]

const ctaVariants = [
  { variant: 'flat', caption: 'flat' },
  { variant: 'outlined', caption: 'outlined' },
  { variant: 'tonal', caption: 'tonal' },
  { variant: 'text', caption: 'text' },
] as const
<\/script>

<template>
  <div class="buttons">
    <div class="buttons__row">
      <div v-for="item in ctaItems" :key="item.text" class="buttons__item">
        <v-btn color="primary" variant="flat">{{ item.text }}</v-btn>
        <span class="buttons__caption">{{ item.caption }}</span>
      </div>
    </div>

    <div class="buttons__variant-label">Variant 비교</div>
    <div class="buttons__variant-row">
      <div v-for="v in ctaVariants" :key="v.variant" class="buttons__item">
        <v-btn :variant="v.variant" color="primary">견적내기</v-btn>
        <span class="buttons__caption">{{ v.caption }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buttons__row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.buttons__variant-label {
  margin: 16px 0 10px;
  color: #333;
  font-size: 0.8125rem;
  font-weight: 700;
}

.buttons__variant-row {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 24px;
}

.buttons__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.buttons__caption {
  color: #666;
  font-size: 0.75rem;
}
</style>`

const textLinkCode = `<script setup lang="ts">
const textLinkItems = [
  { text: '자세히 보기', caption: 'text · arrow-right' },
  { text: '더보기', caption: 'text · arrow-right' },
]

const textLinkVariants = [
  { variant: 'text', caption: 'text' },
  { variant: 'outlined', caption: 'outlined' },
  { variant: 'plain', caption: 'plain' },
] as const
<\/script>

<template>
  <div class="buttons">
    <div class="buttons__row">
      <div v-for="item in textLinkItems" :key="item.text" class="buttons__item">
        <v-btn variant="text" size="small" append-icon="mdi-arrow-right">{{ item.text }}</v-btn>
        <span class="buttons__caption">{{ item.caption }}</span>
      </div>
    </div>

    <div class="buttons__variant-label">Variant 비교</div>
    <div class="buttons__variant-row">
      <div v-for="v in textLinkVariants" :key="v.variant" class="buttons__item">
        <v-btn :variant="v.variant" append-icon="mdi-arrow-right">자세히 보기</v-btn>
        <span class="buttons__caption">{{ v.caption }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buttons__row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.buttons__variant-label {
  margin: 16px 0 10px;
  color: #333;
  font-size: 0.8125rem;
  font-weight: 700;
}

.buttons__variant-row {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 24px;
}

.buttons__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.buttons__caption {
  color: #666;
  font-size: 0.75rem;
}
</style>`

const navIconCode = `<script setup lang="ts">
const navIconItems = [
  { icon: 'mdi-chevron-left', caption: '이전 슬라이드 · icon-only' },
  { icon: 'mdi-chevron-right', caption: '다음 슬라이드 · icon-only' },
]

const navIconVariants = [
  { variant: 'text', caption: 'text' },
  { variant: 'outlined', caption: 'outlined' },
  { variant: 'tonal', caption: 'tonal' },
] as const
<\/script>

<template>
  <div class="buttons">
    <div class="buttons__row">
      <div v-for="item in navIconItems" :key="item.caption" class="buttons__item">
        <v-btn :icon="item.icon" variant="text" density="comfortable" />
        <span class="buttons__caption">{{ item.caption }}</span>
      </div>
    </div>

    <div class="buttons__variant-label">Variant 비교</div>
    <div class="buttons__variant-row">
      <div v-for="v in navIconVariants" :key="v.variant" class="buttons__item">
        <v-btn :variant="v.variant" icon="mdi-chevron-right" />
        <span class="buttons__caption">{{ v.caption }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buttons__row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.buttons__variant-label {
  margin: 16px 0 10px;
  color: #333;
  font-size: 0.8125rem;
  font-weight: 700;
}

.buttons__variant-row {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 24px;
}

.buttons__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.buttons__caption {
  color: #666;
  font-size: 0.75rem;
}
</style>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-scale-h1 mb-2">Buttons</h1>
    <p class="text-scale-body text-high-emphasis mb-2">
      hyundai.com에서 자주 쓰이는 버튼 유형을 카테고리별로 모은 사전입니다.
    </p>
    <ul class="text-scale-body text-high-emphasis pl-5 mb-8">
      <li>버튼 아래 캡션에 variant · 아이콘 구성을 표기</li>
      <li>"Variant 비교" 줄에서 동일한 버튼을 다른 옵션으로도 확인 가능</li>
    </ul>

    <h2 class="text-scale-h3 mb-4">CTA (Primary)</h2>
    <CodePreview :code="ctaCode">
      <div class="buttons">
        <div class="buttons__row">
          <div v-for="item in ctaItems" :key="item.text" class="buttons__item">
            <v-btn color="primary" variant="flat">{{ item.text }}</v-btn>
            <span class="buttons__caption">{{ item.caption }}</span>
          </div>
        </div>

        <div class="buttons__variant-label">Variant 비교</div>
        <div class="buttons__variant-row">
          <div v-for="v in ctaVariants" :key="v.variant" class="buttons__item">
            <v-btn :variant="v.variant" color="primary">견적내기</v-btn>
            <span class="buttons__caption">{{ v.caption }}</span>
          </div>
        </div>
      </div>
    </CodePreview>

    <h2 class="text-scale-h3 mb-4">텍스트 링크 버튼</h2>
    <CodePreview :code="textLinkCode">
      <div class="buttons">
        <div class="buttons__row">
          <div v-for="item in textLinkItems" :key="item.text" class="buttons__item">
            <v-btn variant="text" size="small" append-icon="mdi-arrow-right">{{ item.text }}</v-btn>
            <span class="buttons__caption">{{ item.caption }}</span>
          </div>
        </div>

        <div class="buttons__variant-label">Variant 비교</div>
        <div class="buttons__variant-row">
          <div v-for="v in textLinkVariants" :key="v.variant" class="buttons__item">
            <v-btn :variant="v.variant" append-icon="mdi-arrow-right">자세히 보기</v-btn>
            <span class="buttons__caption">{{ v.caption }}</span>
          </div>
        </div>
      </div>
    </CodePreview>

    <h2 class="text-scale-h3 mb-4">네비게이션 아이콘 버튼</h2>
    <CodePreview :code="navIconCode">
      <div class="buttons">
        <div class="buttons__row">
          <div v-for="item in navIconItems" :key="item.caption" class="buttons__item">
            <v-btn :icon="item.icon" variant="text" density="comfortable" />
            <span class="buttons__caption">{{ item.caption }}</span>
          </div>
        </div>

        <div class="buttons__variant-label">Variant 비교</div>
        <div class="buttons__variant-row">
          <div v-for="v in navIconVariants" :key="v.variant" class="buttons__item">
            <v-btn :variant="v.variant" icon="mdi-chevron-right" />
            <span class="buttons__caption">{{ v.caption }}</span>
          </div>
        </div>
      </div>
    </CodePreview>
  </v-container>
</template>

<style lang="scss" scoped>
.buttons__row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.buttons__variant-label {
  margin: 16px 0 10px;
  color: #333;
  font-size: 0.8125rem;
  font-weight: 700;
}

.buttons__variant-row {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 24px;
}

.buttons__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.buttons__caption {
  color: #666;
  font-size: 0.75rem;
}
</style>
