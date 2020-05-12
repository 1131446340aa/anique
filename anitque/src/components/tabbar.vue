<template>
  <div class="main">
      <div class="title">
          <slot></slot>
      </div>
      <div class="back" @click="back">
          <img src="../assets/imgs/back.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
methods:{
    back(){
        this.$router.go(-1)
    }
}
}
</script>

.<style lang="stylus" scoped>
.title
  text-align center
  margin-top 5rem
  font-size 4rem
  height 4rem
  color: #7b391f;
.back
  position fixed
  top 6rem
  left 5rem
  width 2rem
  height 3rem
  img 
    width 100%
</style>