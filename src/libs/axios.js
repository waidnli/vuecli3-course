import axios from 'axios'
import { baseURL } from '@/config'

class HttpRequest {
  constructor (baseurl = baseURL) {
    this.baseUrl = baseurl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      header: {
        //
      }
    }
    return config
  }
  // 拦截器
  interceptors () {
    instance.interceptors.request.ues(config => {
      // 添加请求前的控制
      // 添加全局的loading
      // Spin.show()
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      console.log(res)
      return res
    }, error => {
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }
}

export default HttpRequest
