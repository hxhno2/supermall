<!--
 * @Author: your name
 * @Date: 2021-10-14 10:27:18
 * @LastEditTime: 2021-10-15 09:33:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\home\Home.vue
-->
<template>
  <div id="home">
    <nav-bar class="home-nav"> <div slot="center">购物街</div></nav-bar>
    <homeswiper :banners="banners"/>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Homeswiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/HomeRecommendView.vue';

import { getHomeMultidata } from "network/home"

export default {
  name: "Home",
  components: {
    NavBar,
    Homeswiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then((res) => {
      //请求自己想要的数据
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
