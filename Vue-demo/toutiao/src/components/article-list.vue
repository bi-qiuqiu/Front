<template>
  <div class="article-list">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="(item, index) in list"
          :key="index"
          :title="item.title"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'
export default {
  name: 'ArticleList',
  props: {
    channel: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      loading: false,
      finished: false,
      error: false,
      list: [],
      timestamp: null,
      refreshing: false
    }
  },
  methods: {
    async onLoad () {
      try {
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: this.timestamp || Date.now()
        })
        this.list.push(...data.data.results)
        this.loading = false
        if (data.data.results.length) {
          this.timestamp = data.data.pre_timestamp
        } else {
          this.finished = true
        }
      } catch (err) {
        this.error = true
        this.loading = false
      }
    },
    onRefresh () {
      this.finished = false
      this.loading = true
      this.onLoad()
    }
  }
}
</script>

<style lang="less" scoped>
.article-list {
    height: 80vh;
    overflow-y: auto;
}
</style>
