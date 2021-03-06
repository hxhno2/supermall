/*
 * @Author: your name
 * @Date: 2021-10-14 20:08:47
 * @LastEditTime: 2021-10-14 20:18:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\network\request.js
 */
import axios from 'axios'
export function request(config){
    //1.创建axios 的实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })

    //2.axios 的拦截器
    //2.1.请求拦截器的作用
    instance.interceptors.request.use(config =>{
        return config
    }, err =>{

    })

    //2.2 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err)
    })
    //3.发送真正的网络请求
    return instance(config)
}