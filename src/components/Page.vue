<template>
  <div class="page">
    <div class="page-header" ref="header">
      <div class="breadcrumb">
        <a-breadcrumb>
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>{{ title }}</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
    </div>
    <div class="page-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

// const header = ref(null)

// const handleScroll = () => {
//   if (!header.value) return
//   const headerRect = header.value.getBoundingClientRect()
//   isSticky.value = headerRect.top <= 50
// }

// onMounted(() => {
//   window.addEventListener('scroll', handleScroll)
// })

// onUnmounted(() => {
//   window.removeEventListener('scroll', handleScroll)
// })
</script>

<style lang="less" scoped>
.page {
  min-height: 100%;
  background: var(--color-bg-2);
  border-radius: 8px;

  .page-header {
    position: sticky;
    top: 80px;
    z-index: 10;
    padding: 16px 24px;
    background: var(--color-bg-2);
    border-bottom: 1px solid var(--color-border);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;

    &.is-sticky {
      background: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }
  }

  .breadcrumb {
    padding: 0;
  }

  .page-content {
    padding: 24px;
  }
}
</style> 