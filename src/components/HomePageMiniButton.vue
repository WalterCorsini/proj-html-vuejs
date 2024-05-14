<script>
export default{
    data(){
        return{
            props:{
                textbutton: String
            }
        }
    }    
}
</script>

<template>
    <div class="px-3 py-2">
        {{ textbutton }}
    </div>
</template>

<style lang="scss" scoped>
div{
    width: 30px;
    height: 10px;
    border-radius: 20px;
    color: white;
}

</style>