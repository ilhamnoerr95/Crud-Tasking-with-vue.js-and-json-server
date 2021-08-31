<template>
    <!-- v-bind bisa digunakan untuk melempar props -->
    <div>
        <AddTask v-show="showAddTask"  @add-task='addTask'/>
    </div>
    <!-- singkata v-bind:task yaitu :task, hanya dihilangkan v-bind -->
    <Tasks 
    @toggles-reminder='toggleReminder' 
    @delete-tasks='spesifikMetode'
    v-bind:tasks="tasks"/>
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask.vue'

    export default {
        name: 'Home',
        props:{
            showAddTask:Boolean
            },
        components:{
            Tasks,
            AddTask
        },
        data(){
           return {
              tasks:[] 
           } 
        },
    methods:{
    // ketika nama params dicoba dengan nama bebas, output yg dihasilkan tetap
    // menghasilkan nilai id yg dipassing dari child tasks dan task
    // jadi tanpa menaruh nilai pada spesfiikasimetode, fungsi tersebut 
    // akan berjalan dengan membawa nilai dari child
    // ! delete function
    spesifikMetode: async function namanyabolehbeda(idBoongan){
        // console.log('task id', idBoongan)
        // ketika sudah menggunakan emit, penggunaan this.tasks 
        // yg terlihat seperti push digantikan sebagai reset
        if(confirm('beneran mau dihapus?')){
          const res = await fetch(`api/tasks/${idBoongan}`,
          {
            method: 'DELETE'
          })
        
       
        res.status === 200 ? (this.tasks = this.tasks.filter((task)=> task.id !== idBoongan)) : alert('Error Deleting task')
        }
    },
    // cara function bisa diterapkan beberapa cara bisa pakai yg dibawah seperti toggleReminder
    // atau dengan menggunakan cara yg spesifikMetode
    async toggleReminder(namaParamBebasId){
      // membuat kondisi reminder menjadi true or false dengan menggunakan map method
      //  yg dimana membuat statement apabila task.id memiliki value yg sama dengan namaParamsBebasId
      // maka di copy menggunakan spreadOperator lalu udpate propertinama reminder: !task
      // elsenya jika tidak ada maka tidak diapa2in alias kembali kepada data awal
          // console.log(namaParamBebasId)
          // ngambil data dari api function yg sudah disediakan 
          // dan diupdate kedalam api tesrbseut
      const taskToToggle = await this.fetchTask(namaParamBebasId)
      const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      const res = await fetch(`api/tasks/${namaParamBebasId}`,{
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateTask)
        })

      const data = await res.json()


      // * catatan penting mengenai penggunaan arrow function yg di dalamnya
      // * terdapat statement menggunakan tenary, after dari arrow function tidak perlu lagi
      // * menambahkan curly bracket
      this.tasks = this.tasks.map((task)=> task.id === namaParamBebasId ? {...task, reminder: data.reminder} : task
      )
    },

    // ! ADDTASK
    // * parameter addTask sudah disi oleh data yg diambil dari newTask
    async addTask(task){
      const res = await fetch('api/tasks',{
        method: 'POST',
        headers:{
          'Content-type': 'application/json',
        },
         body: JSON.stringify(task)
      })
      const data = await res.json()

      // updata data, data di copy lalu ditambah
      this.tasks = [...this.tasks, data]
      // console.log(this.tasks)
    },
    // fetch api
    async fetchTasks(){
        const response = await fetch ('/api/tasks',{
          method: 'GET'
        }) 
        // console.log(response)
        const data = await response.json()
        // console.log(data)
        return data

    },
    // update task per id
     async fetchTask(id){
        const response = await fetch (`/api/tasks/${id}`,{
          method: 'GET'
        }) 
        // console.log(response)
        const data = await response.json()
        // console.log(data)
        return data

    }

  },

  // sebuah fungsi 
  async created(){
    this.tasks = await this.fetchTasks()
    console.log(this.tasks)
        // emits:['addTask']
  }
    }

</script>