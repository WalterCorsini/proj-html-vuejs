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
            return new URL(`../assets/img/home-page/sezione-8/${elem}.jpg`, import.meta.url).href;
        },
    }
}
</script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center text-center">
        <img :src="getImage(propCard.img)" alt=""> 
        <span class="name">{{ propCard.name }}</span>
        <span class="fw-bold mt-3">{{ propCard.role }}</span>
        <span>{{ propCard.text }}</span>
        <span class="d-flex gap-3 mt-3">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook-f"></i>
        </span>
    </div>
</template>

<style lang="scss" scoped>

.container-fluid{
    padding:100px;
}
.card-tutor{
    margin-top: 50px;
    .card-container{
        padding: 20px;
        width: calc(100% / 3);
        img{
            width: 100px;
        }
    } 
}
span{
    display: block;
    font-size: 12px;
    color: grey;
}

.name{
    color: black;
    font-size: 20px;
    font-family: serif;
    font-weight: 600;
}
</style>