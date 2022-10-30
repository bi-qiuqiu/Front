<template>
  <van-tabbar  route>
    <van-tabbar-item name="home" to="/layout/home" icon="home-o" >标签</van-tabbar-item>
    <van-tabbar-item name="search" to="/layout/search" icon="search" >标签</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 'home',
    }
  },
}
</script>

<style></style>
