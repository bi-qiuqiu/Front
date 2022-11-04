<template>
  <div class="login-container">
    <van-nav-bar title="登录" left-arrow class="page-nav-bar" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      >
        <i slot="left-icon" class="toutiao toutiao-shouji1"></i>
      </van-field>
      <van-field
        v-model="password"
        name="验证码"
        placeholder="请输入验证码"
        :rules="[{ required: true, message: '请填写密码' }]"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <template #button>
          <van-button round size="small" class="send-sms-btn"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button block type="info" native-type="submit" class="login-btn">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {}
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .toutiao {
    font-size: 37px;
  }
  .send-sms-btn {
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
        background-color: #6db4fb;
        border: none;
    }
  }
}
</style>
