<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Главная</router-link> | <router-link to="/login">Login</router-link> 
      | <router-link to="/registration">Registration</router-link>
     
      
    </div>
    <router-view/>
  </div>
</template>
<script>
export default{
    methods:{
      
    }
}

</script>

<style>
body{
  margin: 0%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#Auth{
  text-align: right;
}
#nav {
  padding: 30px;
  text-align: left;
  font-size: 4ch;
}

#nav a {
  font-weight: bold;
 
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
