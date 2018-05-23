<template>
  <div class="valign-wrapper center-aligned">
    <div class="row">
      <div class="row">
        <div class="input-field col s12">
          <input v-model="name" type="text" class="validate">
          <label for="name">Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <a class="waves-effect waves-light btn" @click='register()'><i class="material-icons left">account_circle</i>Register</a><br><br>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vuex from "vuex";

export default {
  name:'registerForm',
  data(){
    return{
      name:'',
      password:'',
      email:''
    }
  },
  methods:{
    register:function(){
      axios.post('http://localhost:3000/users/createuser',{
        name:this.name,
        password:this.password,
        email:this.email
      })
      .then((value) => {
        this.$router.push('/login')
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="css">
</style>
