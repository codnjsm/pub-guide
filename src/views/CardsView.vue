<script setup lang="ts">
import CodePreview from '../components/guide/CodePreview.vue'

const categories: {
  title: string
  items: {
    title: string
    subtitle: string
    badges: { badge?: boolean; description?: string; link?: string }
  }[]
}[] = [
  {
    title: 'Category 1',
    items: [
      { title: 'title1', subtitle: 'subtitle1', badges: { badge: true } },
      {
        title: 'title2',
        subtitle: 'subtitle2',
        badges: { badge: true, description: 'description1' },
      },
      { title: 'title3', subtitle: 'subtitle3', badges: { badge: true, link: 'link1' } },
      { title: 'title4', subtitle: 'subtitle4', badges: {} },
      { title: 'title5', subtitle: 'subtitle5', badges: {} },
      { title: 'title6', subtitle: 'subtitle6', badges: {} },
    ],
  },
  {
    title: 'Category 2',
    items: [
      { title: 'title1', subtitle: 'subtitle1', badges: { badge: true } },
      { title: 'title2', subtitle: 'subtitle2', badges: { description: 'description2' } },
      { title: 'title3', subtitle: 'subtitle3', badges: {} },
      { title: 'title4', subtitle: 'subtitle4', badges: {} },
      { title: 'title5', subtitle: 'subtitle5', badges: {} },
    ],
  },
  {
    title: 'Category 3',
    items: [
      { title: 'title1', subtitle: 'subtitle1', badges: { badge: true } },
      { title: 'title2', subtitle: 'subtitle2', badges: { badge: true, link: 'link2' } },
      { title: 'title3', subtitle: 'subtitle3', badges: {} },
      { title: 'title4', subtitle: 'subtitle4', badges: {} },
      { title: 'title5', subtitle: 'subtitle5', badges: {} },
      { title: 'title6', subtitle: 'subtitle6', badges: {} },
      { title: 'title7', subtitle: 'subtitle7', badges: {} },
    ],
  },
]

const code = `<script setup lang="ts">
const categories: {
  title: string
  items: {
    title: string
    subtitle: string
    badges: { badge?: boolean; description?: string; link?: string }
  }[]
}[] = [
  {
    title: 'Category 1',
    items: [
      { title: 'title1', subtitle: 'subtitle1', badges: { badge: true } },
      {
        title: 'title2',
        subtitle: 'subtitle2',
        badges: { badge: true, description: 'description1' },
      },
      { title: 'title3', subtitle: 'subtitle3', badges: { badge: true, link: 'link1' } },
      { title: 'title4', subtitle: 'subtitle4', badges: {} },
      { title: 'title5', subtitle: 'subtitle5', badges: {} },
      { title: 'title6', subtitle: 'subtitle6', badges: {} },
    ],
  },
  {
    title: 'Category 2',
    items: [
      { title: 'title1', subtitle: 'subtitle1', badges: { badge: true } },
      { title: 'title2', subtitle: 'subtitle2', badges: { description: 'description2' } },
      { title: 'title3', subtitle: 'subtitle3', badges: {} },
      { title: 'title4', subtitle: 'subtitle4', badges: {} },
      { title: 'title5', subtitle: 'subtitle5', badges: {} },
    ],
  },
  {
    title: 'Category 3',
    items: [
      { title: 'title1', subtitle: 'subtitle1', badges: { badge: true } },
      { title: 'title2', subtitle: 'subtitle2', badges: { badge: true, link: 'link2' } },
      { title: 'title3', subtitle: 'subtitle3', badges: {} },
      { title: 'title4', subtitle: 'subtitle4', badges: {} },
      { title: 'title5', subtitle: 'subtitle5', badges: {} },
      { title: 'title6', subtitle: 'subtitle6', badges: {} },
      { title: 'title7', subtitle: 'subtitle7', badges: {} },
    ],
  },
]
<\/script>

<template>
  <div class="cards">
    <div v-for="cat in categories" :key="cat.title" class="cards__category">
      <div class="cards__head">
        <span class="cards__head-title">{{ cat.title }}</span>
        <span class="cards__head-num">({{ cat.items.length }})</span>
      </div>

      <div class="cards__grid">
        <a
          v-for="item in cat.items"
          :key="item.title"
          href="#"
          target="_blank"
          class="cards__item"
        >
          <div class="cards__item-img">
            <span v-if="item.badges.badge" class="cards__badge cards__badge--corner">NEW</span>
            <v-icon icon="mdi-car" size="40" class="cards__item-icon" />
          </div>
          <span class="cards__item-title">{{ item.title }}</span>
          <span class="cards__item-subtitle">{{ item.subtitle }}</span>
          <span v-if="item.badges.description" class="cards__badge cards__badge--inline">
            {{ item.badges.description }}
          </span>
          <span v-if="item.badges.link" class="cards__badge cards__badge--inline">
            <v-icon icon="mdi-open-in-new" size="12" />
            {{ item.badges.link }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards {
  background-color: #fff;
  padding: 20px;
}
.cards__category {
  margin-bottom: 40px;
}

.cards__head {
  margin: 0 0 16px;
  padding-top: 12px;
  border-top: 2px solid #000;
}

.cards__head-title {
  font-size: 1.125rem;
  font-weight: 700;
}

.cards__head-num {
  margin-left: 4px;
  color: #999;
  font-size: 1.125rem;
  font-weight: 700;
}

.cards__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 8px;
}

.cards__item {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #fff;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: background-color 0.2s;
}

.cards__item:hover {
  background: #f6f3f2;
}

.cards__item-img {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  margin-bottom: 12px;
  background: #e5e5e5;
}

.cards__item-icon {
  color: #999;
}

.cards__item-title {
  font-size: 0.9375rem;
  font-weight: 700;
}

.cards__item-subtitle {
  margin-top: 2px;
  color: #666;
  font-size: 0.8125rem;
}

.cards__badge {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  width: fit-content;
  font-size: 0.75rem;
  font-weight: 700;
}

.cards__badge--corner {
  position: absolute;
  top: 6px;
  left: 6px;
  padding: 2px 6px;
  background: #007fa8;
  color: #fff;
}

.cards__badge--inline {
  margin-top: 6px;
  color: #002c5f;
}
</style>`
</script>

