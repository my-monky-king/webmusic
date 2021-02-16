// import axios from 'axios'

// const request = axios.create({
//         baseURL: process.env.VUE_APP_URL,
//         timeout: 30000
//     })
//     //添加请求拦截器
// request.interceptors.request.use(function(config) {
//         // window.console.log(config)
//         if (!config.params) {
//             config.params = {}
//         }
//         config.params.t = Date.now()
//             //在发送请求之前做某事
//         return config;
//     }, function(error) {
//         //请求错误时做些事
//         return Promise.reject(error);
//     })
//     // 注册响应拦截器
//     // Add a response interceptor
// request.interceptors.response.use(function(response) {
//     return response.data;
// }, function(error) {
//     return Promise.reject(error);
// });
// export default request

import axios from 'axios'

export function request(config) {
 // 创建axios实例
 const instance = axios.create({
    baseURL: process.env.VUE_APP_URL,
     withCredentials: true,
     timeout: 3000
   })
   instance.interceptors.request.use(config => {
     if (!config.params) {
       config.params = {}
  }
   config.params.t = Date.now()
     return config
   }, error => {
     return error
   });

   instance.interceptors.response.use(response => {
     return response.data
   }, error => {
     return error
   })
   return instance(config);
};