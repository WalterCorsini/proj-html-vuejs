<script>
import AppFooter from './components/AppFooter.vue';
export default{
  components:{

    AppFooter,
  },
  data(){
    return{

    }
  }
}
</script>

<template>


  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss" scoped>
</style>
