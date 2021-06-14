<template>
  <div class="home">
  <h2>Task Form {{task_name}}</h2>
    <div class="form">
        <form @submit="addTask">
          <label>Task Name</label>
            <input type="text" v-model="task_name">
          <label>Assigned To</label>
            <select v-model="assigned_to">
                <option value="0">Leyonal</option>
                <option value="1">Rajesh</option>
                <option value="2">Karthick</option>
                <option value="3">Felix</option>
            </select>
          <label>Status</label>
            <select v-model="status">
                <option value="0">ToDo</option>
                <option value="1">Open</option>
                <option value="2">In Progress</option>
                <option value="3">Closed</option>
            </select>
          <label>Description</label>
            <textarea type="text" style="height: 70px" v-model="desc"></textarea>

            <button type="Submit">Submit</button>
            <p>{{task_name}}</p>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            task_name: "",
            assigned_to: "",
            status: "",
            desc: "",
        }   
    },

    methods: {
        addTask(){

        }
    }
  
}
</script>

<style>

  html, body{
    margin: 0;
  }

  .home{
    background: #eee;
    height: 100%;
    position: absolute;
    width: 100%;
    padding: 10px 15px;
  }

  .form{
    width: 500px;
    border: 1px solid transparent;
    background: #fff;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    text-align: left;
    padding: 15px 25px;
    border-radius: 4px;
    box-shadow: 1px 3px 10px #d4cdcd;
  }

  .form label{
    display: block;
    font-size: 18px;
    font-weight: 600;
    color: #646363;
  }

  h2{
      text-align: center;
  }

  .form input, select, textarea{
    width: 93%;
    margin: 5px 8px;
    height: 35px;
    border: none;
    border-bottom: 1px solid #817e7e;
    font-size: 15px;
    margin-bottom: 20px;
  }

  .form input:focus-visible{
    outline: unset !important
  }

  .form button{
    float: right;
    margin-right: 20px;
    margin-top: 10px;
    height: 35px;
    width: 85px;
    background: #6796ec;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
  }

</style>
