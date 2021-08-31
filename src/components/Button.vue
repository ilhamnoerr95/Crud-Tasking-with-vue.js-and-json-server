<template>
    <button @click='klik' class='btn' :style='{background:color}'>{{text}}</button>    
</template>

<script>
    export default {
        name: 'Button',
        props:{
            text: String,
            color: String
        },
        methods:{
            klik: function klik(){
                this.$emit('btn-click')
            }
        }
    }
</script>
