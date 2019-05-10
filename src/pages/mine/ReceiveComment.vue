<template>
  <div>
    <x-header>收到的评论</x-header>
    <panel :list="CommentList" type="1" ></panel>
  </div>
</template>

<script>
  import { Panel ,XHeader } from 'vux'
  import axios from "@/http/axios"

  export default {
    components: {Panel,XHeader},
    data(){
      return {
        CommentList: [
          {
            src: 'http://img0.imgtn.bdimg.com/it/u=1398135725,1276761355&fm=26&gp=0.jpg',
            title: '测试用户1',
            desc: '测试用户1 评论内容',
            // url: '/component/cell'
          },
          {
            src: 'http://img0.imgtn.bdimg.com/it/u=1398135725,1276761355&fm=26&gp=0.jpg',
            title: '测试用户2',
            desc: '测试用户1 评论内容',
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
