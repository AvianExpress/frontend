<template>
  <div class="home">

  <div class  = "Users">
  <h1 >Пользователи</h1>
  <table></table>
  <ul class="list">
    <template  v-for="user in users">
    <li :key="user.id">Имя: {{user.name}} Адрес: {{user.address}}</li>
    </template>
  </ul>
  </div>
   <div>
    <b-container fluid>
    <b-table 
    :items="users"
    :fields="fields"
    :select-mode="seletMode"
     responsive="sm"
     ref="selectableTable"
     selectable
     @row-selected="onRowSelected"
    >
 </b-table>
    </b-container>
<div>
  <b-input-group prepend="Changefolder" class="mb-2">
    <b-form-input aria-label="Firstname" :value="selected[0].name" placeholder="Firstname"></b-form-input>
    <b-form-input aria-label="Lastname" :value="selected[0].surname" placeholder="Lastname"></b-form-input>
    <b-form-input aria-label="Phone" :value="selected[0].phone" placeholder="Phone"></b-form-input>
    <!--<b-form-input aria-label="Address" :value="selected[0].address" enable=false placeholder="Address"></b-form-input>-->
    <b-button size="" text="Button" variant="success" v-on:click="change">Change</b-button>
  </b-input-group>
</div>
  </div>
  <h3>{{ selected}}</h3>

  <button class="button" v-on:click="logout">LogOut</button>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'home',
  methods: {
    logout(){
      localStorage.removeItem('access_token');
      //localStorage.setItem('access_token', " ");
      this.$router.go()
    },
    onRowSelected(items) {
        this.selected = items;
      },
      async change(){
        await axios.put('resp/'+this.selected.id, this.selected);
      }
      
  },
  components: {
  },
  data(){
    return {
      users: null,
      selected:[{
        id: "",
        name:"",
        surname:"",
        address: "",
        phone:"",
      }],
      seletMode: 'single',
      name: "1",
      fields:[
          { key: 'name', label: 'First name', sortable: true, sortDirection: 'desc' },
          { key: 'surname', label: 'Last name', sortable: true, class: 'text-center' },
          { key: 'phone', label: 'Phone', sortable: true, class: 'text-center' },
          //{ key: 'address', label: 'Person address', sortable: true, class: 'text-center' },
      ],
    }
  },
  async created(){
    await axios.get('resp').then(resp => {
      this.users = resp.data
      });
  }
}
</script>

<style>
  .list{
    text-align: left;
    font-weight: bold;
  }
  .home{
    color: #a7c92f;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button{
    margin: 20px;
  }
</style>>
