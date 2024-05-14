<script>
export default{
    data(){
        return{
            props:{
                text: String,
            }
        }
    }    
}
</script>

<template>
    <div class="px-3 py-2">
        {{ text }}
    </div>
</template>

<style lang="scss" scoped>
div{
    width: 30px;
    height: 10px;
    border-radius: 20px;
    background-color: red;
    color: white;
}

</style>