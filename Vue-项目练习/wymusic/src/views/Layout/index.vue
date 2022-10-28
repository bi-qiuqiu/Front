<template>
  <div>
    <van-nav-bar :title="activeTitle" fixed />
    <!-- 二级路由挂载点 -->
    <div class="main">
      <router-view></router-view>
    </div>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../../components/Tabbar.vue'
export default {
  data() {
    return {
      activeTitle: this.$route.meta.title,
    }
  },
  components: {
    Tabbar,
  },
  watch: {
    $route() {
      this.activeTitle = this.$route.meta.title
    },
  },
}
</script>

<style scoped>
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
