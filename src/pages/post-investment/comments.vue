<template>
  <Page title="投后评论">
    <a-card>
      <template #title>
        <a-space>
          <a-input-search placeholder="搜索评论..." style="width: 300px" />
          <a-button type="primary">
            <template #icon><icon-plus /></template>
            新建评论
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
    title: '项目',
    dataIndex: 'project',
  },
  {
    title: '评论内容',
    dataIndex: 'content',
  },
  {
    title: '评论时间',
    dataIndex: 'createTime',
  },
  {
    title: '评论人',
    dataIndex: 'author',
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
    project: '项目A',
    content: '本季度运营情况良好，继续保持',
    createTime: '2024-01-15',
    author: '张三'
  },
  {
    id: 2,
    project: '项目B',
    content: '需要关注现金流情况',
    createTime: '2024-01-14',
    author: '李四'
  }
])

const handleEdit = (record) => {
  console.log('Edit comment:', record)
}

const handleDelete = (record) => {
  console.log('Delete comment:', record)
}
</script>

<style scoped>
.arco-card {
  margin: 16px;
}
</style> 