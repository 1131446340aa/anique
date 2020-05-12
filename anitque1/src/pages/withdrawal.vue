<template>
  <div class="main">
    <tabbar>我的提现</tabbar>
    <div class="wrapper-withdrawal">
       <div class="title-name">
           可提现佣金
       </div>
       <div class="money">
           10000
       </div>
       <div class="need-money">
           需提现金额
       </div>
       <div class="input input-money">
           <input type="text" placeholder="请输入佣金">
       </div>
       <div class="input input-addres">
           <input type="text" placeholder="请输入地址">
       </div>
       <div class="confirm">
           确认提现
       </div>
       <div class="button-wrapper">
           <div class="left-button">查看提现记录</div>
           <div class="right-button">查看佣金明细</div>
       </div>
        <div class="navbar">
        <img src="../assets/imgs/footer_bg.png" alt="">
    </div>
    </div>
    <div class="bg">
      <img src="../assets/imgs/bg.png" alt />
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
.wrapper-withdrawal
  position fixed
  top 25rem
  bottom 21rem
  left 5rem
  right 5rem
  background-color rgba(255,255,255,.3)
  border-radius 1rem
  .confirm
    margin-top 6rem
    text-align center
    width 19rem
    margin-left 18rem
    height 5rem
    background-image: linear-gradient(0deg, #c17600 0%, #e1a740 100%);
    color: #ffffff;
    font-size 2rem
    font-weight bold
    line-height 5rem
    border 1px solid yellow
  .title-name
    text-align center
    height 2rem
    font-size 2rem
    margin-top 2rem
    color  #ff4020
  .money
    margin-top 6rem
    font-size: 6rem;
    text-align center
    color yellow
  .need-money
    margin-top 6rem
    text-align center
    font-size 2rem
    color orange
  input
    width 36rem
    height 6rem
    border 1px solid #000
    font-size 4rem
    &::placeholder
      text-align center
      font-size 2rem
      color: #c7c7c7;
      line-height 6rem
      height 6rem
.input
  text-align center
.input-money 
  margin-top 2rem
.input-addres
  margin-top 3rem
.button-wrapper
  position absolute
  bottom 2rem
  left 3rem
  right 3rem
  display flex
  justify-content space-between
  .left-button,.right-button
    width 22rem
    height 5rem
    line-height 5rem
    text-align center
    font-family: HiraginoSansGB-W3;
    font-size 3rem
    font-weight bold
    color yellow
    background-image: linear-gradient(#0d0603, #0d0603), 
	linear-gradient(#9c742b, #9c742b);
    background-blend-mode: normal, normal;
    box-shadow: 0rem 1rem 1rem 0rem rgba(39, 36, 37, 0.75);
    border-radius 1rem
.navbar
  position fixed
  left 0
  right 0
  bottom 0
  height 8rem
  img 
    width 100%
</style>