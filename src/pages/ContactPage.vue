<script>
import Appheader from '../components/AppHeader.vue';
import AppJumbotron from "../components/AppJumbotron.vue";
import ContactOfficeAndForm from "../components/ContactOfficeAndForm.vue";
import ContactMap from "../components/ContactMap.vue";
import ContactSocialsAndNews from "../components/ContactSocialsAndNews.vue";
import AppTopButton from "../components/AppTopButton.vue";
import SideButtons from "../components/SideButtons.vue";
import AppHeader from '../components/AppHeader.vue';

export default{
    components: {
        AppJumbotron,
        ContactOfficeAndForm,
        ContactMap,
        ContactSocialsAndNews,
        AppTopButton,
        SideButtons,
        AppHeader,
    },
    data(){
        return{
            jumbo: {
                title: "Contact",
                home: "Home"
            },
        }
    }
}
</script>

<template>
<main>
    <AppHeader propColor="black" propBgColor="white"/>
    <AppJumbotron :propTitle="jumbo" />
    <ContactOfficeAndForm />
    <ContactMap />
    <ContactSocialsAndNews />
    <AppTopButton />
    <SideButtons />
</main>
</template>

<style scoped lang="scss">

</style>