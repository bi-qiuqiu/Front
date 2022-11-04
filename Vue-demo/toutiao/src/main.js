import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'vant/lib/index.css'
import './styles/index.less'

import { NavBar, Button, Form, Field } from 'vant'

Vue.use(NavBar).use(Button).use(Form).use(Field)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
