<script>
export default {
  data() {
    return {
      activeIndex: 0,
      menu: [
        {
          title: "Home",
          routeName: "home",
          isActive: false,
        },
        {
          title: "Chi Siamo",
          routeName: "about",
          isActive: false,

        },
        {
          title: "Contatti",
          routeName: "contacts",
          isActive: false,

        },
      ],
    }
  },
  methods: {
  }
}
</script>

<template>
  <header class="container">
    <div class="header-logo">
      <img src="../assets/img/header/logo.png" alt="Logo iAcademy" />
    </div>
    <ul class="navigation">
      <li v-for="(item, index) in menu">
        <router-link :to="{ name: item.routeName }" class="nav-link" :class="{ 'blue': activeIndex === index }" @click="activeIndex = index">{{
          item.title
        }}</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;


.container {
  @include flex(row, space-between, center, nowrap);
  padding: 40px 0;

  .header-logo{
    width: 200px;
  }

  .navigation {
    @include flex(row, center, center, nowrap);
    gap: 20px;
    margin-bottom: 0;
  }
}

.nav-link {
  // color: black;
  position: relative;
  text-decoration: none;
}

.blue {
  color: $primary-color;
}

.nav-link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background-color: $primary-color;
  bottom: -5px;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

.nav-link:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}

</style>