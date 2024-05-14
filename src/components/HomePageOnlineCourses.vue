<script>
export default {
    data() {
        return {
                arrayCard:[
                    {
                        img: "1",
                        title:"Business English",
                        name:"Nome Cognome",
                        text:"tante parole dette a caso senza senzo servono solo per riempire la card",
                    },
                    {
                        img: "2",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "3",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "4",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "5",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "6",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "7",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "8",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "9",
                        title:"",
                        name:"",
                        text:"",
                    },
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
        <img src="../assets/img/home-page/sfondo-rombi.png" alt="">
        <div class="container-absolute">
            <div class="container-online-courses d-flex flex-column align-items-center jutify-content-center pt-5">
                <span class="title text-center">Popular Online Courses</span>
                <p class="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At aspernatur dolorem beatae tenetur quis?
                    Incidunt praesentium, quibusdam id voluptate ipsam corporis sequi voluptatem explicabo magni culpa
                    in quisquam. Aperiam, ipsa.
                </p>
                <div class="container-card d-flex gap-3 justify-content-around">
                    <!--  non visualizza tutte e 9 le card. -->
                    <div v-for="curCard,index in arrayCard" class="card-courses">
                            <div>
                                <img :src="getImage(curCard.img)" alt="">
                            </div>
                            <div class="align-left" v-for="curCard,index in arrayCard">
                                <span class="title-card"> {{ curCard.title }}</span>
                                <span class="text-card"> {{ curCard.name }}</span>
                                <span class="text-card"> {{ curCard.text }}</span>
                            </div>
                            <span>
                                <i class="fa-solid fa-user"></i>
                                0
                                <i class="fa-solid fa-tag"></i>
                                programming
                            </span>
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container-fluid {
    position: relative;

    img {
        width: 100%;
    }

    .container-absolute {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;

        .container-online-courses {
            overflow-x:scroll;
            width: 70%;
            margin: 0 auto;
            .title{
                font-family: serif;
                font-weight: bold;
                font-size: 40px;
                
            }
            p{
                color: grey;
            }
            .container-card{
                margin-top: 50px;
                .card-courses {
                    padding: 10px;
                    width: calc(800px / 3);
                    height: 55vh;
                    border: 1px solid lightgray;
                    span{
                        display: block;
                    }
                    .title-card{
                        font-weight: bold;
                        font-family: serif;
                        font-size: 18px;
                    }
                    .text-card,i,span{
                        margin: 5px 0;
                        font-size: 12px;
                        color: grey;
                    }
                }
            }
        }
    }
}
</style>