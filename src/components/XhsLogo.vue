<template>
  <div class="xhs-logo">
    <img class="logo-icon" src="https://fe-video-qc.xhscdn.com/fe-platform/ed8fe781ce9e16c1bfac2cd962f0721edabe2e49.ico" alt="小红书" />
    <span v-if="showText" class="logo-text">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  showText: {
    type: Boolean,
    default: true
  },
  text: {
    type: String,
    default: '小红书'
  }
})
</script>

<style lang="less" scoped>
.xhs-logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  .logo-icon {
    width: 20px;
    height: 20px;
  }

  .logo-text {
    font-size: 16px;
    font-weight: 500;
    color: #1d2129;
  }
}
</style>