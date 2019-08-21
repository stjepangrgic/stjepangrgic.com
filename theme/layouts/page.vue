<template>
  <div class="site">
    <Nav/>
    <main class="main grid">
      <slot name="default" />
    </main>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Nav, Footer
  },
  props: ['page']
  
}
</script>

<style lang="stylus" scoped>
  .site
    padding-bottom 15vh
</style>

