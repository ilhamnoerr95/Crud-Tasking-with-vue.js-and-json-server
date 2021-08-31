<template>
    <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>
    <!-- {{reminder}} -->
    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
    export default{
        name: 'AddTask',
        data(){
            return {
                text: '',
                day:'',
                reminder: false
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault()

                // apabila textnya tidak diisi maka akan ada alert
                if(!this.text){
                    alert('Tolong isi dulu tasknya')
                    return 
                }

                // file yg disubmit akan tersimpan kedalam variabel yg menampung data objek
                const newTask = {
                  // kREAN PAKE JSON.SERVER MAKA ID AKAN DITENTUKAN OLEH MEREKA
                    // id: Math.floor(Math.random()* 100000),
                    text: this.text,
                    day: this.day,
                    reminder: this.reminder
                }
                console.log(newTask)
                // setelah submit akan di emit dilempat datanya ke file induk yaitu app.vue
                this.$emit('add-task', newTask)
                // setelah menyimpan form akan kembali kedalam form kosong
                this.text=''
                this.day= ''
                this.reminder = false
            }
        },

    }
</script>



<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>