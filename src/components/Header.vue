<template>
    <header>
            <h1>{{title}}</h1>
            <!-- membuat kondisi dengan tenary -->
            <Button 
            v-show ='homePage'
            @btn-click='$emit("toggle-add-task")' 
            :text='showAddTasks ? "Close": "Add Task" ' 
            :color='showAddTasks ? "red": "green"'/>
    </header>
</template>

<script>

import Button from './Button.vue'

export default {
    name: 'Header',
    props:{
        title:String,
        showAddTasks: Boolean
    },
    components :{
        Button
    },
    computed: {
        // apabila route atau endpont berada pada home
        // maka button add task akan muncul
        // tapi kalo kita ke route selain home tombol button tidak akan muncul
        homePage(){
            if(this.$route.path === '/'){
                return true
            }
        }
    }

}
</script>

<style scoped>
    header{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>