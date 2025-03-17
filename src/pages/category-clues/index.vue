<template>
  <Page title="品类线索">
    <a-card>
      <template #title>线索发现</template>
      <a-table :data="[]" :columns="columns" />
    </a-card>
  </Page>
</template>

<script setup>
import Page from '@/components/Page.vue'

const columns = [
  { title: '线索名称', dataIndex: 'name' },
  { title: '品类', dataIndex: 'category' },
  { title: '发现时间', dataIndex: 'discoverTime' },
  { title: '优先级', dataIndex: 'priority' },
  { title: '操作', dataIndex: 'operations' }
]
</script> 