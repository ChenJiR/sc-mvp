<template>
  <div>
    <x-header>收到的赞</x-header>
    <panel :list="LikeList" type="1" ></panel>
  </div>
</template>

<script>
  import { Panel ,XHeader } from 'vux'
  export default {
    components: {Panel,XHeader},
    data(){
      return {
        LikeList: [
          {
            src: 'http://img0.imgtn.bdimg.com/it/u=1398135725,1276761355&fm=26&gp=0.jpg',
            title: '测试用户1',
            desc: '2019-05-07 13:54:00 赞了你一下',
            // url: '/component/cell'
          },
          {
            src: 'http://img0.imgtn.bdimg.com/it/u=1398135725,1276761355&fm=26&gp=0.jpg',
            title: '测试用户2',
            desc: '2019-05-07 13:54:00 赞了你一下',
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
