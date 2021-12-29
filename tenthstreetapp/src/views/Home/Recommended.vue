<template>
   <div>
       <div class="Recommended_top">
            <div class="Recommended_top_banner">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">             <!--banner-->
                    <van-swipe-item><img :src="bannerImg[0].imageUrl" alt=""></van-swipe-item>
                    <van-swipe-item><img :src="bannerImg[1].imageUrl" alt=""></van-swipe-item>
                    <van-swipe-item><img :src="bannerImg[2].imageUrl" alt=""></van-swipe-item>
                    <van-swipe-item><img :src="bannerImg[3].imageUrl" alt=""></van-swipe-item>
                    <van-swipe-item><img :src="bannerImg[4].imageUrl" alt=""></van-swipe-item>
                    <van-swipe-item><img :src="bannerImg[5].imageUrl" alt=""></van-swipe-item>
                </van-swipe>
                <jiugongge :jgg="jiugonggeItemData"></jiugongge>                                   <!--九宫格-->
                <xinpinshoufa :xinpinshoufa_img="newProduct"></xinpinshoufa>                       <!--新品首发-->
                <div class="Recommended_top_banner_headlines">                                     <!--十条街头条-->
                      <img src="https://image.10street.cn/image/87/80/87808d64465d6908d5e049264029e87d.png" alt="">
                      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"  style="height: 38px;" vertical>
                            <van-swipe-item>
                                <span class="my-swipe-red">{{headlines[0].hots[0].hot}}</span>
                                <span>{{headlines[0].hots[0].content}}</span>
                            </van-swipe-item>
                            <van-swipe-item>
                                <span class="my-swipe-red">{{headlines[0].hots[1].hot}}</span>
                                <span>{{headlines[0].hots[1].content}}</span>
                            </van-swipe-item>
                            <van-swipe-item>
                                <span class="my-swipe-red">{{headlines[0].hots[2].hot}}</span>
                                <span>{{headlines[0].hots[2].content}}</span>
                            </van-swipe-item>
                      </van-swipe>             
                </div>
                <div class="Recommended_top_banner_group">
                    <div class="Recommended_top_banner_group_xianshimiaosha">
                        <span class="seckill">限时秒杀</span>
                        <div class="time">
                            <div><span>0点场</span> 00:00:00</div>
                        </div>
                    </div>
                    <div class="chaozhipintuan">
                        <div class="pintuan">超值拼团</div>
                        <div class="socks">8.9拼钢枪运动袜</div>
                        <img src="https://image.10street.cn/image/14/bb/14bbd188d6f46621b5bf37e2079106ce.jpg" alt="">
                    </div>
                </div>
                <shihaoyouxuan :shihaoyouxuandata="preferredProductData"></shihaoyouxuan>
            </div>
       </div>
   </div>
</template>
  
<script>
import axios from 'axios'
import jiugongge from "@/components/jiugongge.vue"
import xinpinshoufa from "@/components/xinpinshoufa.vue"
import shihaoyouxuan from "@/components/shihaoyouxuan.vue"
export default {
    components:{
       jiugongge,
       xinpinshoufa,
       shihaoyouxuan
     },
    data() {
        return {
            bannerImg:[],
            jiugonggeItemData:[],
            newProduct:[],
            headlines:[],
            preferredProductData:[]
        };
    },
     methods:{
         async getbanner(){  //轮播图图片
            const{data:bannerimg}=await axios.get("https://api.10street.cn/api/special?specialId=1131&token=&_=1639678887080")
            this.bannerImg = JSON.parse(bannerimg.datas.itemList[0].itemData)[0].images;
            console.log(JSON.parse(bannerimg.datas.itemList[0].itemData)[0].images);
            console.log(this.bannerImg);
         },
         async getJiugonggeData(){  //九宫格
            const{data:JiugonggeData}=await axios.get("https://api.10street.cn/api/special?specialId=1131&token=&_=1639678887080")
            this.jiugonggeItemData = JSON.parse(JiugonggeData.datas.itemList[1].itemData);
            console.log(JSON.parse(JiugonggeData.datas.itemList[1].itemData));
            console.log(this.jiugonggeItemData);
            console.log(this.jiugonggeItemData[0].title);
         },
         async getNewproDuctData(){  //新品首发
            const{data:newproDuctData}=await axios.get("https://api.10street.cn/api/special?specialId=1131&token=&_=1639678887080")
            const{data:newproDuctData2}=await axios.get("https://api.10street.cn/api/special?specialId=1131&token=&_=1639678887080")
            this.newProduct = JSON.parse(newproDuctData.datas.itemList[3].itemData);
            this.newProduct.push(JSON.parse(newproDuctData2.datas.itemList[4].itemData))
            console.log(this.newProduct);
         },
         async getHeadlines(){  //十条街头条
            const{data:getHeadlines}=await axios.get("https://api.10street.cn/api/special?specialId=1131&token=&_=1639678887080")
            this.headlines = JSON.parse(getHeadlines.datas.itemList[5].itemData);
            console.log(JSON.parse(getHeadlines.datas.itemList[5].itemData));
         },
         async getpreferredProductData(){  //十号优选banner
            const{data:preferredData}=await axios.get("https://api.10street.cn/api/special?specialId=1131&token=&_=1639678887080")
            this.preferredProductData = JSON.parse(preferredData.datas.itemList[11].itemData);
            console.log(JSON.parse(preferredData.datas.itemList[11].itemData));
         },
     },
      created(){
          this.getbanner()
          this.getJiugonggeData()
          this.getNewproDuctData()
          this.getHeadlines()
          this.getpreferredProductData()
      }
}
</script>

