<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-row gutter="6">
      <van-col span="8" v-for="item in reList" :key="item.id">
        <van-image width="100%" height="3rem" fit="cover" :src="item.picUrl" />
        <p class="song_name">{{ item.name }}</p>
      </van-col>
    </van-row>
    <p class="title">最近歌单</p>
    <SongItem
      v-for="item in newList"
      :key="item.id"
      :name="item.name"
      :author="item.song.artists[0].name"
      :id="item.id"
    ></SongItem>
  </div>
</template>

<script>
import { newMusicApi, recommendMusicApi } from '../../api'
import SongItem from '../../components/SongItem.vue'
export default {
  components: { SongItem },
  data() {
    return {
      reList: [],
      newList: [],
    }
  },
  async created() {
    const res = await recommendMusicApi({ limit: 6 })
    this.reList = res.data.result
    const newres = await newMusicApi()
    this.newList = newres.data.result
  },
}
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
