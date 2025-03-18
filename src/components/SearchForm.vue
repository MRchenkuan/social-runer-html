<template>
  <a-form :model="formData" class="search-form" layout="vertical" size="small">
    <a-form-item field="keyword" label="笔记内容">
      <a-input v-model="formData.keyword" placeholder="输入人笔记内容" allow-clear/>
    </a-form-item>

    <a-form-item field="bloggerName" label="博主名称">
      <a-input v-model="formData.bloggerName" placeholder="请输入博主名称关键词" allow-clear />
    </a-form-item>

    <a-form-item field="category" label="内容分类">
      <a-select v-model="formData.category" placeholder="请选择内容分类" allow-clear >
        <a-radio value="all">全部</a-radio>
        <a-radio value="note">笔记</a-radio>
        <a-radio value="comment">评论</a-radio>
      </a-select>
    </a-form-item>

    <a-form-item label="关键词" field="keywordType">
      <a-input v-model="formData.keywordType" placeholder="输入人笔记内容" allow-clear/>
    </a-form-item>

    <a-form-item label="内容分类">
      <a-radio-group v-model="formData.contentType" type="button">
        <a-radio value="all">全部</a-radio>
        <a-radio value="note">笔记</a-radio>
        <a-radio value="comment">评论</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item label="内容题材">
      <a-radio-group v-model="formData.contentCategory" type="button">
        <a-radio value="all">全部</a-radio>
        <a-radio value="review">评测分享</a-radio>
        <a-radio value="other">其他</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item label="笔记发布时间">
      <a-select v-model="formData.timeRange" placeholder="请选择时间范围" allow-clear>
        <a-option value="all">全部</a-option>
        <a-option value="week">一周内</a-option>
        <a-option value="month">一个月内</a-option>
        <a-option value="threeMonths">三个月内</a-option>
        <a-option value="halfYear">半年内</a-option>
      </a-select>
    </a-form-item>

    <a-form-item label="自定义时间">
      <a-range-picker
        v-model="formData.customTimeRange"
        size="small"
        style="width: 240px"
      />
    </a-form-item>

    <a-form-item label="互动量范围">
      <a-input-number v-model="formData.interactionMin" placeholder="最小值" style="width: 120px" />
      <span class="separator">-</span>
      <a-input-number v-model="formData.interactionMax" placeholder="最大值" style="width: 120px" />
    </a-form-item>

    <a-form-item class="action-buttons">
      <a-space>
        <a-button type="primary" size="large" @click="handleSearch">查询</a-button>
        <a-button size="large" @click="handleReset">重置</a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  keyword: '',
  bloggerName: '',
  category: '',
  keywordType: 'all',
  contentType: 'all',
  contentCategory: 'all',
  timeRange: 'all',
  customTimeRange: [],
  interactionMin: null,
  interactionMax: null,
  accountType: 'all'
})

const emit = defineEmits(['search'])

const handleSearch = () => {
  emit('search', formData.value)
}

const handleReset = () => {
  formData.value = {
    keyword: '',
    bloggerName: '',
    category: '',
    keywordType: 'all',
    contentType: 'all',
    contentCategory: 'all',
    timeRange: 'all',
    customTimeRange: [],
    interactionMin: null,
    interactionMax: null,
    accountType: 'all'
  }
}
</script>
<style lang="less" scoped>
.search-form {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: grid;
  justify-content: center;
  align-items: end;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));  // 调整为更宽的列宽以适应垂直布局
  gap: 16px;

  :deep(.arco-form-item) {
    margin: 0;
    
    &-label {
      text-align: left;
      padding-bottom: 4px;
    }

    &-wrapper {
      width: 100%;
    }
  }

  .separator {
    margin: 0 8px;
    color: #86909c;
  }

  :deep(.arco-radio-group) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  // 处理一些特殊宽度的表单项
  :deep(.arco-form-item-full) {
    grid-column: 1 / -1;  // 跨越所有列
  }

  :deep(.arco-range-picker) {
    width: 100%;
  }

  :deep(.arco-input-number) {
    width: 100%;
  }

  .action-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
