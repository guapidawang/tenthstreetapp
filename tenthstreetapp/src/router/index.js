import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Classification from '@/views/Classification.vue'
import Membercentren from '@/views/Membercentre.vue'
import Shoppingcart from '@/views/Shoppingcart.vue'
import User from '@/views/User.vue'
import Recommended from "@/views/Home/Recommended.vue"
import Makeups from "@/views/Home/Makeups.vue"
import Foods from "@/views/Home/Foods.vue"
import Digital from "@/views/Home/Digital.vue"
import Dailyuse from "@/views/Home/Dailyuse.vue"
import Baby from "@/views/Home/Baby.vue"

import Beautycare from "@/views/Classification/Beautycare.vue"
import Babyuse from '@/views/Classification/Babyuse.vue'
import Clothing from '@/views/Classification/Clothing.vue'
import Electric from '@/views/Classification/Electric.vue'
import Foodanddrink from '@/views/Classification/Foodanddrink.vue'
import Gifts from '@/views/Classification/Gifts.vue'
import Household from '@/views/Classification/Household.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',  //首页
    name: 'Home',
    component:Home,
    redirect:'/home/recommended',
    children:[
      {path:'recommended',component:Recommended},
      {path:'makeups',component:Makeups},
      {path:'digital',component:Digital},
      {path:'foods',component:Foods},
      {path:'dailyuse',component:Dailyuse},
      {path:'baby',component:Baby},
    ]
  },
  {
    path: '/classification',  //分类
    name: 'Classification',
    component:Classification,
    redirect:'/classification/beautycare',
    children:[
      {path:'beautycare',component:Beautycare},
      {path:'babyuse',component:Babyuse},
      {path:'clothing',component:Clothing},
      {path:'electric',component:Electric},
      {path:'foodanddrink',component:Foodanddrink},
      {path:'gifts',component:Gifts},
      {path:'household',component:Household},
    ]
  },
  {  
    path: '/membercentre',   //会员中心
    name: 'Membercentre',
    component:Membercentren
  },
  {
    path: '/shoppingcart',   //购物车
    name: 'Shoppingcart',
    component:Shoppingcart
  },
  {
    path: '/user',    //用户中心
    name: 'User',
    component:User
  }
]

const router = new VueRouter({
  routes
})

export default router
