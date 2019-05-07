<template>
  <div>
      <search
        :results="results"
        v-model="value"
        position="absolute"
        auto-scroll-to-top
        ref="search"></search>

      <div id="content">

        <vue-waterfall-easy :imgsArr="imgsArr" :imgWidth="200" :isRouterLink="true" :mobileGap="9">
          <div class="img-info" slot-scope="props">
            <p class="waterfall-item-title">{{props.value.title}}</p>
            <p class="waterfall-item-info">{{props.value.info}}</p>
          </div>
        </vue-waterfall-easy>

      </div>

  </div>
</template>

<script>
  import { Search,ViewBox,Flexbox,FlexboxItem } from 'vux'
  import vueWaterfallEasy from 'vue-waterfall-easy'

  export default {
    components: {
      Search,
      vueWaterfallEasy,
      ViewBox,
      Flexbox,
      FlexboxItem
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
            'title':'测试测试测试测试测试测试测试测试测试测试测试测试测试',
            'info':1,
            'href':'ArticleContent'
          },
          {
            'src':'http://img5.imgtn.bdimg.com/it/u=1289981276,3794620975&fm=26&gp=0.jpg',
            'title':'test2',
            'info':'12312',
            'href':'ArticleContent'
          },
          {
            'src':'http://img4.imgtn.bdimg.com/it/u=1535802057,2423234359&fm=15&gp=0.jpg',
            'title':'test3',
            'info':'12312',
            'href':'ArticleContent'
          },
          {
            'src':'http://img1.imgtn.bdimg.com/it/u=878709247,2567545902&fm=15&gp=0.jpg',
            'title':'test4',
            'info':'12312',
            'href':'ArticleContent'
          },
          {
            'src':'http://img1.imgtn.bdimg.com/it/u=1658773359,884242240&fm=15&gp=0.jpg',
            'title':'test5',
            'info':'12312',
            'href':'ArticleContent'
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
  #content{
    position: absolute;
    top: 43px;
    bottom: 53px;
    width: 100%;
  }
  .waterfall-item-title{
    margin: 2px 10px;
    color: #5f5f62;
  }
  .waterfall-item-info{
    margin: 2px 10px;
    color: #444447;
  }
</style>
