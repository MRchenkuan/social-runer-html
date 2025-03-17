<template>
  <Page title="仪表盘">
    <div class="welcome-card">
      <a-card>
        <template #title>欢迎使用社媒维护平台</template>
        <template #extra>
          <a-button type="primary">开始使用</a-button>
        </template>
        <p>这里是平台的主要功能介绍和操作指南。</p>
      </a-card>
    </div>
  </Page>
</template>

<script setup>
import Page from '../../components/Page.vue'
</script>

<style lang="less" scoped>
.welcome-card {
  max-width: 600px;
  margin: 20px auto;
}
</style> 