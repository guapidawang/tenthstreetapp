<template>
   <div>
       <img src="https://image.10street.cn/image/4b/0a/4b0a199b73560a7c30bb9da483f01225.png" alt="" style="width:100%;">
       <van-grid :border="false" :column-num="5">
             <van-grid-item v-for="(value,index) in appliancesListstop" :key="index">
                 <van-image :src="value.imageUrl" />
             </van-grid-item>
             <van-grid-item v-for="(value,index) in appliancesListsbottom" :key="index">
                 <van-image :src="value.imageUrl" />
             </van-grid-item>
       </van-grid>
       <div class="limitedTimeBuying">
           <img src="	https://image.10street.cn/image/1f/89/1f893f9269a2e92b6ae52bda5c378caa.png" alt="" style="width:100%;">
           <van-swipe class="my-swipe" >
               <!-- <van-swipe-item v-for="(value,index) in limitedTimeBuyingBanner" :key="index" > -->
               <van-swipe-item class="my-swipe-image">
                   <!-- <img :src="value.imageUrl" alt="" style="width:100%;"> -->
                   <div class="my-swipe-image-box">
                       <img :src="limitedTimeBuyingBanner[0].imageUrl" alt="" style="width:90%;">
                       <p class="goodsName">{{limitedTimeBuyingBanner[0].goodsName}}</p>
                        <span>原价 {{limitedTimeBuyingBanner[0].goodsPrice}}</span>
                        <div class="vipprice">
                            <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="vipimg">￥{{limitedTimeBuyingBanner[0].vipPrice}}
                        </div>
                   </div>
                   <div class="my-swipe-image-box">
                       <img :src="limitedTimeBuyingBanner[1].imageUrl" alt="" style="width:90%;">
                       <p class="goodsName">{{limitedTimeBuyingBanner[1].goodsName}}</p>
                        <span>原价 {{limitedTimeBuyingBanner[1].goodsPrice}}</span>
                        <div class="vipprice">
                            <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="vipimg">￥{{limitedTimeBuyingBanner[1].vipPrice}}
                        </div>
                   </div>
                   <div class="my-swipe-image-box">
                       <img :src="limitedTimeBuyingBanner[2].imageUrl" alt="" style="width:90%;">
                       <p class="goodsName">{{limitedTimeBuyingBanner[2].goodsName}}</p>
                        <span>原价 {{limitedTimeBuyingBanner[2].goodsPrice}}</span>
                        <div class="vipprice">
                            <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="vipimg">￥{{limitedTimeBuyingBanner[2].vipPrice}}
                        </div>
                   </div>
               </van-swipe-item>
               <van-swipe-item class="my-swipe-image">
                   <!-- <img :src="value.imageUrl" alt="" style="width:100%;"> -->
                   <div class="my-swipe-image-box">
                       <img :src="limitedTimeBuyingBanner[3].imageUrl" alt="" style="width:90%;">
                       <p class="goodsName">{{limitedTimeBuyingBanner[3].goodsName}}</p>
                        <span>原价 {{limitedTimeBuyingBanner[3].goodsPrice}}</span>
                        <div class="vipprice">
                            <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="vipimg">￥{{limitedTimeBuyingBanner[3].vipPrice}}
                        </div>
                   </div>
                   <div class="my-swipe-image-box">
                       <img :src="limitedTimeBuyingBanner[4].imageUrl" alt="" style="width:90%;">
                       <p class="goodsName">{{limitedTimeBuyingBanner[4].goodsName}}</p>
                        <span>原价 {{limitedTimeBuyingBanner[4].goodsPrice}}</span>
                        <div class="vipprice">
                            <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="vipimg">￥{{limitedTimeBuyingBanner[4].vipPrice}}
                        </div>
                   </div>
                   <div class="my-swipe-image-box">
                       <img :src="limitedTimeBuyingBanner[5].imageUrl" alt="" style="width:90%;">
                       <p class="goodsName">{{limitedTimeBuyingBanner[5].goodsName}}</p>
                        <span>原价 {{limitedTimeBuyingBanner[5].goodsPrice}}</span>
                        <div class="vipprice">
                            <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="vipimg">￥{{limitedTimeBuyingBanner[5].vipPrice}}
                        </div>
                   </div>
               </van-swipe-item>
               <van-swipe-item class="my-swipe-image">
                   <!-- <img :src="value.imageUrl" alt="" style="width:100%;"> -->
                   <div class="my-swipe-image-box">
                       <img :src="limitedTimeBuyingBanner[6].imageUrl" alt="" style="width:100%;">
                       <p class="goodsName">{{limitedTimeBuyingBanner[6].goodsName}}</p>
                        <span>原价 {{limitedTimeBuyingBanner[6].goodsPrice}}</span>
                        <div class="vipprice">
                            <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="vipimg">￥{{limitedTimeBuyingBanner[6].vipPrice}}
                        </div>
                   </div>
                   <div class="my-swipe-image-box">
                       <img :src="limitedTimeBuyingBanner[7].imageUrl" alt="" style="width:75%;">
                       <p class="goodsName">{{limitedTimeBuyingBanner[7].goodsName}}</p>
                        <span>原价 {{limitedTimeBuyingBanner[7].goodsPrice}}</span>
                        <div class="vipprice">
                            <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="vipimg">￥{{limitedTimeBuyingBanner[7].vipPrice}}
                        </div>
                   </div>
                   <div class="my-swipe-image-box">
                       <img :src="limitedTimeBuyingBanner[8].imageUrl" alt="" style="width:100%;">
                       <p class="goodsName">{{limitedTimeBuyingBanner[8].goodsName}}</p>
                        <span>原价 {{limitedTimeBuyingBanner[8].goodsPrice}}</span>
                        <div class="vipprice">
                            <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="vipimg">￥{{limitedTimeBuyingBanner[8].vipPrice}}
                        </div>
                   </div>
               </van-swipe-item>
           </van-swipe>
       </div>
       <div class="dailyRecommendation" style="margin-bottom:20px;">
           <img src="https://image.10street.cn/image/37/1e/371ea4460c5862f088a11b494aad839f.png" alt="" style="width:100%;">
           <div class="dailyRecommendation_jiugongge">
               <van-grid :column-num="3">
                <!-- <van-grid-item v-for="(value,index) in newProductsImg" :key="index" :icon="value.imageUrl" :text="value.goodsName" /> -->
                     <van-grid-item v-for="(value,index) in dailyRecommendationimg" :key="index" class="dailyRecommendation_jiugongge_box">
                        <van-image :src="value.imageUrl" />
                        <p class="goodsName">{{value.goodsName}}</p>
                        <span>原价 {{value.goodsPrice}}</span>
                        <div class="vipprice">
                            <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="vipimg">￥{{value.vipPrice}}
                        </div>
                     </van-grid-item>
               </van-grid>
       </div>   
       </div>
       <div style="height:50px;"></div>
   </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
           appliancesListstop:[],
           appliancesListsbottom:[],
           limitedTimeBuyingBanner:[],
           dailyRecommendationimg:[]
        };
    },
    methods:{
         async getDigitalImg(){  
            const{data:appliancesListsImgs}=await axios.get("https://api.10street.cn/api/special?specialId=799&token=&_=1640449934649")
            console.log(JSON.parse(appliancesListsImgs.datas.itemList[2].itemData));
            this.appliancesListstop = JSON.parse(appliancesListsImgs.datas.itemList[2].itemData)
            this.appliancesListsbottom = JSON.parse(appliancesListsImgs.datas.itemList[4].itemData)
            this.limitedTimeBuyingBanner = JSON.parse(appliancesListsImgs.datas.itemList[8].itemData)
            this.dailyRecommendationimg = JSON.parse(appliancesListsImgs.datas.itemList[11].itemData)[0].goods
            console.log(this.limitedTimeBuyingBanner);
            console.log(this.dailyRecommendationimg);
         },
    },
    created(){
              this.getDigitalImg()
          }
}
</script>

