<template>
  <div>
    <div class="vip-top">
      <div class="vip-top-top">
        <img src="https://api.10street.cn/wap/images/card/card2019/cardTit.png" alt="">
        <a class="exchange">
          <img src="	https://api.10street.cn/wap/images/card/card2019/cardChange.png" alt="">
        </a>
      </div>
      <div class="vip-top-bottom">
        <div class="background"></div>
        <div class="card">
          <img src="https://api.10street.cn/wap/images/home/empty_avatar.png" alt="" class="headimg">
          <span class="signin">登录/注册</span>
          <p>开通会员可省<span>￥6298/年</span></p>
          <img src="https://api.10street.cn/wap/images/card/card2019/jisuanqigray.png" alt="" class="save">
        </div>
      </div>
    </div>
    <div class="privilege">
      <div>
          <p class="equityintroduction">年卡会员尊享<span>11</span>大权益</p>
      </div>
      <van-grid :border="false" :column-num="4" class="logotext" >
          <van-grid-item v-for="(value,index) in iconList" :key="index">
            <van-image :src="value.imageUrl" style="width: 3.58em;" v-show="isOpen || index < max" />
            <p v-show="isOpen || index < max">{{value.vipname}}</p>
            <span v-show="isOpen || index < max">{{value.advantage}}</span>
          </van-grid-item>
      </van-grid>
      <!-- <van-grid :border="false" :column-num="4" class="logotext">
          <van-grid-item>
            <van-image src="https://api.10street.cn/wap/images/card/card2019/qy_icon_0.png" style="width: 3.58em;" />
            <p >会员成本价</p>
            <span>省钱省时间</span>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://api.10street.cn/wap/images/card/card2019/qy_icon_1.png" style="width: 3.58em;"/>
            <p>会员一元购</p>
            <span>年卡专享</span>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://api.10street.cn/wap/images/card/card2019/qy_icon_2.png" style="width: 3.58em;"/>
            <p>会员日特价</p>
            <span>低价好物</span>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://api.10street.cn/wap/images/card/card2019/qy_icon_3.png" style="width: 3.58em;"/>
            <p>专属优惠券</p>
            <span>每月可领</span>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://api.10street.cn/wap/images/card/card2019/qy_icon_4.png" style="width: 3.58em;"/>
            <p>礼品兑换</p>
            <span>免费领取</span>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://api.10street.cn/wap/images/card/card2019/qy_icon_5.png" style="width: 3.58em;"/>
            <p>双倍权益金</p>
            <span>开通立享</span>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://api.10street.cn/wap/images/card/card2019/qy_icon_6.png" style="width: 3.58em;"/>
            <p>生日福利</p>
            <span>暖心关怀</span>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://api.10street.cn/wap/images/card/card2019/qy_icon_7.png" style="width: 3.58em;"/>
            <p>优先发货</p>
            <span>急速送达</span>
          </van-grid-item>
       </van-grid>
       <div class="hide">
          <van-grid :border="false" :column-num="3" class="logotext">
          <van-grid-item style="flex-basis: 25.3333%;">
            <van-image src="	https://api.10street.cn/wap/images/card/card2019/qy_icon_8.png" style="width: 3.58em;" />
            <p >精选商品</p>
            <span>低价折扣</span>
          </van-grid-item>
          <van-grid-item  style="flex-basis: 25.3333%;"> 
            <van-image src="	https://api.10street.cn/wap/images/card/card2019/qy_icon_9.png" style="width: 3.58em;" />
            <p >专属客服</p>
            <span>坐席一对一</span>
          </van-grid-item>
          <van-grid-item  style="flex-basis: 25.3333%;">
            <van-image src="https://api.10street.cn/wap/images/card/card2019/qy_icon_10.png" style="width: 3.58em;" />
            <p >专属爆品</p>
            <span>精品好物</span>
          </van-grid-item>
           </van-grid>
          </div> -->
          <div class="moreprivileges" v-show="!isOpen && iconList.length > max" @click="isOpen = !isOpen">
           <p>更多特权
           <img src="	https://api.10street.cn/wap/images/arrow.png" alt="">
           </p>
          </div>
          <div class="moreprivileges" v-show="isOpen && iconList.length > max" @click="isOpen = !isOpen;">
           <p>收起
           <img src="	https://api.10street.cn/wap/images/arrow.png" alt="" style="transform: rotate(-180deg);">
           </p>
          </div>
    </div>
    <div style="height:100px;"></div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      max:8, // 默认最多显示的个数；最大行数*每行显示的个数 Number
      isOpen: false, // 是否展开全部信息的标识 Boolean 默认false
      iconList:[
        {imageUrl:"https://api.10street.cn/wap/images/card/card2019/qy_icon_0.png",vipname:"会员成本价",advantage:"省钱省时间"},
        {imageUrl:"https://api.10street.cn/wap/images/card/card2019/qy_icon_1.png",vipname:"会员一元购",advantage:"年卡专享"},
        {imageUrl:"https://api.10street.cn/wap/images/card/card2019/qy_icon_2.png",vipname:"会员日特价",advantage:"低价好物"},
        {imageUrl:"https://api.10street.cn/wap/images/card/card2019/qy_icon_3.png",vipname:"专属优惠券",advantage:"每日可领"},
        {imageUrl:"https://api.10street.cn/wap/images/card/card2019/qy_icon_4.png",vipname:"礼品兑换",advantage:"免费领取"},
        {imageUrl:"https://api.10street.cn/wap/images/card/card2019/qy_icon_5.png",vipname:"双倍权益金",advantage:"开通立享"},
        {imageUrl:"https://api.10street.cn/wap/images/card/card2019/qy_icon_6.png",vipname:"生日福利",advantage:"暖心关怀"},
        {imageUrl:"https://api.10street.cn/wap/images/card/card2019/qy_icon_7.png",vipname:"优先发货",advantage:"急速送达"},
        {imageUrl:"https://api.10street.cn/wap/images/card/card2019/qy_icon_8.png",vipname:"精选商品",advantage:"低价折扣"},
        {imageUrl:"https://api.10street.cn/wap/images/card/card2019/qy_icon_9.png",vipname:"专属客服",advantage:"坐席一对一"},
        {imageUrl:"https://api.10street.cn/wap/images/card/card2019/qy_icon_10.png",vipname:"专属爆品",advantage:"精品好物"},

      ]
    };
  },
  methods: {
    hidenblock(){

    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.vip-top-top{
  height:3rem;
  background-color: #313131;
  position: relative;
  img{
    height: 1.5rem;
    margin-top:10px;
    margin-left:40%;
  }
  .exchange{
    z-index: 1;
    float: right;
    position: absolute;
    top:0px;
    right: 46px;
    // right: 0px;
    // width: 5.82rem;
    // height: 1.1rem;
    // color: white;
    // background:url(	https://api.10street.cn/wap/images/card/card2019/cardChange.png) ;
    // background-position: 0px 0px;
    // background-repeat: no-repeat;
  }
}
.vip-top-bottom{
  .background{
    height:8rem;
    background: #252525;
    position: absolute;
    z-index: -1;
    width: 100%;
    top: 3rem;
  }
  .card{
    height: 14.6875rem;
    background-color: violet;
    margin-top: 0.6rem;
    width: 95%;
    margin: 0.6rem auto ;
    border-radius: 0.8rem;
    background-image: url(https://api.10street.cn/wap/images/card/card2019/nologintop.png);
    background-size: cover;
    position: relative;
    .headimg{
      width: 3.90625rem;
      margin: 1.82rem 0rem 2rem  1.8rem;
    }
    .signin{
      font-size: 1.5rem;
      color: #2A3039;
      line-height: 2.6rem;
      height: 2.5rem;
      position: absolute;
      top: 2.604167rem;
      left: 6.770833rem;
    }
    p{
      margin-top: -0.4375rem;
      margin-left: 2.604167rem;
      color: #707a88;
      span{
        color: red;
        font-size: 1.2rem;
      }
    }
    .save{
      width: 1.5625rem;
      position: absolute;
      top: 7.9rem;
      left: 14.5rem;
    }
  }
}
.privilege{
     .equityintroduction{
     text-align: center;
     font-size: 1.201667rem;
     color: #333;
     margin-bottom: 1.4rem;
     margin-top: 2rem;
     span{
       color: red;
     }
  }
  /deep/.logotext{
      p{
       font-size: 0.825rem;
       margin-top: .416667rem;
       margin-bottom: .4166rem;
      }
      span{
        color: red;
        font-size: 0.6rem;
      }
     }
  /deep/.van-grid-item__content{
     padding: .6rem .416667rem;
  }
  .hide{
    display:none ;
  }
  .moreprivileges{
    p{
    color: #999;
    font-size: 0.8rem;
    border: 0.05rem solid #C8C8C8;
    width: 7rem;
    text-align: center;
    line-height: 1.2rem;
    height: 1.2rem;
    border-radius: 1.45rem;
    background: #fff;
    margin:0.7rem auto;
    } 
    img{
      width:0.9rem;
    }
  }
}
 
</style>