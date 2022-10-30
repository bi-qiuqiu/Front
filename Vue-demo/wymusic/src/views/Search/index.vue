<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      shape="round"
      @input="inputfn"
    />
    <div class="search_wrap" v-if="searchList.length === 0">
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <span
          class="hot_item"
          v-for="(item, index) in hotList"
          :key="index"
          @click="edit(item.first)"
          >{{ item.first }}</span
        >
      </div>
    </div>
    <div class="search_wrap" v-else>
      <p class="hot_title">最佳匹配</p>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <SongItem
          v-for="item in searchList"
          :key="item.id"
          :author="item.ar[0].name"
          :id="item.id"
          :name="item.name"
        ></SongItem>
      </van-list>
    </div>
  </div>
</template>

<script>
import { hotSearchApi, searchResApi } from '../../api'
import SongItem from '../../components/SongItem.vue'
export default {
  components: { SongItem },
  data() {
    return {
      value: '',
      hotList: [],
      searchList: [],
      loading: false,
      finished: false,
      page: 1,
      timer: null,
    }
  },
  methods: {
    async edit(name) {
      this.finished = false
      this.page = 1
      this.value = name
      const res = await this.getList()
      this.searchList = res.data.result.songs
      this.loading = false
    },
    inputfn() {
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(async () => {
        this.page = 1
        this.finished = false
        if (this.value.trim().length === 0) {
          this.searchList = []
          return
        }
        const res = await this.getList()
        if (res.data.result.songs === undefined) {
          this.searchList = []
          return alert('小陈找不到啊')
        }
        this.searchList = res.data.result.songs
        this.loading = false
      }, 1000)
    },
    async getList() {
      return await searchResApi({
        keywords: this.value,
        limit: 20,
        offset: (this.page - 1) * 20,
      })
    },
    async onLoad() {
      this.page++
      const res = await this.getList()
      if (res.data.result.songs === undefined) {
        this.finished = true
        this.loading = false
        return
      }
      this.searchList = [...this.searchList, ...res.data.result.songs]
      this.loading = false
    },
  },
  async created() {
    const res = await hotSearchApi()
    this.hotList = res.data.result.hots
  },
}
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>
