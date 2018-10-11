<template>
  <div class="works">
    <section class="item__wrap">
      <div class="item__space" v-for="(item, index) in worksData" :key="index">
        <div class="item" @click="bindOpenDetail(item)">
          <h3 class="item__title">{{item.title}}</h3>
          <p class="item__desc">{{item.desc}}</p>
        </div>
      </div>
    </section>
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
            id: 0,
            title: '房管家系统',
            desc: '我的得意之作',
          }, {
            id: 1,
            title: '小程序版的管理系统',
            desc: '小程序版的管理系统',
          }, {
            title: '香菇街',
            desc: '用jsonp抓取蘑菇街数据来渲染的一个纯前端项目 ',
            link: 'https://licong96.github.io/work/women/#/item'
          }, {
            title: '省市区选择器',
            desc: '无依赖的三级联动选择器插件',
            link: 'https://github.com/licong96/lc-city-selector'
          }, {
            title: 'webpack项目',
            desc: '使用webpack组件化开发的房产平台',
            link: 'https://github.com/licong96/fgj-website'
          }, {
            title: '移动端路演项目',
            desc: '创业项目路演平台',
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
    overflow: hidden;
    margin: 0 auto;
    padding-top: 66px;
    max-width: 960px;
  }
  .item__wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .item__space {
    flex: 0 0 100%;
    padding: 15px 30px;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      width: 100%;
      height: 150px;
      background-color: #fff;
      box-shadow: 0 9px 30px 0 rgba(35, 39, 42, 0.1);
      cursor: pointer;
    }
    .item__title {
      margin: 0;
      font-size: 20px;
      color: #333;
    }
    .item__desc {
      padding: 10px 20px;
      font-size: 14px;
      color: #666;
      line-height: 1.5;
      text-align: center;
    }
  }
  @include MQ(sm) {
    .item__wrap {
      padding: 0 20px;
    }
    .item__space {
      flex: 0 0 50%;
      .item {
        height: 180px;
      }
    }
  }
  @include MQ(md) {
    .works {
      padding-top: 80px;
    }
    .item__space {
      flex: 0 0 33.33%;
      padding: 20px;
      .item {
        height: 200px;
      }
    }
  }
</style>
