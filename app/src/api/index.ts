import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { message } from 'ant-design-vue'
import { getToken } from "@/utils/token";
import { useStore } from "@/store";
import { AppActionTypes } from "@/store/modules/app/types";

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
  baseURL: process.env.VUE_APP_BASE_URL + "api/",
  timeout: 50000 // 请求超时时间
});

// request 拦截器 axios 的一些配置
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const accessToken = getToken("access_token");
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
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
    const store = useStore();
    if (res.status === 200) {
      const data: ResponseData = res.data
      if (data.code === 10000 || data.code === 10100 || data.code === 10040 || data.code === 10050) {
        store.dispatch(AppActionTypes.ACTION_SET_SIGNOUT, {} as any)
      }

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