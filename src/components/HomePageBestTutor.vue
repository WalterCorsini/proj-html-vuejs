<script>
export default {
    data() {
        return {
            arrayTutors:[
                {
                    img: "_1",
                    name: "Brenda Harris",
                    role: "TEACHER",
                    text: "Lorem ipsum oin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequa",
                },
                {
                    img: "_2",
                    name: "Lisa Griffin",
                    role: "TEACHER",
                    text: "Lorem ipsum oin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequa",
                },
                {
                    img: "_3",
                    name: "Victor Green",
                    role: "TEACHER",
                    text: "Lorem ipsum oin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequa",
                },
            ]
        }
    },
    methods:{
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-8/${elem}.jpg`, import.meta.url).href;
        }, 
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="container w-50 text-center">
            <h1>The Best Tutors in Town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam odio vero, fuga rem temporibus
                excepturi debitis voluptate nostrum natus neque saepe perferendis</p>
        </div>
            <div class="card-tutor d-flex justify-content-center text-center gap-3">
                <div v-for="curElem in arrayTutors" class="card-container d-flex flex-column justify-content-center align-items-center gap-2">
                    <img :src="getImage(curElem.img)" alt="">
                    <span class="name">{{ curElem.name }}</span>
                    <span class="fw-bold">{{ curElem.role }}</span>
                    <span>{{ curElem.text }}</span>
                    <span class="d-flex gap-3">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                    </span>
                </div>

            </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.container-fluid{
    padding:100px;
}
.card-tutor{
    margin-top: 50px;
    .card-container{
        padding: 20px;
        width: calc(100% / 3);
        img{
            width: 100px;
        }
    } 
}
span{
    display: block;
    font-size: 12px;
    color: $grey;
}

.name{
    color: $black;
    font-size: 20px;
    font-family: serif;
    font-weight: 600;
}
</style>