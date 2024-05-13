<script>
export default{
    data(){
        return{
            menu: [
        {
          title: "Home",
          routeName: "home",
        },
        {
          title: "Chi siamo",
          routeName: "about",
        },
        {
          title: "Contatti",
          routeName: "contacts",
        },
      ],
        }
    }
}
</script>

<template>
  <!-- test -->
  <router-link :to="{name: menu[1].routeName}" >
      {{ menu[1].title }}
  </router-link>
  <!-- /test -->
</template>

<style scoped lang="scss">

</style>