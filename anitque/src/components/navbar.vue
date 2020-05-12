<template>
  <div class="main">
    <div class="nav_item" v-for="(item,index) in navbar" :key="index" @click="navigation(index)"
   :class="{active:actived===index}">
    {{item}}
    </div>
  
  </div>
</template>

<script>
export default {
data(){
  return{
    navbar:['首页','古玩详情','用户中心'],
   actived:0
  }
},
methods:{
  navigation(index){
    if(index===0){
      this.actived=0
      this.$router.push('/')
    }
    if(index===1){
      this.actived=1
      this.$router.push('/detail')
    }
    if(index==2){
      this.actived=2
      this.$router.push('/user')
     
    }
  }
}
}
</script>

<style lang="stylus" scoped>
.main
  position fixed
  bottom 0
  left 0
  right 0
  height 8rem
  display flex
  .nav_item
    flex 1
    line-height 8rem
    font-size 3rem
    text-align center
    background-image url('../assets/imgs/nav.png')
    background-size:100% 8rem;
    background-repeat:no-repeat;
  .active
    background-image url('../assets/imgs/nav_on.png')
    background-size:100% 8rem;
    background-repeat:no-repeat;
</style>
