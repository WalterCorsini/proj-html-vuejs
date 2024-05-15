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
<section>
    <div class="container py-5">
        <div class="row">
            <!-- contact detail -->
            <div class="col">
                <h1 class="title-font">Contact Details</h1>
                <p class="ms_color-grey">Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin, quis bibendum auci elit consequat.</p> 
                <!-- office list -->
                <AppCardOffice :propCard="offices" />
            </div>
            <div class="col-7 border p-0">
                <!-- form title -->
                <div class="border-bottom bg-body-tertiary p-3">
                    <p class="m-0 ms_form-title">GET IN TOUCH</p>
                </div>
                <!-- form -->
                <AppForm />
            </div>
        </div>
    </div>
</section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.ms_color-grey {
    color: $grey,
}

.ms_form-title {
    font-size: 12px;
    font-weight: 600;
    color: #353535;
}
</style>