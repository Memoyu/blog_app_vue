import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { message } from 'ant-design-vue'

export interface ResponseData {
    code: number;
    success: boolean;
    message: string;
    timestamp: number;
    result?: any;
}

// 创建 axios 实例
let service: AxiosInstance | any;
service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 50000 // 请求超时时间
});

// request 拦截器 axios 的一些配置
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error: any) => {
        // Do something with request error
        console.error("error:", error); // for debug
        Promise.reject(error);
    }
);

// respone 拦截器 axios 的一些配置
service.interceptors.response.use(
    (res: AxiosResponse) => {
      // Some example codes here:
      // code == 0: success
      if (res.status === 200) {
        const data: ResponseData = res.data
        if (data.success) {
          return data.result;
        } else {
            message.error({
            message: data.message
          });
        }
      } else {
        message.error({
          message: "网络错误!"
        });
        return Promise.reject(new Error(res.data.message || "Error"));
      }
    },
    (error: any) => Promise.reject(error)
  );
  
  export default service;