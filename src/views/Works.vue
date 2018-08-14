<template>
  <div class="works">
    <div class="header">
      <!-- <h4 class="header-title">我的作品</h4> -->
    </div>
    <div class="content">
      <ul class="content-wrap">
        <li class="content-list" @click="bindOpenDetail('1')">
          项目一
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'works',
    methods: {
      // 打开详细页
      bindOpenDetail(item) {
        console.log(item)
        this.$router.push({
          path: '/works/' + item
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/mixin.scss";

  .works {
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
  }
  .header {
    height: 122px;
    line-height: 122px;
    background-color: $color-primary;
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
  .content-list {
    margin: 20px 0;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0 0.4rem 0.8rem -0.1rem rgba(0,32,128,.1), 0 0 0 1px #f0f2f7;
    line-height: 1.8;
    font-size: 18px;
    background: #fff;
  }
</style>
