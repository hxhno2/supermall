/*
 * @Author: your name
 * @Date: 2021-10-13 20:37:42
 * @LastEditTime: 2021-10-14 10:20:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
