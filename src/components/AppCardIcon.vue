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
            return new URL(`../assets/img/home-page/sezione-2/${elem}.png`, import.meta.url).href;
        },
    }
}
</script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center p-4 w-100"
    :style="{'background-color' : `${propCard.color}`}">
        <img :src="getImage(propCard.img)" alt="">
        <span class="m-3">{{ propCard.name }}</span>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

img {
    transition: 1s;

    &:hover {
        transform: translateY(-5px);
        transition: 1s;
    }
}

</style>
