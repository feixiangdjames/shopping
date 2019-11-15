<template>
  <van-tabbar v-model="active">
    <!--<van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="wap-nav" to="/list">分类</van-tabbar-item>
    <van-tabbar-item icon="cart" info="5" to="/car">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact" info="20" to="/personal">我的</van-tabbar-item>-->
    <van-tabbar-item icon="contact" to="/home"></van-tabbar-item>
    <van-tabbar-item icon="cart" to="/list">分类</van-tabbar-item>
    <van-tabbar-item icon="cart" to="/car" info="3">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact" to="/personal">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    name: "tabBar",
    data() {
      return {}
    },
    props: ["index"],
    computed: {
      active: {
        get() {
          return this.index;
        },
        set() {

        }
      }
    }
  }
</script>

<style scoped>

</style>
