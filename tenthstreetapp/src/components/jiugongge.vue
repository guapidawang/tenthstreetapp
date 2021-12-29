<template>
  <div>
      <van-grid :gutter="1" :column-num="5" class="jiugongge">
                    <van-grid-item >
                        <van-image :src="jgg[0].imageUrl"/>
                        {{jgg[0].title}}
                    </van-grid-item>
                    <van-grid-item >
                        <van-image :src="jgg[1].imageUrl" />
                        {{jgg[1].title}}
                    </van-grid-item>
                    <van-grid-item >
                        <van-image :src="jgg[2].imageUrl" />
                         {{jgg[2].title}}
                    </van-grid-item>
                    <van-grid-item >
                        <van-image :src="jgg[3].imageUrl"  />
                         {{jgg[3].title}}
                    </van-grid-item>
                    <van-grid-item >
                        <van-image :src="jgg[4].imageUrl" />
                         {{jgg[4].title}}
                    </van-grid-item>
                    <van-grid-item >
                        <van-image :src="jgg[5].imageUrl"  />
                         {{jgg[5].title}}
                    </van-grid-item>
                    <van-grid-item >
                        <van-image :src="jgg[6].imageUrl"  />
                         {{jgg[6].title}}
                    </van-grid-item>
                    <van-grid-item >
                        <van-image :src="jgg[7].imageUrl" />
                         {{jgg[7].title}}
                    </van-grid-item>
                    <van-grid-item >
                        <van-image :src="jgg[8].imageUrl" />
                         {{jgg[8].title}}
                    </van-grid-item>
                    <van-grid-item >
                        <van-image :src="jgg[9].imageUrl" />
                         {{jgg[9].title}}
                    </van-grid-item>
                </van-grid>
                <!-- 调整格子大小，渲染字体 -->
  </div>
</template>

<script>
export default {
      props:["jgg"]
}
</script>

<style lang="scss" scoped>
    /deep/.jiugongge{
        margin-top: 0.45rem;
        font-size: 0.75rem;
        }
    /deep/.van-grid-item__content{
              padding: 0.125rem 0.5rem;
          }
</style>