#!/usr/bin/env node
// 각 섹션 페이지의 "코드" 탭 문자열(`const code = ...`)을 그 뷰의 실제 내용에서 재생성한다.
// 코드 탭은 복사해서 붙여넣으면 프리뷰와 같은 컴포넌트가 나오는 완성된 .vue 한 장이어야 한다.
// 자세한 규칙은 README.md "스타일링 규칙"의 코드 탭 항목 참고.
//
//   node scripts/gen-codetab.mjs           재생성해서 파일에 쓴다 (npm run codetab)
//   node scripts/gen-codetab.mjs --check   쓰지 않고 어긋난 파일만 보고한다 (npm run lint)

import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const VIEWS_DIR = join(ROOT, 'src/views')

// CodePreview를 쓰는 뷰 목록 — buildCode()가 null을 반환했을 때 "CodePreview 미사용 페이지"와
// "정규식이 못 읽은 페이지"를 구분하기 위한 기준. 새 CodePreview 뷰를 추가하면 여기도 추가한다.
const EXPECTED_VIEWS = new Set([
  'CardsView.vue',
  'CarouselView.vue',
  'FooterView.vue',
  'FullMenuView.vue',
  'HeaderView.vue',
  'HeroView.vue',
  'NavigationView.vue',
  'SearchSuggestView.vue',
])

// CodePreview가 넘겨주는 viewport slot prop은 복붙하면 undefined다 — Vuetify useDisplay()로 옮겨 적는다.
// 프리뷰 폭 기준: desktop=100%(→ md 960 이상), tablet=768px(Vuetify sm 구간), mobile=375px(→ xs)
const VIEWPORT_MAP = {
  'HeaderView.vue': { keys: ['mdAndUp'], subs: [["viewport === 'desktop'", 'mdAndUp']] },
  'CarouselView.vue': { keys: ['xs'], subs: [["viewport === 'mobile'", 'xs']] },
  'HeroView.vue': {
    keys: ['xs'],
    subs: [
      ["viewport !== 'mobile'", '!xs'], // 부정형을 먼저 — 긍정형 치환이 먼저 돌면 이 문자열이 남는다
      ["viewport === 'mobile'", 'xs'],
    ],
  },
}

function dedent(s) {
  const lines = s.split('\n')
  const indents = lines.filter((l) => l.trim()).map((l) => l.length - l.trimStart().length)
  const min = Math.min(...indents)
  const out = lines.map((l) => (l.trim() ? l.slice(min).trimEnd() : ''))
  while (out.length && !out[0]) out.shift()
  while (out.length && !out[out.length - 1]) out.pop()
  return out.join('\n')
}

const indent = (s, n) =>
  s
    .split('\n')
    .map((l) => (l.trim() ? ' '.repeat(n) + l : ''))
    .join('\n')

// 코드 탭이 useDisplay()를 쓰도록 script에 import/구조분해를 넣고, 템플릿의 viewport 조건을 바꾼다
function applyViewport(file, script, tpl) {
  const rule = VIEWPORT_MAP[file]
  if (!rule) return [script, tpl]

  for (const [from, to] of rule.subs) {
    if (!tpl.includes(from)) throw new Error(`${file}: VIEWPORT_MAP의 "${from}"을 템플릿에서 찾지 못함`)
    tpl = tpl.replaceAll(from, to)
  }
  // subs에 적어둔 것만 치환하므로, 매핑 안 된 viewport 표현식이 남으면 여기서 잡는다
  if (tpl.includes('viewport')) {
    throw new Error(`${file}: 치환 후에도 "viewport"가 템플릿에 남아 있다 — VIEWPORT_MAP.subs에 항목을 추가하라`)
  }

  const lines = script.split('\n')
  let lastImport = -1
  lines.forEach((l, i) => {
    if (l.startsWith('import ')) lastImport = i
  })
  lines.splice(lastImport + 1, 0, "import { useDisplay } from 'vuetify'")

  const head = lines.slice(0, lastImport + 2)
  const rest = lines.slice(lastImport + 2)
  while (rest.length && !rest[0].trim()) rest.shift()
  const decl = `const { ${rule.keys.join(', ')} } = useDisplay()`
  // 뒤에 남는 코드가 없으면 구분용 빈 줄이 끝에 매달린다
  const tail = rest.length ? ['', ...rest] : []
  return [[...head, '', decl, ...tail].join('\n'), tpl]
}

