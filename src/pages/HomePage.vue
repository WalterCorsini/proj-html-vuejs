<script>
import AppButton from "../components/AppButton.vue";
export default {
    components:{
        AppButton,
    },
    data() {
        return {
            active: 0,
            arrayImgSection1: [
                {
                    img: "_1",
                    title: "Accelerate Your Career",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, esse? Corrupti dolores ipsam quisquam officia culpa, ea in delectus velit blanditiis.",
                },
                {
                    img: "_2",
                    title: "Premium Education",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, esse? Corrupti dolores ipsam quisquam officia culpa, ea in delectus velit blanditiis.",
                },
                {
                    img: "_3",
                    title: "Contemporary Ideas",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, esse? Corrupti dolores ipsam quisquam officia culpa, ea in delectus velit blanditiis.",
                },
            ]
        }
    },
    methods: {
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-1/${elem}.jpg`, import.meta.url).href;
        },
        changeActivePlus() {
            //  inserire set interval per andare in avanti e stoppare il set che va indietro
            //  se è gia attivo lo metto in pausa
            console.log(this.active);
            if (this.active <= 1) {
                this.active++;
            } else {
                this.active = 0;
            }
        },
        changeActiveLess() {
            //  inserire set interval per andare indietro e stoppare il set che va in avanti
            //  se è gia attivo lo metto in pausa
            console.log(this.active);
            if (this.active >= 1) {
                this.active--;
            } else {
                this.active = 2;
            }
        }
    }
}
</script>

<template>
    <!-- section 1 -->
    <div id="container-hero" class="carousel slide">
        <div class="carousel-inner">
            <div v-for="curElem, index in arrayImgSection1" class="carousel-item"
            :class="active === index ? 'active' : ''">
            <img :src="getImage(curElem.img)" class="d-block w-100" alt="...">
            <div class="hero-text">
                <div class="small-container">
                    <h3>{{ curElem.title }}</h3>
                    <span>{{ curElem.subTitle }}</span>
                    <div class="btn">
                        <AppButton title="REGISTER NOW" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button @click.prevent.stop="changeActiveLess" class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button @click.prevent.stop="changeActivePlus" class="carousel-control-next" type="button" data-bs-target="#carouselExample"
    data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    <AppHeader />
</button>
    </div>

    <!-- /section 1 -->
</template>

<style scoped lang="scss">
#container-hero {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .carousel-inner{
        position: relative;
        width: 100%;
        height: 300px;
        .carousel-item{
                width: 100%;
                height: 100%;
            img{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .hero-text{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: relative;
                z-index: 1;
                width: 100%;
                height: 100%;
                color: white;
                text-align: center;
                .small-container{
                    width: 70%;
                    .h3{
                        font-size: 30px;
                        font-weight: bold;
                    }
                    span{
                        display: block;
                        font-size: 20px;
                    }
                    .btn{
                        margin-top: 10px;
                    }
                }
            }
        }
    }
}
</style>