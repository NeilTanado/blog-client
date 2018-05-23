<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <router-link :to="{path:'/'}">GO-BLOGS saatnya kamu posting untuk membagi info!</router-link>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><router-link :to="{path:'/'}">Home</router-link></li>
          <li><router-link :to="{path:'/about'}">About</router-link></li>
          <li>
          <div v-if= "!cekLogin">
            <router-link :to="{path :'/login'}"><a class="waves-effect waves-light btn modal-trigger">Login</a></router-link>
          </div>
          <div v-else>
            <a class="waves-effect waves-light btn modal-trigger" @click="logout()">Logout</a>
          </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  data(){
    return{
      cekLogin : false
    }
  },
  computed:{
    changeLogin(){
      return this.cekLogin = this.$store.state.statusLog
    }
  },
  created(){
    this.changeLogin()
  },
  methods:{
    logout:function(){
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      this.$store.commit('changeStatusLogin',false)
      return this.cekLogin = this.$store.state.statusLog
    }
  }
}
</script>

<style lang="css">
</style>
