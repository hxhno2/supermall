/*
 * @Author: your name
 * @Date: 2021-10-14 20:28:47
 * @LastEditTime: 2021-10-14 20:29:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\network\home.js
 */
import{request} from "./request";
export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}