<template>

    <div 
    @dblclick='$emit("toggle-reminder", task.id)' 
    :class="[task.reminder ? 'reminder': '','task bisa ditambahin']">

        <h3>
            {{task.text}}
        <i @click='onDelete(task.id)' class='fas fa-times'></i>
        </h3>
        <p>{{task.day}}</p>

    </div>
</template>

<script>
    export default {
        name: 'Task',
        props: {
            task: Object
        },
        methods: {
            onDelete: function namabeda(id){
                // console.log(id)
        
                this.$emit('delete-task', id)
                // emit like custom event, passing data back to parent
                // parameter pertama boleh dikasih apa aja namanya
                // parameter kedua adalah passing id
                // setelah dari sini langsung ke file Tasks.vue 
                // dengan membuat nama yg sama pada parameter pertama kedalam component yg 
                // ada di file Tasks.vue
            }
        }
    }
</script>

<style scope>
        .fas {
        color: red;
        }
        .task {
        background: #f4f4f4;
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer;
        }
       .reminder {
        border-left: 5px solid green;
        }
        .task h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        }
</style>