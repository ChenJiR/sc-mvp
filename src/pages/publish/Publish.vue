<template>
  <div>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input placeholder="请输入标题" v-model="title"></x-input>
      <x-textarea placeholder="内容" name="description" :max="200" :rows="6" v-model="content"></x-textarea>
    </group>
    <uploader
      :max="9"
      name="img"
      size="normal"
      :images="uploadImg"
      :uploadUrl="uploadUrl"
    ></uploader>
    <divider>·</divider>
    <box gap="10px 10px">
      <x-button @click.native="submit">提交</x-button>
    </box>
  </div>
</template>

<script>
  import {Group, XInput, XTextarea, XButton,Divider,Box  } from 'vux'
  import Uploader from 'vux-uploader'
  import axios from "@/http/axios"

  export default {
    components: {
      Group, XInput, XTextarea, Uploader, XButton,Divider,Box
    },
    data () {
      return {
        uploadUrl:"http://127.0.0.1:8000/upload_pic",
        uploadImg:[],
        title:'',
        content:''
      }
    },
    methods:{
      submit(){
        if(this.uploadImg.length == 0){
          this.$vux.alert.show({title: '必须上传文件'})
          return false
        }

        if(this.title == ''){
          this.$vux.alert.show({title: '标题不能为空'})
          return false
        }

        if(this.content == ''){
          this.$vux.alert.show({title: '内容不能为空'})
          return false
        }

        return axios({
          url: 'publish',
          method: 'post',
          data:{
            title:this.title,
            content:this.content,
            img:JSON.stringify(this.uploadImg),
          },
        }).then( res => {
          this.$router.push('/')
        });
      }
    }
  }
</script>

<style scoped>

</style>
