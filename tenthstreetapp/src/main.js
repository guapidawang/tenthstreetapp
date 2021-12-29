import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Lazyload } from 'vant'
import { Swipe, SwipeItem } from 'vant';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './swiper-master/src/swiper'
// import uView from 'uview-ui'

Vue.config.productionTip = false

// 在main.js中引入vant组件库
import Vant from 'vant';
// 为了覆盖原有的less变量，一定要将后缀名改为less
import 'vant/lib/index.css';
// import 'vant/lib/index.less';


Vue.use(Vant);
// Vue.use(uView);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
