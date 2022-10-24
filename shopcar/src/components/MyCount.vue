<template>
  <div class="my-counter">
    <button
      type="button"
      class="btn btn-light"
      :disabled="objnum.goods_count === 1"
      @click="objnum.goods_count > 1 && objnum.goods_count--"
    >
      -
    </button>
    <input
      type="number"
      class="form-control inp"
      v-model.number="objnum.goods_count"
    />
    <button type="button" class="btn btn-light" @click="objnum.goods_count++">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    objnum: Object,
  },
  watch: {
    objnum: {
      deep: true,
      handler(){
       if(this.objnum.goods_count<1){
        this.objnum.goods_count=1
       } 
      }
    },
  },
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>
