<script>
import HeroHomePage from "../components/HeroHomePage.vue";
import HomePageTutor from "../components/HomePageTutor.vue";
import HomePageTutorAtHome from "../components/HomePageTutorAtHome.vue";
import HomePageChildren from "../components/HomePageChildren.vue";
import HomePageStudent from "../components/HomePageStudent.vue";
import HomePageWhatWeDo from "../components/HomePageWhatWeDo.vue";
import HomePageOnlineCourses from "../components/HomePageOnlineCourses.vue";
import HomePageBestTutor from "../components/HomePageBestTutor.vue";
import HomePagePricing  from "../components/HomePagePricing.vue"
import HomePageLogoSlider from "../components/HomePageLogoSlider.vue";
import AppTopButton from "../components/AppTopButton.vue";
import SideButtons from "../components/SideButtons.vue";
import { store } from "../store";


export default {
    components:{
        HeroHomePage,
        HomePageTutor,
        HomePageTutorAtHome,
        HomePageChildren,
        HomePageStudent,
        HomePageWhatWeDo,
        HomePageOnlineCourses,
        HomePageBestTutor,
        HomePagePricing,
        HomePageLogoSlider,
        AppTopButton,
        SideButtons
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <AppTopButton />
    <SideButtons />
    <HeroHomePage />
    <HomePageTutor />
    <HomePageTutorAtHome />
    <HomePageChildren />
    <HomePageStudent :propCard="store.arrayPeople"/>
    <HomePageWhatWeDo />
    <HomePageOnlineCourses />
    <HomePageBestTutor />
    <HomePagePricing />
    <HomePageLogoSlider />
</template>

<style scoped lang="scss">

</style>