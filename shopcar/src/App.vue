<template>
  <div>
    <MyHeader background="pink" color="" title="购物车"></MyHeader>
    <div class="main">
      <MyGoods v-for="item in list" :key="item.id" :obj="item"></MyGoods>
    </div>
    <MyFooter :arr="list"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyGoods from './components/MyGoods.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.$axios({
      url: '/api/cart',
    }).then(res => {
      this.list = res.data.list
    })
  },
}
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
