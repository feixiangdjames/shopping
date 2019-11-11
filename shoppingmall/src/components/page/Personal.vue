<template>
  <div class="container">
    <h1>personal</h1>
    <tabBar :index="3"></tabBar>
  </div>

</template>

<script>
  import tabBar from "../base/tabBar"
    export default {
        name: "personal",
        components:{tabBar}
    }
</script>
<style scoped lang="less">
.container{
  background: red;
}
</style>
