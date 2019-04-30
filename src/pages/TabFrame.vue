<template>
  <div>

    <router-view></router-view>

    <tabbar>
      <tabbar-item selected link="/component/demo" >
        <img slot="icon" src="../assets/vux_logo.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../assets/vux_logo.png">
<!--        <span slot="label">Message</span>-->
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/vux_logo.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>

</style>
