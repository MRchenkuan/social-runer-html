<template>
  <Page title="投后笔记">
    <a-card>
      <template #title>
        <a-space>
          <a-input-search placeholder="搜索笔记..." style="width: 300px" />
          <a-button type="primary">
            <template #icon><icon-plus /></template>
            新建笔记
          </a-button>
        </a-space>
      </template>

      <a-table :columns="columns" :data="data">
        <template #operations="{ record }">
          <a-space>
            <a-button type="text" size="small" @click="handleEdit(record)">
              <template #icon><icon-edit /></template>
              编辑
            </a-button>
            <a-button type="text" size="small" status="danger" @click="handleDelete(record)">
              <template #icon><icon-delete /></template>
              删除
            </a-button>
          </a-space>
        </template>
      </a-table>
    </a-card>
  </Page>
</template>

<script setup>
import { ref } from 'vue'
import Page from '../../components/Page.vue'
import { IconPlus, IconEdit, IconDelete } from '@arco-design/web-vue/es/icon'

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
  },
  {
    title: '操作',
    slotName: 'operations',
    width: 160,
  }
]

const data = ref([
  {
    id: 1,
    title: '项目A的投后跟进记录',
    createTime: '2024-01-15',
    updateTime: '2024-01-15'
  },
  {
    id: 1,
    title: '项目A的投后跟进记录',
    createTime: '2024-01-15',
    updateTime: '2024-01-15'
  },
  {
    id: 1,
    title: '项目A的投后跟进记录',
    createTime: '2024-01-15',
    updateTime: '2024-01-15'
  },
  {
    id: 1,
    title: '项目A的投后跟进记录',
    createTime: '2024-01-15',
    updateTime: '2024-01-15'
  },
  {
    id: 1,
    title: '项目A的投后跟进记录',
    createTime: '2024-01-15',
    updateTime: '2024-01-15'
  },
  {
    id: 1,
    title: '项目A的投后跟进记录',
    createTime: '2024-01-15',
    updateTime: '2024-01-15'
  },
  {
    id: 1,
    title: '项目A的投后跟进记录',
    createTime: '2024-01-15',
    updateTime: '2024-01-15'
  },
  {
    id: 1,
    title: '项目A的投后跟进记录',
    createTime: '2024-01-15',
    updateTime: '2024-01-15'
  },
  {
    id: 1,
    title: '项目A的投后跟进记录',
    createTime: '2024-01-15',
    updateTime: '2024-01-15'
  },
  {
    id: 1,
    title: '项目A的投后跟进记录',
    createTime: '2024-01-15',
    updateTime: '2024-01-15'
  },
  {
    id: 2,
    title: '项目B的季度回访笔记',
    createTime: '2024-01-14',
    updateTime: '2024-01-16'
  }
])

const handleEdit = (record) => {
  console.log('Edit note:', record)
}

const handleDelete = (record) => {
  console.log('Delete note:', record)
}
</script>

<style scoped>
.arco-card {
  margin: 16px;
}
</style> 