<template>
  <div>
    <MyTable :arr="goodsList">
      <template #title>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #content="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-if="scope.row.inputVisible"
            v-focus
            @blur="esc(scope.row)"
            @keyup.enter="edit(scope.row)"
            @keyup.esc="esc(scope.row)"
            v-model="scope.row.inputValue"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            style="display: block"
            v-else
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            v-for="(str, ind) in scope.row.tags"
            :key="ind"
            class="label label-success"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue'
import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'
export default {
  data() {
    return {
      goodsList: [],
    }
  },
  components: {
    MyTable,
  },
  methods: {
    del(id) {
      this.goodsList = this.goodsList.filter((item) => item.id !== id)
    },
    edit(obj) {
      if (obj.inputValue.trim().length === 0) return alert('请输入数据')
      obj.tags.push(obj.inputValue)
      obj.inputVisible = false
      obj.inputValue = ''
    },
    esc(obj) {
      obj.inputVisible = false
      obj.inputValue = ''
    },
  },
  created() {
    axios({ url: '/api/goods' }).then((res) => {
      /*  console.log(res) */
      this.goodsList = res.data.data
    })
  },
}
</script>

<style lang="less" scoped>
.label {
  margin-right: 10px;
}
.label-success {
  background-color: rgb(255, 165, 0);
  border-radius: 3px;
  margin: 5px;
}
</style>
