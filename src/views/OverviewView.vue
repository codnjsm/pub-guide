<script setup>
const colors = [
  { name: 'Primary', hex: '#002C5F', desc: '헤더 GNB 언어선택 액티브, 브랜드 강조 (hyundai.com 실측)' },
  { name: 'Accent', hex: '#007FA8', desc: 'GNB 호버/액티브, 링크 (자세히 보기) (hyundai.com 실측)' },
  { name: 'Secondary', hex: '#767676', desc: '보조 텍스트, 검색 placeholder (hyundai.com 실측)' },
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
  <v-container class="py-10" style="max-width: 1080px">
    <div class="mb-10">
      <h1 class="text-h4 font-weight-bold mb-2">퍼블리싱 가이드</h1>
      <p class="text-body-1 text-medium-emphasis">
        현대자동차 홈페이지(hyundai.com/kr/ko/e)의 레이아웃 패턴을 참고하여 정리한
        Vue 3 + Vuetify 컴포넌트 스타일가이드입니다. 왼쪽 메뉴에서 섹션별 마크업과
        코드를 확인할 수 있습니다.
      </p>
    </div>

    <h2 class="text-h6 font-weight-bold mb-4">컬러 팔레트</h2>
    <v-row class="mb-10">
      <v-col v-for="c in colors" :key="c.name" cols="12" sm="6" md="4">
        <v-card variant="outlined" rounded="lg">
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
    <v-table class="mb-10">
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
          <td class="font-weight-bold">{{ t.tag }}</td>
          <td>{{ t.size }}</td>
          <td>{{ t.weight }}</td>
          <td>{{ t.usage }}</td>
        </tr>
      </tbody>
    </v-table>

    <h2 class="text-h6 font-weight-bold mb-4">참고 페이지 구조</h2>
    <v-alert type="info" variant="tonal" density="comfortable">
      상단 GNB → 슬라이드 카테고리 네비게이션 → 히어로 배너(Hi, EV) → 카드/이미지
      섹션(Trendy Hyundai, HyundaiShop) → 캐러셀 섹션(Brand, Events) → 3단 그리드 푸터
      순서로 구성되어 있으며, 각 패턴을 왼쪽 메뉴의 개별 페이지에서 재현했습니다.
    </v-alert>
  </v-container>
</template>
