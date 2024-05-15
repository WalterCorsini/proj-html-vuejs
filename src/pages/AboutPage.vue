<script>
import AboutPageTutorCard from '../components/AboutPageTutorCard.vue'
import AboutPageQuotes from '../components/AboutPageQuotes.vue'
import AboutPageFaq from '../components/AboutPageFaq.vue'


export default {
    components: { AboutPageTutorCard, AboutPageQuotes, AboutPageFaq },
    data() {
        return {
            tutorsArray: [
                {
                    name: "Edward Bowman",
                    role: "Associate Professor",
                    img: "-1"
                },
                {
                    name: "Edward Bowman",
                    role: "Assistant Professor",
                    img: "-2"
                },
                {
                    name: "Edward Bowman",
                    role: "Teaching Assistant",
                    img: "-3"
                },
                {
                    name: "Edward Bowman",
                    role: "Associate Professor",
                    img: "-4"
                },
                {
                    name: "Edward Bowman",
                    role: "Teaching Assistant",
                    img: "-5"
                },
                {
                    name: "Edward Bowman",
                    role: "Assistant Professor",
                    img: "-6"
                },
                {
                    name: "Edward Bowman",
                    role: "Associate Professor",
                    img: "-7"
                },
                {
                    name: "Edward Bowman",
                    role: "Teaching Assistant",
                    img: "-8"
                },
                {
                    name: "Edward Bowman",
                    role: "Professor",
                    img: "-9"
                }
            ]
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

    <!-- Tutors Section -->
    <section class="tutors-section">
        <div class="container">
            <div class="tutors-title text-center">
                <h2 class="title-font primary-color">Top tutors in every subjects</h2>
                <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officiis atque adipisci ipsam nulla vero dolorem cupiditate.</p>
            </div>
            <div class="row">
                <div class="col-4" v-for="tutor in tutorsArray">
                    <!-- Card -->
                    <AboutPageTutorCard :cardObj="tutor"/>
                </div>
            </div>
        </div>
    </section>

    <!-- Quotes Section -->
    <section>
        <AboutPageQuotes />
    </section>

    <!-- Faq section -->
    <section>
        <AboutPageFaq />
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

.tutors-section{
    border-top: 1px solid rgb(218, 218, 218);
    padding: 40px 0;

    .tutors-title {
        padding: 40px 0;
    }

    .desc {
        color: grey;
    }

}

</style>