<script>
export default{
    data(){
        return{
                arrayIcon: [
                    {
                        name:"Languages",
                        img: "_1"
                    },
                    {
                        name:"Software",
                        img: "_2"
                    },
                    {
                        name:"Business",
                        img: "_3"
                    },
                    {
                        name:"Chemistry",
                        img: "_4"
                    },
                    {
                        name:"Science",
                        img: "_5"
                    },
                    {
                        name:"DIY&Craft",
                        img: "_6"
                    },
                ]
        }
    },
    methods:{
        getImage(elem) {
            return new URL(`../assets/img/home-page/sezione-2/${elem}.png`, import.meta.url).href;
        },
    }
}
</script>

<template>
    <!-- section icon -->
    <div class="container">
        <div class="row justify-content-evenly mt-5">
            <div v-for="curElem in arrayIcon" class="d-flex flex-column justife-content-center align-items-center col-2 p-3">
                <div class="icon d-flex flex-column justify-content-center align-items-center p-4">
                    <img :src="getImage(curElem.img)" alt="">
                    <span class="m-3">{{ curElem.name }}</span>
                </div>
            </div>
        </div>
    </div>
    <!-- /section icon -->

</template>

<style scoped lang="scss">
    .container{
        width: 100%;
        .col-2{
            img{
                transition: 1s;
                &:hover{
                    transform:translateY(-5px);
                    transition: 1s;
                }
            }
            .icon{
                width:100%;
                background-color:#F2F8FC    
            }
        }
    }
</style>