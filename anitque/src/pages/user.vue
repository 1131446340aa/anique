<template>
  <div class="main">
      <div class="title-user">
          个人中心
      </div>
      <div class="number">
          10000.00
      </div>
      <div class="balance">
          可用余额
      </div>
      <div class="Withdrawal">
          申请提现
      </div>
      <div class="userinfo">
          <div class="userinfo-item">
              <div class="name">皮卡丘</div>
              <div class="name two">
                  <span>昵</span>
                  <span>称</span>
              </div>
          </div>
          <div class="userinfo-item">
              <div class="name address">dadbashdb</div>
              <div class="name two">
                  <span>地</span>
                  <span>址</span>
              </div>
          </div>
          <div class="userinfo-item">
              <div class="name">2019.10.10</div>
              <div class="name four">注册时间</div>
          </div>
      </div>
      <div class="otherInfo">
          <div class="title">
              我的推广二维码
          </div>
          <div class="wrapper" @click="otherFunction">
              <div class="info-item" v-for="(item,index) in otherInfoArr" :key="index">
                  {{item}}
              </div>
          </div>    
      </div>
      <div class="bg">
          <img src="../assets/imgs/bg.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
data(){
    return {
        otherInfoArr:[
            '我的订单',
            '我的地址',
            '我的矿机',
            '我的团队',
            '邀请好友',
            '我的钱包'
        ]
    }
},
methods:{
    otherFunction(e){
        
        if(e.target.innerHTML.trim()==="邀请好友"){
           this.$router.push('/invite')
        }
        if(e.target.innerHTML.trim()==="我的矿机"){
            this.$router.push('/miner')
        }
        if(e.target.innerHTML.trim()==="我的钱包"){
            this.$router.push('/wallet')
        }
        
    }
}
}
</script>

<style lang="stylus" scoped>
.bg
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index -5
  img 
    width 100%
    height 100vh
.title-user
  margin-top 7rem
  margin-left 23rem
  width: 16rem;
  height: 4rem;
  font-family: FZLTHK--GBK1-0;
  font-size: 4rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 3rem;
  letter-spacing: 0rem;
  color: #7b391f;
.number
  width: 30rem;
  height: 5rem;
  font-family: FZLTHK--GBK1-0;
  font-size: 6rem;
  font-weight: bold;
  font-stretch: normal;
  line-height: 5rem;
  letter-spacing: 0rem;
  color: #77463f;
  margin-left 17rem
  margin-top 8rem
.balance
  width: 10rem;
  height: 8rem;
  font-size: 2rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 5rem;
  letter-spacing: 0rem;
  color: #53302b;
  line-height 8rem
  text-align center
  width 100vw
.Withdrawal
  width 21rem
  height 8rem
  margin 0 auto
  text-align center
  font-size 3rem
  line-height 8rem
  color: #e4e0dc;
  font-family: HiraginoSansGB-W3;
  background-image url('../assets/imgs/btn_withdraws.png')
  background-size:100%;
  background-repeat:no-repeat;
  margin-bottom 4rem
.userinfo
  display flex
  height 7rem
  .userinfo-item
    flex 1
    .name	
      margin 0 auto
      height 3.5rem
      line-height 3.5rem
      color: #010104;
      text-align center
      font-size 3rem
      box-shadow: 0rem 0rem 0rem 0rem rgba(34, 5, 1, 0.42);
    .two
      font-size 2rem
      display flex
      width 10rem
      justify-content space-between  
    .four
      font-size 2rem	
.otherInfo
  width 80vw
  height 51rem
  margin 0 auto
  margin-top 5rem
  position relative
  background-image url('../assets/imgs/list_bg.png')
  background-size:100%;
  background-repeat:no-repeat;
  padding 2rem
  box-sizing border-box
  .title
    text-align center
    height 3rem
    font-size 3rem
  .wrapper
    display flex
    flex-wrap wrap
    padding-top 2.5rem
    box-sizing border-box
    .info-item
      width 18rem
      height 7rem
     	background-image: linear-gradient(0deg, #e0af33 0%, #eccd8a 58%, #cd9000 100%),linear-gradient(0deg, #3ea9d3 0%, #00b9f1 100%);
      background-blend-mode: normal, normal;
      line-height 7rem
      text-align center
      font-size 2rem
      margin-left 4rem
      margin-top 2.5rem
      box-shadow: 0rem 1rem 1rem 0rem rgba(39, 36, 37, 0.75)
      border-radius 1rem

</style>