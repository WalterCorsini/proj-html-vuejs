<script>
export default {
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
            <h2>Contact</h2>
            <span><a href="#">Home</a> / contact</span>
        </div>
    </div>
</section>
</template>

<style scoped lang="scss">
section {
    /* The image used */
    background-image: url(../assets/img/contact_and_footer/contact-1.jpg);

    /* Set a specific height */
    min-height: 300px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: bottom 100px center;
    background-repeat: no-repeat;
    background-size: cover;
}

a {
    text-decoration: none;
    color: inherit;
}
</style>