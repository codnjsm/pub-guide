<script setup>
const colors = [
  { name: 'Primary', hex: '#002C5F', desc: '헤더 GNB 언어선택 액티브, 브랜드 강조 (hyundai.com 실측)' },
  { name: 'Accent', hex: '#007FA8', desc: 'GNB 호버/액티브, 링크 (자세히 보기) (hyundai.com 실측)' },
  { name: 'Secondary', hex: '#767676', desc: '보조 텍스트, 검색 placeholder (hyundai.com 실측)' },
  { name: 'Border', hex: '#E5E5E5', desc: '카드/헤더 경계선' },
  { name: 'Surface Variant', hex: '#F6F3F2', desc: '공식 theme-color 메타값, 섹션 구분 배경' },
  { name: 'Surface', hex: '#FFFFFF', desc: '기본 배경(흰색)' },
]

const typeScale = [
  { tag: 'H1', size: '32px / 40px', weight: '700', usage: '히어로 배너 타이틀' },
  { tag: 'H2', size: '24px / 32px', weight: '700', usage: '섹션 제목' },
  { tag: 'H3', size: '18px / 26px', weight: '600', usage: '카드 제목' },
  { tag: 'Body', size: '15px / 24px', weight: '400', usage: '본문/설명' },
  { tag: 'Caption', size: '13px / 20px', weight: '400', usage: '보조 설명, 링크' },
]
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-h5 font-weight-bold mb-2">컬러/타이포그래피</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">
      전체 섹션에서 공통으로 쓰는 컬러 토큰과 타이포그래피 스케일입니다.
    </p>

    <h2 class="text-h6 font-weight-bold mb-4">컬러 팔레트</h2>
    <v-row class="mb-10">
      <v-col v-for="c in colors" :key="c.name" cols="12" sm="6" md="4">
        <v-card variant="outlined" rounded="lg" class="palette-card">
          <div :style="{ background: c.hex, height: '64px' }" />
          <v-card-text>
            <div class="d-flex justify-space-between align-center mb-1">
              <span class="font-weight-bold">{{ c.name }}</span>
              <span class="text-caption text-medium-emphasis">{{ c.hex }}</span>
            </div>
            <span class="text-caption text-medium-emphasis">{{ c.desc }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <h2 class="text-h6 font-weight-bold mb-4">타이포그래피</h2>
    <v-table class="mb-10 type-scale-table">
      <thead>
        <tr>
          <th>구분</th>
          <th>크기 / 행간</th>
          <th>굵기</th>
          <th>용도</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in typeScale" :key="t.tag">
          <td :style="{ fontSize: t.size.split(' / ')[0], fontWeight: t.weight }">{{ t.tag }}</td>
          <td>{{ t.size }}</td>
          <td>{{ t.weight }}</td>
          <td>{{ t.usage }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<style lang="scss" scoped>
.palette-card {
  border-color: #e5e5e5;
}

.type-scale-table :deep(td),
.type-scale-table :deep(th) {
  padding-top: 5px;
  padding-bottom: 5px;
}

.type-scale-table :deep(tbody tr:first-child td) {
  padding-top: 10px;
}

.type-scale-table :deep(tbody tr:last-child td) {
  padding-bottom: 10px;
}
</style>
