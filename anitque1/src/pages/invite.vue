<template>
  <div class="main">
      <tabbar>我的邀请</tabbar>
      <div class="bg">
          <img src="../assets/imgs/bg.png" alt="">
      </div>
      <div class="wrapper-invite">
          <div class="item-user" v-for="(item,index) in 15" :key="index"  >
              <div class="username">张三</div>
              <div class="number">Ox3213**********32212</div>
          </div>
      </div>
  </div>
</template>

<script>
import tabbar from '../components/tabbar'
export default {
components:{
    tabbar
}
}
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
.wrapper-invite
  width: 60rem;
  height: 84rem;
  margin 0 auto
  margin-top 5rem
  padding-top 1rem
  box-sizing border-box
  background-color: rgba(255,255,255,0.3);
  box-shadow: 0rem 0rem 1rem 0rem rgba(3, 0, 0, 0.27);
  border-radius: 1rem;
  .item-user
    display flex
    justify-content space-between
    margin  0 4rem
    color: #2b1b03;
    font-size 2rem
    height 5rem
    line-height 5rem
    border-bottom 1px solid #000
</style>