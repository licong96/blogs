<template lang="html">
  <!-- 图片轮播显示 -->
  <section class="swiper-wrap">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in swiperData" :key="index">
        <img class="swiper-img" :src="item.pic" alt="">
        <div class="swiper-lazy-preloader"></div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
  import 'swiper/dist/css/swiper.css'   // 轮播样式
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    props: {
      swiperData: {   // 数据
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 50,
          centeredSlides: true,
        },
        timeLoadImg: true,
      }
    },
    created() {
      this.updateTime = true
    },
    mounted() {
      this.$nextTick(() => {
        this.mySwiper = this.$refs.mySwiper.swiper
      })
    },
    methods: {
      loadImg() {
        if (this.timeLoadImg) {     // 图片加载后，发送事件
          this.timeLoadImg = false
          this.$emit('load')
        }
      },
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped lang="scss">
  .swiper-wrap {
    // min-width: 1200px;
    .swiper-slide {
      width: 292px;
      height: 494px;
    }
    .swiper-img {
      display: block;
      position: relative;
      z-index: 2;
      max-width: 100%;
      max-height: 100%;
    }
    .swiper-lazy-preloader {
      z-index: 1;
    }
    .swiper-img {
      width: auto;
      margin: 0 auto;
    }
  }
</style>
