<script>
import AppCardIcon from './AppCardIcon.vue';
export default{
    components:{
        AppCardIcon,
    },
    data(){
        return{
                arrayIcon: [
                    {
                        name:"Languages",
                        img: "_1"
                    },
                    {
                        name:"Software",
                        img: "_2"
                    },
                    {
                        name:"Business",
                        img: "_3"
                    },
                    {
                        name:"Chemistry",
                        img: "_4"
                    },
                    {
                        name:"Science",
                        img: "_5"
                    },
                    {
                        name:"DIY&Craft",
                        img: "_6"
                    },
                ]
        }
    },
}
</script>

<template>
    <!-- section icon -->
    <div class="container w-100">
        <div class="row justify-content-evenly mt-5">
            <div v-for="curElem in arrayIcon" class="d-flex flex-column justife-content-center align-items-center col-2 p-3">
                <AppCardIcon :propCard="curElem" />
            </div>
        </div>
    </div>
    <!-- /section icon -->
    

    <Transition name="fade">
  </Transition>

</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>