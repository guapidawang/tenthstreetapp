<template>
  <div>
      <div class="top_nav_mid">
        <input type="search" placeholder="福利">
      </div>
      <div class="left">
        <van-sidebar v-model="activeKey" >
            <!-- <van-sidebar-item :title="value.menuName" v-for="(value,index) in leftLists" :key="index" @click="abc(index)"/> -->
            <van-sidebar-item title="美妆个护" /> 
            <van-sidebar-item title="食品饮料" /> 
            <van-sidebar-item title="家居日用" />
            <van-sidebar-item title="家用电器" />
            <van-sidebar-item title="母婴用品" />
            <van-sidebar-item title="服饰箱包" />
            <van-sidebar-item title="精致礼品" />
            <van-sidebar-item title="数码办公" />
            <van-sidebar-item title="运动健康" />
        </van-sidebar>
      </div>
      
        <!-- <img src="https://image.10street.cn/image/1e/5c/1e5cd521dddb2cda1d96ae5d3bcf1eb7.jpg" alt="">
        <div>
          <p>生鲜水果</p>
          <van-grid :column-num="3">
            <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
          </van-grid>
        </div> -->
  </div>
</template>

<script>
import axios from "axios"
import Beautycare from "@/views/Classification/Beautycare.vue"
import Babyuse from '@/views/Classification/Babyuse.vue'
import Clothing from '@/views/Classification/Clothing.vue'
import Electric from '@/views/Classification/Electric.vue'
import Foodanddrink from '@/views/Classification/Foodanddrink.vue'
import Gifts from '@/views/Classification/Gifts.vue'
import Household from '@/views/Classification/Household.vue'

export default {
  components:{
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
      leftLists:[],
      rightList:[],
      componentsList:[
        {menuId:17},
        {menuId:18}
        ]
    };
  },
  methods:{
    async getLeftLists(){  
            const{data:leftListsdata}=await axios.get("https://api.10street.cn/api/category/list?_=1640540683741")
            console.log(leftListsdata.datas.menuList);
            this.leftLists = leftListsdata.datas.menuList
            // this.rightList = leftListsdata.datas.menuList
            // console.log(this.rightList);
            },
     abc(a){
     console.log(a);
   }
  },
   created(){
              this.getLeftLists()
          },

};
</script>

<style lang="scss" scoped>
    .top_nav_mid{
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
    input{
      display: block;
      width: 90%;
      margin: 0.4rem auto;
      background: url("../assets/sousuo.png");
      background-repeat: no-repeat;
      background-size: 5%;
      background-position: 0.920833rem .416667rem;
      background-color:#f5f5f5;
      border-radius: 1.5rem;
      border-width: 0px;
      height: 2rem;
      padding-left: 2.34375rem;
     }}
     .left{
       margin-top: 3rem;
       /deep/.van-sidebar-item--select{
          color:#ff4a42 ;
       }
     }
</style>