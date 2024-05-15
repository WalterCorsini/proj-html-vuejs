<script>
import AppJumbotron from "../components/AppJumbotron.vue";
import ContactOfficeAndForm from "../components/ContactOfficeAndForm.vue";
import ContactMap from "../components/ContactMap.vue";
import ContactSocialsAndNews from "../components/ContactSocialsAndNews.vue";

export default{
    components: {
        AppJumbotron,
        ContactOfficeAndForm,
        ContactMap,
        ContactSocialsAndNews
    },
    data(){
        return{
            jumbo: {
                title: "Contact",
                home: "Home"
            }
        }
    }
}
</script>

<template>
<main>
    <AppJumbotron :propTitle="jumbo" />
    <ContactOfficeAndForm />
    <ContactMap />
    <ContactSocialsAndNews />
</main>
</template>

<style scoped lang="scss">

</style>