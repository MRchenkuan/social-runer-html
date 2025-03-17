<template>
  <div class="app">
    <a-layout>
      <a-layout-header class="header">
        <a-space>
          <a-typography-title :heading="3" style="margin: 0; color: white;">
            Social Runner
          </a-typography-title>
          <a-button type="primary">开始跑步</a-button>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <a-card class="welcome-card">
          <template #title>欢迎使用 Social Runner</template>
          <template #extra>
            <a-button type="text">了解更多</a-button>
          </template>
          <p>这是一个使用 Arco Design Vue 构建的跑步社交应用</p>
        </a-card>
      </a-layout-content>
      <a-layout-footer class="footer">
        <a-typography-text>© 2024 Social Runner</a-typography-text>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
.app {
  min-height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: #165DFF;
}

.content {
  padding: 20px;
  background: #f5f5f5;
  min-height: calc(100vh - 120px);
}

.welcome-card {
  max-width: 600px;
  margin: 20px auto;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-top: 1px solid #e5e6eb;
}
</style> 