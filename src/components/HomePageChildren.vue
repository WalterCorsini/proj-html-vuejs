<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<template>
    <div class="container pt-5">
        <div class="row">
            <div class="col-7 my-5">
                <img src="../assets/img/home-page/_4.jpg" alt="">
            </div>
            <div class="col-4 pt-5">
                <h2>
                    dare ai bambini la possibilità di raggiungere il loro potenziale.
                </h2>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia vel dolores odio rerum, quod
                    suscipit modi repellendus, culpa fugit ipsam officiis ducimus accusantium dolorem quos pariatur sed,
                    ipsa tenetur illum.
                </span>
                <div class="d-flex justify-content-around">
                <div class="count">
                    <span class="mt-5 d-flex flex-column">
                        <a href="">168</a>
                        <span>Storie degli utenti</span>
                    </span>
                </div>
                <div class="count">
                    <span class="mt-5 d-flex flex-column">
                        <a href="">347</a>
                        <span>Eventi</span>
                    </span>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    border-top: 1px solid rgb(201, 201, 201);
    --bs-gutter-x: 0 ;
    span{
        font-size: 10px;
    }
    .count span:first-child{
        font-family: serif;
        font-size: 36px;
        color: #40C4FF;
        font-weight: 700;
        display: block;
        cursor: pointer;
        span{
            font-size: 12px;
        }
        a {
            text-decoration: none;
            color: #40C4FF;
        }
    }
    img{
        width:100%;
    };
    .row .col-7{
        margin-bottom:0;
    }
}
</style>