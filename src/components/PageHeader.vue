<template>
  <div class="page-header">
    <a-page-header
      :style="{ background: 'var(--color-bg-2)' }"
      :title="title"
    >
      <template #breadcrumb>
        <a-breadcrumb>
          <a-breadcrumb-item>投后管理</a-breadcrumb-item>
          <a-breadcrumb-item>投后笔记</a-breadcrumb-item>
        </a-breadcrumb>
      </template>
      <!-- <template #subtitle>
        <a-space>
          <span>ArcoDesign Vue 2.0</span>
          <a-tag color="red" size="small">Default</a-tag>
        </a-space>
      </template>
      <template #extra>
        <a-space>
          <a-button>Cancel</a-button>
          <a-button type="primary">Save</a-button>
        </a-space>
      </template> -->
      {{ description }}
    </a-page-header>
  </div>
</template>

<script setup>
import { IconRefresh, IconPlus } from '@arco-design/web-vue/es/icon';
import { ref } from 'vue';

const title = ref('投后笔记');
const description = ref('社媒维护平台');
</script>

<style lang="less" scoped>
.page-header {
  background: #fff;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      .arco-breadcrumb {
        font-size: 14px;
      }
    }

    .right {
      .arco-btn {
        .arco-icon {
          margin-right: 4px;
        }
      }
    }
  }
}
</style> 