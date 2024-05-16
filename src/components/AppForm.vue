<script>
import AppButton from "./AppButton.vue";
export default {
    components: {
        AppButton,
    },
    data() {
        return {
            btnElem: "SUBMIT"
        }
    },
}
</script>

<template>
    <form class="row g-3 p-3">
        <div class="col-6">
            <label for="name" class="form-label ms_form-title">Name</label>
            <input type="text" class="form-control border rounded-0 bg-body-tertiary shadow-none" required id="name">
        </div>
        <div class="col-6">
            <label for="email" class="form-label ms_form-title">Email</label>
            <input type="email" class="form-control border rounded-0 bg-body-tertiary shadow-none" required id="email">
        </div>
        <div class="col-12">
            <label for="website" class="form-label ms_form-title">Website</label>
            <input type="text" class="form-control border rounded-0 bg-body-tertiary shadow-none" required id="website">
        </div>
        <div class="col-12 mb-3">
            <label for="message" class="form-label ms_form-title">Message</label>
            <textarea class="form-control border rounded-0 bg-body-tertiary shadow-none" required id="message" rows="3"></textarea>
        </div>
        <div class="col-12">
            <AppButton :title="btnElem" />
        </div>
    </form>
</template>

<style scoped lang="scss">
.ms_form-title {
    font-size: 12px;
    font-weight: 600;
    color: #353535;
}
</style>