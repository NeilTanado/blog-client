<template>
  <div>
    <Header/>
    <EditArticle/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import EditArticle from '@/components/EditArticle.vue'

export default {
  name: 'home',
  components: {
    Header,
    EditArticle
  },
  data(){
    return{
      
    }
  }
}
</script>

<style lang="css">
</style>
