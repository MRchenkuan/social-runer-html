<template>
  <Page title="系统设置">
    <div class="settings-container">
      <a-card>
        <template #title>基本设置</template>
        <a-form :model="form" layout="vertical">
          <a-form-item field="siteName" label="站点名称">
            <a-input v-model="form.siteName" placeholder="请输入站点名称" />
          </a-form-item>
          <a-form-item field="theme" label="主题">
            <a-select v-model="form.theme" placeholder="请选择主题">
              <a-option value="light">浅色</a-option>
              <a-option value="dark">深色</a-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-button type="primary">保存设置</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </Page>
</template>

<script setup>
import { ref } from 'vue'
import Page from '../../components/Page.vue'

const form = ref({
  siteName: '社媒维护平台',
  theme: 'light'
})
</script>

<style lang="less" scoped>
.settings-container {
  max-width: 800px;
  margin: 20px auto;
}
</style> 