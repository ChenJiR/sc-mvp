<template>
  <div>
    <x-header>设置</x-header>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input placeholder="请输入昵称" v-model="nick_name"></x-input>
      <x-textarea placeholder="请输入签名" name="description" :max="200" :rows="3" v-model="sign"></x-textarea>
      <popup-radio title="性别" :options="[{key:1,value:'男'},{key:2,value:'女'}]" v-model="gender"></popup-radio>

    </group>
    <box gap="30px 20px">
      <x-button @click.native="submit">提交</x-button>
    </box>
  </div>
</template>

<script>
  import { Group, XInput, XTextarea,XHeader,XButton,Box,PopupRadio  } from 'vux'
  import axios from "@/http/axios"

  export default {
    components: {
      Group, XInput, XTextarea,XHeader,XButton,Box,PopupRadio
    },
    data() {
      return {
        nick_name:'',
        sign:'',
        gender:''
      }
    },
    methods:{
      submit(){
        return axios({
          url: 'myself_edit',
          method: 'post',
          data:{
            gender:this.gender,
            nick_name:this.nick_name,
            sign:this.sign,
          }
        }).then( res => {
          res.code == 0 && this.getData()
        });
      },
      getData(){
        return axios({
          url: 'get_user_info',
          method: 'get',
        }).then( res => {
          this.nick_name=res.data.nick_name
          this.sign=res.data.sign
          this.head_img=res.data.head_img
          this.gender = res.data.gender
        });
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
