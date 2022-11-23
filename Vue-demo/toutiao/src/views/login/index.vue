<template>
  <div class="login-container">
    <van-nav-bar
      title="登录"
      left-arrow
      class="page-nav-bar"
      @click-left="$router.push({ name: 'my'})"
    />
    <van-form @submit="onSubmit" ref="loginForm">
      <van-field
        v-model="user.mobile"
        type="number"
        name="mobile"
        placeholder="请输入手机号"
        maxlength="11"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入正确号码' },
        ]"
      >
        <i slot="left-icon" class="toutiao toutiao-shouji1"></i>
      </van-field>
      <van-field
        v-model="user.code"
        name="cord"
        type="number"
        maxlength="6"
        placeholder="请输入验证码"
        :rules="[
          { required: true, message: '请填写验证码' },
          { pattern: /^\d{6}$/, message: '请输入正确验证码' },
        ]"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <template #button>
          <van-count-down
            :time="1000 * 60"
            format="ss 秒"
            v-if="isShow"
            @finish="isShow = false"
          />
          <van-button
            v-else
            round
            size="small"
            class="send-sms-btn"
            @click="onSendSms"
            native-type="button"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button block type="info" native-type="submit" class="login-btn"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, sendSm } from '@/api/user'
export default {
  name: 'LoginPage',
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: ''
      },
      isShow: false
    }
  },
  methods: {
    async onSubmit () {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await login(this.user)
        this.$store.commit('setUser', res.data.data)
        this.$toast.success('登录成功')
        this.$router.push({ name: 'my' })
      } catch (err) {
        if (err.request.status === 400) {
          this.$toast.fail('手机号或者验证码错误')
        } else {
          this.$toast.fail('登录失败，请稍后重试')
        }
      }
    },
    async onSendSms () {
      try {
        await this.$refs.loginForm.validate('mobile')
      } catch (err) {
        return this.$toast.fail('号码不正确')
      }
      this.isShow = true
      try {
        await sendSm(this.user.mobile)
      } catch (err) {
        if (err.request.status === 429) {
          this.$toast.fail('发送关于频繁，请稍后重试')
        }
      }
    }
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
