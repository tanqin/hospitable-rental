/* 1.0 引入 axios */
import axios from "axios"
import {Toast} from 'antd-mobile'

// 基地址
export const baseURL = process.env.REACT_APP_BASEURL
console.log(process.env);
/* 2.0 创建 axios 实例 */
const instance = axios.create({
    baseURL
})

/* 3.0 请求拦截器 */
instance.interceptors.request.use((config) => {
    // Toast.loading(content, duration, onClose, mask)
    Toast.loading("加载中...", 0, null, true)
    return config
},(err) => {
    return Promise.reject(err)
})

/* 4.0 响应拦截器 */
instance.interceptors.response.use((res) => {
    Toast.hide()
    return res.data
},(err) => {
    Toast.hide()
    return Promise.reject(err)
})

/* 5.0 导出 axios 实例 */
export default instance