<template>
  <div id="app">
    <!-- 导航 -->
    <section class="nav__wrap">
      <nav class="pages-nav" :class="{'pages-nav--open': isNavOpen}">
        <div class="container flex-center">
          <div class="row">
            <div class="col-md-4 nav-link" @click="bindNavTo('home')">首页</div>
            <!-- <div class="col-md-3 nav-link" @click="bindNavTo('skill')">技能</div> -->
            <div class="col-md-4 nav-link" @click="bindNavTo('works')">作品</div>
            <div class="col-md-4 nav-link" @click="bindNavTo('about')">关于</div>
          </div>
          <div class="row social">
            <div class="col-md-12 nav-social">
              <a class="link" href="https://github.com/licong96" target="_blank">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-icongithub"></use>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
    <!-- 内容 -->
    <div class="pages-stack" :class="{'pages-stack--open': isStackOpen}" @click="bindCloseNav">
      <div class="page" :style="{backgroundColor: getPageColor}">
        <router-view></router-view>
      </div>
      <div class="page" :style="{backgroundColor: getPageColor}"></div>
      <div class="page" :style="{backgroundColor: getPageColor}"></div>
    </div>
    <!-- 按钮 -->
    <button class="menu-button" :class="{'menu-button--open': isButtonOpen, 'white': getPageColor === '#fff'}" v-show="getIsShowNav" @click="onOpenMenu">
      <span class="text">Menu</span>
    </button>
  </div>
</template>

<script>
import classie from "@/assets/js/classie.js";
import { mapGetters } from 'vuex'

export default {
  name: "app",
  data() {
    return {
      isNavOpen: false, // 是否打开导航
      isStackOpen: false, // 是否缩小页面
      isButtonOpen: false, // 改变按钮形状
      pages: null,   // page元素
      clientWdith: document.body.clientWidth || document.documentElement.clientWidth, // 文档宽度
      pageTransY: {   // 这是导航的高度，也是页面下移的位置，为了兼容不同设备
        default: {
          view: 0,    // 屏幕视图
          pointer: 20,  // 景深
          excur: 320  // 偏移
        },
        xs: {
          view: 360,
          pointer: 26,
          excur: 400
        },
        sm: {
          view: 576,
          pointer: 30,
          excur: 440
        },
        md: {
          view: 768,
          pointer: 40,
          excur: 480
        },
        lg: {
          view: 992,
          pointer: 50,
          excur: 560
        },
        xl: {
          view: 1200,
          pointer: 50,
          excur: 600
        },
        xxl: {
          view: 1600,
          pointer: 60,
          excur: 700
        },
      },
    };
  },
  computed: {
    ...mapGetters([
      'getIsShowNav',
      'getPageColor'
    ])
  },
  created() {
  },
  mounted() {
    this.pages = document.querySelectorAll(".page");
    this.elHtml = document.getElementsByTagName('html')[0];   // 获取html根元素，用来禁止页面滑动
    this.buildStack();
    window.onresize = () => {
      this.clientWdith = document.body.clientWidth || document.documentElement.clientWidth
    }
  },
  methods: {
    // 关闭导航菜单
    bindCloseNav() {
      if (this.isNavOpen) {
        this.onOpenMenu();
      }
    },
    // 导航跳转
    bindNavTo(path) {
      this.onOpenMenu();
      this.$router.push({
        path: '/' + path
      });
    },
    // 打开导航菜单
    onOpenMenu() {
      this.isNavOpen = !this.isNavOpen; // 是否打开导航
      this.isStackOpen = !this.isStackOpen; // 是否缩小页面
      this.isButtonOpen = !this.isButtonOpen; // 改变按钮形状
      let pages = this.pages;
      let {transY, pointer} = this._calculative();  // 偏移和景深

      this.overflowHtml();
      
      for (let i = 0, leng = pages.length; i < leng; i++) {
        if (this.isNavOpen) {
          pages[i].style.height = this.clientWdith + 'px';
          pages[i].style.WebkitTransform = `translate3d(0, ${transY}px, ${parseInt(-1 * 200 - pointer * i)}px)`;
          pages[i].style.transform = `translate3d(0, ${transY}px, ${parseInt(-1 * 200 - pointer * i)}px)`;
        } else {
          setTimeout(() => {
            pages[i].style.height = 'auto';
          }, 500);
          pages[i].style.WebkitTransform = "translate3d(0,0,0)";
          pages[i].style.transform = "translate3d(0,0,0)";
        }
      }
    },
    // 页面样式
    buildStack() {
      let pages = this.pages;
      let current = 0;

      for (let i = 0; i < pages.length; ++i) {
        let page = pages[i];

        if (current !== i) {
          classie.add(page, "page--inactive");
        } else {
          classie.remove(page, "page--inactive");
        }

        page.style.zIndex = pages.length + current - i;

        if (i !== -1) {
          page.style.opacity = parseFloat(1 - 0.1 * i);
        } else {
          page.style.opacity = 0;
        }
      }
    },
    // 计算当前可视区宽度，和页面可以偏移的位置
    _calculative() {
      let clientWdith = this.clientWdith;
      let pageTransY = this.pageTransY;
      let transY = pageTransY.default.excur;   // 偏移先等于默认
      let pointer = pageTransY.default.pointer;   // 景深先等于默认

      for (let val in pageTransY) {
        if (clientWdith > pageTransY[val].view) {
          transY = pageTransY[val].excur;
          pointer = pageTransY[val].pointer;
        }
      }

      return {transY, pointer};
    },
    // 禁止页面滑动
    overflowHtml() {
      if (this.isNavOpen) {
        this.elHtml.style.overflow = 'hidden';
      } else {
        this.elHtml.style.overflow = 'visible';
      }
    },
  }
};
</script>

