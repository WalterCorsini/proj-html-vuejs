<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<template>
    <div class="container d-flex pt-5">
        <div class="row">
            <div class="col-4 mt-5">
                <h2>
                    Il nome di fiducia per il tutoraggio a domicilio
                </h2>
                <span class="mb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia vel dolores odio rerum, quod
                    suscipit modi repellendus, culpa fugit ipsam officiis ducimus accusantium dolorem quos pariatur sed,
                    ipsa tenetur illum.
                </span>
                <span class="mt-3">
                    <a class="d-block" href="">SAPERNE DI PIU'</a>
                </span>
            </div>
            <div class="col-7">
                <img class="w-100" src="../assets/img/home-page/_3.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.container {
    .row{
        --bs-gutter-x: 0 ;
        span{
            font-size: 10px;
        }
        span:last-child {
            font-family: sans-serif;
            font-weight: 800;
            font-size: 12px;
            cursor: pointer;
            a {
                text-decoration: none;
                color: $primary-color;
                &:hover::after {
                    content: " >";
                    color: $primary-color;
                }
            }
            
        }
    }
}
</style>