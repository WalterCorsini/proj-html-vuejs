<script>
import HomePageMiniButton from "./HomePageMiniButton.vue";
import AppCardOnline from "./AppCardOnline.vue";
export default {
    components: {
        HomePageMiniButton,
        AppCardOnline,
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
                    price: "12$",
                    role: "Business",
                    user: 6,
                },
                {
                    img: "2",
                    title: "Learn Spanish",
                    name: "Jennie King",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "gold",
                    price: "25$",
                    role: "Language",
                    user: 10,
                },
                {
                    img: "3",
                    title: "Social Computing",
                    name: "Davide Sanders",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "red",
                    price: "34$",
                    role: "Programming",
                    user: 2,
                },
            ],
            arrayCard2: [
                {
                    img: "4",
                    title: "Android Developer",
                    name: "David Sanders",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "red",
                    price: "35$",
                    role: "language",
                    user: 5,
                },
                {
                    img: "5",
                    title: "Web Designin",
                    name: "Jennifer Powell",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "gold",
                    price: "22$",
                    role: "Business",
                    user: 4,
                },
                {
                    img: "6",
                    title: "Basic Marketing",
                    name: "Edward Bowman",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "green",
                    price: "15$",
                    role: "Programming",
                    user: 8,
                },
            ],
            arrayCard3: [
                {
                    img: "7",
                    title: "Financial Modeliing",
                    name: "Edward Bowman",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "green",
                    price: "10$",
                    role: "Business",
                    user: 20,
                },
                {
                    img: "8",
                    title: "Academic English",
                    name: "Dave Robbins",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "red",
                    price: "50$",
                    role: "Business",
                    user: 9,
                },
                {
                    img: "9",
                    title: "Business English",
                    name: "Preston Marshall",
                    text: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    color: "green",
                    price: "19$",
                    role: "Business",
                    user: 15,
                },
            ],


        }
    },
    methods: {
        getString() {
            if (this.active === 1) {
                this.arrayActive = this.arrayCard1;
            } else if (this.active === 2) {
                this.arrayActive = this.arrayCard2;
            } else {
                this.arrayActive = this.arrayCard3;
            }
        },
        changeActive(value) {
            clearInterval(this.stopInterval);
            this.stopInterval = setInterval(() => {
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
                this.getString();
            }, 4000)
        },
    },
    created() {
        this.arrayActive = this.arrayCard1;
        this.changeActive("P");
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
                <div class="container-card d-flex gap-3 mt-5 justify-content-around ">
                    <!-- visualizza le 9 card ma non come nell'esempio usare  https://swiperjs.com/ -->
                    <div v-for="curCard, index in arrayActive"
                        class="card-courses d-flex flex-column justify-content-between">
                        <AppCardOnline :propCard="curCard" />
                    </div>

                </div>
                <!-- container card -->

                <!-- icon slider -->
                <div class="icon d-flex gap-3 p-5">
                    <i @click.stop="active = 0, getString()" :class="active === 0 ? 'blue' : 'lightblue'"
                        class="fa-circle fa-solid"></i>
                    <i @click.stop="active = 1, getString()" :class="active === 1 ? 'blue' : 'lightblue'"
                        class="fa-circle fa solid"></i>
                    <i @click.stop="active = 2, getString()" :class="active === 2 ? 'blue' : 'lightblue'"
                        class="fa-circle fa-solid"></i>
                </div>
                <!-- /icon slider -->

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
            font-size: 20px;
        }

        .blue {
            color: $primary-color;
        }

        .lightblue {
            color: lightblue;
        }
    }

    .container-absolute {
        position: absolute;
        top: 0;
        left: 0;
    }

    .btn-container{
        width: 40px;
        height: 40px;
        line-height: 40px;
        background-color: $grey;
        border-radius: 50%;
        &:hover{
            background-color: $darkgrey;
        }
    }
}
</style>