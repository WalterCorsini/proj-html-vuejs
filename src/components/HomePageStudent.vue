<script>
export default{
    data(){
        return{
            active: 0,
            arrayPeople:[
                {
                    img: "_1",
                    name:"Joan Collins",
                    role:"student",
                    text:"tante parole scritte a caso come se avessero un senso",
                },
                {
                    img: "_2",
                    name:"virginia Foster",
                    role:"Student",
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
    methods:{
        getImage(elem){
            return new URL(`../assets/img/home-page/sezione-5/${elem}.png`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <!-- <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
</div>
    </div> -->
     <!-- da usare il carosello -->
    <div class="container">
        <img class="background" src="../assets/img/home-page/globo.png" alt="">
        <div :class="active===index ? 'active' : ''" v-for="curElem,index in arrayPeople" class="card">
            
                <img :src="getImage(curElem.img)" alt="">
                <p>{{ curElem.text }}</p>
                <p>{{ curElem.name }}</p>
                <p>{{ curElem.role }}</p>

        </div>
    </div>
</template>

<style scoped lang="scss">
    .container{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
            text-align: center;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        .card{
            background-color: transparent;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80%;
            height: 100%;
            padding: 20px;

            img{
                width: 50px;
            }
        }
    }
    .background{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 400px;
    }

</style>