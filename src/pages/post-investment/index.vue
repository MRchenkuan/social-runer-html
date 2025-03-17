<template>
  <Page title="投后管理">
    <a-card>
      <template #title>项目概览</template>
      <a-table :data="[]" :columns="columns" />
    </a-card>
  </Page>
</template>

<script setup>
import Page from '@/components/Page.vue'

const columns = [
  { title: '项目名称', dataIndex: 'name' },
  { title: '投资金额', dataIndex: 'amount' },
  { title: '投资时间', dataIndex: 'date' },
  { title: '状态', dataIndex: 'status' },
  { title: '操作', dataIndex: 'operations' }
]
</script> 