<template>
  <v-container class="guide-container">
    <h1 class="text-scale-h1 mb-2">Cards</h1>
    <p class="text-scale-body text-high-emphasis mb-2">
      카테고리별로 항목을 나열하는 사각형 카드 그리드입니다.
    </p>
    <ul class="text-scale-body text-high-emphasis pl-5 mb-8">
      <li>이미지 · 타이틀 · 서브타이틀 순으로 배치</li>
      <li>호버시 배경이 옅은 색으로 바뀜</li>
      <li>클릭하면 새 창으로 링크 열림</li>
      <li>이미지 위 코너 배지 하나와, 아이콘이 있거나 없는 인라인 배지 두 종류</li>
      <li>실제 이미지 대신 회색 플레이스홀더로 표시</li>
    </ul>

    <CodePreview :code="code">
      <div class="cards">
        <div v-for="cat in categories" :key="cat.title" class="cards__category">
          <div class="cards__head">
            <span class="cards__head-title">{{ cat.title }}</span>
            <span class="cards__head-num">({{ cat.items.length }})</span>
          </div>

          <div class="cards__grid">
            <a
              v-for="item in cat.items"
              :key="item.title"
              href="#"
              target="_blank"
              class="cards__item"
            >
              <div class="cards__item-img">
                <span v-if="item.badges.badge" class="cards__badge cards__badge--corner">NEW</span>
                <v-icon icon="mdi-car" size="40" class="cards__item-icon" />
              </div>
              <span class="cards__item-title">{{ item.title }}</span>
              <span class="cards__item-subtitle">{{ item.subtitle }}</span>
              <span v-if="item.badges.description" class="cards__badge cards__badge--inline">
                {{ item.badges.description }}
              </span>
              <span v-if="item.badges.link" class="cards__badge cards__badge--inline">
                <v-icon icon="mdi-open-in-new" size="12" />
                {{ item.badges.link }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </CodePreview>
  </v-container>
</template>

<style lang="scss" scoped>
.cards {
  background-color: #fff;
  padding: 20px;
}
.cards__category {
  margin-bottom: 40px;
}

.cards__head {
  margin: 0 0 16px;
  padding-top: 12px;
  border-top: 2px solid #000;
}

.cards__head-title {
  font-size: 1.125rem;
  font-weight: 700;
}

.cards__head-num {
  margin-left: 4px;
  color: #999;
  font-size: 1.125rem;
  font-weight: 700;
}

.cards__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 8px;
}

.cards__item {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #fff;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: background-color 0.2s;
}

.cards__item:hover {
  background: #f6f3f2;
}

.cards__item-img {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  margin-bottom: 12px;
  background: #e5e5e5;
}

.cards__item-icon {
  color: #999;
}

.cards__item-title {
  font-size: 0.9375rem;
  font-weight: 700;
}

.cards__item-subtitle {
  margin-top: 2px;
  color: #666;
  font-size: 0.8125rem;
}

.cards__badge {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  width: fit-content;
  font-size: 0.75rem;
  font-weight: 700;
}

.cards__badge--corner {
  position: absolute;
  top: 6px;
  left: 6px;
  padding: 2px 6px;
  background: #007fa8;
  color: #fff;
}

.cards__badge--inline {
  margin-top: 6px;
  color: #002c5f;
}
</style>
