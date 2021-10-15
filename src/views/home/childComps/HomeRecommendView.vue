<!--
 * @Author: your name
 * @Date: 2021-10-15 09:26:25
 * @LastEditTime: 2021-10-15 09:55:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\home\childComps\RecommendView.vue
-->
<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendview",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
}

</style>