<script>
export default {

    props: {
        propCard: Object,
    },
    data() {
        return {

        }
    },
    methods: {
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-7/${elem}.jpg`, import.meta.url).href;
        },
    }
}
</script>

<template>
</template>

<style lang="scss" scoped>

</style>