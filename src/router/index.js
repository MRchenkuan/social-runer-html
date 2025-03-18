import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/post-investment/comments',
      name: 'post-investment-comments',
      component: () => import('../pages/post-investment/comments.vue'),
      meta: {
        title: '投后评论'
      }
    },
    {
      path: '/post-investment/notes',
      name: 'post-investment-notes',
      component: () => import('../pages/post-investment/notes.vue'),
      meta: {
        title: '投后笔记'
      }
    }
  ]
})

export default router