<template>
  <div style="margin-bottom:5rem;">
    <div class="Recommended_top_banner_preferredproduct">
           <img src="https://image.10street.cn/image/ed/1e/ed1e32fcc4b906d92182a7b3e44e55bc.png" alt="">
           <span>更多&nbsp;></span>
    </div>
    <div>
           <!-- <div class="swiper-container">
               <div class="swiper-wrapper">
                <div
                 v-for="(item, i) in shihaoyouxuandata"
                 :key="i"
                 class="swiper-slide"
                >
                <div>
                 <img
                  :src="item.goods[0].imageUrl"
                  alt="商品图片"
                 >
                 <div>
                     <span class="goodsName">{{item.goods[0].goodsName}}</span>
                     <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" :v-for="vipPrice">
                     ￥
                     <em :v-for="vipPrice">{{item.goods[0].vipPrice}}</em>
                     <p>{{item.goods[0].goodsPrice}}</p>
                </div>
                </div>
                <div>
                 <img
                  :src="item.goods[0].imageUrl"
                  alt="商品图片"
                 >
                 <div>
                     <span class="goodsName">{{item.goods[0].goodsName}}</span>
                     <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" :v-for="vipPrice">
                     ￥
                     <em :v-for="vipPrice">{{item.goods[0].vipPrice}}</em>
                     <p>{{item.goods[0].goodsPrice}}</p>
                </div>
                </div>
                </div>
               </div>
          </div> -->
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-for="(item, i) in shihaoyouxuandata" :key="i" :width="175" :height="260" >
               <van-swipe-item>
                 <img :src="item.goods[0].imageUrl" alt="商品图片" class="priceimg">
                 <div>
                     <span class="goodsName">{{item.goods[0].goodsName}}</span>
                     <div>
                       <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="viplogo">
                    <span class="red">￥{{item.goods[0].vipPrice}}</span> <span class="gray">￥{{item.goods[0].goodsPrice}}</span>
                     </div> 
                </div>
               </van-swipe-item>
               <van-swipe-item>
                 <img :src="item.goods[1].imageUrl" alt="商品图片" class="priceimg">
                 <div>
                     <span class="goodsName">{{item.goods[1].goodsName}}</span>
                     <div>
                     <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="viplogo">
                     <span class="red">￥{{item.goods[1].vipPrice}}</span> <span class="gray">￥{{item.goods[1].goodsPrice}}</span>
                     </div>
                </div>
               </van-swipe-item>
               <van-swipe-item >
                 <img :src="item.goods[2].imageUrl" alt="商品图片" class="priceimg">
                 <div>
                     <span class="goodsName">{{item.goods[2].goodsName}}</span>
                     <div>
                     <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="viplogo">
                     <span class="red">￥{{item.goods[2].vipPrice}}</span> <span class="gray">￥{{item.goods[2].goodsPrice}}</span>
                     </div>
                </div>
               </van-swipe-item>
               <van-swipe-item>
                 <img :src="item.goods[3].imageUrl" alt="商品图片" class="priceimg">
                 <div>
                     <span class="goodsName">{{item.goods[3].goodsName}}</span>
                     <div>
                     <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt=""  class="viplogo">
                     <span class="red">￥{{item.goods[3].vipPrice}}</span><span class="gray">￥{{item.goods[3].goodsPrice}}</span> 
                     </div>
                </div>
               </van-swipe-item>
                <van-swipe-item>
                 <img :src="item.goods[4].imageUrl" alt="商品图片" class="priceimg">
                 <div>
                     <span class="goodsName">{{item.goods[4].goodsName}}</span>
                     <div><img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="viplogo">
                     <span class="red">￥{{item.goods[4].vipPrice}}</span> <span class="gray">￥{{item.goods[4].goodsPrice}}</span>
                     </div>  
                </div>
               </van-swipe-item>
                <van-swipe-item>
                 <img :src="item.goods[5].imageUrl" alt="商品图片" class="priceimg">
                 <div>
                     <span class="goodsName">{{item.goods[5].goodsName}}</span>
                     <div>
                     <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="viplogo">
                     <span class="red">￥{{item.goods[5].vipPrice}}</span> <span class="gray">￥{{item.goods[5].goodsPrice}}</span>
                     </div>
                </div>
               </van-swipe-item>
          </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
     props:["shihaoyouxuandata"],
    }
</script>

<style lang="scss" scoped>
.Recommended_top_banner_preferredproduct{
  margin-bottom: 1rem;
  img{
    width: 25%;
  }
  span{
    float: right;
    margin-right: 2rem;
  }
}
    /deep/.my-swipe {
      overflow: visible;
    .van-swipe__track{
        width: 705px;
    .van-swipe-item {
    text-align: center;
    border-radius: 0.34rem;
    box-shadow:0px 2px 6px #1111;
    // margin-right: 0.5rem;
    .priceimg{
      width: 100%;
      height: 11rem;
    }
    .goodsName{
      display: inline-block;
      width: 80%;
      margin: 0 auto;
      height: 1.5rem;
      font-size: 1rem;
      font-weight: bold;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      padding: 0.6rem 0 0.1rem;
    }
    .viplogo{
      width: 6%;
    }
    .red{
      color: #FF4A42;
      font-size: 1.2rem;
      font-weight: 600;
    }
    .gray{
      color: #999;
      font-size: 0.5rem;
      margin-left: 0.15rem;
    }
    }
     }
  }
</style>