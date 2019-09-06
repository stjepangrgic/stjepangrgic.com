<template>
  <div class="site">
    <nav>
      <saber-link to="/">Stjepan Grgic</saber-link>
      <saber-link to="/">Stjepan Grgic</saber-link>
    </nav>
    <main class="main grid">
      <slot name="default" />
    </main>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'

export default {
  components: {
    Footer
  },
  props: ['page']
  
}
</script>

<style lang="stylus" scoped>

  .site
    margin-top: 16vh
    // @media screen and (min-height: 700px) and (max-height: 900px)
    //   margin-top 16vh
    
  .main
    // margin-top 4rem
</style>

