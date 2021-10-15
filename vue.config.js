/*
 * @Author: your name
 * @Date: 2021-10-14 09:45:59
 * @LastEditTime: 2021-10-14 11:34:06
 * @LastEditors: your name
 * @Description: In User Settings Edi
 * @FilePath: \supermall\vue.config.js
 */

module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
              'assets':'@/assets',  
              'common':'@/common',
              'components':'@/components',
              'network':'@/network',
              'views':'@/views',
            }
        }
    }
}