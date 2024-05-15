<script>
export default{
    props:{
        propCard: Object,
    },
    data(){
        return{

        }
    },
    methods:{
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-5/${elem}.png`, import.meta.url).href;
        },
    }
}
</script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <img :src="getImage(propCard.img)" alt="">    
        <span class="m-2">{{ propCard.text }}</span>
        <span class="m-2 fw-bold fs-5">{{ propCard.name }}</span>
        <span class="mb-4">{{ propCard.role }}</span>
    </div>
</template>

<style>

</style>