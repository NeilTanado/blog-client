<template>
  <div>
    <Header/>
    <MakeArticle/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import MakeArticle from '@/components/MakeArticle.vue'

export default {
  name: 'home',
  components: {
    Header,
    MakeArticle
  }
}
</script>

<style lang="css">
</style>
