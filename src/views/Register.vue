<template>
  <div>
    <Header/>
    <RegisterForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import RegisterForm from '@/components/RegisterForm.vue'

export default {
  name: 'home',
  components: {
    Header,
    RegisterForm
  }
}
</script>

<style lang="css">
</style>
