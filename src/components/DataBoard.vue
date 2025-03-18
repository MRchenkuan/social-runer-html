<template>
  <div class="data-board">
    <a-row :gutter="16">
      <a-col :span="4" v-for="item in items" :key="item.key">
        <a-card class="data-card" :style="{ background: item.background }">
          <div class="data-content">
            <div class="data-main">
              <span class="number">{{ item.value }}</span>
              <component :is="item.icon" class="icon" />
            </div>
            <div class="data-detail" v-if="item.details">
              <span v-for="detail in item.details" :key="detail.label">
                {{ detail.label }}: {{ detail.value }}
              </span>
            </div>
            <div class="data-title">{{ item.title }}</div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  IconFile, 
  IconMessage, 
  IconThumbDown,
  IconApps,  // Changed to correct icon name
  IconCalendar
} from '@arco-design/web-vue/es/icon'

const items = ref([
  {
    key: 'posts',
    title: '主贴数',
    value: '2,345',
    background: '#f6f3ff',
    icon: IconFile,
    details: [
      { label: '投诉', value: '568' },
      { label: '重要', value: '892' },
      { label: '普通', value: '885' }
    ]
  },
  {
    key: 'comments',
    title: '评论数',
    value: '5,678',
    background: '#f3f6ff',
    icon: IconMessage
  },
  {
    key: 'negative',
    title: '负面评价数',
    value: '89',
    background: '#fff3f6',
    icon: IconThumbDown
  },
  {
    key: 'sales',
    title: '销售线索数',
    value: '156',
    background: '#f3fff6',
    icon: IconApps  // Updated icon reference
  },
  {
    key: 'tasks',
    title: '今日任务',
    value: '45',
    background: '#fff9f3',
    icon: IconCalendar
  }
])
</script>

<style lang="less" scoped>
.data-board {
  margin-bottom: 16px;

  .data-card {
    border-radius: 8px;
    
    :deep(.arco-card-body) {
      padding: 16px;
    }
  }

  .data-content {
    .data-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;

      .number {
        font-size: 24px;
        font-weight: bold;
        color: #1d2129;
      }

      .icon {
        font-size: 24px;
        opacity: 0.5;
      }
    }

    .data-detail {
      display: flex;
      gap: 8px;
      margin-bottom: 8px;
      font-size: 12px;
      color: #86909c;
    }

    .data-title {
      font-size: 14px;
      color: #4e5969;
    }
  }
}
</style>