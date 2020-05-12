<template>
  <div class="main">
    <tabbar>我的矿机</tabbar>
    <div class="bg">
      <img src="../assets/imgs/bg.png" alt />
    </div>
    <div class="wrapper-minner">
      <div class="item" v-for="(item,index) in 5" :key="index">
        <div class="bg-minner">
          <img src="../assets/imgs/bg-minner.png" alt />
        </div>
        <div class="info">
            <div class="name">CTN001</div>
            <div class="sum">
                算力: 80T(S)
            </div>
            <div class="active-time">
                <span>活动时间</span>
                <span>2010-05-11 08:30</span>
            </div>
        </div>
        <div class="change">
          切换矿池
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tabbar from "../components/tabbar";
export default {
  components: {
    tabbar
  }
};
</script>

<style lang="stylus" scoped>
.bg 
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -4;
  img 
    width 100%
    height 100vh
.wrapper-minner
  padding-top 6rem
  padding-right 3rem
  .item 
    display: flex;
    margin-left 4rem
    height 16rem
    padding-top 2rem
    background-image url('../assets/imgs/item_bg.png')
    background-size:100% 16rem;
    background-repeat:no-repeat;
    .bg-minner
      width: 11rem;
      height: 8rem;
      font-size 0
      margin-left 5rem
      margin-right 2rem
      margin-top 2rem
      img 
        width: 100%;
        height 8rem
    .info
      margin-top 2rem
      color: #883705;
      .name,.sum,.active-time
        font-size 2rem
        margin-bottom 1rem
        height 2rem
      .active-time
        font-size 1.4rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        max-width 50vw
 .change
    background-image url('../assets/imgs/btn_change.png')
    background-size:100%
    background-repeat:no-repeat;
    width 12rem
    height 5rem
    text-align center
    line-height 5rem
    font-size 2rem
    color #fff
    margin-top 6rem
    margin-left 2rem
</style>