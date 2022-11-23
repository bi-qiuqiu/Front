import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'vant/lib/index.css'
import './styles/index.less'

import {
  NavBar,
  Button,
  Form,
  Field,
  Toast,
  CountDown,
  Tabbar,
  TabbarItem,
  Image as VanImage,
  Grid,
  GridItem,
  Cell,
  CellGroup,
  Dialog,
  Tab,
  Tabs,
  List,
  PullRefresh
} from 'vant'

Vue.use(NavBar)
  .use(Button)
  .use(Form)
  .use(Field)
  .use(Toast)
  .use(CountDown)
  .use(Tabbar)
  .use(TabbarItem)
  .use(VanImage)
  .use(Grid)
  .use(GridItem)
  .use(Cell)
  .use(CellGroup)
  .use(Dialog)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(PullRefresh)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
