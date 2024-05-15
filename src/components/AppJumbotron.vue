<script>
export default {
    props: {
        propTitle: Object,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
<section>
    <div class="container">
        <div class="py-5">
            <h2>{{ propTitle.title }}</h2>
            <span><a href="#">{{ propTitle.home }}</a> / {{ propTitle.title }}</span>
        </div>
    </div>
</section>
</template>

<style scoped lang="scss">
section {
    background-image: url(../assets/img/contact_and_footer/contact-1.jpg);
    min-height: 300px;
    background-attachment: fixed;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
}

a {
    text-decoration: none;
    color: inherit;
}
</style>