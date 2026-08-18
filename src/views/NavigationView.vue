<script setup>
import CodePreview from '../components/guide/CodePreview.vue'

const categories = [
  '견적내기',
  '구매상담',
  '시승신청',
  '판매처 검색',
  '구매혜택',
  '정비예약',
  '카달로그·가격표',
]

const code = `<div class="d-flex align-center">
  <v-btn icon="mdi-chevron-left" variant="text" density="comfortable" />

  <v-slide-group show-arrows="false" class="flex-grow-1">
    <v-slide-group-item v-for="item in categories" :key="item">
      <v-chip class="mx-2" variant="outlined" size="large">
        {{ item }}
      </v-chip>
    </v-slide-group-item>
  </v-slide-group>

  <v-btn icon="mdi-chevron-right" variant="text" density="comfortable" />
</div>`
</script>

<template>
  <v-container class="py-10" style="max-width: 1080px">
    <h1 class="text-h5 font-weight-bold mb-2">슬라이드 네비게이션</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">
      주요 카테고리를 가로 스크롤 칩으로 배치하고, 좌우 화살표 버튼으로 이동할 수
      있는 패턴입니다. <code>v-slide-group</code>으로 터치 스와이프도 지원합니다.
      모바일 폭에서는 화살표 버튼을 감추고 스와이프 전용 스크롤로 전환합니다.
    </p>

    <CodePreview :code="code">
      <template #default="{ viewport }">
        <div class="d-flex align-center">
          <v-btn v-if="viewport !== 'mobile'" icon="mdi-chevron-left" variant="text" density="comfortable" />

          <v-slide-group class="flex-grow-1">
            <v-slide-group-item v-for="item in categories" :key="item">
              <v-chip class="mx-2" variant="outlined" :size="viewport === 'mobile' ? 'small' : 'large'">
                {{ item }}
              </v-chip>
            </v-slide-group-item>
          </v-slide-group>

          <v-btn v-if="viewport !== 'mobile'" icon="mdi-chevron-right" variant="text" density="comfortable" />
        </div>
      </template>
    </CodePreview>
  </v-container>
</template>