// 뷰 파일 전체에서, 코드 탭에 들어갈 완성 컴포넌트 문자열을 만든다
function buildCode(file, source) {
  const script = /<script setup>\n([\s\S]*?)\n<\/script>/.exec(source)
  const preview = /<CodePreview[^>]*>\n([\s\S]*?)\n\s*<\/CodePreview>/.exec(source)
  if (!script || !preview) return null

  // 가이드 배관은 뺀다 — CodePreview import와 기존 code 변수
  let compScript = script[1]
    .replace(/^import CodePreview from '[^']*'\n/m, '')
    .replace(/\n*const code = (`[\s\S]*?`|'[^']*'|"[^"]*")\s*$/, '')
    .replace(/^\n+|\n+$/g, '')

  // 슬롯 래퍼(<template #default="{ viewport }">)는 CodePreview 전용이라 벗겨낸다
  const wrapper = /^\s*<template #default[^>]*>\n([\s\S]*)\n\s*<\/template>\s*$/.exec(preview[1])
  let tpl = dedent(wrapper ? wrapper[1] : preview[1])
  ;[compScript, tpl] = applyViewport(file, compScript, tpl)

  // 스타일은 반드시 script 블록 "뒤"에서 찾는다 — 앞에서부터 찾으면 code 문자열 안에 박제된
  // 낡은 사본이 먼저 걸려, 실제 스타일을 고쳐도 반영되지 않는다(그리고 --check는 통과해버린다)
  const afterScript = source.slice(script.index + script[0].length)
  const style = /(<style lang="scss" scoped>\n[\s\S]*?\n<\/style>)/.exec(afterScript)
  const parts = [`<script setup>\n${compScript}\n</script>`, `<template>\n${indent(tpl, 2)}\n</template>`]
  if (style) parts.push(style[1])

  return { script, code: parts.join('\n\n') }
}

// 재생성된 code 변수를 끼워 넣은 파일 전체 내용
function render(source, script, code) {
  // 백슬래시를 가장 먼저 이스케이프한다 — 나중에 하면 아래 이스케이프가 만든 백슬래시까지 다시 이스케이프된다.
  // 문자열 안의 `, ${ 는 템플릿 리터럴을 깨고, </script> 는 SFC 파서가 스크립트 블록을 끊는다
  const escaped = code
    .replaceAll('\\', '\\\\')
    .replaceAll('`', '\\`')
    .replaceAll('${', '\\${')
    .replaceAll('</script>', '<\\/script>')
  const kept = script[1]
    .replace(/\n*const code = (`[\s\S]*?`|'[^']*'|"[^"]*")\s*$/, '')
    .replace(/\n+$/, '')
  const start = source.indexOf(script[1])
  return source.slice(0, start) + `${kept}\n\nconst code = \`${escaped}\`` + source.slice(start + script[1].length)
}

const check = process.argv.includes('--check')
const stale = []
let done = 0

for (const file of readdirSync(VIEWS_DIR).filter((f) => f.endsWith('.vue')).sort()) {
  const path = join(VIEWS_DIR, file)
  const source = readFileSync(path, 'utf8')
  const built = buildCode(file, source)
  if (!built) {
    // EXPECTED_VIEWS에 있는데 못 읽었다면 "CodePreview 미사용"이 아니라 정규식 실패다 — 조용히 넘기지 않는다
    if (EXPECTED_VIEWS.has(file)) {
      throw new Error(`${file}: CodePreview를 쓰는 뷰인데 <script setup>/<CodePreview> 정규식이 못 읽었다`)
    }
    continue // CodePreview를 쓰지 않는 페이지 (Overview, Colors / Typography)
  }

  const next = render(source, built.script, built.code)
  if (next === source) {
    done++
    continue
  }
  if (check) {
    stale.push(file)
  } else {
    writeFileSync(path, next, 'utf8')
    console.log(`갱신 ${file} — 코드 탭 ${built.code.split('\n').length}줄`)
    done++
  }
}

if (check) {
  if (stale.length) {
    console.error(`코드 탭이 실제 내용과 어긋났습니다: ${stale.join(', ')}`)
    console.error('`npm run codetab`을 실행해 재생성하세요.')
    process.exit(1)
  }
  console.log(`코드 탭 ${done}개 동기화 확인`)
} else {
  console.log(`코드 탭 ${done}개 처리 완료`)
}
