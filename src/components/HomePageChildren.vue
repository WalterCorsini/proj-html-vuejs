<script>
export default {
    data() {
        return {
            contatore: 0,
            contatore1: 0,
            // Array per memorizzare i valori intermedi
            stepsUser: [],
            steps:[],
        };
    },
    created() {
        this.generateSteps();
        this.incrementCounter();
        this.generateStepsUser();
        this.incrementCounterUser();
    },
    methods: {
        // generatore per indice storie utenti
        generateStepsUser() {
            let currentUser = 0;    // contatore
            const maxUser = 168;    // numero massimo
            const stepUser = 7;     // quanti numeri alla volta incrementa  (cercare un multiplo perche funzioni)

        // riempe un array con gli intervalli (7,14,21....)
            while (currentUser <= maxUser) {
                this.stepsUser.push(currentUser);
                currentUser += stepUser;
            }
        },
        incrementCounterUser() {
            if (this.stepsUser.length > 0) {
                const nextStepUser = this.stepsUser.shift(); // Rimuove il primo elemento dell'array
                setTimeout(() => {
                    let currentUser = nextStepUser;
                    console.log(`Contatore: ${nextStepUser}`);
                    this.contatore = nextStepUser;
                    // Se ci sono ancora intervalli incrementa il contatore
                    if (this.stepsUser.length > 0) {
                        this.incrementCounterUser();
                    }
                }, 100); // tempo set timeout
            }
        },

        //  generatore per indice eventi
        generateSteps() {
            let current = 0;    //contatore
            const max = 348;    // numero massimo
            const step = 12;    // quanti numeri alla volta incrementa (cercare un multiplo perche funzioni)

        //  riempe un array con gli intervalli di 12 in 12 (12,24,36....)
            while (current <= max) {
                this.steps.push(current);
                current += step;
            }
        },
        incrementCounter() {
            if (this.steps.length > 0) {
                const nextStep = this.steps.shift(); // Rimuove il primo elemento dell'array
                setTimeout(() => {
                    this.contatore1 = nextStep;
                    console.log(`Contatore: ${nextStep}`);
                    // Se ci sono ancora intervalli incrementa il contatore
                    if (this.steps.length > 0) {
                        this.incrementCounter();
                    } else {
                        console.log("ciao");
                    }
                }, 100); // tempo set timeout
            }
        },
    },
}
</script>

<template>
    <div class="container pt-5">
        <div class="row align-items-end">
            <div class="container-img col-7">
                    <img src="../assets/img/home-page/_4.jpg" alt="">
            </div>

            <div class="col-4">
                <h2>
                    dare ai bambini la possibilità di raggiungere il loro potenziale.
                </h2>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia vel dolores odio rerum, quod
                    suscipit modi repellendus, culpa fugit ipsam officiis ducimus accusantium dolorem quos pariatur sed,
                    ipsa tenetur illum.
                </span>
                <div class="pb-3 d-flex justify-content-around">
                    <div class="count">
                        <div class="mt-5 d-flex flex-column">
                            <a href="">{{ contatore }}</a>
                            <span>Storie degli utenti</span>
                        </div>
                    </div>
                    <div class="count">
                        <div class="mt-5 d-flex flex-column">
                            <div>
                                <a href="">{{ contatore1 }}</a>
                            </div>
                                <span>Eventi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.container {
    border-top: 1px solid $lightgrey;

    span {
        font-size: 10px;
    }
    img{
        width: 80%;
    }
    .count div:first-child {
        font-family: serif;
        font-size: 36px;
        color: $primary-color;
        font-weight: 700;
        cursor: pointer;

        span {
            font-size: 12px;
        }

        a {
            text-decoration: none;
            color: $primary-color;
        }
    }


}
</style>