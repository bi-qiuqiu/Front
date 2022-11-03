<template>
  <div id="app">
    <h1>头条头版</h1>
    <van-button type="primary" class="try">主要按钮</van-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.try {
  margin-top: 20px;
}
</style>
