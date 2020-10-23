<template>
<div>
  <div id="app">
    <Header />
    <router-view/>
  </div>
  <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
#app {
  text-align: center;
  min-height: calc(100vh - 70px);
}
</style>
