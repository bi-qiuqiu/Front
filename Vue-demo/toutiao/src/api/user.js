import request from '../utils/request'
export const login = (data) =>
  request({
    method: 'POST',
    url: '/authorizations',
    data
  })
export const sendSm = (params) =>
  request({
    url: `/sms/codes/${params}`
  })
export const getUserInfo = () =>
  request({
    url: '/user'
  })
export const getUserChannels = () =>
  request({
    url: '/user/channels'
  })
