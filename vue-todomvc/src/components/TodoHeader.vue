<template>
  <header class="header">
    <h1>todos</h1>
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="all"
      @click="change"
    />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="name"
      @keyup="add"
    />
  </header>
</template>

<script>
export default {
  props: ['arr'],
  data() {
    return {
      name: '',
    }
  },
  computed: {
    all:{
        set(checked){
            this.arr.forEach(element => {element.isDone = checked});
        },
        get(){
            return this.arr.length !==0 && this.arr.every(item=>item.isDone)
        }
    }
  },
  methods: {
    add(e) {
      if (e.keyCode !== 13) return
      if (!this.name.trim()) return alert('请输入')
      this.$emit('headerAdd', this.name)
      this.name = ''
    },
    change(){
        this.$emit('headerAll',this.arr)
    }
  },
}
</script>
