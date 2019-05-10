<template>
  <div>
    <div style="margin: 60px;touch-action: none;" v-model="tab_index">
      <button-tab >
        <button-tab-item selected @on-item-click="check_tab">登录</button-tab-item>
        <button-tab-item @on-item-click="check_tab">注册</button-tab-item>
      </button-tab>
    </div>

    <group>
      <x-input title="账号" v-model="username"></x-input>
      <x-input title="密码" v-model="password"></x-input>


      <x-input v-if="tab_index==1" title="确认密码" v-model="check_password"></x-input>

      <popup-radio v-if="tab_index==1" title="性别" :options="[{key:1,value:'男'},{key:2,value:'女'}]" v-model="gender"></popup-radio>

    </group>

    <div style="margin: 30px">
      <x-button @click.native="submit">提交</x-button>
    </div>

  </div>
</template>

<script>
  import { ButtonTab, ButtonTabItem, XInput, Group ,XButton,PopupRadio } from 'vux'
  import axios from "@/http/axios"

  export default {
    components: {
      ButtonTab, ButtonTabItem,XInput,Group,XButton,PopupRadio,axios
    },
    data(){
      return {
        tab_index:0,
        username:'',
        password:'',
        check_password:'',
        gender:1,
      }
    },
    methods:{
      submit(){
        let api = 'sign_in';
        if(this.tab_index == 1){
          api = 'sign_up';
        }
        return axios({
          url: api,
          method: 'post',
          data:{
            username:this.username,
            password:this.password,
            re_pwd:this.check_password,
            gender:this.gender
          },
        }).then( res => {
          // this.$store.commit('setToken',res.token)
          window.localStorage.setItem('token', res.token)
          this.$router.push('/')
        });
      },
      check_tab(index){
        this.tab_index = index
      }
    }
  }
</script>

<style scoped>
  .vux-button-group > a.vux-button-group-current{
    background: #F70968;
  }
  .vux-button-group > a.vux-button-tab-item-first:after{
    border: 1px solid #F70968;
    color: #F70968;
  }
  .vux-button-group > a.vux-button-tab-item-last:after{
    border: 1px solid #F70968;
    color: #F70968;
  }
</style>
