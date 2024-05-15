<script>
import AppButton from "../components/AppButton.vue";
export default {
    components: {
        AppButton,
    },
    data() {
        return {
            // active variable
            active: 0,
            // array photo and text
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
    created() {
        setInterval(() => {
        if (this.active <= 1) {
                this.active++;
            } else {
                this.active = 0;
            }
        console.log(this.active);
        }, 5000)
    },
    methods: {
        // to take dynamic image
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-1/${elem}.jpg`, import.meta.url).href;
        },
        // change active elem next
        changeActive(value) {
            //  inserire set interval per andare in avanti e stoppare il set che va indietro
            //  se è gia attivo lo metto in pausa
            if (value === "P") {
                if (this.active <= 1) {
                    this.active++;
                } else {
                    this.active = 0;
                }
            } else {
                if (this.active >= 1) {
                this.active--;
            } else {
                this.active = 2;
            }
            }
        },
    }
}
</script>

<template>
    <!-- section 1 -->
    <div id="container-hero" class="carousel slide h-100 w-100
    d-flex flex-column justify-content-center align-items-center">
        <div class="carousel-inner">
            <div v-for="curElem, index in arrayImgSection1" class="carousel-item h-100 w-100"
                :class="active === index ? 'active' : ''">
                <img :src="getImage(curElem.img)" class="d-block w-100 h-100" alt="...">
                <div class="hero-text
            d-flex flex-column justify-content-center align-items-center
            text-center w-100 h-100">
                    <div class="small-container w-50">
                        <h2><strong>{{ curElem.title }}</strong></h2>
                        <span>{{ curElem.subTitle }}</span>
                        <div class="btn">
                            <AppButton title="REGISTER NOW" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button @click.prevent.stop="changeActive(L)" class="carousel-control-prev" type="button"
            data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button @click.prevent.stop="changeActive(P)" class="carousel-control-next" type="button"
            data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- /section 1 -->
</template>

<style scoped lang="scss">
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