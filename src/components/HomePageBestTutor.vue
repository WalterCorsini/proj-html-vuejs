<script>
import AppCardBestTutor from './AppCardBestTutor.vue';
export default {
    components:{
        AppCardBestTutor,
    },
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
}
</script>

<template>

    <div class="container-fluid text-center">
        <div class="container w-50">
            <h1 class="title-font">The Best Tutors in Town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam odio vero, fuga rem temporibus
                excepturi debitis voluptate nostrum natus neque saepe perferendis</p>
        </div>
            <!-- card -->
            <div class="card-tutor d-flex justify-content-center gap-3">
                <div v-for="curElem in arrayTutors" class="card-container">
                    <AppCardBestTutor :propCard="curElem" />
                </div>
            </div>
            <!-- /card -->
    </div>
    
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.container-fluid{
    padding:50px;
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