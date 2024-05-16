<script>
import AboutPageTutorCard from '../components/AboutPageTutorCard.vue'
import AboutPageQuotes from '../components/AboutPageQuotes.vue'
import AboutPageFaq from '../components/AboutPageFaq.vue'
import AppJumbotron from '../components/AppJumbotron.vue'
import HomePageStudent from '../components/HomePageStudent.vue'
import { store } from '../store'
import AppCount from '../components/AppCount.vue'
import AppTopButton from '../components/AppTopButton.vue'
import SideButtons from '../components/SideButtons.vue'


export default {
    components: { AboutPageTutorCard, AboutPageQuotes, AboutPageFaq, AppJumbotron, HomePageStudent, AppCount, AppTopButton, SideButtons },
    data() {
        return {

            store,

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
            ],
            pageJumbotron: {
                home: "Home",
                title: "About"
            }
        }

    }
}
</script>

<template>

    <!-- Jumbotron -->
    <section>
        <AppJumbotron :propTitle="pageJumbotron"/>
    </section>

    <section class="children-section">

        <div class="container children">
            <!-- Children section description -->
            <div class="description">
                <h2 class="title-font">Empowering children to reach their potential.</h2>
                <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi doloremque inventore
                    eius dolorem, sapiente, dicta atque nulla harum magni ipsa dolor vero unde esse in error eos nam
                    odio minima?</p>
                <!-- <div class="data title-font primary-color">
                    <div class="user-stories">
                        <p class="num">168</p>
                        <p>User Stories</p>
                    </div>
                    <div class="scheduled-events">
                        <p class="num">237</p>
                        <p>Scheduled Events</p>
                    </div>
                </div> -->
                <div class="count">
                    <AppCount :count="store.usersCount" :step="7" color="rgb(64, 196, 255)" text="Storie degli utenti"/>
                    <AppCount :count="store.eventsCount" :step="12" color="rgb(64, 196, 255)" text="Eventi"/>
                </div>
            </div>

            <!-- Children section video -->
            <div class="video">
                <!-- Debug -->
                <!-- <img src="../assets/img/about-page/test.jpg" alt=""> -->
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RbGpUemSXAA?si=5z39_8Y3dDBD8oll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
        <!-- <AboutPageQuotes /> -->
        <HomePageStudent :propCard="store.aboutPageQuotesArray"/>
    </section>

    <!-- Faq section -->
    <section>
        <AboutPageFaq />
    </section>

    <AppTopButton />
    <SideButtons />
</template>

<style scoped lang="scss">
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;



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



            .count {
                @include flex($justify-content: flex-start);
                gap: 100px;     

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