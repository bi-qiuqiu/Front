<template>
  <div>
    <footer class="footer" v-if="arr.length !== 0">
      <span class="todo-count"
        >剩余<strong>{{ count }}未完成</strong></span
      >
      <ul class="filters">
        <li>
          <a
            :class="{ selected: type === 'all' }"
            href="javascript:;"
            @click="change('all')"
            >全部</a
          >
        </li>
        <li>
          <a
            :class="{ selected: type === 'no' }"
            href="javascript:;"
            @click="change('no')"
            >未完成</a
          >
        </li>
        <li>
          <a
            :class="{ selected: type === 'yes' }"
            href="javascript:;"
            @click="change('yes')"
            >已完成</a
          >
        </li>
      </ul>
      <button class="clear-completed" @click="clear()" v-show="this.arr.some(item=> item.isDone)" >清除已完成</button>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['arr', 'type'],
  computed: {
    count() {
      let finish = this.arr.filter((item) => !item.isDone)
      return finish.length
    },
  },
  methods: {
    change(type) {
      this.$emit('footerChange', type)
    },
    clear() {
      this.$emit('footerClear')
    },
  },
}
</script>
