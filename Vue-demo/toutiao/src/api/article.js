import request from '../utils/request'
export const getArticles = (params) =>
  request({
    url: '/articles',
    params
  })
