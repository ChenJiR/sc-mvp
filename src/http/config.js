
// import { baseUrl } from '@/utils/global'

export default {
  method: 'get',
  // 基础url前缀
  baseUrl: 'http://127.0.0.1:8000/',
  // 请求头信息
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: false,
  // 返回数据类型
  responseType: 'json'
}
