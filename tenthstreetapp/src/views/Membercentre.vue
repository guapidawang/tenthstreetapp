<template>
  <div>
    <div class="vip-top">
      <div class="vip-top-top">
        <img src="https://api.10street.cn/wap/images/card/card2019/cardTit.png" alt="">
        <span class="exchange">会员卡兑换</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
    };
  },
  methods: {
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
    right: 0px;
  }
}
</style>