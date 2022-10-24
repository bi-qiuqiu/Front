<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.isDone }"
      v-for="(item, index) in showArr"
      :key="item.id"
    >
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.isDone" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="del(index)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['arr', 'type'],
  methods: {
    del(index) {
      this.$emit('mainDel', index)
    },
  },
    computed:{
    showArr(){
      if(this.type === 'no'){
        return this.arr.filter(item => !item.isDone) 
      }else if(this.type === 'yes'){
        return this.arr.filter(item => item.isDone)
      }else{
        return this.arr
      }
    },
  },
}
</script>
