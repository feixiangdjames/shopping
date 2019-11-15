<template>
  <div class="home-swipe">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in slides" :key="index">
        <img v-lazy="item.image"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import {getSlidesData} from "../../api";
  import{Swipe,SwipeItem} from "vant"
    export default {
        name: "slides",
      data(){
        return {slides:[]}
      },
      components:{
          [Swipe.name]:Swipe,//注册
        [SwipeItem.name]:SwipeItem
      },
      async created(){
        let data=await getSlidesData();
        this.slides=data.data.slides;
        console.log(this.slides);
      }
    }
</script>

<style scoped>
  .home-swipe{
    height:4rem;
    margin: 0.2rem auto;
    overflow: hidden;
    position: relative;
  }
  .home-swipe img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
