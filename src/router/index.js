import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'overview', component: () => import('../views/OverviewView.vue') },
  { path: '/colors-typography', name: 'colors-typography', component: () => import('../views/ColorsTypographyView.vue') },
  { path: '/header', name: 'header', component: () => import('../views/HeaderView.vue') },
  { path: '/navigation', name: 'navigation', component: () => import('../views/NavigationView.vue') },
  { path: '/hero', name: 'hero', component: () => import('../views/HeroView.vue') },
  { path: '/cards', name: 'cards', component: () => import('../views/CardsView.vue') },
  { path: '/carousel', name: 'carousel', component: () => import('../views/CarouselView.vue') },
  { path: '/footer', name: 'footer', component: () => import('../views/FooterView.vue') },
  { path: '/fullmenu', name: 'fullmenu', component: () => import('../views/FullMenuView.vue') },
  { path: '/search-suggest', name: 'search-suggest', component: () => import('../views/SearchSuggestView.vue') },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
