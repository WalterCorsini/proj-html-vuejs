<script>
export default {
    data() {
        return {
        }
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
                            <a href="">168</a>
                            <span>Storie degli utenti</span>
                        </div>
                    </div>
                    <div class="count">
                        <div class="mt-5 d-flex flex-column">
                            <div>
                                <a href="">347</a>
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