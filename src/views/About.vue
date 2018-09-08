<template>
  <div class="about">
    <section class="chunk base-info">
      <h2 class="chunk__title">基本信息</h2>
      <div class="chunk__content">
        <ul class="chunk__wrap">
          <li class="chunk__item">
            <span class="chunk__bar">姓名：</span>
            <span class="chunk__desc">黎聪</span>
          </li>
          <li class="chunk__item">
            <span class="chunk__bar">性别：</span>
            <span class="chunk__desc">男</span>
          </li>
          <li class="chunk__item">
            <span class="chunk__bar">年龄：</span>
            <span class="chunk__desc">23</span>
          </li>
          <li class="chunk__item">
            <span class="chunk__bar">开发经验：</span>
            <span class="chunk__desc">3年</span>
          </li>
          <li class="chunk__item">
            <span class="chunk__bar">学历：</span>
            <span class="chunk__desc">江西农业大学专科</span>
          </li>
          <li class="chunk__item">
            <span class="chunk__bar">电话：</span>
            <span class="chunk__desc">136-9953-1996</span>
          </li>
          <li class="chunk__item">
            <span class="chunk__bar">邮箱：</span>
            <span class="chunk__desc">1347436746@qq.com</span>
          </li>
          <li class="chunk__item">
            <span class="chunk__bar">GitHub：</span>
            <span class="chunk__desc"><a class="chunk__link" href="https://github.com/licong96" target="_blank">https://github.com/licong96</a></span>
          </li>
        </ul>
      </div>
    </section>
    <section class="chunk">
      <h2 class="chunk__title">我的技能汇总</h2>
      <div class="chunk__content">
        <div class="chunk__block">
          <h3 class="chunk__title-sub">HTML</h3>
          <div class="chunk__text">浏览器内核、渲染原理、依赖管理、兼容性、html5（本地存储、多媒体、语义化标签、新的属性、新的API）。</div>
        </div>
        <div class="chunk__block">
          <h3 class="chunk__title-sub">CSS</h3>
          <div class="chunk__text">盒模型、文档流、选择器、继承、权重、层叠上下文、布局（弹性、固定、流式、浮动、定位、响应式）、常见的hack、BFC、BEM、CSS Modules、CSS预处理器、CSS3常用属性；垂直外边距合并就有三种情况，还有很多没见过的属性，水太深了，不敢说精通CSS。</div>
        </div>
        <div class="chunk__block">
          <h3 class="chunk__title-sub">JavaScript</h3>
          <div class="chunk__text">机制提升、类型转换、词法作用域、闭包、对象、函数、正则表达式、原型、原型链继承、this、class、回调、异步、事件循环机制、事件委托、内存泄漏、设计模式、排序算法、单元测试、模板引擎、常用的ES6语法和API、Fetch、Http、同源策略、数据Mock、DOM、BOM。</div>
        </div>
        <div class="chunk__block">
          <h3 class="chunk__title-sub">前端框架</h3>
          <dl class="chunk__grade">
            <dt class="chunk__title-dt">jQuery</dt>
            <dd class="chunk__text">严格来说它不是框架，顶多算个js工具库，用了好些年，现在已经可以华丽的退场了。</dd>
          </dl>
          <dl class="chunk__grade">
            <dt class="chunk__title-dt">vue技术栈</dt>
            <dd class="chunk__text">vue + vue-router + vuex + vue-devtools + axios + webpack + babel + eslint。</dd>
            <dd class="chunk__text">从vue1开始用，到现在用了两年，也是通过它，让我接触到前端工程化。</dd>
          </dl>
          <dl class="chunk__grade">
            <dt class="chunk__title-dt">react技术栈</dt>
            <dd class="chunk__text">react + react-router + redux + devTools + fetch + webpack + babel + eslint。</dd>
            <dd class="chunk__text">vue参考了react，有很多相同的地方，用的虽没vue多，也开发过公司小项目。</dd>
          </dl>
          <dl class="chunk__grade">
            <dt class="chunk__title-dt">其他框架/UI</dt>
            <dd class="chunk__text">Element-ui、iView、Ant Design、Bootstrap、Muse-ui、Material-ui、MUI......</dd>
          </dl>
          <dl class="chunk__grade">
            <dt class="chunk__title-dt">JS库/插件</dt>
            <dd class="chunk__text">Zepto、Chart、ECharts、Mock、Lodash......</dd>
          </dl>
        </div>
        <div class="chunk__block">
          <h3 class="chunk__title-sub">小程序</h3>
          <div class="chunk__content">
            <div class="chunk__text">有一年小程序开发经验，当时特别火，业余时间和后端朋友开发过几个挣点了点零花钱，做的多了就熟悉了。现在公司（房管家）把系统再开发了一个小程序版本。</div>
          </div>
        </div>
        <div class="chunk__block">
          <h3 class="chunk__title-sub">Hybrid App</h3>
          <div class="chunk__content">
            <div class="chunk__text">早期用过HBuilder和APICloud，后来用vue的时候尝试过weex。</div>
          </div>
        </div>
        <div class="chunk__block">
          <h3 class="chunk__title-sub">工具</h3>
          <div class="chunk__content">
            <dl class="chunk__grade">
              <dt class="chunk__title-dt">底层工具</dt>
              <dd class="chunk__text">Node.js、npm/yarn</dd>
            </dl>
            <dl class="chunk__grade">
              <dt class="chunk__title-dt">构建工具</dt>
              <dd class="chunk__text">小项目我用parcel</dd>
              <dd class="chunk__text">中小型用Gulp</dd>
              <dd class="chunk__text">大型用webpack，不依赖脚手架工具，参考官方文档配置过webpack多页面大型项目</dd>
            </dl>
            <dl class="chunk__grade">
              <dt class="chunk__title-dt">版本管理工具</dt>
              <dd class="chunk__text">Git、SVN</dd>
            </dl>
          </div>
        </div>
        <div class="chunk__block">
          <h3 class="chunk__title-sub">其它</h3>
          <div class="chunk__content">
            <div class="chunk__text">熟悉模块化的开发，组件化的思想、性能优化、代码规范，断点调试，会翻墙，能自由上网</div>
          </div>
        </div>
      </div>
    </section>
    <section class="chunk">
      <h2 class="chunk__title">工作经历 + 项目经验</h2>
      <div class="chunk__content">
        <div class=""></div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'about',
    created() {
      this.setPageColor('#fff');
    },
    mounted() {
      // InitFlubber(); // 一只鸭子在哔哔
    },
    methods: {
      clickSkillList(item) {
        item.isShowDesc ? item.isShowDesc = false : item.isShowDesc = true;
      },
      ...mapActions([
        'setPageColor'
      ])
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../assets/scss/mixin.scss";

  .about {
    overflow: hidden;
    margin: 0 auto;
    padding-top: 66px;
    max-width: 980px;
  }
  .chunk {
    padding: 0 20px;
    margin-bottom: 30px;
  }
  .chunk__title {
    font-size: 24px;
    color: #333;
  }
  .chunk__content {
    margin-top: 20px;
  }
  .chunk__wrap {
  }
  .chunk__item {
    
  }
  .base-info {
    .chunk__wrap {
      display: flex;
      flex-wrap: wrap;
    }
    .chunk__item {
      margin-bottom: 10px;
      width: 100%;
      font-size: 14px;
    }
    .chunk__bar {
      color: #666;
    }
    .chunk__desc {
      color: #333;
    }
    .chunk__link {
      color: $color-primary;
    }
  }
  .chunk__block {
    padding-bottom: 10px;
  }
  .chunk__title-sub {
    margin: 10px 0;
    font-size: 18px;
    color: #444;
  }
  .chunk__text {
    margin-left: 15px;
    border-radius: 4px;
    padding: .5em;
    font-size: 14px;
    color: #525252;
    line-height: 1.6;
    background-color: #f8f8f8;
  }
  .chunk__grade {
    margin-left: 15px;
    margin-bottom: 15px;
  }
  .chunk__title-dt {
    margin-bottom: 10px;
    font-size: 16px;
    color: #555;
    font-weight: 600;
  }
  @include MQ(md) {
    .about {
      padding-top: 96px;
    }
    .chunk {
      margin-bottom: 50px;
    }
    .chunk__content {
      padding: 0 20px;
    }
    .base-info {
      .chunk__item {
        flex: 0 0 33.33%;
        font-size: 14px;
      }
      .chunk__bar {
        color: #666;
      }
      .chunk__desc {
        color: #333;
      }
      .chunk__link {
        color: $color-primary;
      }
    }
  }
</style>
