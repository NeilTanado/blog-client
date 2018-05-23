<template>
  <div>
    <center>
      <h3> Place your article here </h3>
    </center>
    <div class="row margintopsbots">
      <div class="input-field col s6">
        <input type="text" class="validate" v-model="title">
        <label class="active" for="title">Title</label>
      </div>
    </div>
    <div class="row margintopsbots">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <textarea v-model="textarea" class="materialize-textarea"></textarea>
            <label class="active" for="textarea">Textarea</label>
          </div>
        </div>
      </form>
      <div class="row margintopsbots">
        <div class="input-field col s6">
          <a class="waves-effect waves-light btn btn-cancel" @click="cancel()">cancel</a>
          <a class="waves-effect waves-light btn" @click="editArticle()">edit article</a>
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
  name:'EditArticle',
  data(){
    return{
      title: '',
      textarea: '',
      id: ''
    }
  },
  methods:{
    editArticle: function(){
      let articleID = this.id
      console.log(articleID);
      let theArticle = {
        title: this.title,
        text: this.textarea
      }
      axios.put('http://localhost:3000/articles/updatearticle/'+articleID,theArticle)
      .then((value) => {
        swal({
          title: "Grats!",
          text: "You edit an article!",
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
  },
  created(){
    this.title = this.$route.query.title,
    this.textarea = this.$route.query.text,
    this.id = this.$route.query.id
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
