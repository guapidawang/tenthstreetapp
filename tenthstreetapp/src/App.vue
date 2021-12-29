<template>
  <div>
    <!-- 路由的占位符 -->
    <router-view></router-view>

    <van-tabbar v-model="active" router>
    <van-tabbar-item 
    v-for="(item,index) in tabbars"
    :key="index"
    :to='item.name' v-model="active" 
    >
      <span>{{item.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal"> 
      </template>
    </van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "/home",
          title: "首页",
          normal: require("./assets/ico_home.png"),
          active: require("./assets/ico_home_select.png")
        },
        {
          name: "/classification",
          title: "分类",
          normal: require("./assets/ico_classify.png"),
          active: require("./assets/ico_classify_select.png")
        },
        {
          name: "/membercentre",
          title: "会员中心",
          normal: require("./assets/ico_member.png"),
          active: require("./assets/ico_member_select.png")
        },
        {
          name: "/shoppingcart",
          title: "购物车",
          normal: require("./assets/ico_shop.png"),
          active: require("./assets/ico_shop_select.png")
        },
        {
          name: "/user",
          title: "我的",
          normal: require("./assets/ico_my.png"),
          active: require("./assets/ico_my_select.png")
        }
      ]
    };
  },
  methods: {
    tab(index, val) {
      this.currIndex = index;
      this.$router.push(val);
    }
  }
};
</script>

<style  lang="scss" scoped>
// @import "uview-ui/index.scss";

.active_tab img {
  width: 26px;
  height: 26px;
}

.van-tabbar-item--active {
  color: #e10f02;
}


</style>