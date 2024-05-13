
<script>
import AppButton from "../components/AppButton.vue";
export default {
    components: {
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
            console.log(this.active);
            if (this.active <= 1) {
                this.active++;
            } else {
                this.active = 0;
            }
        },
        changeActiveLess() {
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
                    <p>{{ curElem.subTitle }}</p>
                </div>
                <Appbutton />
            </div>
            </div>
        </div>
        <button @click="changeActiveLess" class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button @click="changeActivePlus" class="carousel-control-next" type="button" data-bs-target="#carouselExample"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- /section 1 -->
</template>

<style scoped lang="scss">
#container-hero {
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
            }
            .hero-text{
                position: fixed;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 50%;
                color: white;
                text-align: center;
                .small-container{
                    width: 70%;
                    h3{
                        font-size: 40px;
                        font-weight: bold;
                    }
                    span{
                        font-size: 20px;
                        font-weight: 200;
                    }
                }
            }
        }
    }
}
</style>