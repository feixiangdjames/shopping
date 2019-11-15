<template>
  <div class="container">
    <div class="home-search">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入你的商品"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />

      </form>
    </div>
    <div class="category">
      <div v-for="item in category"><img src="" alt="">
      <p></p>
      </div>
    </div>
    <AB></AB>
    <tabBar :index="0"></tabBar>
  </div>
</template>
<script>
  import tabBar from "../base/tabBar.vue"
  import AC from "../base/slides.vue"
/*  import {getSlidesData} from "../../api";
  import{Swipe,SwipeItem} from "vant"*/
  export default {
        name: "Home",
      data(){
          return{
            value:"酸奶"
          }
      /*    return {slides:[]}*/
      },
      components:{tabBar,AB:AC
/*      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem*/
      },
 /* async created(){
    let data=await getSlidesData();
    this.slides=data.data.slides;
    console.log(this.slides);
  }*/
 methods:{
   onSearch(){

   },
  onCancel(){

  }
 }
    }
</script>

<style scoped>
.container{
  background: rgba(255, 131, 111, 0.22);
}
</style>
