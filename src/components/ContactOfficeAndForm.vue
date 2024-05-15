<script>
import AppCardOffice from "./AppCardOffice.vue";
import AppForm from "./AppForm.vue";

export default {
    components: {
        AppCardOffice,
        AppForm,
    },
    data() {
        return {
            offices: [
                {
                    city: "New York Office",
                    number: "1-677-124-44227",
                    email: "iacademy@qodeinteractive.com",
                    address: "184 Main Collins Street"
                },
                {
                    city: "London Office",
                    number: "1-688-124-44228",
                    email: "iacademy@qodeinteractive.com",
                    address: "Houghton Street, Suite 721"
                },
            ]
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
                <!-- office list -->
                <AppCardOffice :propCard="offices" />
            </div>
            <div class="col border p-0">
                <!-- form title -->
                <div class="border-bottom p-4">
                    <p class="m-0">GET IN TOUCH</p>
                </div>
                <!-- form -->
                <AppForm />
            </div>
        </div>
    </div>
</section>
</template>

<style scoped lang="scss">
</style>