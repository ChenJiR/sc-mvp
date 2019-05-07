<template>
  <div>
    <x-header :left-options="{showBack:false}">
      我的
      <a slot="right" href="#/UserInfoOption">设置</a>
    </x-header>

    <flexbox style="padding: 5px 15px;">
      <flexbox-item :span="4">
        <div class="user-header">
          <x-icon type="ios-person" size="150" style="fill: #7d8ff7;"></x-icon>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="user-info">
          <card :header="{title:'昵称'}">
            <p slot="content" class="card-padding">测试昵称</p>
          </card>
        </div>
      </flexbox-item>
    </flexbox>
    <card :header="{title:'个人签名'}" style="margin: 0px">
      <p slot="content" style="padding: 10px 15px">测试签名</p>
    </card>

    <card>
      <div slot="content" class="card-demo-flex card-demo-content01">
          <div class="vux-1px-r" >
            <router-link to="/ReceiveLike">
            <span>1130</span>
            <br/>
            <x-icon type="ios-heart-outline" size="25" style="fill: #f74949;"></x-icon>
            </router-link>
          </div>
        <div class="vux-1px-r">
          <router-link to="/ReceiveComment">
          <span>15</span>
          <br/>
          <x-icon type="ios-chatbubble-outline" size="25" style="fill: #f74949;"></x-icon>
          </router-link>
        </div>
      </div>
    </card>

  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, Card, Divider,XHeader } from 'vux'
  // import Vue from 'vue'
  // import VueRouter from 'vue-router'

  // Vue.use(VueRouter)

  export default {
    components: {
      Flexbox, FlexboxItem, Card, Divider,XHeader
    }
  }
</script>

<style scoped>
.card-padding{
  padding: 20px;
  font-size: 23px;
}
.weui-panel{
  background: #fbf9fe;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>
