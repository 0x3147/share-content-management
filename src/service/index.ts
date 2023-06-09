import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'

const BASE_URL = 'http://localhost:3001/api'
const TIME_OUT = 1000 * 60

class MyRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    // 全局拦截器
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      // ...
      return config
    })
    this.instance.interceptors.response.use((res: AxiosResponse) => {
      // ...
      return res
    })
  }

  // 公共的请求的方法
  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 开始发起网络请求
      this.instance
        .request<T>(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  get<T = any>(url: string, params?: any): Promise<T> {
    return this.request<T>({ url, params, method: 'GET' })
  }

  post<T = any>(url: string, data?: any, headers?: any): Promise<T> {
    return this.request<T>({ url, data, headers, method: 'POST' })
  }
}

export default new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
