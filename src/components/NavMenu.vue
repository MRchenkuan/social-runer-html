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
import { markRaw } from 'vue'
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
    icon: markRaw(IconFile),
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
    icon: markRaw(IconEye),
    children: []
  },
  {
    key: 'category-clues',
    title: '品类线索',
    icon: markRaw(IconApps),
    children: []
  },
  {
    key: 'settings',
    title: '管理',
    icon: markRaw(IconSettings),
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
// 响应式断点
@screen-xs: 480px;
@screen-sm: 576px;
@screen-md: 768px;
@screen-lg: 992px;
@screen-xl: 1200px;
@screen-xxl: 1600px;

.nav-menu {
  position: fixed;
  top: 60px;
  left: 10px;
  width: 250px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;  // 修改背景为白色
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 99;

  @media screen and (max-width: @screen-md) {
    position: fixed;
    top: auto;
    left: 0;
    bottom: 0;
    width: 100%;
    border-radius: 0;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);

    :deep(.arco-menu) {
      display: flex;
      justify-content: space-around;
      padding: 5px 0;
    }

    :deep(.arco-menu-item) {
      flex: 1;
      text-align: center;
      padding: 8px 0;
      height: auto;
      min-width: 0;
    }

    :deep(.arco-icon) {
      margin: 0 0 4px;
      font-size: 20px;
      display: block;
    }

    :deep(.arco-menu-item-inner) {
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  :deep(.arco-menu) {
    height: 100%;
    background: transparent;
  }

  :deep(.arco-menu-item) {
    height: 40px;
    line-height: 40px;
    color: #1D2129;  // 修改文字颜色

    &:hover {
      background: #f2f3f5;  // 修改悬停背景色
    }
  }

  :deep(.arco-menu-selected) {
    background: #e8f3ff !important;  // 修改选中背景色
    color: #165DFF !important;  // 修改选中文字颜色
  }

  :deep(.arco-menu-inline-header) {
    color: #1D2129;  // 修改子菜单标题颜色

    &:hover {
      background: #f2f3f5;  // 修改悬停背景色
    }

    &.arco-menu-selected {
      background: #e8f3ff;  // 修改选中背景色
      color: #165DFF;  // 修改选中文字颜色
    }
  }

  :deep(.arco-icon) {
    margin-right: 8px;
    color: inherit;
  }

  :deep(a) {
    color: inherit;
    text-decoration: none;
  }
}
</style>