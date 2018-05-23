<template>
  <div>
    <div class="valign-wrapper flex-container give-margin">
      <a class="waves-effect waves-light btn" @click="createArt()">Create New Article</a>
    </div>
    <div v-for="article in articles">
      <div class="col s12 m6 flex-container">
        <div class="card blue-grey darken-1" style="width:100%!important">
          <div class="card-content white-text">
            <span class="card-title"><b>{{ article.title }}</b><button class="floating" @click="deleteArticle(article._id,article.author._id)"><i class="tiny material-icons">close</i></button></span>
            <h8><i> author: {{ article.author.name }} </i><button class="floating" @click="editData(article._id,article.author._id)"><router-link :to="{ path: '/articleEdit', query:{id:article._id,title:article.title,text:article.text}}"><i class="tiny material-icons">border_color</i></router-link></button></h8>
            <p>{{ article.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vuex from "vuex";

export default {
  name:'context',
  data(){
    return{
      articles:[],
    }
  },
  methods:{
    createArt:function(){
      if(!localStorage.getItem('token')){
        alert('please login for create an article')
      }else{
        this.$router.push('/article')
      }
    },
    callData:function(){
      let self = this
      axios.get('http://localhost:3000/articles/dataarticle')
      .then((value) => {
        value.data.data.forEach(articlesData=>{
          self.articles.unshift(articlesData)
        })
      })
      .catch((err) => {
        console.log(err);
      })
    },
    editData:function(articleId,dataId){
      if(localStorage.getItem('userId')){
        var userId = localStorage.getItem('userId')
        if(userId === dataId){

        }else{
          alert('kamu tidak bisa mengedit article milik orang lain')
          this.$router.push('/')
        }
      }
      else{
        alert('please login first to edit')
        this.$router.push('/')
      }
    },
    deleteArticle:function(articleId,dataId){
      if(localStorage.getItem('userId')){
        var userId = localStorage.getItem('userId')
        console.log(articleId);
        if(userId === dataId){
          axios.delete('http://localhost:3000/articles/deletearticle/'+articleId)
          .then((value) => {
            for(var i = 0 ; i < this.articles.length ; i++){
              if(this.articles[i]._id === articleId){
                this.articles.splice(i,1)
              }
            }
          })
          .catch((err) => {
            console.log(err);
          })
        }else{
          alert('kamu tidak bisa menghapus article milik orang lain')
          this.$router.push('/')
        }
      }
    }
  },
  mounted(){
    this.callData()
  }
}
</script>

<style scoped>
  .flex-container{
    justify-content : center;
    display: flex;
  }
  .give-margin {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  .card-content{
    border:1px solid black;
  }
  .floating{
    float:right;
  }
</style>
