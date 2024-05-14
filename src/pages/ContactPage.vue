<script>
import ContactJumbotron from "../components/ContactJumbotron.vue";
import ContactOfficeAndForm from "../components/ContactOfficeAndForm.vue";
export default{
    components: {
        ContactJumbotron,
        ContactOfficeAndForm
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
</main>
</template>

<style scoped lang="scss">
main {
    background-image: url(../assets/img/contact_and_footer/contact-1.jpg);
}

</style>