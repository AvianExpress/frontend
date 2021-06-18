<template>
  <div class="home">

  <div class  = "Users">
  <h1 >Пользователи</h1>
  <ul class="list">
    <template  v-for="user in users">
    <li :key="user.id">Имя: {{user.name}} Адрес: {{user.address}}</li>
    </template>
  </ul>
  </div>
   <div>
    <b-table striped hover :items="users"></b-table>
  </div>
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
    }
  },
  components: {
  },
  data(){
    return {
      users: null,
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
</style>>
