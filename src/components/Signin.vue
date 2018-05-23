<template>
  <div class="valign-wrapper center-align">
    <div class="row">
      <div class="row">
        <div class="input-field col s12">
          <input type="email" class="validate" v-model="email">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="password" class="validate" v-model="password" >
          <label for="password">Password</label>
        </div>
      </div>
      <button class="waves-effect waves-light btn" @click="login()"><i class="material-icons left">account_circle</i>Login</button><br><br>
      <router-link :to="{path:'/register'}">need register?</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import vuex from 'vuex'

export default {
  name: 'signin',
  data(){
    return{
      password:'',
      email:''
    }
  },
  methods:{
    login:function(){
      axios.post('http://localhost:3000/users/signin',{
        email : this.email,
        password : this.password
      })
      .then((value) => {
        console.log(value.data.userId);
        this.$store.commit('changeStatusLogin',true)
        localStorage.setItem('token',value.data.token)
        localStorage.setItem('userId',value.data.userId)
        this.$router.push('/')
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style>
</style>
