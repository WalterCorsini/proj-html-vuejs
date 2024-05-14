<script>
import ContactJumbotron from "../components/ContactJumbotron.vue";
import ContactOfficeAndForm from "../components/ContactOfficeAndForm.vue";
import ContactMap from "../components/ContactMap.vue";

export default{
    components: {
        ContactJumbotron,
        ContactOfficeAndForm,
        ContactMap,
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
</main>
</template>

<style scoped lang="scss">

</style>