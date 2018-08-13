<template lang="html">
  <section class="deliverables">
    <div class="contain mobile-display" :class="parentClass">
      <div class="iphone-contain">
        <figure class="iphone">
          <div class="side-buttons"><div></div></div>
          <div class="phone">
            <div class="top"><div><span class="camera"></span><span class="speaker"></span></div></div>
            <div class="screen">
              <div class="screens slider-one">

                <figure>
                  <ul class="slider-one-imgs">
                    <li class="slider-one-img" v-for="(item, index) in imgData" :key="index">
                      <img :src="item.url" :alt="item.title" v-if="item.type === 'img'">
                      <video width="100%" height="100%" preload :poster="item.poster" controls v-else @click="bindVideoToggle($event, item)">
                        <source :src="item.url" type="video/mp4">
                        <p>您的浏览器不支持视频播放</p>
                      </video>
                    </li>
                  </ul>
                </figure>
                
                <ul class="slider-one-imgs">
                  <li class="slider-one-background-img" v-for="(item, index) in imgData" :key="index">
                    <img :src="item.url" :alt="item.title" v-if="item.type === 'img'">
                    <img :src="item.poster" :alt="item.title" v-else>
                  </li>
                </ul>

              </div> 
            </div>
            <div class="bottom"><div></div></div>
          </div>
        </figure>

        <div class="pagination pag-1">
          <ul>
            <li class="" v-for="(item, index) in imgData" :key="index">{{index + 1}}</li>
          </ul>
        </div>
      </div>

      <figcaption> 
        <ul class="first-display-descp">
          <li class="" v-for="(item, index) in imgData" :key="index">
            <h3>{{item.title}}</h3>
            <p>{{item.desc}}</p>
          </li>
        </ul>
      </figcaption>   

    </div>
  </section>
</template>

<script>

	import { TweenMax } from "gsap";
  import gallery from '@/assets/js/gallery';
  import compare from '@/assets/js/compare';

  export default {
    props: {
      imgData: {
        type: Array,
        default: () => []
      },
      parentClass: {      // 用不同的class,来控制滑动
        type: String,
        default: ''
      }
    },
    data() {
      return {
      }
    },
    created() {
    },
    mounted() {
      setTimeout(() => {
				gallery(this.parentClass);
        compare();
			}, 20)
    },
    methods: {
      // 点击视频播放或取消
      bindVideoToggle(event, item) {
        item.isPlay ? event.currentTarget.pause() : event.currentTarget.play();
        item.isPlay = !item.isPlay;
      }
    },
    components: {
    }
  }
</script>

<style scoped lang="scss">
	@import "../assets/scss/gallery.scss";
  .deliverables {
    position: relative;
    overflow: hidden;
    user-select: none;
  }
  .slider-one-imgs {
    font-size: 0;
  }
</style>
