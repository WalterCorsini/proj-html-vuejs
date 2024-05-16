<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-6"><img src="../assets/img/about-page/faq.png" alt=""></div>
            <div class="col-6">
                <h3>FAQs</h3>
                <div class="accordion" id="accordionExampleLft">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading1l">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse1l" aria-expanded="false" aria-controls="collapse1l">
                                Can I just enroll in a single course?
                            </button>
                        </h2>
                        <div id="collapse1l" class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading1l">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam id in impedit corrupti tempore natus recusandae qui aperiam voluptas, quos repellat quasi veniam quae molestias vero. Minima, quia vero?
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header " id="heading2l">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse2l" aria-expanded="false" aria-controls="collapse2l">
                                What is the refund policy?
                            </button>
                        </h2>
                        <div id="collapse2l" class="accordion-collapse collapse" data-bs-parent="#accordionExampleLft"
                            role="region" aria-labelledby="heading2l">
                            <div class="accordion-body">
                                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et
                                sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum
                                eget, ullamcorper nec turpis.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header " id="heading3l">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse3l" aria-expanded="false" aria-controls="collapse3l">
                                What background knowledge is necessary?
                            </button>
                        </h2>
                        <div id="collapse3l" class="accordion-collapse collapse" data-bs-parent="#accordionExampleLft"
                            role="region" aria-labelledby="heading3l">
                            <div class="accordion-body">
                                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et
                                sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum
                                eget, ullamcorper nec turpis.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header " id="heading3l">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse3l" aria-expanded="false" aria-controls="collapse3l">
                                Do I need to take the courses in a specific order?
                            </button>
                        </h2>
                        <div id="collapse3l" class="accordion-collapse collapse" data-bs-parent="#accordionExampleLft"
                            role="region" aria-labelledby="heading3l">
                            <div class="accordion-body">
                                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et
                                sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum
                                eget, ullamcorper nec turpis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

@use "../style/partials/variables" as *;


.accordion-item {
    margin-bottom: 20px;
    border-radius: 0;
    border: 1px solid lightgray;

    .accordion-button {
        border: 0;
        
    }
}

</style>