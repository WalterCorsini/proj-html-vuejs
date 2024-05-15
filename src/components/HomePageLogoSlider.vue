<script>
export default{
    data(){
        return{
            Swiper,
            arrayLogo:[
                "1",
                "2",
                "3",
                "4",
                "5",
            ],
        }
    },
    methods:{
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-10/${elem}.png`, import.meta.url).href;
        }, 
    }
    }
</script>

<template>
    <div class="d-flex mb-5">
        <div v-for="curElem in arrayLogo">
            <img :src="getImage(curElem)">
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>