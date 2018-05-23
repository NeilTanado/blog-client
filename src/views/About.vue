<template>
  <div>
    <Header/>
    <div class="center-align">
      <h3> Welcome Neil Tanado Blog</h3>
      <h4> Created using Materialize Frameworks and Vue </h4>
      <h4> for Hacktiv8 Portofolio </h4>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>

<style lang="css">
</style>
