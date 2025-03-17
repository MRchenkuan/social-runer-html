<template>
  <Page title="品牌监控">
    <a-card>
      <template #title>舆情监控</template>
      <a-table :data="[]" :columns="columns" />
    </a-card>
  </Page>
</template>

<script setup>
import Page from '@/components/Page.vue'

const columns = [
  { title: '品牌名称', dataIndex: 'name' },
  { title: '舆情指数', dataIndex: 'index' },
  { title: '更新时间', dataIndex: 'updateTime' },
  { title: '趋势', dataIndex: 'trend' },
  { title: '操作', dataIndex: 'operations' }
]
</script> 