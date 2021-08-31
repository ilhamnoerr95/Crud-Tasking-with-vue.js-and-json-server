<template>
    <div v-for="data in tasks" :key="data.id" >
            <Task 
            @toggle-reminder='$emit("toggles-reminder", data.id)'
            @delete-task="$emit('delete-tasks',data.id)" 
            :task="data"/>
    </div>
</template>

<script>
    import Task from './Task.vue'

    export default {
        name: 'Tasks',
        components:{
            Task
        },
        props:{
            tasks: Array
        },
        emits:['delete-tasks','toggles-reminder','add-task']
    }
    // console.log('data props yg dipassing dari app =>', Task)
</script>