<template>
  <div style="position: relative;">

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
          <x-button mini type="primary" style="border-radius:25px;">赞</x-button>
        </flexbox-item>
      </flexbox>

      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img width="100%" src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg">
        </swiper-slide>
        <swiper-slide>
          <img width="100%" src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg">
        </swiper-slide>
        <swiper-slide>
          <img width="100%" src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

      <h3 style="margin: 2px 15px;color: #585858;">测试TITLE</h3>

      <p style="margin: 5px 10px;color: #383838;">
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
        测试内容 测试内容 测试内容 测试内容 测试内容 测试内容
      </p>
    </div>

    <group class="article-comment">
      <x-input placeholder="发表评论">
        <x-button slot="right" mini>提交</x-button>
      </x-input>
    </group>

  </div>
</template>

<script>
  import { Flexbox, FlexboxItem,XButton,XInput,Group } from 'vux'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    components: {
      swiper, swiperSlide, Flexbox, FlexboxItem, XButton, XInput,Group
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    ready () {

    },
    methods: {

    },
    data () {
      return {
        swiperOption: {
          notNextTick: true, setWrapperSize: true, autoHeight: true, slidesPerView: 1, resistanceRatio: 0, observeParents: true,
          pagination: {el: '.swiper-pagination', clickable: true},
          navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}
        }
      }
    }
  }
</script>

<style scoped>
.article-content{
  /*position: relative;*/
  padding-bottom: 45px;
}
.article-comment{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
