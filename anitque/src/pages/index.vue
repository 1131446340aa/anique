<template>
  <div class="main">
    <div class="title-name">套餐首页</div>
    <!-- 为了演示瀑布流所以手写 -->

    <!-- 联网状况根据情况调整 -->

    <scroll top="17vw" bottom="13vw" ref="scroll">
      <waterfall :watch="array" :line-gap="itemWidth">
        <waterfallSlot :width="itemWidth" :height="(heightArr.length && heightArr[0]+10) ||0">
          <div class="wrappers">
            <div class="item">
              <img src="../assets/imgs/big.png" alt ref="img1" />
              <div class="info">
                <div class="price">$3000</div>
                <div class="inrtoduce">青铜器工艺品马摆件马踏飞燕工艺品</div>
              </div>
            </div>
          </div>
        </waterfallSlot>
        <waterfallSlot :width="itemWidth" :height="(heightArr.length && heightArr[1]+10) ||0">
          <div class="wrappers" ref="wrapper">
            <div class="item">
              <img src="../assets/imgs/small-.png" ref="img2" alt />
              <div class="info">
                <div class="price">$3000</div>
                <div class="inrtoduce">青铜器工艺品马摆件马踏飞燕工艺品</div>
              </div>
            </div>
          </div>
        </waterfallSlot>
        <waterfallSlot :width="itemWidth" :height="(heightArr.length && heightArr[2]+10 )||0">
          <div class="wrappers" ref="wrapper">
            <div class="item">
              <img src="../assets/imgs/small-.png" ref="img3" alt />
              <div class="info">
                <div class="price">$3000</div>
                <div class="inrtoduce">青铜器工艺品马摆件马踏飞燕工艺品</div>
              </div>
            </div>
          </div>
        </waterfallSlot>
        <waterfallSlot :width="itemWidth" :height="(heightArr.length && heightArr[3]+10) ||0">
          <div class="wrappers" ref="wrapper">
            <div class="item">
              <img src="../assets/imgs/small-.png" ref="img4" alt />
              <div class="info">
                <div class="price">$3000</div>
                <div class="inrtoduce">青铜器工艺品马摆件马踏飞燕工艺品</div>
              </div>
            </div>
          </div>
        </waterfallSlot>
      </waterfall>
    </scroll>

    <div class="more">
      <img src="../assets/imgs/icon_list.png" alt />
    </div>
    <div class="bg">
      <img src="../assets/imgs/bg.png" alt />
    </div>
  </div>
</template>

<script>
import waterfall from "vue-waterfall/lib/waterfall";
import waterfallSlot from "vue-waterfall/lib/waterfall-slot";
import scroll from "../components/scroll";
export default {
  name: "index",
  data() {
    return {
      array: [],
      heightArr: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      // 图片以及betterscroll 原因,加载图片要一定时间,
      //better scroll 内部获取元素需要一定时间
      // 用onload方法监听也无济于事
      //因此使用异步,一般300ms后浏览器才能计算出盒子高度
      document.querySelectorAll(".wrappers").forEach(item => {
        let timer = setInterval(() => {
          if(item.offsetHeight){
              this.heightArr.push(item.offsetHeight);
              clearInterval(timer)
          }
        }, 50);
      });
    });
  },
  components: {
    waterfall,
    waterfallSlot,
    scroll
  },
  computed: {
    itemWidth() {
      return 0.48 * document.documentElement.clientWidth;
    }
  }
};
</script>

<style lang="stylus" scoped>
.bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -4;

  img {
    width: 100%;
    height: 100vh;
  }
}

.main {
  .wrappers {
    .item {
      width: 29rem;
      -webkit-border-top-left-radius: 1rem;
      -webkit-border-top-right-radius: 1rem;
      overflow: hidden;
      margin-left: 2rem;
      font-size: 0;
      margin-top: 1rem;

      img {
        width: 100%;
      }

      .info {
        -webkit-border-bottom-left-radius: 1rem;
        -webkit-border-bottom-right-radius: 1rem;
        background-color: #F4E2C9;

        .price {
          padding-top: 3rem;
          margin-left: 1rem;
          height: 3rem;
          line-height: 3rem;
          font-size: 3rem;
          color: #e61d39;
          font-weight: bold;
        }

        .inrtoduce {
          width: 27rem;
          height: 5rem;
          margin-top: 1rem;
          font-size: 2rem;
          margin-left: 1rem;
          padding-bottom: 2rem;
        }
      }
    }
  }

  .title-name {
    padding-top: 4rem;
    text-align: center;
    height: 4rem;
    line-height: 4rem;
    font-size: 4rem;
    color: #7b391f;
    margin-bottom: 2rem;
  }

  .more {
    position: fixed;
    right: 2rem;
    height: 3rem;
    width: 3rem;
    top: 3rem;
  }
}
</style>