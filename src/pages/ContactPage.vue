<script>
import ContactJumbotron from "../components/ContactJumbotron.vue";
import ContactOfficeAndForm from "../components/ContactOfficeAndForm.vue";
import ContactMap from "../components/ContactMap.vue";
import ContactSocialsAndNews from "../components/ContactSocialsAndNews.vue";

export default{
    components: {
        ContactJumbotron,
        ContactOfficeAndForm,
        ContactMap,
        ContactSocialsAndNews
    },
    data(){
        return{
            
        }
    }
}
</script>

<template>
<main>
    <ContactJumbotron />
    <ContactOfficeAndForm />
    <ContactMap />
    <ContactSocialsAndNews />
</main>
</template>

<style scoped lang="scss">

</style>