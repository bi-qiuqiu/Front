<template>
  <div>
    <MyHeader background="pink" color="white" title="TaBBar"></MyHeader>
    <div class="main">
      <keep-alive><component :is="comeName"></component></keep-alive>
    </div>
    <MyTaBar :arr="tabList" @taSwitch="Switch"></MyTaBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyTaBar from './components/MyTaBar.vue'
import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo.vue'
export default {
  components: {
    MyHeader,
    MyTaBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  data() {
    return {
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
      comeName: 'MyGoodsList',
    }
  },
  methods: {
    Switch(name) {
      this.comeName = name
    },
  },
}
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 51px;
}
</style>