<style lang="scss" scoped>
    .Recommended_top{
        width: 100%;
        height: 500px;
        background:url(https://api.10street.cn/wap/images/home_2019/home_top_bg.png) 0px 0px / 100% no-repeat; //这个100%是图片大小100%
        .Recommended_top_banner{
            width: 90%;
            margin: 0 auto;
            border-radius:1rem;
            // -webkit-border-radius:1rem; 
            overflow: hidden;
            .my-swipe .van-swipe-item {
                color: #fff;
                font-size: 20px;
                line-height: 150px;
                text-align: center;
                // background-color: #39a9ed;
                img{
                    display: block;
                    width: 100%;
                    position: relative;
                    padding: 0px;
                    margin: 0px;
                }
            }
            /deep/.van-grid-item__content--surround::after{
                border-width: 0px;
            }
            .Recommended_top_banner_headlines{
                height: 2.4rem;
                border: 0.05rem solid #e3e3e3;
                border-radius: 0.34rem;
                width: auto;
                margin: 0 2.6%;
                padding-left: 4.15rem;
                position: relative;
                z-index: 1;
                // background-color:#F5F6F7 ;
                img{
                    position: absolute;
                    top: 0.68rem;
                    left:0.68rem;
                    width: 5.5rem;
                }
                /deep/.my-swipe .van-swipe-item {
                     color: #535353;
                     font-size: 14px;
                     line-height: 38px;
                     text-align: center;
                    //  background-color: #39a9ed;
                     overflow: hidden;
                     .my-swipe-red{
                         color: #ff4a42;
                        background-color: #ffeae6;
                        margin-right: 5px;
                     }
                     .van-swipe__indicator{
                         width: 0px;
                     }
                }
            }
            .Recommended_top_banner_group{
                background: #fff;
                border-radius: 0.25rem;
                margin: 2rem 0.45rem;
                padding: 0.6rem;
                box-shadow: 0px 2px 6px #1111;
                display: flex;
                .Recommended_top_banner_group_xianshimiaosha{
                    border-right: 1px solid #EEEEEE;
                    width: 300%;
                    box-sizing: border-box;
                    .seckill{
                        float: left;
                    }
                }
                .time{
                    float: left;
                    margin-left: 0.5rem;
                    margin-top: 0.3rem;
                    color: #FE3C3C;
                    font-size: 0.5rem;
                    border-radius: 0.4rem;
                    height: 0.7rem;
                    line-height: 0.75rem;
                    border: 0.05rem solid #FE3C3C;
                    overflow: hidden;
                    text-align: center;
                    padding-right: 0.5rem;
                    span{
                        background-color: #FE3C3C ;
                        border-radius: 0.35rem;
                        height: 0.7rem;
                        margin-right: 0.3rem;
                        color: #fff;
                        padding-left: 0.3rem;
                        padding-right: 0.3rem;
                    }
                }
                .chaozhipintuan{
                    margin-left: 0.5rem;
                    .socks{
                        margin: 0.5rem 0;
                        color:rgb(255, 137, 23) ;
                        font-size: 0.5rem;
                    }
                    img{
                        margin-top: 0.6rem;
                        width: 80%;
                    }
                }
            }
         }
    }
</style>