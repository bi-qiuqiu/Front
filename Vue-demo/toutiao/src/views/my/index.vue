<template>
  <div class="my">
    <div class="header user-info" v-if="user">
      <div class="base-info">
        <div class="left">
          <van-image
            round
            class="avatar"
            fit="cover"
            :src="userInfo.photo"
          />
          <span class="name">{{userInfo.name}}</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">{{userInfo.art_count}}</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">{{userInfo.follow_count}}</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">{{userInfo.fans_count}}</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">{{userInfo.like_count}}</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>
    <div class="header not-login" v-else>
      <div class="login-btn" @click="$router.push({ name: 'login' })">
        <img class="mobile-img" src="@/assets/mobile.png" alt="" />
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <van-grid :column-num="3" class="grid-nav" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-shoucang1"></i>
        <span slot="text" class="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-lishi"></i>
        <span slot="text" class="text">历史</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao toutiao-zuopin1"></i>
        <span slot="text" class="text">作品</span>
      </van-grid-item>
    </van-grid>
    <van-cell title="消息通知" is-link />
    <van-cell title="小智同学" is-link />
    <van-cell
      title="退出登录"
      class="lgout"
      v-show="user"
      @click="onLogout"
      clickable
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  name: 'my',
  data () {
    return {
      userInfo: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created () {
    if (this.user) {
      this.loadUserInfo()
    }
  },
  methods: {
    onLogout () {
      this.$dialog
        .confirm({
          title: '确认退出吗'
        })
        .then(() => {
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          // on cancel
        })
    },
    async loadUserInfo () {
      try {
        const { data } = await getUserInfo()
        this.userInfo = data.data
      } catch (err) {
        console.log(err)
        this.$toast.fail('获取数据失败请稍后')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my {
  .header {
    height: 361px;
    background-image: url('~@/assets/banner.png');
    background-size: cover;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-img {
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 32px;
        color: #fff;
      }
    }
  }
  .user-info {
    .base-info {
      box-sizing: border-box;
      height: 230px;
      padding: 76px 32px 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          width: 132px;
          height: 132px;
          margin-right: 24px;
          border: 4px solid #fff;
        }
        .name {
          font-size: 30px;
          color: #fff;
        }
      }
    }
    .data-stats {
      display: flex;
      .data-item {
        height: 130px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        .count {
          font-size: 36px;
        }
        .text {
          font-size: 23px;
        }
      }
    }
  }
  .grid-nav {
    .grid-item {
      height: 140px;
      i.toutiao {
        font-size: 45px;
      }
      .toutiao-shoucang1 {
        color: #eb5253;
      }
      .toutiao-lishi {
        color: #ff9d1d;
      }
      .toutiao-zuopin1 {
        color: blue;
      }
      span.text {
        font-size: 28px;
      }
    }
  }
  .lgout {
    color: #df6969;
    text-align: center;
    margin-top: 10px;
  }
}
</style>
