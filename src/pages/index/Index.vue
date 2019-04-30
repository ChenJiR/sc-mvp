<template>
  <div>
    <search
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      ref="search"></search>

    <vue-waterfall-easy :imgsArr="imgsArr">

    </vue-waterfall-easy>

  </div>
</template>

<script>
  import { Search } from 'vux'
  import vueWaterfallEasy from 'vue-waterfall-easy'

  export default {
    components: {
      Search,
      vueWaterfallEasy
    },
    data() {
      return {
        results:[],
        value:'',
        imgsArr:[]
      }
    },
    methods:{
      getData(){
        this.imgsArr = [
          {
            'src':'http://img0.imgtn.bdimg.com/it/u=1398135725,1276761355&fm=26&gp=0.jpg',
            'info':1,
            'href':''
          },
          {
            'src':'http://img5.imgtn.bdimg.com/it/u=1289981276,3794620975&fm=26&gp=0.jpg',
            'info':1,
            'href':''
          },
          {
            'src':'http://img4.imgtn.bdimg.com/it/u=1535802057,2423234359&fm=15&gp=0.jpg',
            'info':1,
            'href':''
          },
          {
            'src':'http://img1.imgtn.bdimg.com/it/u=878709247,2567545902&fm=15&gp=0.jpg',
            'info':1,
            'href':''
          },
          {
            'src':'http://img1.imgtn.bdimg.com/it/u=1658773359,884242240&fm=15&gp=0.jpg',
            'info':1,
            'href':''
          },
        ]
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>

  .item{
    width: 50% !important;
  }

</style>
