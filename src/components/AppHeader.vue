<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "Home",
          routeName: "home",
        },
        {
          title: "Chi Siamo",
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
  <header class="container mt-4">
    <div class="header-logo">
      <img src="../assets/img/header/logo.png" alt="Logo iAcademy" />
    </div>
    <ul class="navigation">
      <li v-for="item in menu">
        <router-link :to="{ name: item.routeName }" class="nav-link">{{
          item.title
        }}</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
@use "../style/partials/mixins" as *;

.container {
  @include flex(row, space-between, center, nowrap);


  .navigation {
    @include flex(row, center, center, nowrap);
    gap: 20px;
  }
}


</style>