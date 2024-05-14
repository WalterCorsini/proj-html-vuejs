<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
<section class="bg-white">
    <div class="container py-5">
        <div class="row">
            <!-- contact detail -->
            <div class="col">
                <h1>Contact Details</h1>
                <p>Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin, quis bibendum auci elit consequat.</p>
                <!-- office 1 -->
                <div>
                    <h4>New York Office</h4>
                    <div>
                        <ul>
                            <li>
                                <i class="fa-solid fa-phone"></i>
                                <span class="mx-3">1-677-124-44227</span>
                            </li>
                            <li>
                                <i class="fa-regular fa-comment"></i>
                                <span class="mx-3">iacademy@qodeinteractive.com</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-building"></i>
                                <span class="mx-3">184 Main Collins Street</span>
                            </li>
                        </ul>
                    </div>
                </div>
    
                <hr>
    
                <!-- office 2 -->
                <div>
                    <h4>London Office</h4>
                    <div>
                        <ul>
                            <li>
                                <i class="fa-solid fa-phone"></i>
                                <span class="mx-3">1-688-124-44228</span>
                            </li>
                            <li>
                                <i class="fa-regular fa-comment"></i>
                                <span class="mx-3">iacademy@qodeinteractive.com</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-building"></i>
                                <span class="mx-3">Houghton Street, Suite 721</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- form -->
            <div class="col">
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="name" class="form-label">Name</label>
                        <input type="email" class="form-control" id="name">
                    </div>
                    <div class="col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input type="password" class="form-control" id="email">
                    </div>
                    <div class="col-12">
                        <label for="website" class="form-label">Website</label>
                        <input type="text" class="form-control" id="website">
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped lang="scss">
a {
    text-decoration: none;
    color: inherit;
}

ul {
    padding: 0;
}
</style>