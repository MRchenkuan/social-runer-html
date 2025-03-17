import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/post-investment/notes'
  },
  {
    path: '/post-investment',
    name: 'PostInvestment',
    redirect: '/post-investment/notes',
    meta: {
      title: '投后管理',
      icon: 'money'
    },
    children: [
      {
        path: 'notes',
        name: 'PostInvestmentNotes',
        component: () => import('../pages/post-investment/notes.vue'),
        meta: {
          title: '投后笔记'
        }
      },
      {
        path: 'comments',
        name: 'PostInvestmentComments',
        component: () => import('../pages/post-investment/comments.vue'),
        meta: {
          title: '投后评论'
        }
      }
    ]
  },
  {
    path: '/brand-monitor',
    name: 'BrandMonitor',
    component: () => import('../pages/brand-monitor/index.vue'),
    meta: {
      title: '品牌监控',
      icon: 'eye'
    }
  },
  {
    path: '/category-clues',
    name: 'CategoryClues',
    component: () => import('../pages/category-clues/index.vue'),
    meta: {
      title: '品类线索',
      icon: 'apps'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../pages/settings/index.vue'),
    meta: {
      title: '管理',
      icon: 'settings'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 