<template>
  <a-layout-header class="header">
    <div class="main">
      <div class="header-left">
        <div class="brand">logo</div>
        <div class="text">社媒维护平台</div>
      </div>
      <div class="header-right">
        <a-dropdown position="bl">
          <a-avatar :size="32" :style="{ backgroundColor: '#165DFF' }">
            <icon-user />
          </a-avatar>
          <template #content>
            <a-doption>
              <template #icon><icon-user /></template>
              个人信息
            </a-doption>
            <a-doption>
              <template #icon><icon-settings /></template>
              系统设置
            </a-doption>
            <a-doption>
              <template #icon><icon-export /></template>
              退出登录
            </a-doption>
          </template>
        </a-dropdown>
      </div>
    </div>
    <div class="polyfill"></div>
  </a-layout-header>
</template>

<script setup>
import { IconUser, IconSettings, IconExport } from '@arco-design/web-vue/es/icon'
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  
  .polyfill {
    display: block;
    height: 20px;
    width: 100%;
    background: #f5f5f5;
  }

  .main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background: #64346c;
    padding: 0 20px;
    height: 60px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .header-left {
    display: flex;
    align-items: center;
  }

  .header-right {
    display: flex;
    align-items: center;
  }

  .brand {
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-right: 20px;
  }

  .text {
    color: white;
    font-size: 18px;
  }

  :deep(.arco-dropdown-option) {
    padding: 8px 16px;
    
    .arco-icon {
      margin-right: 8px;
    }
  }
}
</style> 