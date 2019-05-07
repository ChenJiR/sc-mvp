<template>
  <div>

    <router-view></router-view>

    <tabbar>
      <tabbar-item link="/" >
        <x-icon slot="icon" type="ios-home-outline" size="27" style="fill: #F70968;"></x-icon>
        <x-icon slot="icon-active" type="ios-home" size="27" style="fill: #F70968;"></x-icon>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item icon-class="ios-plus-outline" show-dot link="/publish">
        <x-icon slot="icon" type="ios-plus-outline" size="27" style="fill: #F70968;"></x-icon>
        <x-icon slot="icon-active" type="ios-plus" size="27" style="fill: #F70968;"></x-icon>
      </tabbar-item>
      <tabbar-item badge="2" link="/mine">
        <x-icon slot="icon" type="ios-person-outline" size="27" style="fill: #F70968;"></x-icon>
        <x-icon slot="icon-active" type="ios-person" size="27" style="fill: #F70968;"></x-icon>
<!--        <img slot="icon" src="../assets/vux_logo.png">-->
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
