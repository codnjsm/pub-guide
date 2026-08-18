<script setup>
import CodePreview from '../components/guide/CodePreview.vue'

const columns = [
  { title: '기업정보', links: ['기업이념', '연혁', '주요관계사', 'CI', '수상내역', '인재채용'] },
  { title: 'IR 정보', links: ['IR 정보', '배당조회'] },
  { title: '지속가능 경영', links: ['지속가능경영', 'CSV', '지속가능성보고서'] },
]

const socials = ['mdi-youtube', 'mdi-instagram', 'mdi-facebook', 'mdi-twitter', 'mdi-post-outline']

const code = `<v-footer color="surface-variant" class="d-flex flex-column pt-10">
  <v-container style="max-width: 1080px">
    <v-row>
      <v-col v-for="col in columns" :key="col.title" cols="12" sm="4">
        <p class="font-weight-bold mb-3">{{ col.title }}</p>
        <div v-for="link in col.links" :key="link" class="mb-2">
          <a href="#" class="text-decoration-none text-medium-emphasis text-body-2">
            {{ link }}
          </a>
        </div>
      </v-col>
    </v-row>

    <v-divider class="my-6" />

    <div class="d-flex flex-wrap justify-space-between align-center">
      <span class="font-weight-bold">HYUNDAI</span>
      <span class="text-caption text-medium-emphasis">고객센터 080-600-6000</span>
      <div>
        <v-btn v-for="icon in socials" :key="icon" :icon="icon" variant="text" size="small" />
      </div>
    </div>
  </v-container>
</v-footer>`
</script>

<template>
  <v-container class="py-10" style="max-width: 1080px">
    <h1 class="text-h5 font-weight-bold mb-2">푸터</h1>
    <p class="text-body-2 text-medium-emphasis mb-8">
      기업정보 / IR정보 / 지속가능경영 3단 그리드와 로고·고객센터·SNS 아이콘으로
      구성된 하단 영역입니다.
    </p>

    <CodePreview :code="code">
      <v-footer color="surface-variant" class="d-flex flex-column pt-10" rounded="lg">
        <v-container style="max-width: 1080px">
          <v-row>
            <v-col v-for="col in columns" :key="col.title" cols="12" sm="4">
              <p class="font-weight-bold mb-3">{{ col.title }}</p>
              <div v-for="link in col.links" :key="link" class="mb-2">
                <a href="#" class="text-decoration-none text-medium-emphasis text-body-2">
                  {{ link }}
                </a>
              </div>
            </v-col>
          </v-row>

          <v-divider class="my-6" />

          <div class="d-flex flex-wrap justify-space-between align-center">
            <span class="font-weight-bold">HYUNDAI</span>
            <span class="text-caption text-medium-emphasis">고객센터 080-600-6000</span>
            <div>
              <v-btn v-for="icon in socials" :key="icon" :icon="icon" variant="text" size="small" />
            </div>
          </div>
        </v-container>
      </v-footer>
    </CodePreview>
  </v-container>
</template>
