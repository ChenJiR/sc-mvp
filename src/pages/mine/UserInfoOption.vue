<template>
  <div>
    <x-header>设置</x-header>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input placeholder="请输入昵称"></x-input>
      <x-textarea placeholder="请输入签名" name="description" :max="200" :rows="3"></x-textarea>
    </group>
    <box gap="30px 20px">
      <x-button>提交</x-button>
    </box>
  </div>
</template>

<script>
  import { Group, XInput, XTextarea,XHeader,XButton,Box  } from 'vux'
  export default {
    components: {
      Group, XInput, XTextarea,XHeader,XButton,Box
    }
  }
</script>

<style scoped>

</style>
