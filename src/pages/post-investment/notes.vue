<template>
  <Page title="投后笔记">
    <data-board />
    <search-form @search="handleSearch" />
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
              查看
            </a-button>
            <a-button type="text" size="small" status="danger" @click="handleDelete(record)">
              <template #icon><icon-delete /></template>
              删除
            </a-button>
          </a-space>
        </template>
      </a-table>
    </a-card>

    <xhs-post-preview ref="xhsPreview" />

  </Page>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import Page from '../../components/Page.vue'
import XhsPostPreview from '@/components/XhsPostPreview.vue'
import XhsLogo from '@/components/XhsLogo.vue'  // Fixed import path
import DataBoard from '@/components/DataBoard.vue'
import SearchForm from '@/components/SearchForm.vue'

const xhsPreview = ref(null)

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
  // 构造小红书帖子格式的数据
  const postData = {
    images: ['https://placeholder.com/400x300'],  // 示例图片
    title: record.title,
    content: record.title,
    tags: ['投后管理', '项目笔记'],
    location: '广东',
    time: record.createTime,
    comments: [
      {
        id: 1,
        username: '系统',
        avatar: '',
        content: '创建了笔记',
        time: record.createTime,
        location: '广东',
        likes: 0
      }
    ]
  }
  
  xhsPreview.value?.open(postData)
}

// 移除未使用的 openDrawer 方法
const handleDelete = (record) => {
  console.log('Delete note:', record)
}

const handleSearch = (formData) => {
  console.log('搜索条件：', formData)
  // 实现搜索逻辑
}
</script>

<style scoped>
.arco-card {
  margin: 16px;
}
</style>