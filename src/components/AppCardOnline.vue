<script>
import HomePageMiniButton from './HomePageMiniButton.vue';
export default {
    components: {
        HomePageMiniButton,
    },
    props: {
        propCard: Object,
    },
    data() {
        return {
            arrayActive: [],
            active: 1,
        }
    },
    methods: {
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-7/${elem}.jpg`, import.meta.url).href;
        },
    }
}
</script>

<template>
    <div class="d-flex flex-column justify-content-between h-100">
        <div class="align-left">
            <img :src="getImage(propCard.img)" alt="">
            <div class="card-text ms-1">
                <span class="title-card fw-bold"> {{ propCard.title }}</span>
                <span class="text-card"> {{ propCard.name }}</span>
                <span class="text-card"> {{ propCard.text }}</span>
                <div class="bnt-price">
                    <HomePageMiniButton :price=propCard.price :color=propCard.color />
                </div>
            </div>
        </div>
        <span class="text-uppercase">
            <i class="fa-solid fa-user ms-2 me-1"></i>
            {{ propCard.user }}
            <i class="fa-solid fa-tag ms-2"></i>
            {{ propCard.role }}
        </span>
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
                    border: 1px solid $lightgrey;

                    .card-text {
                        position: relative;

                        div {
                            position: absolute;
                            top: 0;
                            right: 2%;
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
                color: $lightgrey;
            }
        
    }

    button {
        color: $black;
    }

}
</style>