import Vue from 'vue'
import App from './App.vue'
import '@/mobile/flexible'
import '@/styles/reset.css'
import router from '@/router'
import { Tabbar, TabbarItem } from 'vant'
import { NavBar } from 'vant'
import { Col, Row } from 'vant'
import { Cell, CellGroup, Icon } from 'vant'
import { Image as VanImage } from 'vant'
import { Search } from 'vant'
import { List } from 'vant';

Vue.use(List);
Vue.use(Search)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Col)
Vue.use(Row)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(VanImage)
Vue.use(Icon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
