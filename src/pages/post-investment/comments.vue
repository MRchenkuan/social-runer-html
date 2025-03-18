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
              打开小红书
、            </a-button>
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
import XhsLogo from '@/components/XhsLogo.vue'  // 修改了导入路径

const xhsPreview = ref(null)

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
    author: '张三',
    // 可以添加更多字段
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
  // 构造小红书帖子数据
  const postData = {
    images: ['https://placeholder.com/400x300'],  // 示例图片，请替换为实际图片
    title: record.content,
    content: record.content,
    tags: ['投后管理', '项目评论'],
    location: '广东',
    time: record.createTime,
    comments: [
      {
        id: 1,
        username: record.author,
        avatar: '',
        content: record.content,
        time: record.createTime,
        location: '广东',
        likes: 0
      }
    ]
  }
  
  // 使用 nextTick 确保组件已挂载，并添加错误处理
  xhsPreview.value.open(postData)
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