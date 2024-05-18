<script>
import { store } from '../store';
export default {
  props:{
    propColor: String,
    propBgColor: String,
  },
  data() {
    return {
      store,
      colorActive:"rgb(64, 196, 255)",
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
          color: "white",
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
<header class="container-fluid" :style="{'backgroundColor' : `${propBgColor}`}">
    <div class="header-logo" >
      <img v-if="propColor==='black'" src="../assets/img/header/logo.png" alt="Logo iAcademy" />
      <img v-else="propColor==='black'" src="../assets/img/header/logo1.png" alt="Logo iAcademy" />
    </div>
    <ul class="navigation">
      <li v-for="(item, index) in menu"
      >
        <router-link :to="{ name: item.routeName }" id="blue" class="nav-link fw-bold fs-5"
         @click.stop="store.activeIndex = index"
         :style="{'color' : `${propColor}`}" :class="{ 'blue': store.activeIndex === index }">
         {{item.title}}
          </router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;


.container-fluid{
  @include flex(row, space-between, center, nowrap);
  padding: 40px 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

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
  position: relative;
  text-decoration: none;
}

.blue {
  color: $primary-color !important;
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