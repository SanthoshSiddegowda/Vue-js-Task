<template>
  <div class="home">
  <h2>Task List<span><router-link to="/tasks/add"><button>+ Add Task</button></router-link></span></h2>
    <div>
      <table>
        <tr>
          <th>Task ID</th>
          <th>Task Name</th>
          <th>Assigned To</th>
          <th>Status</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
        <!-- <tr>
          <td>TA001</td>
          <td>UI Development</td>
          <td>Leyonal</td>
          <td>Closed</td>
          <td>This is actually the "official" solution to this kind of problem. Returning false MIGHT also work, but the type button will never fail.</td>
          <td><v-icon class="icon-space" color="green">mdi-pencil</v-icon><v-icon class="icon-space" color="red">mdi-delete</v-icon></td>
        </tr>
        <tr>
          <td>TA002</td>
          <td>API Integration</td>
          <td>Ganesh</td>
          <td>In Progress</td>
          <td>This is actually the "official" solution to this kind of problem. Returning false MIGHT also work, but the type button will never fail.</td>
          <td><v-icon class="icon-space" color="green">mdi-pencil</v-icon><v-icon class="icon-space" color="red">mdi-delete</v-icon></td>
        </tr>
        <tr>
          <td>TA003</td>
          <td>Production Work</td>
          <td>Sathish</td>
          <td>ToDo</td>
          <td>This is actually the "official" solution to this kind of problem. Returning false MIGHT also work, but the type button will never fail.</td>
          <td><v-icon class="icon-space" color="green">mdi-pencil</v-icon><v-icon class="icon-space" color="red">mdi-delete</v-icon></td>
        </tr>
        <tr>
          <td>TA004</td>
          <td>Back-end Work</td>
          <td>Vimal</td>
          <td>Open</td>
          <td>This is actually the "official" solution to this kind of problem. Returning false MIGHT also work, but the type button will never fail.</td>
          <td><v-icon class="icon-space" color="green">mdi-pencil</v-icon><v-icon class="icon-space" color="red">mdi-delete</v-icon></td>
        </tr> -->

        <tr v-for="(item,index) in $store.state.list" :key="index">
          <td>TA{{index+1}}</td>
          <td>{{item.assigned_to}}</td>
          <td>{{item.name}}</td>
          <td>{{item.status}}</td>
          <td>{{item.desc}}</td>
          <td><v-icon class="icon-space" color="green">mdi-pencil</v-icon><v-icon class="icon-space" color="red">mdi-delete</v-icon></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  table{
    width: 100%;
    border-collapse: separate !important;
    border-spacing: 0 7px !important;
  }

  table tr{
    box-shadow: rgb(0 0 0 / 5%) 0 4px 20px 0;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 0.5rem;
    height: 50px !important;
  }

  table td{
    color: #555;
    padding: 0px 10px;
  }

  button{
    float: right;
    margin-right: 20px;
    height: 35px;
    width: 115px;
    background: #6796ec;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
  }

  icon-space{
      margin-right: 10px
  }

</style>