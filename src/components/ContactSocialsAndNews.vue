<script>
export default {

}
</script>

<template>
    <div class="container py-5">
        <div class="row justify-content-between text-center">
            <div class="col">
                <h5>Sbuscribe to Newsletter</h5>
                <p>Get updates for New Classes</p>
            </div>
            <div class="col">
                <div class="border row p-3">
                    <input type="text" placeholder="Enter your email" aria-label="Enter your email" class="border-0 col-10">
                    <button type="button" class="border-0 bg-transparent col-2"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
            <div class="col">
                <div class="d-flex justify-content-center">
                    <span class="px-2">Follow Us:</span>
                    <ul class="d-flex justify-content-between p-0 m-0">
                        <li class="px-2"><a href="#"><i class="fa-brands fa-twitter ms_blue-hover"></i></a></li>
                        <li class="px-2"><a href="#"><i class="fa-brands fa-instagram ms_blue-hover"></i></a></li>
                        <li class="px-2"><a href="#"><i class="fa-brands fa-facebook-f ms_blue-hover"></i></a></li>
                    </ul>
                </div>
                <div>
                    <p>We want to hear from you</p>
                </div>
            </div>
            <div class="col">
                <div>
                    Call Us: <span class="c-b">060 777 9999</span>
                </div>
                <div>
                    Do not hesitate tu contact us
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

input:focus {
    outline: none;
}

.ms_blue-hover:hover,
.c-b {
        color: #40c4ff;
}

a {
    text-decoration: none;
    color: inherit;
}

</style>