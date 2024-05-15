<script>
export default {
    props: {
        propCard: Object,
    },
    data() {
        return {

        }
    },
    methods:{
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-2/${elem}.png`, import.meta.url).href;
        },
    }
}
</script>

<template>
    <div class="icon d-flex flex-column justify-content-center align-items-center p-4 w-100">
        <img :src="getImage(propCard.img)" alt="">
        <span class="m-3">{{ propCard.name }}</span>
    </div>
</template>

<style></style>
