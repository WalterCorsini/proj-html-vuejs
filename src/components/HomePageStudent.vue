<script>
export default {
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
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-5/${elem}.png`, import.meta.url).href;
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

    <!-- da usare il carosello -->
    <div class="container">
        <img class="background" src="../assets/img/home-page/globo.png" alt="">
        <div :class="index === active ? 'd-flex' : 'd-none'" v-for="curElem, index in arrayPeople" class="card">

            <img :src="getImage(curElem.img)" alt="">
            <p>{{ curElem.text }}</p>
            <p>{{ curElem.name }}</p>
            <p>{{ curElem.role }}</p>

        </div>
        <button @click.prevent.stop="changeActiveLess" class="carousel-control-prev" type="button"
            data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button @click.prevent.stop="changeActivePlus" class="carousel-control-next" type="button"
            data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    
</template>

<style scoped lang="scss">
.container {
    position: relative;
    width: 100%;
    height: 50vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .card {
        color: white;
        background-color: transparent;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 100%;
        padding: 20px;
        --bs-card-border-width: 0;

        img {
            width: 80px;
        }

    }
}
</style>