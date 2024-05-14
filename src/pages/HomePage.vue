<script>
import HeroHomePage from "../components/HeroHomePage.vue";
import HomePageTutor from "../components/HomePageTutor.vue";
import HomePageTutorAtHome from "../components/HomePageTutorAtHome.vue";
import HomePageChildren from "../components/HomePageChildren.vue";
import HomePageStudent from "../components/HomePageStudent.vue";
import HomePageWhatWeDo from "../components/HomePageWhatWeDo.vue";
import HomePageOnlineCourses from "../components/HomePageOnlineCourses.vue";


export default {
    components:{
        HeroHomePage,
        HomePageTutor,
        HomePageTutorAtHome,
        HomePageChildren,
        HomePageStudent,
        HomePageWhatWeDo,
        HomePageOnlineCourses,
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
    <HomePageStudent />
    <HomePageWhatWeDo />
    <HomePageOnlineCourses />
</template>

<style scoped lang="scss">

</style>