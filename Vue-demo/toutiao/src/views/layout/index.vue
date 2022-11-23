<template>
  <div class="layout">
    <router-view></router-view>
    <van-tabbar v-model="active" class="tabbar">
      <van-tabbar-item replace to="/"
        ><i slot="icon" class="toutiao toutiao-shouye1"></i><span>首页 </span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/qa"
        ><i slot="icon" class="toutiao toutiao-wenda1"></i><span>问答 </span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/video"
        ><i slot="icon" class="toutiao toutiao-shipin"></i><span>视频 </span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/my"
        ><i slot="icon" class="toutiao toutiao-wode1"></i><span>{{$store.state.user? '我的':'未登录'}}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
    .tabbar {
        i.toutiao {
            font-size: 40px;
        }
    }
}
</style>
