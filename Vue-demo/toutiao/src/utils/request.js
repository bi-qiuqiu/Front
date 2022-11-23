import axios from 'axios'
import store from '../store'
const request = axios.create({ baseURL: 'http://toutiao.itheima.net/v1_0' })
request.interceptors.request.use(
  function (config) {
    const { user } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)
export default request
