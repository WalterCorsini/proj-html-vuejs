<script>
import AppButton from "./AppButton.vue"
export default{
    components:{
        AppButton,    
    },
    props:{
        propCard: Object,
    },
    data(){
        return{

        }
    },
    methods:{
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-1/${elem}.jpg`, import.meta.url).href;
        },
    }
}
</script>

<template>
        <div class="carousel-item h-100 w-100"
                :class="active === index ? 'active' : ''">
                <img :src="getImage(propCard.img)" class="d-block w-100 h-100" alt="...">
                <div class="hero-text
            d-flex flex-column justify-content-center align-items-center
            text-center w-100 h-100">
                    <div class="small-container w-50">
                        <h2><strong>{{ propCard.title }}</strong></h2>
                        <span>{{ propCard.subTitle }}</span>
                        <div class="btn">
                            <AppButton title="REGISTER NOW" />
                        </div>
                    </div>
                </div>
            </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

#container-hero {
    position: relative;

    .carousel-inner {
        position: relative;
        width: 100%;
        height: 50vh;

        .carousel-item {
            img {
                position: absolute;
                top: 0;
                left: 0;
                object-fit: cover;
            }

            .hero-text {
                position: relative;
                z-index: 1;
                color: $white;

                .small-container {
                    .span {
                        font-family: ui-rounded;
                        font-weight: bold;
                    }

                    span {
                        display: block;
                    }

                    .btn {
                        margin-top: 10px;
                    }
                }
            }
        }
    }
}
</style>