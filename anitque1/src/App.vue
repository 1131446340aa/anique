<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar'
export default {
  name: 'App',
  components:{
 navbar
  }
}
</script>

<style>

</style>
