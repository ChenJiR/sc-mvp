<template>
  <div>
      <search
        :results="results"
        @on-submit="searchResults"
        v-model="searchText"
        position="absolute"
        auto-scroll-to-top
        ref="search"
        @on-result-click="resultClick"
      ></search>

      <div id="content">

        <vue-waterfall-easy
          :imgsArr="imgsArr"
          :imgWidth="200"
          :isRouterLink="true"
          :mobileGap="9"
          @scrollReachBottom="test"
        >
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
  import axios from "@/http/axios"
  import vueWaterfallEasy from 'vue-waterfall-easy'

  export default {
    components: {
      Search, vueWaterfallEasy, ViewBox, Flexbox, FlexboxItem
    },
    data() {
      return {
        results:[],
        searchText:'',
        imgsArr:[]
      }
    },
    methods:{
      getData(){
        return axios({
          url: 'get_article_list',
          method: 'get'
        }).then( res => {
          let data = []
          res.data.forEach(item => {
            data.push({
              'src':JSON.parse(item.img)[0]['url'],
              'title': item.title.length > 20 ? item.title.substring(0,15) + '...' : item.title,
              'info': item.content.length > 40 ? item.content.substring(0,30)+'...' : item.content,
              'href':'ArticleContent/'+item.id,
            })
            this.imgsArr = data
          });
        });
      },
      test(){
        return true;
      },
      searchResults(){
        return axios({
          url: 'search',
          method: 'post',
          data:{title:this.searchText}
        }).then( res => {
          let data = []
          res.article_list.forEach(
            function(item){
              data.push({title:item.title,id:item.id})
            }
          )
          this.results = data
        });
      },
      resultClick(item){
        this.$router.push('/ArticleContent/'+item.id)
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
