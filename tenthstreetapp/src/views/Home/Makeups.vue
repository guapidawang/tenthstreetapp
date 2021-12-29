<template>
   <div>
       <div class="famousBrand">
            <div>
                <img :src="famousBrandBannerDate" alt="">
                <van-grid :column-num="4" class="famousBrandImg">
                     <van-grid-item>
                        <van-image :src="famousBrandImg[0].imageUrl" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image :src="famousBrandImg[1].imageUrl" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image :src="famousBrandImg[2].imageUrl" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image :src="famousBrandImg[3].imageUrl" />
                    </van-grid-item>
                     <van-grid-item>
                        <van-image :src="famousBrandImg2[0].imageUrl" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image :src="famousBrandImg2[1].imageUrl" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image :src="famousBrandImg2[2].imageUrl" />
                    </van-grid-item>
                    <van-grid-item>
                        <van-image :src="famousBrandImg2[3].imageUrl" />
                    </van-grid-item>
                </van-grid>
            </div>
       </div>
       <div>
           <div class="newProducts">
               <img src="https://image.10street.cn/image/f9/fe/f9fef55869161aa6ecfddeea09ddb365.jpg" alt="" class="newProductsBanner">
               <van-grid :column-num="3">
                <!-- <van-grid-item v-for="(value,index) in newProductsImg" :key="index" :icon="value.imageUrl" :text="value.goodsName" /> -->
                     <van-grid-item v-for="(value,index) in newProductsImg" :key="index">
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
       <div>
           <div class="explosion">
               <img src="https://image.10street.cn/image/b7/78/b7782fb2d46c6466dd444da7498f69be.jpg" alt="" style="width:100%; margin-top:30px;">
               <van-grid :border="false" :column-num="3">
                   <van-grid-item v-for="(value,index) in explosionImg" :key="index">
                       <van-image :src="value.imageUrl"/>
                       <p class="goodsName">{{value.goodsName}}</p>
                        <span>原价 {{value.goodsPrice}}</span>
                        <div class="vipprice">
                            <img src="	https://api.10street.cn/wap/images/oneBuy/priceIcon.png" alt="" class="vipimg">￥{{value.vipPrice}}
                        </div>
                   </van-grid-item>
               </van-grid>
           </div>
       </div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
     data() {
         return {
            famousBrandBannerDate:[],
            famousBrandImg:[],
            famousBrandImg2:[],
            newProductsImg:[],
            explosionImg:[]
         };
     },
     methods:{
         async getfamousBrandBannerDate(){  //大牌美妆banner
            const{data:famousBrandBannerImage}=await axios.get("https://api.10street.cn/api/special?specialId=20&token=&_=1640275924323")
            this.famousBrandBannerDate = JSON.parse(famousBrandBannerImage.datas.itemList[0].itemData)[0].imageUrl
         },
         async getfamousBrandImgDate(){  //大牌美妆图片
            const{data:famousBrandImgs}=await axios.get("https://api.10street.cn/api/special?specialId=20&token=&_=1640275924323")
            const{data:famousBrandImgs2}=await axios.get("https://api.10street.cn/api/special?specialId=20&token=&_=1640275924323")
            this.famousBrandImg = JSON.parse(famousBrandImgs.datas.itemList[1].itemData)
            this.famousBrandImg2=JSON.parse(famousBrandImgs2.datas.itemList[2].itemData)
            console.log(this.famousBrandImg);
         },
         async getNewProductsImgs(){  //每日上新图片
            const{data:newProductsImgsData}=await axios.get("https://api.10street.cn/api/special?specialId=20&token=&_=1640275924323")
            console.log(JSON.parse(newProductsImgsData.datas.itemList[4].itemData)[0].goods);
            this.newProductsImg = JSON.parse(newProductsImgsData.datas.itemList[4].itemData)[0].goods
            console.log(this.newProductsImg);
         },
         async getexplosionImg(){  //美妆爆款清单
            const{data:explosionImgs}=await axios.get("https://api.10street.cn/api/special?specialId=20&token=&_=1640275924323")
            console.log(JSON.parse(explosionImgs.datas.itemList[6].itemData));
            this.explosionImg = JSON.parse(explosionImgs.datas.itemList[6].itemData)[0].goods
            console.log(this.explosionImg);
         },
     },
     created(){
             this.getfamousBrandBannerDate()
             this.getfamousBrandImgDate()
             this.getNewProductsImgs()
             this.getexplosionImg()
         }
}
</script>

<style lang="scss" scoped>
    /deep/.famousBrand{
        img{width: 100%;}
        .famousBrandImg{
            margin-top: -0.2rem;
        }
        .van-grid-item__content{
           padding: 0px;
           margin-top: 5px;
        }
    }
    .newProductsBanner{
        width: 100%;
    }
    /deep/.newProducts{
        .van-grid-item__content::after{
            border-width: 0px;
        }
        .van-grid-item__content--center{
            -webkit-align-items:stretch;
            align-items: stretch;
            margin-top: .520833rem;
        }
        /deep/.van-grid-item__content{
            padding: 0px;
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
    /deep/.explosion{
        margin-bottom: 3.645833rem;
        .van-grid-item__content::after{
            border-width: 0px;
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
</style>