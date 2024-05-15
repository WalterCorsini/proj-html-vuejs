<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <form class="row g-3 p-4">
        <div class="col-6">
            <label for="name" class="form-label">Name</label>
            <input type="email" class="form-control border-0 bg-body-tertiary shadow-none" required id="name">
        </div>
        <div class="col-6">
            <label for="email" class="form-label">Email</label>
            <input type="password" class="form-control border border-0 bg-body-tertiary shadow-none" required id="email">
        </div>
        <div class="col-12">
            <label for="website" class="form-label">Website</label>
            <input type="text" class="form-control border border-0 bg-body-tertiary shadow-none" required id="website">
        </div>
        <div class="col-12 mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control border border-0 bg-body-tertiary shadow-none" required id="message" rows="3"></textarea>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">SUBMIT</button>
        </div>
    </form>
</template>

<style scoped lang="scss">

</style>