<template>
  <div>
 
    <!-- <div class="download_app">
      <img src="../assets/close_icon.png" alt="" class="download_app_closebutton">
      <img src="../assets/logo_icon.png" alt="" class="download_app_applogo">
      <div class="download_app_title">
        <h4>下载十号街APP</h4>
        <p>推荐心仪好物 当推荐官 赚推荐奖励</p>
      </div>
      <div class="download_app_downloadnow">
        立即下载
      </div>
    </div> -->
    <div class="top">
      <div class="top_nav_mid">
        <img src="../assets/signIndex.gif" alt="" class="top_nav_mid_signIndex">
        <img src="../assets/sousuo.png" alt="" class="top_nav_mid_sousou">
        <input type="search" placeholder="福利">
        <div class="top_nav_right">
          <img src="../assets/news.png" alt="" class="top_nav_mid_news">
          <span>消息</span>
        </div>
      </div>
      <div class="top_bottom">
        <van-tabs>
        <van-tab v-for="index in tablist" :key="index.id" :title="index.name">
        <div v-if="index.id === 1">
          <Recommended></Recommended>
        </div>
        <div v-if="index.id === 2">
          <Makeups></Makeups>
        </div>
        <div v-if="index.id === 3">
          <Digital></Digital>
        </div>
        <div v-if="index.id === 4">
          <Foods></Foods>
        </div>
        <div v-if="index.id === 5">
          <Dailyuse></Dailyuse>
        </div>
        <div v-if="index.id === 6">
          <Baby></Baby>
        </div>
        </van-tab>
      </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>

import Recommended from "@/views/Home/Recommended.vue"
import Makeups from "@/views/Home/Makeups.vue"
import Foods from "@/views/Home/Foods.vue"
import Digital from "@/views/Home/Digital.vue"
import Dailyuse from "@/views/Home/Dailyuse.vue"
import Baby from "@/views/Home/Baby.vue"

export default {

  components:{
    Recommended,
    Makeups,
    Foods,
    Digital,
    Dailyuse,
    Baby,
  },

  data() {
    return {
      tablist:[
        { 
          id:1,
          name:"精品推荐",
        },{
          id:2,
          name:"美妆养护",
        },
        {
          id:3,
          name:"数码电器",
        },
        {
          id:4,
          name:"美食生鲜",
        },
        {
          id:5,
          name:"家居日用",
        },
        {
          id:6,
          name:"母婴用品",
        },
      ]
    };
  },
}
</script>

<style lang="scss"scoped>
// @import "uview-ui/index.scss"
;
  // /deep/.download_app{
  //   position: fixed;
  //   top: 0rem;
  //   height:4rem;
  //   background-color:#FFD0CC;
  //   width: 100%;
  //   .download_app_closebutton{
  //     float: left;
  //     height: 1.26rem;
  //     width: 1.26rem;
  //     margin: 1.34rem 0.78rem 0.625rem 0.78rem;
  //   }
  //   .download_app_applogo{
  //     float: left;
  //     height: 2.81rem;
  //     width: 2.81rem;
  //     margin-top:0.54rem;
  
  //   }
  //   .download_app_title{
  //      float: left;
  //      margin-left: 0.43rem;
  //      line-height: 0rem;
  //       p{
  //         font-size:0.5rem;
  //      }
  //   }
  //   .download_app_downloadnow{
  //     height: 1.98rem;
  //     width: 5.46rem;
  //     color: white;
  //     float: right;
  //     background-color: #FF5B4D;
  //     text-align: center;
  //     line-height: 1.98rem;
  //     font-size: 0.85rem;
  //     border-radius:1.125rem;           //圆角矩形与下面配合使用
  //     -webkit-border-radius:1.125rem;   //与上方配合使用
  //     margin:0.93rem 0.78rem 0 0  ;
  //   }
  // }
  .top_nav_mid{
    background-color: #F55146;
    margin-top: 0rem;
    height: 3.125rem;
    width: 100%;
    display: flex;
    position: relative;
    span{
      color: white;
      font-size: 0.75rem;
      position: absolute;
      top: 1.625rem;
      right: 0.4rem;
    }
    input{
      border-radius:1.125rem;           
      -webkit-border-radius:1.125rem;
      -webkit-input-placeholder:1rem;
      border:0;
      margin: auto 0.2rem;
      height: 1.875rem;
      min-width: 20rem;
      max-width: 40rem;
      padding-left: 2rem;
    }
    .top_nav_mid_signIndex{
      width: 2.15rem;
      height: 2.15rem;
      margin: auto 0.5rem;
    }
    .top_nav_mid_sousou{
      width: 1rem;
      height: 1rem;
      position: absolute;
      top: 1.1rem;
      left: 4.0rem;
    }
    .top_nav_mid_news{
      width: 1rem;
      height: 1rem;
      position: absolute;
      top: 0.6rem;
      right: 0.625rem;
    }
  }
    /deep/.van-tab{
      color: white;
    }
    /deep/ .van-tabs__nav{
       background-color:#F55146 ;
      }
    /deep/.van-tabs__line{
      bottom: 21px;
      background: linear-gradient(274deg,rgba(255,255,255,0.25) 0%,rgba(255,255,255,1) 100%);
    }
 
</style>