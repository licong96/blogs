<template>
  <div class="home">
    <!-- about -->
    <section class="introduce">
      <div class="info" v-show="false">
        <h1 class="title">黎聪</h1>
        <h3 class="occupation">前端开发者</h3>
        <p class="good">擅长HTML5、CSS3、JavaScript、jQuery、Require.js、Vue.js、Weex、Webpack、Gulp、Git、模块化开发、组件化开发</p>
      </div>
      <!-- 一只鸭子在哔哔 -->
      <div class="duck">
        <div class="flubber">
          <div class="flubber-guy">
            <div class="flubber-eyes" style="transform: rotate(-27.4784deg);"></div>
          </div>
          <ul class="flubber-quote show">
            <li class="text" style="display: list-item;;">你好！</li>
            <li class="text" style="display: none">我是黎聪</li>
            <li class="text" style="display: none;">一位热爱前端的开发者</li>
            <li class="text" style="display: none;">这里有我的介绍</li>
          </ul>
        </div>
      </div>
      <!-- svg -->
      <div class="squadDivider-nJvGZ-"><svg class="wave-1hkxOo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-haxJK1" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="#f8f9fd"></path></svg></div>
    </section>
    <!-- skill -->
    <section class="skill">
      <div class="skill-bg">
        <div class="container">
          <h3 class="title">我的技能</h3>
          <div class="row">
            <div class="col-md-4" v-for="(item, index) in 9" :key="index">
              <div class="list">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-html"></use>
                </svg>
                <p class="tag">HTML</p>
                <span class="arrow">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-you"></use>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- works -->
    <section class="works">
      <div class="container">
        <div class="phone">
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import InitFlubber from "../assets/js/flubber/index";

export default {
  name: "home",
  data() {
    return {
    }
  },
  mounted() {
    // InitFlubber(); // 一只鸭子在哔哔
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin.scss";

.home {
}
// 介绍
.introduce {
  position: relative;
  padding-top: 100px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    background-image: url("..//assets/image/top-bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    // background
  }
  .info {
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
  }
  .title {
    font-size: 30px;
  }
  .occupation {
    font-size: 20px;
  }
  .good {
    font-size: 16px;
    line-height: 1.6;
  }

  // 鸭子在哔哔
  .duck {
    position: relative;
    height: 300px;
    .flubber-quote {
      padding: 4px;
    }
    .text {
      font-size: 12px;
    }
  }
  // svg
  .squadDivider-nJvGZ- {
    bottom: 0;
    color: #ef5350;
    left: 0;
    position: absolute;
    width: 100%;
  }
  .wave-1hkxOo {
    display: block;
  }
  .wavePath-haxJK1 {
    // animation: waveDividerAnimation-2m2aau 16s linear infinite alternate;
  }

  @keyframes waveDividerAnimation-2m2aau {
    0% {
      d: path(
        "M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
      );
    }

    50% {
      d: path(
        "M655.558582,28.4898877 C500.191373,61.6062216 422.833785,83.5422763 266.940085,49.8995879 C112.480383,16.5663637 84.0992497,8.02840272 0,44.7243294 L0,150.727527 L1920,150.727527 L1920,49.8995879 C1580.91676,-34.8808285 1438.10804,73.6768193 1148.0266,38.0019829 C857.945166,2.32714659 810.925791,-4.62644617 655.558582,28.4898877 Z"
      );
    }

    to {
      d: path(
        "M842.322034,38.0019829 C686.954825,71.1183168 623.386282,53.08497 467.492582,19.4422816 C313.032879,-13.8909426 84.0992497,8.02840272 0,44.7243294 L0,150.727527 L1920,150.727527 L1920,76.8685643 C1512.23604,-35.3595639 1568.70222,67.4289432 1278.62078,31.7541069 C988.539347,-3.92072949 997.689243,4.88564905 842.322034,38.0019829 Z"
      );
    }
  }

  @include MQ(xs) {
    .duck {
      .flubber-quote {
        padding: 6px 18px;
      }
      .text {
        font-size: 14px;
      }
    }
  }
  @include MQ(md) {
    .title {
      font-size: 34px;
    }
    .good {
      font-size: 18px;
    }
    .duck {
      .flubber {
        left: 10%;
      }
      .flubber-quote {
        padding: 8px 20px;
      }
      .text {
        font-size: 16px;
      }
    }
  }
  @include MQ(lg) {
    padding-top: 120px;
    padding-bottom: 40px;
    .title {
      font-size: 40px;
    }
    .occupation {
      font-size: 24px;
    }
    .good {
      font-size: 20px;
    }
  }
  @include MQ(xl) {
    padding-top: 150px;
    padding-bottom: 40px;
    .title {
      font-size: 42px;
    }
    .occupation {
      font-size: 30px;
    }
    .good {
      font-size: 24px;
    }
  }
}

// 技能
.skill {
  overflow: hidden;
  width: 100%;
  background-color: #f8f9fd;
  .skill-bg {
    background-attachment: scroll,fixed;
    background-image: linear-gradient(0deg,rgba(248,249,253,.7),#f8f9fd),url('../assets/image/content-bg.svg');
    background-position: top,bottom;
    background-repeat: no-repeat;
    background-size: contain;
    color: #36393f;
    font-weight: 500;
    min-height: 550px;
    width: 100%;
  }

  .title {
    padding: 10px 0 40px 0;
    margin: 0;
    font-size: 24px;
    font-weight: normal;
    text-align: center;
  }
  .list {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    box-shadow: 0 9px 30px 0 rgba(35,39,42,.1);
    padding: 20px 20px 40px;
    background: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s;
    &:hover {
      transform: translateY(-8px);
      .icon {
        opacity: 1;
      }
      .arrow .icon {
        animation-name: arrow-right;
        animation-duration: 1s;
        animation-iteration-count: infinite;
      }
    }
    .icon {
      font-size: 50px;
      color: $color-primary;
      opacity: .7;
      transition: all .2s;
    }
    .tag {
      width: 100%;
      text-align: center;
    }
    .arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: -25px;
      left: 50%;
      border-radius: 4px;
      margin-left: -27px;
      width: 56px;
      height: 50px;
      background-color: #000;
      .icon {
        opacity: 1;
        font-size: 24px;
        color: #fff;
      }
    }
  }
  @include MQ(md) {
    .skill-bg {
      padding-top: 30px;
      padding-bottom: 50px;
    }
    .list {
      margin: 10px 10px 60px 10px;
      padding: 30px 20px 50px;
    }
  }
  @include MQ(lg) {
    .skill-bg {
      padding-top: 50px;
      padding-bottom: 100px;
    }
  }
  @include MQ(xl) {
    .skill-bg {
      padding-top: 100px;
      padding-bottom: 120px;
    }
    .list {
      margin: 20px 20px 70px 20px;
      padding: 40px 20px 60px;
    }
  }
}

// 作品
.works {
  width: 100%;
  background-color: $color-primary;
  .phone {
    width: 100%;
    // height: 667px;
    background-image: url('../assets/image/iphone.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
}


@keyframes arrow-right {
  0% {
    transform: translateX(0);
  }
  80% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
