<template>
  <div class="todoapp">
    <TodoHeader @headerAdd="add" :arr="list"></TodoHeader>
    <TodoMain :arr="list" @mainDel="del" :type="type"></TodoMain>
    <TodoFooter
      :arr="list"
      :type="type"
      @footerChange="chang"
      @footerClear="clear"
    ></TodoFooter>
  </div>
</template>

<script>
import './styles/base.css'
import './styles/index.css'
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem('Todolist')) || [],
      type: 'all',
    }
  },
  methods: {
    del(index) {
      this.list.splice(index, 1)
    },
    add(name) {
      this.list.unshift({
        id: new Date(),
        name,
        isDone: false,
      })
    },
    chang(type) {
      this.type = type
    },
    clear() {
      this.list = this.list.filter((item) => !item.isDone)
    },
  },
  watch: {
    list: {
      deep: true,
      handler() {
        localStorage.setItem('Todolist', JSON.stringify(this.list))
      },
    },
  },
}
</script>

<style></style>
