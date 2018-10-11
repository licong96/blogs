<template>
  <div class="works-detail">
    <!-- 头部 -->
    <div class="header">
      <div class="header-center">
        <p class="header-title">{{data.title}}</p>
        <p class="header-title-desc">{{data.titleDesc}}</p>
      </div>
      <div class="header-video" v-if="data.headerVideo.type === 'video'">
        <video width="100%" height="100%" autoplay loop>
          <source :src="data.headerVideo.url" type="video/mp4">
          <p>您的浏览器不支持视频播放</p>
        </video>
      </div>
      <div class="header-video" v-if="data.headerVideo.type === 'img'">
        <img :src="data.headerVideo.url" alt="">
      </div>
    </div>
    <!-- 内容 -->
    <section class="content">
      <!-- 介绍 -->
      <section class="block">
        <div class="info max">
          <article class="info-center">
            <h1 class="info-title">
              <span class="info-title-color">{{data.subTitle}}</span>
              {{data.subTitleDesc}}
            </h1>
            <p class="info-text">
              {{data.text}}
            </p>
          </article>
          <article class="info-table">
            <ul class="table">
              <li class="table-list" v-for="(item, index) in data.sideTable" :key="index">
                <h3 class="table-title">{{item.title}}</h3>
                <p class="table-desc">{{item.desc}}</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
      <!-- 项目介绍 -->
      <section class="item" v-for="(item, index) in data.children" :key="index">
        <gallery :imgData="item" :parentClass="'parent-galler-' + index"></gallery>
      </section>
    </section>
    <!-- 关闭按钮 -->
    <section class="close-wrap">
      <div class="close" @click="bindBack">
        <div class="close-bg"></div>
      </div>
    </section>
  </div>
</template>

<script>

  import Gallery from '@/components/Gallery';
  import inquiryData from '../data/inquiry.js';
  import uzhikeData from '../data/uzhike.js';
  import { mapActions } from 'vuex';

  export default {
    name: 'works-detail',
    data() {
      return {
        data: {},
      }
    },
    created() {
      const id = this.$route.params.id;

      switch(id) {
        case '0':
          this.data = inquiryData;
        break;
        case '1':
          this.data = uzhikeData;
        break;
        default:
          this.bindBack();
      }

      this.setIsShowNav(false);     // 隐藏导航按钮
    },
    methods: {
      // 关闭页面
      bindBack() {
        if (window.history.length <= 1) {
          this.$router.replace({
            path: '/works'
          });
        } else {
          this.$router.back();
        }
      },
      ...mapActions([
        'setIsShowNav'
      ])
    },
    components: {
      Gallery
    },
    destroyed() {
      this.setIsShowNav(true);     // 销毁之后显示导航按钮
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/mixin.scss";

  .works-detail {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .header {
    overflow: hidden;
    position: relative;
    z-index: 1;
    height: 550px;
    background-color: $color-primary;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
      background-color: rgba(239, 83, 80, .9);
    }
    .header-center {
      position: absolute;
      top: 40%;
      left: 0;
      z-index: 3;
      width: 100%;
      min-height: 100px;
      text-align: center;
    }
    .header-title {
      font-weight: bold;
      font-size: 30px;
      color: #fff;
      letter-spacing: 2px;
    }
    .header-title-desc {
      padding-top: 20px;
      font-size: 16px;
      color: #fff;
    }
    .header-video {
      position: absolute;
      top: 40%;
      left: 50%;
      width: 400px;
      transform: translate(-50%, -50%);
    }
    @include MQ(md) {
      height: 800px;
    }
  }

  .block {
    position: relative;
    padding-bottom: 340px;
    &:before {
      content: "";
      position: absolute;
      top: -100px;
      left: -10%;
      right: -10%;
      z-index: 2;
      width: 120%;
      height: 360px;
      background-color: #fff;
      transform: rotate(8deg);
    }
  }
  @include MQ(md) {
    .block {
      &:before {
        top: -180px;
      }
    }
  }

  .content {
    position: relative;
    z-index: 2;
    background-color: #fff;
  }

  .max {
    position: relative;
    z-index: 3;
    max-width: 1080px;
    margin: auto;
  }

  // 信息
  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    .info-center {
      width: 100%;
    }
    .info-title {
      width: 100%;
      font-size: 30px;
      font-weight: 700;
      line-height: 1.5;
    }
    .info-title-color {
      display: block;
      color: $color-primary;
      letter-spacing: 1px;
    }
    .info-text {
      padding: 20px 0 40px 0;
      column-count: 1;
      column-gap: 0px;
      font-size: 16px;
      color: #444;
      line-height: 1.5;
      text-indent: 2em;
    }
    .info-table {
      margin-top: 0;
      border: 1px solid #eee;
      padding: 40px 30px;
      width: 100%;
    }
    .table-list {
      margin: 40px 0;
    }
    .table-title {
      margin-bottom: 12px;
      font-size: 16px;
      color: #444;
      font-weight: 900;
    }
    .table-desc {
      font-size: 14px;
      color: #666;
      line-height: 1.4;
    }
    @include MQ(md) {
      .info-center {
        width: 60%;
      }
      .info-text {
        padding: 50px  0;
        column-count: 2;
        column-gap: 50px;
      }
      .info-table {
        padding: 80px 40px;
        width: 33%;
      }
    }
  }

  // 项目介绍
  .item {
  }
  

  // 关闭按钮
  .close-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    margin: 30px auto;
    max-width: 1080px;
    width: 90%;
    height: 45px;
  }
  .close {
    position: relative;
    margin-left: auto;
    margin-right: 10px;
    width: 45px;
    height: 45px;
    cursor: pointer;
    transition: all .6s;
    &:hover {
      transform: rotate(90deg);
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 22px;
      right: 11px;
      border-radius: 3px;
      width: 24px;
      height: 2px;
      background-color: #444;
      transition: .3s;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
  .close-bg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
  }
</style>
