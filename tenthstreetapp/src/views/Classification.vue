<template>
  <div>
    <div class="top_nav_mid">
      <input type="search" placeholder="福利">
    </div>

    <div class="content">
      <div class="left">
        <van-sidebar v-model="activeKey" @change="menuChange">
          <van-sidebar-item
            :title="value.menuName"
            :key="value.menuId"
            v-for="value in leftLists" />
        </van-sidebar>
      </div>

      <div class="right">
        <component :is="['Beautycare', 'Babyuse', 'Clothing', 'Electric', 'Foodanddrink', 'Gifts', 'Household'][activeKey]"></component>

<!--        <img src="https://image.10street.cn/image/1e/5c/1e5cd521dddb2cda1d96ae5d3bcf1eb7.jpg" alt="">-->
<!--        <div>-->
<!--          <p>生鲜水果</p>-->
<!--          <van-grid :column-num="3">-->
<!--            <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字"/>-->
<!--          </van-grid>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Beautycare from "./Classification/Beautycare.vue"
import Babyuse from '@/views/Classification/Babyuse.vue'
import Clothing from '@/views/Classification/Clothing.vue'
import Electric from '@/views/Classification/Electric.vue'
import Foodanddrink from '@/views/Classification/Foodanddrink.vue'
import Gifts from '@/views/Classification/Gifts.vue'
import Household from '@/views/Classification/Household.vue'

export default {
  components: {
    Beautycare,
    Babyuse,
    Clothing,
    Electric,
    Foodanddrink,
    Gifts,
    Household
  },
  data() {
    return {
      activeKey: 0,
      leftLists: [],
      rightList: [],
      componentsList: [
        {menuId: 17},
        {menuId: 18}
      ]
    };
  },
  methods: {
    async getLeftLists() {
      const {data: menuList} = await axios.get("https://api.10street.cn/api/category/list")
      this.leftLists = menuList.datas.menuList
    },
    menuChange(item) {
      console.log(item)
    }
  },
  created() {
    this.getLeftLists()
  },

};
</script>

<style lang="scss" scoped>
.top_nav_mid {
  width: 100%;
  background: #FFF;
  height: 3rem;
  position: absolute;
  z-index: 12;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  border-bottom: solid 1px #EEE;

  input {
    display: block;
    width: 90%;
    margin: 0.4rem auto;
    background: url("../assets/sousuo.png");
    background-repeat: no-repeat;
    background-size: 5%;
    background-position: 0.920833rem .416667rem;
    background-color: #f5f5f5;
    border-radius: 1.5rem;
    border-width: 0px;
    height: 2rem;
    padding-left: 2.34375rem;
  }
}

.content {
  display: flex;

  .left {
    margin-top: 3rem;

    /deep/ .van-sidebar-item--select {
      color: #ff4a42;
    }
  }
}

</style>