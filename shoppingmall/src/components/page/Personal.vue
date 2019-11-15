<template>
  <div class="container">
    <div class="base-info">
      <div class="user-look">
        <img :src="userLook" alt="">
      </div>
      <div class="user-name">
        <P>蒸蛋</P>
        <P>普通用户</P>
      </div>
      <van-Icon name="setting" class="ico-set"></van-Icon>
    </div>
    <tabBar :index="3"></tabBar>
  </div>

</template>

<script>
  import tabBar from "../base/tabBar"
  import userLook from "../../assets/images/avatar_default.png"
    export default {
        name: "personal",
      data(){
        return {userLook}
      },
        components:{tabBar}
    }
</script>
<style scoped lang="less">
.container{
  background-color: #b9d0dd;
.base-info{
  background-color: #fff20f;
  padding: .7rem 1rem;
  display:flex;
  flex-direction: row;
  flex-wrap:nowrap;
  .user-look{
    width:1.5rem;
    height:1.5rem;
    margin-right:1rem ;
    img{
      width:100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .ico-set{
    position: absolute;
    right:0.6rem;
    top:0.4rem;
    color: #ff836f;
  }
}
}
</style>
