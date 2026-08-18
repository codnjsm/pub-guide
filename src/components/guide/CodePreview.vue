<script setup>
import { ref, computed } from 'vue'

defineProps({
  code: { type: String, required: true },
})

const tab = ref('preview')
const copied = ref(false)
const viewport = ref('desktop')

const viewportWidth = computed(() => ({ desktop: '100%', tablet: '768px', mobile: '375px' }[viewport.value]))

async function copyCode(code) {
  await navigator.clipboard.writeText(code)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}
</script>

<template>
  <v-card variant="outlined" rounded="lg" class="mb-8">
    <v-tabs v-model="tab" color="primary" density="comfortable">
      <v-tab value="preview">미리보기</v-tab>
      <v-tab value="code">코드</v-tab>
      <v-spacer />
      <v-btn-toggle
        v-if="tab === 'preview'"
        v-model="viewport"
        mandatory
        density="compact"
        variant="outlined"
        class="align-self-center mr-2"
      >
        <v-btn value="desktop" icon="mdi-monitor" size="small" />
        <v-btn value="tablet" icon="mdi-tablet" size="small" />
        <v-btn value="mobile" icon="mdi-cellphone" size="small" />
      </v-btn-toggle>
      <v-btn
        v-if="tab === 'code'"
        variant="text"
        size="small"
        class="mr-2 align-self-center"
        :prepend-icon="copied ? 'mdi-check' : 'mdi-content-copy'"
        @click="copyCode(code)"
      >
        {{ copied ? '복사됨' : '복사' }}
      </v-btn>
    </v-tabs>
    <v-divider />
    <v-window v-model="tab">
      <v-window-item value="preview">
        <div class="preview-area">
          <div class="preview-frame" :style="{ width: viewportWidth }">
            <slot :viewport="viewport" />
          </div>
        </div>
      </v-window-item>
      <v-window-item value="code">
        <pre class="code-area"><code>{{ code }}</code></pre>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<style scoped>
.preview-area {
  padding: 24px;
  background: #fafafa;
  overflow: auto;
}
.preview-frame {
  margin: 0 auto;
  max-width: 100%;
  transition: width 0.2s ease;
}
.code-area {
  margin: 0;
  padding: 20px 24px;
  background: #1e1e1e;
  color: #d4d4d4;
  font-family: 'Menlo', 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.6;
  overflow: auto;
  max-height: 480px;
}
</style>
