import axios from 'axios'
import store from '../store'
import { notification } from 'ant-design-vue'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://testservice.zhengbang.com:8800', // api 的 base_url
  timeout: 1000 * 60 * 30, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(request => {
  const accessToken = store.get('accessToken')
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`
    request.headers.AccessToken = accessToken
  }
  return request
})

// response 拦截器
service.interceptors.response.use(undefined, error => {
  // Errors handling
  const { response } = error
  const { data } = response
  if (data) {
    notification.warning({
      message: data,
    })
  }
})

export default service
