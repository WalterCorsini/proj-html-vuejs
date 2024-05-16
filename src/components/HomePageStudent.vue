<script>
import AppCardStudent from "./AppCardStudent.vue";
import { store } from "../store";

export default {
    props: {
        propCard: Object,
    },
    components: {
        AppCardStudent,
    },
    data() {
        return {
            store,
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
}
</script>

<template>
    <div class="container-fluid d-flex justify-content-center align-items-center position-relative">
        <div :class="index === store.active ? 'd-flex' : 'd-none'" v-for="curElem, index in propCard"
            class="card d-flex justify-content-center align-items-center h-100 p-2">

            <!--  component card -->
            <AppCardStudent :propCard="curElem" />
            <div class="d-flex flex-row gap-3">

                <!-- create circle icon for all elements... -->
                <i @click.stop="store.active = index" :class="store.active === index ? 'fa-solid' : 'fa-regular'" class="fa-circle"
                    v-for="curElem, index in arrayPeople"></i>
            </div>

        <!--  button to move card -->
        </div>
        <button @click.prevent.stop="store.changeActiveFlash('L')" class="carousel-control-prev" type="button"
            data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button @click.prevent.stop="store.changeActiveFlash('P')" class="carousel-control-next" type="button"
            data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <!--  /button to move card -->


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
    z-index: 1;

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
    .carousel-control-next-icon,
    .carousel-control-prev-icon{
        width: 30px;
        height: 30px;
        position: relative;
        z-index: 100;
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
