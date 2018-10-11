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
        <div class="company">
          <h3 class="company__name">江西房管家网络科技有限公司（2017年11月 ~ 至今）</h3>
          <p class="company__desc">公司主要做房地产行业</p>
          <p class="company__duty">职务：前端开发</p>
          <div class="project">
            <h4 class="project__name">项目：房管家后台管理系统（我的得意之作）</h4>
            <div class="project__content">
              <p class="project__text">这是提供给合作公司、中介、个人使用的客户管理和楼盘报备等功能的管理系统，目的是拓展客户，促使成交。绑定了微信公众号，主要运行在移动端。</p>
              <p class="project__text">第一个版本是由我的经理也是公司的全栈开发的，主要用的是jQuery和mui，没有使用构建工具，没有模块化，没有组件化，没有前端工程化的概念。随着需求和功能的增加，代码量逐渐庞大，这种技术架构的劣势就出现了：新增功能效率慢，各个功能之间的逻辑关系错综复杂，页面的样式和结构看的让人想吐，可扩展性差，维护成本高，已临近崩溃。</p>
              <p class="project__text">系统有录入客户>报备客户>跟进>辩客>到访>接待>客户成交！这一套流程，每个都是独立的功能模块却又层层嵌套，我用了一周时间理解透彻将要开发的产品，剖析各个模块之间的对应关系。然后我要求进行重构，担任前端兼设计，主导整个项目的前端，独立开发，也是可怜只有我一个前端，使用的是vue技术栈，完美的解决了上面的问题。我让项目快速上线，给业务人员使用，让他们提出问题，然后迭代开发，再扩展后续功能。</p>
              <p class="project__text">开发期间遇到几个大问题，第一个是和后端沟通不够，大家各自闷头开发，一副没事别打扰的工作状态，导致双方接口联调总是出问题，影响前端进度，还有实现功能的想法不一致，导致已经写好的代码都白费了。所以我提议每天早上开发之前，大家用5-10分钟说一说，总结昨天的开发内容，今天将要开发的内容，有什么问题，哪里需要协作。这样既保证了我们的沟通，总监也明确的知道当前的开发进度，更好的掌控整开发期间遇到几个大问题，第一个是和后端沟通不够，大家各自闷头开发，一副没事别打扰的工作状态，导致双方接口联调总是出问题，影响前端进度，还有实现功能的想法不一致，导致已经写好的代码都白费了。所以我提议每天早上开发之前，大家用5个项目的走向。</p>
              <p class="project__text">第二个是BUG。使用vue到目前为止遇到的最大BUG，白屏问题，页面上什么都没有。（后来我才知道错怪vue了）。总之这是一个让人瑟瑟发抖的BUG，而且不是一个问题造成的，让我先是痛苦不堪，解决之后欣喜若狂。</p>
              <p class="project__text">刚开始是IOS10以下和部分老版本安卓手机出现问题，我使用移动端调试，根据错误信息进行查找，感谢Google，让我在webpack-dev-server的GitHub上找到了答案，是因为2.7.1以后的版本不再兼容低版本浏览器，降级就可以解决。</p>
              <p class="project__text">部分手机在微信浏览器中出现白屏（这次和手机的版本无关），有时会，有时不会，在其他非微信浏览器中却都可以正常访问。我尝试加polyfill做代码兼容，却并没有用处。针对这手机开启本地调试却没有问题了，发布到线上服务器测试又有问题，发布到测试服务器测试却又没有问题，十分诡异。后来我终于知道是微信缓存问题，清除缓存都没用，只有退出微信账号，重新登录，才能解决问题。</p>
              <p class="project__text">公司有一百多位分销商，为了满足他们的使用需求，我又添加了组织架构、图表统计、抢客、房源、销控、合同、对账单等，这是一个非常大的系统，已经稳定的运行了半年，想了解更多可以去这里 https://github.com/licong96。</p>
            </div>
          </div>
          <div class="project">
            <h4 class="project__name">项目：小程序版的管理系统</h4>
            <div class="project__content">
              <p class="project__text">web移动端的系统运行稳定之后，为了满足案场人员和其他团队的使用需求，要开发一个小程序版本。功能已经熟悉了，只是在系统原有的基础上增加了一些模块，这里面会用到一些组件，比如根据字母排列的城市选择组件、列表左右滑动组件、组织架构多级联动组件，我没有去找第三方插件，而是使用小程序组件化开发方案自己手写，这样可以更好的控制代码体积，更好的做优化，也更好的锻炼自己。</p>
            </div>
          </div>
        </div>
        <div class="company">
          <h3 class="company__name">南昌蚂蚁众投投资管理有限公司（2016年6月 ~ 2017年11月）</h3>
          <p class="company__desc">公司主要做股权投资基金</p>
          <p class="company__duty">职务：前端开发</p>
          <div class="project">
            <h4 class="project__name">项目：创业项目路演平台</h4>
            <div class="project__content">
              <p class="project__text">为青年创新创业，开发的一个平台，我担任唯一的前端开发者，目的是能够让创业者上传自己的创业项目，充分的介绍和展示自己的项目，让投资方看到，进行股权融资，还有投票，拉票，评奖，比赛功能。这个项目我使用了vue，开发了1个月上线，首先在大学推广，一个星期后大学生上传的创业项目多达200个，然后进行比拼，演讲，公司投资前三名。</p>
            </div>
          </div>
          <div class="project">
            <h4 class="project__name">项目：公司的股权融资网站</h4>
            <div class="project__content">
              <p class="project__text">这个项目使用的传统技术，jQuery+bootstrap+Handlebars，我是其中一位前端开发者，当时水平有限，不是主力，只负责投资项目模块，和一些活动页面，PC端和移动端是分开的，由后端判断渲染哪一套代码，所以我要写两套代码，结果是中规中矩，做的说不上有多好，也不至于会出bug。最重要的是，这个项目让我更熟悉前后端数据交互，并掌握了前端模板引擎的用法，和css预处理Less。</p>
            </div>
          </div>
        </div>
        <div class="company">
          <h3 class="company__name">南昌亿宸信息技术有限公司（2015年12月 ~ 2016年6月）</h3>
          <p class="company__desc">公司提供技术支持和软件开发</p>
          <p class="company__duty">职务：前端开发</p>
          <div class="project">
            <h4 class="project__name">项目：创业项目路演平台</h4>
            <div class="project__content">
              <p class="project__text">为青年创新创业，开发的一个平台，我担任唯一的前端开发者，目的是能够让创业者上传自己的创业项目，充分的介绍和展示自己的项目，让投资方看到，进行股权融资，还有投票，拉票，评奖，比赛功能。这个项目我使用了vue，开发了1个月上线，首先在大学推广，一个星期后大学生上传的创业项目多达200个，然后进行比拼，演讲，公司投资前三名。</p>
            </div>
          </div>
          <div class="project">
            <h4 class="project__name">项目：公司的股权融资网站</h4>
            <div class="project__content">
              <p class="project__text">一开始使用HBuilder，后来它出了一个天大的BUG，改用了APICloud，使用标准Web技术开发iOS、Android原生App，号称媲美原生开发，负责前端，分析需求，搭建环境，还原设计图，有的项目没有设计图，那么我就兼并设计，再和后端沟通配合做数据交互。</p>
              <p class="project__text">从接触APICloud，到开始独立开发一个项目，用了一周时间，之后越来越熟练，参与开发过的混合APP十个以上，类型有在线教育、直播平台、医疗机构、园区管理、汽车配件等，可惜产品参差不齐，现在都死的差不多，这些早期项目都是用来学知识的。</p>
              <p class="project__text">学到了不少知识，我也发现了很多问题，比如：同样的代码在不同的手机中显示不一样，有时需要写更多的代码来解决一些问题。APICloud自称能媲美原生APP，其实有很大差距，对于配置较低的手机，项目小看不出来，项目大就会有响应缓慢，甚至卡顿现象，体验不流畅，为了解决这个问题，首先考虑的是自己代码问题，学了一些代码优化，确实有效。平台也有不完善的地方，但是以后应该会更好。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="chunk">
      <h2 class="chunk__title">开源项目和作品</h2>
      <div class="chunk__content">
        <div class="chunk__block">
          <h3 class="chunk__title-sub">香菇街</h3>
          <div class="chunk__content">
            <div class="chunk__text">学习vue的时候开发的女装商城，纯前端项目，用jsonp抓取了蘑菇街的线上数据，来渲染页面，微信上打开更好，地址：
              <a class="chunk__link" href="https://github.com/licong96/women-wear-mall" target="_blank">https://github.com/licong96/women-wear-mall</a>
            </div>
          </div>
        </div>
        <div class="chunk__block">
          <h3 class="chunk__title-sub">城市选择器插件</h3>
          <div class="chunk__content">
            <div class="chunk__text">省-市-区三级联动城市选择器插件，地址：
              <a class="chunk__link" href="https://github.com/licong96/lc-city-selector" target="_blank">https://github.com/licong96/lc-city-selector</a>
            </div>
          </div>
        </div>
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
    max-width: 960px;
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
  .company {
    padding-bottom: 20px;
  }
  .company__name {
    font-size: 18px;
    color: #333;
  }
  .company__desc,
  .company__duty {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
  }
  .project {
    padding: 20px 15px;
  }
  .project__name {
    font-size: 16px;
    color: #333;
  }
  .project__content {
    padding: 10px 15px;
  }
  .project__text {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    text-indent: 2em;
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
