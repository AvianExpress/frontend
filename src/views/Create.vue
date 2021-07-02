<template>
  <div class="home">
  <div class  = "Users">
  <h1 >Пользователи</h1>
  <table></table>
  <ul class="list">
     <template  v-for="user in users">


    <li :key="user.phone">Имя: {{user.name}} Телефон: {{user.phone}}</li>
    </template>
    <template>
    </template>
  </ul>
  
  </div>
   <div>

<div>
  
  <b-input-group prepend="Changefolder" class="mb-3">
    <b-form-input aria-label="Firstname" v-model="name" placeholder="Имя" id="Firstname"></b-form-input>
    <b-form-input aria-label="Lastname" v-model="surname" placeholder="Мыло"></b-form-input>
    <b-form-input aria-label="Phone" v-model="phone" placeholder="Phone"></b-form-input>
    <!--  <b-form-input aria-label="Address" v-model="selected[0].address" enable=false placeholder="Address"></b-form-input>-->
  </b-input-group>
  <b-button size="" text="Button" variant="success" v-on:click="change">Add</b-button>
  <b-button size="" text="Button" variant="attention" v-on:click="created">Exit</b-button>
</div>
  </div>
 <!-- <h3>{{ selected}}</h3>
  <h3>'{{selected[0].name}}'</h3>-->
  <button class="button" v-on:click="logout">LogOut</button>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'home',
  methods: {
       onFiltered(filteredItems) {     
        this.totalRows = filteredItems.length;
        console.log(this.totalRows);
        this.currentPage = 1;
          for(let i=0; i<this.totalRows;i++){
            let num=filteredItems[i];
            console.log(num.phone)
            for( let j=i; j<this.totalRows; j++){ 
            if(num.phone!=filteredItems[j].phone){ 
             console.log('success!');
            }
            else console.log('fail!');
            }
          }
      },
    logout(){
      localStorage.removeItem('access_token');
      //localStorage.setItem('access_token', " ");
      this.$router.go()
    },
    onRowSelected(items) {
        this.selected = items;
        console.log(items)
      },
      async change(){
        this.selected[0].id =
        await axios.put('resp/'+this.id, this.selected);
        this.$router.go()
      },
      async add(){

        this.$router.push('/')
      }
      
  },
  components: {
  },
  data(){
    return {
      search: '',
      users: null,
      Firstname: '',
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
          //{ key: 'address', label: 'Person address', sortable: true, class: 'text-center', readonly: true },
      ],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
    }
  },
  computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
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
