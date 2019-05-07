<template>
  <div>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input placeholder="请输入标题"></x-input>
      <x-textarea placeholder="内容" name="description" :max="200" :rows="6"></x-textarea>
    </group>
    <uploader
      :max="9"
      name="img"
      size="normal"
    ></uploader>
    <divider>·</divider>
    <box gap="10px 10px">
      <x-button>提交</x-button>
    </box>
  </div>
</template>

<script>
  import {Group, XInput, XTextarea, XButton,Divider,Box  } from 'vux'
  import Uploader from 'vux-uploader'
  export default {
    components: {
      Group, XInput, XTextarea, Uploader, XButton,Divider,Box
    },
    data () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
