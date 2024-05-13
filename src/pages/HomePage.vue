<script>
import HeroHomePage from "../components/HeroHomePage.vue";
import HomePageTutor from "../components/HomePageTutor.vue";
import HomePageTutorAtHome from "../components/HomePageTutorAtHome.vue";
import HomePageChildren from "../components/HomePageChildren.vue";

export default {
    components:{
        HeroHomePage,
        HomePageTutor,
        HomePageTutorAtHome,
        HomePageChildren,
    },
    data() {
        return {
            
        }
    },
}
</script>

<template>
    <HeroHomePage />
    <HomePageTutor />
    <HomePageTutorAtHome />
    <HomePageChildren />
</template>

<style scoped lang="scss">

</style>