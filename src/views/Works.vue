<template>
  <div class="works">
    <div class="content">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="(item, index) in worksData" :key="index">
          <div class="list" @click="bindOpenDetail(item)">
            <!-- <div class="list__bg" :style="'backgroundImage: url('+item.img+')'"></div> -->
            <div class="list__content">
              <h3 class="list__title">{{item.title}}</h3>
              <p class="list__desc">{{item.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'works',
    data() {
      return {
        worksData: [
          {
            // img: require('@/assets/image/gallery/fgj-sys/inquiry/poster.png'),
            id: 0,
            title: '房管家系统',
            desc: '描述',
          }, {
            // img: require('@/assets/image/gallery/fgj-sys/inquiry/poster.png'),
            id: 1,
            title: '小程序',
            desc: '描述',
          }, {
            // img: require('@/assets/image/gallery/fgj-sys/inquiry/poster.png'),
            title: '香菇街',
            desc: '描述',
            link: 'https://licong96.github.io/work/women/#/list'
          }, {
            // img: require('@/assets/image/gallery/fgj-sys/inquiry/poster.png'),
            title: '省市区选择器',
            desc: '描述',
            link: 'https://licong96.github.io/work/lc-city-selector/index.html'
          }, {
            // img: require('@/assets/image/gallery/fgj-sys/inquiry/poster.png'),
            title: 'webpack项目',
            desc: '使用webpack组件化开发的房产平台',
            link: 'https://github.com/licong96/fgj-website'
          }, {
            // img: require('@/assets/image/gallery/fgj-sys/inquiry/poster.png'),
            title: '移动端路演项目',
            desc: '创业项目',
            link: 'https://github.com/licong96/myzt-up-show'
          }
        ]
      }
    },
    created() {
      this.setPageColor('#ef5350');
    },
    methods: {
      // 打开详细页
      bindOpenDetail(item) {
        if (item.link) {
          window.open(item.link);
        } else {
          this.$router.push({
            path: '/works/' + item.id
          });
        }
      },
      ...mapActions([
        'setPageColor'
      ])
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/mixin.scss";

  .works {
    padding-top: 66px;
    width: 100%;
    min-height: 100vh;
  }
  .header-title {
    margin: 0;
    text-align: center;
    color: #fff;
  }
  .content {
    margin: 0 auto;
    padding: 0 15px;
    max-width: 950px;
    overflow: hidden;
  }
  .list {
    overflow: hidden;
    position: relative;
    padding-top: 100%;
  }
  .list__bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .list__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 20px;
    border-radius: 6px;
    // background-color: rgba(0, 0, 0, .5);
    background-color: #fff;
    cursor: pointer;
  }
  .list__title {
    font-size: 20px;
    color: #333;
  }
  .list__desc {
    padding-top: 10px;
    font-size: 14px;
    color: #666;
  }
  @include MQ(md) {
    .works {
      padding-top: 96px;
    }
  }
</style>