<style scoped lang="scss">
  @import "./assets/scss/mixin.scss";

  .nav__wrap {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 450px;
  }
  @include MQ(md) {
    .flex-center {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
  .pages-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    // height: 50vh;
    height: 284px;
    padding: 10px;
    pointer-events: none;
    opacity: 0;
    background: transparent;
    text-align: center;
    transition: transform 1.2s, opacity 1.2s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transform: translate3d(0, 150px, 0);
    // 导航链接
    .nav-link {
      display: inline-block;
      padding: 10px;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      &:before {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        z-index: 2;
        margin-left: -20px;
        border-radius: 4px;
        width: 40px;
        height: 2px;
        background: #fff;
        transition: transform 0.3s;
        transform-origin: right;
        transform: scaleX(0);
      }
      &:hover {
        &:before{
          transform-origin: left;
          transform: scaleX(1);
        }
      }
    }
    // 其他链接
    .nav-social {
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      padding: 10px;
      width: 100%;
      font-size: 16px;
      color: #fff;
      text-align: center;
      transition: transform 1.2s, opacity 1.2s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      transform: translate3d(0, 20px, 0);
      .icon {
        margin-right: 6px;
        font-size: 22px;
      }
    }
    .link {
      padding: 4px;
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
    @include MQ(xs) {
      padding: 20px;
      height: 340px;
      .social {
        margin-top: 20px;
      }
      .nav-link {
        font-size: 18px;
      }
    }
    @include MQ(sm) {
      height: 380px;
    }
    @include MQ(md) {
      padding: 30px;
      height: 420px;
      .nav-link {
        padding: 10px 40px;
        font-size: 20px;
      }
      .social {
        margin-top: 30px;
      }
    }
    @include MQ(lg) {
      height: 460px;
    }
    @include MQ(xl) {
      height: 500px;
      .nav-link {
        padding: 10px 60px;
        font-size: 22px;
      }
      .social {
        margin-top: 40px;
      }
    }
  }
  // 导航添加open
  .pages-nav--open {
    pointer-events: auto;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    .nav-social {
      opacity: 1;
      transition-delay: 0.35s;
      transform: translate3d(0, 0, 0);
    } 
  }

  // Pages
  .pages-stack {
    z-index: 100;
    pointer-events: none;
    perspective: 1200px;
    perspective-origin: 50% -50%;
  }
  .page {
    position: relative;
    z-index: 5;
    // overflow: hidden;
    width: 100%;
    min-height: 568px;
    min-height: 100vh;
    pointer-events: auto;
    background-color: $color-primary;
    box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
  }
  .pages-stack--open .page {
    cursor: pointer;
    transition: all 0.5s;
    transition-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  }
  .page--inactive {
    position: absolute;
    z-index: 0;
    top: 0;
    opacity: 0;
  }
  // 导航按钮
  .menu-button {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1000;
    border: none;
    padding: 0;
    width: 30px;
    height: 24px;
    background: transparent;
    cursor: pointer;
    outline: none;
    &:before,
    &::after,
    .text {
      background: #fff;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      pointer-events: none;
      transition: transform 0.25s;
      transform-origin: 50% 50%;
    }
    &.white {
      &:before,
      &::after,
      .text {
        background: $color-primary;
      }
    }
    .text {
      overflow: hidden;
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      text-indent: 200%;
      transition: opacity 0.25s;
    }

    &:before {
      transform: translate3d(0, -10px, 0) scale3d(0.9, 1, 1);
    }

    &:after {
      transform: translate3d(0, 10px, 0) scale3d(0.9, 1, 1);
    }
    &.menu-button--open .text {
      opacity: 0;
    }
    &.menu-button--open::before {
      transform: rotate3d(0, 0, 1, 45deg);
    }
    &.menu-button--open::after {
      transform: rotate3d(0, 0, 1, -45deg);
    }
  }

  @include MQ(md) {
    .menu-button {
      top: 30px;
      right: 10%;
      margin-right: 16px;
      width: 40px;
      height: 36px;
    }
  }
</style>
