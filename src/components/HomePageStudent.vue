<script>
import AppCardStudent from "./AppCardStudent.vue";

export default {
    props: {
        propCard: Object,
    },
    components: {
        AppCardStudent,
    },
    data() {
        return {
            active: 0,
            arrayPeople: [
                {
                    img: "_1",
                    name: "Joan Collins",
                    role: "student",
                    text: "tante parole scritte a caso come se avessero un senso",
                },
                {
                    img: "_2",
                    name: "virginia Foster",
                    role: "Student",
                    text: "tante parole scritte a caso come se avessero un senso",
                },
                {
                    img: "_3",
                    name: "Molly Simone",
                    role: "Teacher",
                    text: "tante parole scritte a caso come se avessero un senso"
                },
            ],
        }
    },
    methods: {
        changeActive(value) {
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
    <div class="container-fluid d-flex justify-content-center align-items-center position-relative">
        <div :class="index === active ? 'd-flex' : 'd-none'" v-for="curElem, index in propCard"
            class="card d-flex justify-content-center align-items-center h-100 p-2">
            <AppCardStudent :propCard="curElem" />
            <div class="d-flex flex-row gap-3">
                <i @click.stop="active = index" :class="active === index ? 'fa-solid' : 'fa-regular'" class="fa-circle"
                    v-for="curElem, index in arrayPeople"></i>
            </div>


        </div>
        <button @click.prevent.stop="changeActive('L')" class="carousel-control-prev" type="button"
            data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button @click.prevent.stop="changeActive('P')" class="carousel-control-next" type="button"
            data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.container-fluid {
    margin-bottom: 100px;
    background-image: url(../assets/img/home-page/globo.png);
    min-height: 70vh;
    background-attachment: fixed;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;

    .card {
        color: $white;
        background-color: transparent;
        position: relative;
        width: 80%;
        --bs-card-border-width: 0;

        img {
            width: 80px;
        }

    }
}
</style>
