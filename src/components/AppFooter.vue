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
            ]
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
                <div class="text-white">
                    <ul>
                        <li class="mb-3">
                            <i class="fa-solid fa-phone"></i>
                            <span class="px-2">1-677-124-44227</span>
                        </li>
                        <li class="mb-3">
                            <i class="fa-regular fa-clock"></i>
                            <span class="px-2">Mon - Sat 8.00 - 18.00</span>
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

    </div>
</footer>
</template>

<style scoped lang="scss">
footer {
    background-color: rgb(34 34 34);
    color: #cbcbcb;
    padding: 100px 0;

    .ms_blue-hover:hover,
    li:hover > i {
        color: #40c4ff;
    }

    .ms_grey-hover:hover {
        color: #606264;
    }

    ul {
        padding: 0;

        a {
            color: inherit;
            text-decoration: none;
        }
    }
    
    img.ms_map {
        width: 300px;
    }

    img.ms_logo {
        width: 150px;
    }

    hr {
        border: 1px solid white;
    }
}

</style>