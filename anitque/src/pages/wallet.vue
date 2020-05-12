<template>
  <div class="main">
    <tabbar>我的钱包</tabbar>
    <div class="bg">
      <img src="../assets/imgs/bg.png" alt />
    </div>
    <div class="wrapper-wallet">
      <div class="list" v-for="(item,index) in 5" :key="index">
        <div class="item">
          <div class="red-fz">0.0000</div>
          <div class="item-fz">ETH</div>
        </div>
        <div class="item">
          <div class="red-fz">0.0000</div>
          <div class="item-fz">LBK</div>
        </div>
        <div class="item last">
          <div class="red-fz">0.00T(S)</div>
          <div class="item-fz">当前算力</div>
        </div>
        <div class="button" @click="toWithdrawal">
        去提现
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
  },
  methods:{
      toWithdrawal(){
          this.$router.push('/withdrawal')
      }
  }
};
</script>

<style lang="stylus" scoped>
.bg
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  z-index -4
  img 
    width 100%
    height 100vh
.wrapper-wallet
  position relative
  padding-top 4rem
  width: 60rem;
  height: 65rem;
  background-color: rgba(255,255,255,.3);
  box-shadow: 0rem 0rem 1rem 0rem rgba(3, 0, 0, 0.27);
  margin 0 auto
  margin-top 5rem
  border-radius 1rem
  .list
    display flex
    height 7rem
    width 51rem
    margin 0 auto
    margin-top 2rem
    .item
      flex 1
      text-align center
      border-right 1px solid #000
      .red-fz
        font-size 3rem
        height 3rem
        margin-bottom 1rem
        color: #e61d39;
      .item-fz
        font-size 2rem
        color: #503000;
    .last
      border none
.button
  position absolute
  bottom 3rem
  left 18rem
  width 21rem
  height 8rem
  text-align center
  color orange
  font-size 3rem
  line-height 8rem
  background-image url('../assets/imgs/btn_withdraws.png')
  background-size:100%;
  background-repeat:no-repeat;
</style>