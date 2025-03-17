<template>
  <div class="app">
    <a-layout>
      <Header />
      <a-layout class="main-layout">
        <nav-menu/>
        <a-layout-content class="content">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
      <a-layout-footer class="footer">
        <a-typography-text>© 2024 Social Runner</a-typography-text>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup>
import NavMenu from './components/NavMenu.vue'
import Header from './components/Header.vue'
</script>

<style lang="less" scoped>
// Variables
@primary-color: #165DFF;
@text-color: #1D2129;
@background-color: #f5f5f5;

// Mixins
.flex-center() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  min-height: 100vh;
}

.main-layout {
  margin-top: 60px;
  min-height: calc(100vh - 60px);
}

.content {
  margin-left: 250px;
  padding: 20px;
  background: @background-color;
  min-height: calc(100vh - 120px);
}

.footer {
  .flex-center();
  padding: 20px;
  background: #fff;
  border-top: 1px solid #e5e6eb;
}
</style> 