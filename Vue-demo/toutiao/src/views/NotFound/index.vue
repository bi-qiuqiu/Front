<template>
  <div class="not">
    <van-button round color="linear-gradient(to right, #ff6034, #ee0a24)" to="/" class="back">返回首页</van-button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.not {
  width: 100vw;
  height: 100vh;
  background-image: url('https://preview.qiantucdn.com/58pic/20220319/00K58PIC7c98M796tR505_PIC2018_PIC2018.jpg!qt324_nowater_jpg');
  background-size: 100% 100%;
  position: relative;
  .back {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>
