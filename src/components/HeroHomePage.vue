<script>
import AppButton from "../components/AppButton.vue";
import AppCardHero from "../components/AppCardHero.vue";
import { store } from "../store";
export default {
    components: {
        AppButton,
        AppCardHero,
    },
    data() {
        return {
            store,
            active:0,
            stopInterval:"",
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
        this.store.changeActive("P",this.active);
    },
    // methods: {
    //     // change active elem next
    //     changeActive(value) {
    //         clearInterval(this.stopInterval);
    //         this.stopInterval = setInterval(() => {
    //         if (value === "P") {
    //             if (this.active <= 1) {
    //                 this.active++;
    //             } else {
    //                 this.active = 0;
    //             }
    //         } else {
    //             if (this.active >= 1) {
    //             this.active--;
    //         } else {
    //             this.active = 2;
    //         }
    //         }
    //     }, 3000)
    //     },
    // }
}
</script>

<template>
    <!-- section 1 -->
    <div id="container-hero" class="carousel slide h-100 w-100
    d-flex flex-column justify-content-center align-items-center">
        <div class="carousel-inner">
            <div v-for="curElem, index in arrayImgSection1" class="carousel-item h-100 w-100"
                :class="store.active === index ? 'active' : ''">
                <AppCardHero :propCard="curElem" />
            </div>
        </div>
        <button @click.prevent.stop="store.changeActive('L',active)" class="carousel-control-prev" type="button"
            data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button @click.prevent.stop="store.changeActive('P',active)" class="carousel-control-next" type="button"
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