<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>


    <section class="section-title">
        <div class="title container">
            <h1 class="title-font">About</h1>
            <span>Home / About</span>
        </div>
    </section>

    <section class="children-section">

        <div class="container children">
            <!-- Children section description -->
            <div class="description">
                <h2 class="title-font">Empowering children to reach their potential.</h2>
                <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi doloremque inventore
                    eius dolorem, sapiente, dicta atque nulla harum magni ipsa dolor vero unde esse in error eos nam
                    odio minima?</p>
                <div class="data title-font">
                    <div class="user-stories">
                        <p class="num">168</p>
                        <p>User Stories</p>
                    </div>
                    <div class="scheduled-events">
                        <p class="num">237</p>
                        <p>Scheduled Events</p>
                    </div>
                </div>
            </div>

            <!-- Children section video -->
            <div class="video">
                <!-- Debug -->
                <img src="../assets/img/about-page/test.jpg" alt="">
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;


.section-title {
    background-image: url("../assets/img/about-page/pages-title-parallax.jpg");
    background-position: center;

    .title {
        padding: 80px 0;
        color: white;
    }
}

.children-section {
    padding: 100px 0;

    .children {
        @include flex($justify-content: space-between);

        .description {
            width: 40%;

            h2 {
                color: #303030;
            }


            .desc {
                color: grey
            }


            .data {
                @include flex($justify-content: flex-start);
                gap: 100px;
                color: $primary-color;

                .num {
                    font-size: 3rem;
                }

            }

        }

        .video {
            width: 50%;
        }

    }
}
</style>