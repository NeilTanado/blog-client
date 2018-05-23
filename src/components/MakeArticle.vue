<template>
  <div>
    <center>
      <h3> Place your article here </h3>
    </center>
    <div class="row margintopsbots">
      <div class="input-field col s6">
        <input type="text" class="validate" v-model="title">
        <label for="title">Title</label>
      </div>
    </div>
    <div class="row margintopsbots">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <textarea v-model="textarticle" class="materialize-textarea"></textarea>
            <label for="textarticle">Textarea</label>
          </div>
        </div>
      </form>
      <div class="row margintopsbots">
        <div class="input-field col s6">
          <a class="waves-effect waves-light btn btn-cancel" @click="cancel()">cancel</a>
          <a class="waves-effect waves-light btn" @click="createArticle">submit article</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert';
import Vuex from "vuex";

export default {
  name:'MakeArticle',
  data(){
    return{
      title:'',
      textarticle:''
    }
  },
  methods:{
    createArticle: function(){
      let token = localStorage.getItem('token')
      let theArticle = {
        title: this.title,
        text: this.textarticle
      }
      axios.post('http://localhost:3000/articles/createarticle',theArticle,{
        headers:{
          token
        }
      })
      .then((value) => {
        swal({
          title: "Grats!",
          text: "You create an article!",
          icon: "success",
        });
        this.$router.push('/')
      })
      .catch((err) => {
        console.log(err);
      })
    },
    cancel(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .margintopsbots{
    margin: 20px 20px 15px 20px;
  }
  .btn-cancel{
    background-color:red;
  }
  .btn-cancel:hover {
    background-color: #ef9a9a;
  }
</style>
