<template>
  <div class="home">
    <van-nav-bar class="page-nav-bar" fixed>
      <van-button
        slot="title"
        type="info"
        round
        size="small"
        icon="search"
        class="search-btn"
        >搜索</van-button
      >
    </van-nav-bar>
    <van-tabs class="channel-tabs" v-model="active" animated swipeable>
      <van-tab v-for="item in channels" :title="item.name" :key="item.id">
        <AriticleList :channel="item"></AriticleList>
      </van-tab>
      <div slot="nav-right" class="placehoolder">1</div>
      <div slot="nav-right" class="hamburger-btn">
        <i class="toutiao toutiao-gengduo1"></i>
      </div>
    </van-tabs>
  </div>
</template>

<script>
import { getUserChannels } from '@/api/user'
import AriticleList from '@/components/article-list'
export default {
  name: 'home',
  components: {
    AriticleList
  },
  created () {
    this.loadChannels()
  },
  data () {
    return {
      active: 0,
      channels: []
    }
  },
  methods: {
    async loadChannels () {
      try {
        const { data } = await getUserChannels()
        this.channels = data.data.channels
      } catch (err) {
        this.$toast.fail('获取频道数据失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  padding-top: 172px;
  padding-bottom: 100px;
  /deep/.van-nav-bar__title {
    max-width: unset;
  }
  .search-btn {
    width: 555px;
    height: 65px;
    background-color: #5babfb;
    border: none;
    font-size: 28px;
    .van-icon-search {
      font-size: 36px;
    }
  }
  .channel-tabs {
    /deep/.van-tab {
      width: 200px;
      height: 80px;
      border-right: 1px solid #edeff3;
      font-size: 30px;
      color: rgb(184, 182, 182);
    }
    /deep/.van-tabs__wrap {
      position: fixed;
      z-index: 1;
      top: 92px;
      left: 0;
      right: 0;
    }
    /deep/.van-tab--active {
      color: #333;
    }
    /deep/.van-tabs__line {
      width: 35px;
      height: 6px;
      background-color: #3296fa;
      margin-bottom: 10px;
    }
    .placehoolder {
      width: 66px;
      height: 80px;
      color: #fff;
    }
    .hamburger-btn {
      position: fixed;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 66px;
      height: 80px;
      background-color: #fff;
      opacity: 0.8;
      i.toutiao {
        font-size: 33px;
      }
      &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 1px;
        height: 100%;
        background-image: url(~@/assets/gradient-gray-line.png);
        background-size: contain;
      }
    }
  }
}
</style>
