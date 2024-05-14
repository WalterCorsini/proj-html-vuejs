<script>
export default {
    data() {
        return {
                arrayCard:[
                    {
                        img: "_1",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "_2",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "_3",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "_4",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "_5",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "_6",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "_6",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "_7",
                        title:"",
                        name:"",
                        text:"",
                    },
                    {
                        img: "",
                        title:"",
                        name:"",
                        text:"",
                    },
                ]
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <img src="../assets/img/home-page/sfondo-rombi.png" alt="">
        <div class="container-absolute text-center">
            <div class="container-online-courses d-flex flex-column align-items-center jutify-content-center pt-5">
                <h2>titolo</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At aspernatur dolorem beatae tenetur quis?
                    Incidunt praesentium, quibusdam id voluptate ipsam corporis sequi voluptatem explicabo magni culpa
                    in quisquam. Aperiam, ipsa.
                </p>
                <div class="container-card d-flex gap-3 justify-content-around">
                    <div class="card-courses">
                            <div>
                                <!-- img -->
                            </div>
                            <div>
                                <!-- text  -->
                            </div>
                    </div>
                    <div class="card-courses">
                            dd
                    </div>
                    <div class="card-courses">
                            dd
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
            width: 60%;
            margin: 0 auto;
            .container-card{
                width: 140%;
                .card-courses {
                    width: calc(100% / 3);
                    height: 45vh;
                    border: 1px solid black;
                }
            }
        }
    }
}
</style>