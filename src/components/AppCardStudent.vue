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
            return new URL(`${elem}`, import.meta.url).href;
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

<style scoped>
    img {
        width: 100px;
        border-radius: 50%;
    }
</style>