<style lang="scss" scoped>
/deep/.van-grid-item__content{
    padding: 0px;
}
.limitedTimeBuying{
    margin-top: 1.666667rem;
    margin-bottom:1.5625rem;
      .my-swipe .van-swipe-item {
         color: #fff;
         line-height: .572917rem;
         text-align: center;
      }
      .my-swipe-image{
          display: flex;
          justify-content:space-around;
      }
}
/deep/.my-swipe-image{
        .van-grid-item__content::after{
            border-width: 0px;
        }
        .my-swipe-image-box{
            padding-left: 4%;
        }
        .van-grid-item__content--center{
            -webkit-align-items:stretch;
            align-items: stretch;
        }
           p{
            overflow:hidden; 
            text-overflow:ellipsis;  //显示省略号
            display:-webkit-box; 
            -webkit-box-orient:vertical;
            -webkit-line-clamp:1; 
            font-size: 0.45rem;
            color: #333;
            line-height: 0.9rem;
            height: 0.9rem;
            // white-space: nowrap; //文本不进行换行
        }
        span{
            color: #666;
            font-size: 0.45rem;
            height: 0.7rem;
            margin-top: -0.260417rem;

        }
        .vipprice{
            margin-top: .625rem;
            line-height: 1rem;
            color: #ff4a42;
            font-weight: bold;
            .vipimg{
            width: 8%;
        }
        }
        }
/deep/.van-swipe__indicator{
            width: 0px;
        }
.limitedTimeBuying .my-swipe .van-swipe-item{
            text-align:left;
        }
        /deep/.dailyRecommendation_jiugongge{
        .van-grid-item__content::after{
            border-width: 0px;
        }
        .dailyRecommendation_jiugongge_box{
            padding: .3125rem;
            border-radius: 0.3rem;
            overflow: hidden;
        }
        .van-grid-item__content--center{
            -webkit-align-items:stretch;
            align-items: stretch;
            margin-top: .520833rem;
        }
        /deep/.van-grid-item__content{
            padding: 0rem;
        }
        p{
            overflow:hidden; 
            text-overflow:ellipsis;  //显示省略号
            display:-webkit-box; 
            -webkit-box-orient:vertical;
            -webkit-line-clamp:1; 
            font-size: 0.45rem;
            color: #333;
            line-height: 0.9rem;
            height: 0.9rem;
            // white-space: nowrap; //文本不进行换行
        }
        span{
            color: #666;
            font-size: 0.45rem;
            height: 0.7rem;
            margin-top: -0.260417rem;

        }
        .vipprice{
            margin-top: .625rem;
            line-height: 1rem;
            color: #ff4a42;
            font-weight: bold;
            .vipimg{
            width: 8%;
        }
        }
        /deep/.explosion{
            img{width: 100%;}
            .van-grid-item__content{
           padding: 0px;
        }
    }
    .newProductsBanner{
        width: 100%;
    }
    }
</style>