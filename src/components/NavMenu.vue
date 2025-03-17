<template>
  <div class="nav-menu">
    <a-menu
      :selected-keys="[currentRoute]"
      :default-open-keys="menuItems.map(item => item.key)"
      style="width: 100%"
      @menu-item-click="handleMenuClick"
    >
      <template v-for="item in menuItems" :key="item.key">
        <a-sub-menu>
          <template #icon><component :is="item.icon" /></template>
          <template #title>{{ item.title }}</template>
          <a-menu-item v-for="child in item.children" :key="child.key">
            <router-link :to="child.path">{{ child.title }}</router-link>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { 
  IconFile,
  IconEye, 
  IconApps,
  IconSettings 
} from '@arco-design/web-vue/es/icon'

const menuItems = ref([
  {
    key: 'post-investment',
    title: '投后管理',
    icon: IconFile,
    children: [
      {
        key: 'post-investment-notes',
        title: '投后笔记',
        path: '/post-investment/notes'
      },
      {
        key: 'post-investment-comments',
        title: '投后评论',
        path: '/post-investment/comments'
      }
    ]
  },
  {
    key: 'brand-monitor',
    title: '品牌监控',
    icon: IconEye,
    children: []
  },
  {
    key: 'category-clues',
    title: '品类线索',
    icon: IconApps,
    children: []
  },
  {
    key: 'settings',
    title: '管理',
    icon: IconSettings,
    children: []
  }
])

const route = useRoute()
const currentRoute = computed(() => {
  const name = route.name?.toLowerCase() || ''
  if (name.startsWith('post-investment-')) return name
  return route.matched[0]?.name?.toLowerCase() || 'dashboard'
})

const handleMenuClick = (key) => {
  console.log('Menu item clicked:', key)
}
</script>

<style lang="less" scoped>
.nav-menu {
  position: fixed;
  top: 60px;
  left: 10px;
  width: 250px;
  border-radius: 8px;
  overflow: hidden;
  background: var(--color-bg-2);
  border-right: 1px solid var(--color-border);
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  z-index: 99;

  :deep(.arco-menu) {
    height: 100%;
  }

  :deep(.arco-menu-item) {
    height: 40px;
    line-height: 40px;
  }

  :deep(.arco-menu-selected) {
    background: var(--color-primary-light-1);
    color: var(--color-primary);
  }

  :deep(.arco-icon) {
    margin-right: 8px;
  }

  :deep(a) {
    color: inherit;
    text-decoration: none;
  }

  :deep(.arco-menu-inline-header) {
    &.arco-menu-selected {
      background: var(--color-primary-light-1);
    }
  }
}
</style> 