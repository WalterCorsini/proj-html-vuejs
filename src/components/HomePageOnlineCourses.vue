<script>
import HomePageMiniButton from "./HomePageMiniButton.vue";
import AppCard from "./AppCard.vue";
export default {
    components: {
        HomePageMiniButton,
        AppCard,
    },
    data() {
        return {
            arrayActive: [],
            active: 1,
            arrayCard1: [
                {
                    img: "1",
                    title: "Modern Psycology",
                    name: "Kathryn Webb",
                    text: "tante parole dette a caso senza senzo servono solo per riempire la card",
                    color: "green",
                    price: "12$"
                },
                {
                    img: "2",
                    title: "Learn Spanish",
                    name: "Jennie King",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "gold",
                    price: "25$"
                },
                {
                    img: "3",
                    title: "Social Computing",
                    name: "Davide Sanders",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "red",
                    price: "34$"
                },
            ],
            arrayCard2: [
                {
                    img: "4",
                    title: "Android Developer",
                    name: "David Sanders",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "red",
                    price: "35$"
                },
                {
                    img: "5",
                    title: "Web Designin",
                    name: "Jennifer Powell",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "gold",
                    price: "22$"
                },
                {
                    img: "6",
                    title: "Basic Marketing",
                    name: "Edward Bowman",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "green",
                    price: "15$"
                },
            ],
            arrayCard3: [
                {
                    img: "7",
                    title: "Financial Modeliing",
                    name: "Edward Bowman",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "green",
                    price: "10$"
                },
                {
                    img: "8",
                    title: "Academic English",
                    name: "Dave Robbins",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "red",
                    price: "50$"
                },
                {
                    img: "9",
                    title: "Business English",
                    name: "Preston Marshall",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "green",
                    price: "19$"
                },
            ],


        }
    },
    methods: {
    //     getImage(elem) {
    //         return new URL(`../assets/img/home-page/sezione-7/${elem}.jpg`, import.meta.url).href;
    //     },
        getString(number) {
            if (number === 1) {
                this.arrayActive = this.arrayCard1;
            } else if (number === 2) {
                this.arrayActive = this.arrayCard2;
            } else {
                this.arrayActive = this.arrayCard3;
            }
        }
    },
    created() {
        this.arrayActive = this.arrayCard1;
    }
}
</script>

<template>
    <div class="container-fluid">
        <!-- background -->
        <img class="w-100" src="../assets/img/home-page/sfondo-rombi.png" alt="sfondo-sezione">

        <!-- section container -->
        <div class="container-absolute w-100">
            <div class="container-online-courses pt-5 m-auto
            d-flex flex-column justify-content-center align-items-center">
                <span class="title fw-bold text-center">Popular Online Courses</span>
                <p class="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At aspernatur dolorem beatae tenetur quis?
                    Incidunt praesentium, quibusdam id voluptate ipsam corporis sequi voluptatem explicabo magni culpa
                    in quisquam. Aperiam, ipsa.
                </p>

                <!-- container card -->
                <div class="container-card d-flex gap-3 mt-5 justify-content-around">
                    <!-- visualizza le 9 card ma non come nell'esempio usare  https://swiperjs.com/ -->
                    <div v-for="curCard, index in arrayActive"
                        class="card-courses d-flex flex-column justify-content-between">
                        <AppCard :propCard="curCard" />
                        <!-- <div class="align-left">
                            <img :src="getImage(curCard.img)" alt="">
                            <div class="card-text ms-1">
                                <span class="title-card fw-bold"> {{ curCard.title }}</span>
                                <span class="text-card"> {{ curCard.name }}</span>
                                <span class="text-card"> {{ curCard.text }}</span>
                                <div class="bnt-price">
                                    <HomePageMiniButton v-if="index === 0 || index === 2" title="$ 12"
                                        color="rgb(64, 196, 255)" />
                                    <HomePageMiniButton v-if="index === 1" title="$ 24" color="rgb(255, 215, 64)" />
                                </div>
                            </div>
                        </div>
                        <span class="ms-2">
                            <i class="fa-solid fa-user"></i>
                            0
                            <i class="fa-solid fa-tag"></i>
                            programming
                        </span> -->
                    </div>

                    <!-- button previous and next -->
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
                    <!-- button previous and next -->

                </div>
                <!-- container card -->

                <!-- icon slider -->
                <div class="icon d-flex gap-3 p-5">
                    <i @click.stop="active = 1, getString(active)" :class="active === 1 ? 'grey' : 'lightgrey'"
                        class="fa-minus fa-solid"></i>
                    <i @click.stop="active = 2, getString(active)" :class="active === 2 ? 'grey' : 'lightgrey'"
                        class="fa-minus fa solid"></i>
                    <i @click.stop="active = 3, getString(active)" :class="active === 3 ? 'grey' : 'lightgrey'"
                        class="fa-minus fa-solid"></i>
                </div>
                <!-- /icon slider -->

                <!--  altra icona slider -->

                <!-- <i @click.stop="active = 1, getString(active)" :class="active === 1 ? 'fa-solid' : 'fa-regular'"
                        class="fa-circle"></i>
                    <i @click.stop="active = 2, getString(active)" :class="active === 2 ? 'fa-solid' : 'fa-regular'"
                        class="fa-circle"></i>
                    <i @click.stop="active = 3, getString(active)" :class="active === 3 ? 'fa-solid' : 'fa-regular'"
                        class="fa-circle"></i> -->

                <!--  altra icona slider -->


            </div>
        </div>
        <!-- /section container -->
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.container-fluid {
    position: relative;
    max-width: 100%;


        .container-online-courses {
            width: 70%;

            .title {
                font-family: serif;
                font-size: 40px;

            }

            p {
                color: $grey;
            }

            .container-card {
                width: 100%;

                .card-courses {
                    width: calc(100% / 3);
                    height: 60vh;
                    border: 1px solid lightgrey;

                    .card-text {
                        position: relative;

                        div {
                            position: absolute;
                            top: 0;
                            right: 0;
                        }
                    }

                    span {
                        display: block;
                    }

                    .title-card {
                        font-family: serif;
                        font-size: 18px;
                    }

                    .text-card,
                    i,
                    span {
                        margin: 5px 0;
                        font-size: 12px;
                        color: $grey;
                    }
                }
            }

            .icon {
                font-size: 50px;
            }

            .grey {
                color: $grey;
            }

            .lightgrey {
                color: lightgray;
            }
        }
    
    button{
        color: $black;
    }

}
</style>