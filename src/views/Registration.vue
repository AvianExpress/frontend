<template>
    <div class="registration">
    <div class="auth-wrapper">
      <div class = "auth-inner">
    <form @submit.prevent="handleSubmit"> 
    <h3>Sign Up</h3> 
    <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" v-model="login" placeholder="Email"/>
    </div>   
    <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" placeholder="Password"/>
    </div>

    <button class="btn btn-primary btn-block">Sign Up</button>
</form>
      </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'registration',
  data(){
      return{
          login: '',
          password: '',
          password_confirmed: '',
      }
  },
  methods: {
      async handleSubmit(){
          
          const data = {
              login: this.login,
              password: this.password, 
          }
          await axios.post('auth/register', data);
          this.$router.push('/login');
      }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
.registration{
  background: rgb(178, 133, 223);
  min-height: 90vh;
  display: flex;
  font-weight: 400; 
  font-family: 'Fira Sans', sans-serif;
}
h1, h2, h3, h4, h5, h6, label, span{
  font-weight: 500;
  font-family: 'Fira Sans', sans-serif;
}
.auth-wrapper, .registration, html, #app{
  width: 100%;
  height: 100%;
}
.custom-control-lael{
font-weight: 400;
}
.auth-wrapper h3{
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom:20px ;
}
.auth-wrapper .form-control:focus {
  border-color: #167bff;
  box-shadow: blue;
}
.auth-inner{
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}
.auth-wrapper{
  margin: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;

}
</style>
    <div class="form-group">
        <label>Confirm Password</label>
        <input type="password" class="form-control" v-model="password_confirmed" placeholder="Password"/>
    </div>