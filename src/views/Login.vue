<template>
  <div>
    <Header/>
    <Signin/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Signin from '@/components/Signin.vue'

export default {
  name: 'login',
  components: {
    Header,
    Signin
  }
}
</script>

<style lang="css">
</style>
