<!--
 * @Author: your name
 * @Date: 2021-10-13 20:37:42
 * @LastEditTime: 2021-10-14 11:27:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
  <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  export default {
    name: 'App',
    components: {
        MainTabBar
    }

  }
</script>

<style>
@import "assets/css/base.css";
</style>
