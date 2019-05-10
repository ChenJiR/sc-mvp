<template>
  <div style="min-height:100%;">

    <div class="article-content">
      <flexbox>
        <flexbox-item :span="2">
          <div style="margin: 0px 5px"><x-icon type="ios-person" size="55" style="fill: #7d8ff7;"></x-icon></div>
        </flexbox-item>
        <flexbox-item>
          <p style="font-size: 13px;">测试</p>
          <p style="font-size: 12px;color: #5f5f62">与4天前</p>
        </flexbox-item>
        <flexbox-item :span="2">
          <x-button v-if="is_like==0" mini plain type="primary" style="border-radius:25px;" @click.native="submitLike">赞</x-button>
          <x-button v-if="is_like==1" mini type="primary" style="border-radius:25px;">赞</x-button>
        </flexbox-item>
      </flexbox>

      <swiper :options="swiperOption" ref="mySwiper" v-if="swiperContent.length > 0">
        <!-- slides -->
        <swiper-slide v-for="swiper in swiperContent" :key="swiper.url">
          <img width="100%" :src="swiper.url">
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

      <h3 style="margin: 2px 15px;color: #585858;">{{title}}</h3>

      <p style="margin: 5px 10px;color: #383838;">{{content}}</p>

      <panel header="评论" :list="CommentList" type="1" ></panel>

    </div>

    <div class="article-comment">
      <group>
        <x-input placeholder="发表评论" v-model="commentContent">
          <x-button slot="right" mini @click.native="submitComment">提交</x-button>
        </x-input>
      </group>
    </div>

  </div>
</template>

<script>
  import { Flexbox, FlexboxItem,XButton,XInput,Group,Panel } from 'vux'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  import axios from "@/http/axios"

  export default {
    components: {
      swiper, swiperSlide, Flexbox, FlexboxItem, XButton, XInput,Group,Panel
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    data () {
      return {
        title:'',
        content:'',
        commentContent:'',
        is_like:0,
        swiperContent:[],
        swiperOption: {
          notNextTick: true, setWrapperSize: true, autoHeight: true, slidesPerView: 1, resistanceRatio: 0, observeParents: true,
          pagination: {el: '.swiper-pagination', clickable: true},
          navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}
        },
        CommentList: []
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        let CommentList = []
        // console.log(this.$route.params.id,'id')
        return axios({
          url: 'get_article_content',
          method: 'post',
          data:{id:this.$route.params.id}
        }).then( res => {
          this.title = res.data.title
          this.content = res.data.content
          this.swiperContent = JSON.parse(res.data.img)
          res.data.article_comment.forEach(function(item){
            CommentList.push({
              src:item.user__head_img,
              title:item.user__nick_name,
              desc:item.comment,
            })
          })
          this.CommentList = CommentList
          this.is_like = res.data.is_like
        });
      },
      submitComment(){
        if(this.commentContent == ''){
          this.$vux.alert.show({title: '评论内容不能为空'})
          return false
        }
        return axios({
          url: 'comment',
          method: 'post',
          data:{
            article_id:this.$route.params.id,
            comment:this.commentContent
          }
        }).then( res => {
          if(res.code==0){
            this.$vux.alert.show({title: '评论成功'})
            this.getData()
          }
        });
      },
      submitLike(){
        return axios({
          url: 'like',
          method: 'post',
          data:{article_id:this.$route.params.id,}
        }).then( res => {
          if(res.code==0){
            this.is_like = 1
          }
        });
      }
    }
  }
</script>

<style scoped>
  .article-content{
    margin-bottom: 45px;
  }
  .article-comment{
    position:fixed;
    bottom: 0;
    width: 100%;
  }
</style>
