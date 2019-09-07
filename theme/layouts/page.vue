<template>
  <div class="site">
    <!-- <Nav/> -->
    <main class="main grid">
      <!-- <h1>{{page.attributes.test}}</h1> -->
      <slot name="default" />
    </main>
    <Footer/>
  </div>
</template>

<script>
// import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    // Nav,
    Footer
  },
  props: ['page'],
  // data: function () {
  //   return {}
  // },
  // created: function () {
  //   this.test = console.log(this.page.attributes.test)
  // }
  
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

