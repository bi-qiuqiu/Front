<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="footerCheck"
        v-model="allCheck"
      />
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{allPrice}}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">
      结算 ({{ allCount }} )
    </button>
  </div>
</template>

<script>
export default {
  props: {
    arr: Array,
  },
  computed: {
    allCheck: {
      set(checked) {
        this.arr.forEach((element) => {
          element.goods_state = checked
        })
      },
      get() {
        return this.arr.every((item) => item.goods_state)
      },
    },
    allCount() {
      let checklist = this.arr.filter((item) => item.goods_state)
      return checklist.reduce((sum, item) => (sum += item.goods_count), 0)
    },
    allPrice() {
      let checklist = this.arr.filter((item) => item.goods_state)
      return (checklist.reduce((sum, item) => (sum += item.goods_count*item.goods_price), 0)).toFixed(2)
    },
  },
}
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>
