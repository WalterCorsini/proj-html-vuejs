<script>
import AppHeader from './components/AppHeader.vue';
export default{
  components:{
    AppHeader,
  },
  data(){
    return{

    }
  }
}
</script>

<template>

  <!-- Test -->
  <AppHeader />
  <h1>Ciao Walter, Ciao Kejdi</h1>
  <router-view></router-view>
</template>

<style scoped>
</style>
