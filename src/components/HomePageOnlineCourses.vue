<script>
import HomePageMiniButton from "./HomePageMiniButton.vue";
export default {
    components:{
        HomePageMiniButton,
    },
    data() {
        return {
                arrayCard:[
                    {
                        img: "1",
                        title:"Modern Psycology",
                        name:"Kathryn Webb",
                        text:"tante parole dette a caso senza senzo servono solo per riempire la card",
                    },
                    {
                        img: "2",
                        title:"Learn Spanish",
                        name:"Jennie King",
                        text:"Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    },
                    {
                        img: "3",
                        title:"Social Computing",
                        name:"Davide Sanders",
                        text:"Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    },
                    // {
                    //     img: "4",
                    //     title:"Android Developer",
                    //     name:"David Sanders",
                    //     text:"Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    // },
                    // {
                    //     img: "5",
                    //     title:"Web Designin",
                    //     name:"Jennifer Powell",
                    //     text:"Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    // },
                    // {
                    //     img: "6",
                    //     title:"Basic Marketing",
                    //     name:"Edward Bowman",
                    //     text:"Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    // },
                    // {
                    //     img: "7",
                    //     title:"Financial Modeliing",
                    //     name:"Edward Bowman",
                    //     text:"Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    // },
                    // {
                    //     img: "8",
                    //     title:"Academic English",
                    //     name:"Dave Robbins",
                    //     text:"Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    // },
                    // {
                    //     img: "9",
                    //     title:"Business English",
                    //     name:"Preston Marshall",
                    //     text:"Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit",
                    // },
                ]
        }
    },
    methods:{
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-7/${elem}.jpg`, import.meta.url).href;
        }, 
    }
}
</script>

<template>
    <div class="container-fluid">
        <img class="w-100" src="../assets/img/home-page/sfondo-rombi.png" alt="sfondo-sezione">
        <div class="container-absolute w-100">
            <div class="container-online-courses pt-5 m-auto
            d-flex flex-column justify-content-center align-items-center">
                <span class="title fw-bold text-center">Popular Online Courses</span>
                <p class="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At aspernatur dolorem beatae tenetur quis?
                    Incidunt praesentium, quibusdam id voluptate ipsam corporis sequi voluptatem explicabo magni culpa
                    in quisquam. Aperiam, ipsa.
                </p>
                <div class="container-card d-flex gap-3 mt-5 justify-content-around">
                    <!--  non visualizza tutte e 9 le card. -->
                    <div v-for="curCard,index in arrayCard" class="card-courses d-flex flex-column justify-content-between p-1">
                            <div class="align-left">
                                <img :src="getImage(curCard.img)" alt="">
                                <span class="title-card fw-bold"> {{ curCard.title }}</span>
                                <span class="text-card"> {{ curCard.name }}</span>
                                <span class="text-card"> {{ curCard.text }}</span>
                            </div>
                            <span>
                                <i class="fa-solid fa-user"></i>
                                0
                                <i class="fa-solid fa-tag"></i>
                                programming
                            </span>
                            <HomePageMiniButton  text="$20"/>
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.container-fluid {
    position: relative;
    max-width: 100%;

    .container-absolute {
        position: absolute;
        top: 0;
        left: 0;

        .container-online-courses {
            width: 70%;
            .title{
                font-family: serif;
                font-size: 40px;
                
            }
            p{
                color: $grey;
            }
            .container-card{
                width: 100%;
                .card-courses {
                    width: calc(100% / 3);
                    height: 60vh;
                    border: 1px solid grey;
                    span{
                        display: block;
                    }
                    .title-card{
                        font-family: serif;
                        font-size: 18px;
                    }
                    .text-card,i,span{
                        margin: 5px 0;
                        font-size: 12px;
                        color: $grey;
                    }
                }
            }
        }
    }
}
</style>