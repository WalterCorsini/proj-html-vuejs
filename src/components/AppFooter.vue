<!-- TODO: add router to links-->
<!-- TODO: upgrade the hover adding transition time -->

<script>
export default {
    data() {
        return {
            supportList: [
                "User dashboard",
                "Contact Us",
                "FAQ",
                "Course Offer",
                "Events",
            ],
            coursesList: [
                {
                    cours: "Business English",
                    teacher: "Preston Marshall",
                },
                {
                    cours: "Social Computing",
                    teacher: "David Sanders",
                },
                {
                    cours: "Business English",
                    teacher: "Jennie King",
                },
            ],
            menu: [
                {
                    title: "/About",
                    routeName: "about"
                }
            ]
        }
    },
    methods: {
        topFunction() {
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<template>
<footer>
    <div class="container">
        <!-- upper footer -->
        <div class="row">
            <div class="col">
                <!-- logo iAcademy -->
                <img src="../assets/img/contact_and_footer/logo.png" alt="" class="ms_logo pb-5">
        
                <!-- slogan -->
                <p class="pb-4">Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home</p>
        
                <!-- contatti e orari -->
                <div class="text-white ms_num_time">
                    <ul>
                        <li class="mb-3" @click="topFunction">
                            <router-link :to="{ name: item.routeName }" v-for="item in menu" class="nav-link">
                                <i class="fa-solid fa-phone"></i>
                                <span class="px-2">1-677-124-44227</span>
                            </router-link>
                        </li>
                        <li class="mb-3" @click="topFunction">
                            <router-link :to="{ name: item.routeName }" v-for="item in menu" class="nav-link">
                                <i class="fa-regular fa-clock"></i>
                                <span class="px-2">Mon - Sat 8.00 - 18.00</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col">
                <h4 class="pb-5 m-0 text-white">Popular Courses</h4>
                <ul>
                    <li v-for="item in coursesList" class="mb-3">
                        <h5 class="ms_blue-hover"><a href="#">{{ item.cours }}</a></h5>
                        <span class="ms_grey-hover"><a href="#">{{ item.teacher }}</a></span>
                    </li>
                </ul>
            </div>

            <div class="col">
                <h4 class="pb-5 m-0 text-white">Support</h4>
                <ul>
                    <li v-for="link in supportList" class="mb-3 ms_blue-hover"><a href="#">{{ link }}</a></li>
                </ul>
            </div>

            <div class="col">
                <h4 class="pb-5 m-0 text-white">Flexible Learning</h4>
                <img src="../assets/img/contact_and_footer/footer-img-1.png" alt="" class="ms_map">
            </div>
        </div>
        <!-- bottom footer -->
        <hr>

        <div class="row ms_bottom_footer">
            <div class="col-7"><a href="#">© 2017 Qode Interactive, All Rights Reserved</a></div>
            <div class="col-2 text-center">CALL +44 300 303 0266</div>
            <div class="col-2 text-center">FOLLOW US</div>
            <div class="col">
                <ul class="d-flex justify-content-between">
                    <li><a href="#"><i class="fa-brands fa-twitter ms_blue-hover"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram ms_blue-hover"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-facebook-f ms_blue-hover"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
</template>

<style scoped lang="scss">
footer {
    background-color: rgb(34 34 34);
    color: #cbcbcb;
    padding-top: 70px;

    .row {
        padding: 50px 0;
    }

    .ms_blue-hover:hover,
    li:hover i {
        color: #40c4ff;
    }

    .ms_grey-hover:hover{
        color: #606264;
    }

    .ms_bottom_footer {
        font-size: 0.8rem;
    }

    ul {
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    
    img.ms_map {
        width: 300px;
    }

    img.ms_logo {
        width: 150px;
    }

    h4, h5 {
        font-family: Merriweather,serif;
        font-weight: 700;
    }

    .ms_num_time {
        font-weight: 600;
        font-size: 12px;
    }
}

</style>