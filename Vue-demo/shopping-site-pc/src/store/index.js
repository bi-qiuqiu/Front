import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cart,
    user,
    category
  },
  plugins: [
    createPersistedState({
      key: 'shopping-site-pc',
      paths: ['user', 'cart']
    })
  ]
})
