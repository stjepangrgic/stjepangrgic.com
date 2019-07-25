<template>
  <div class="site">
    <Nav/>
    <main class="main grid">
      <slot name="default" />
    </main>
    <Footer/>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  components: {
    Nav
  },
  props: ['page']
  
}
</script>

<style lang="stylus" scoped>
  .blur {
    filter: blur(20px)
  }

  .site {
    padding-bottom 100px
    // display grid
    // grid-column-gap 0
    // grid-row-gap 0
    // grid-template-columns 1fr
    // > * {
    //   grid-column 2
    // }
    // @media screen and (max-width: 1050px) {
    //   > * {
    //     grid-column 1/-1
    //   }
    // }
  }
  .main {

    transition: filter .5s cubic-bezier(.52,.02,.5,1.02)
    // --siteWidth: 1920px
    // max-width: calc(var(--siteWidth) + 1rem);
    // max-width var(--siteWidth)
    padding-top 20vh
    width: 100%;
    margin: 0 auto;
    // padding-left: 0.5rem;
    // padding-right: 0.5rem;


    // @media screen and (max-width: 990px) {
    //   grid-column-gap 0.896861%
    //   grid-template-columns: 1fr minmax(0px, 0px) minmax(0px, 00px) minmax(0px, 0px) minmax(200px, 920px) minmax(0px, 0px) minmax(0, 0px) minmax(0px, 0px) 1fr;
    // }

    
    // > figure {
    //   grid-column 3 / -3
    //   // max-width 1920px
    //   // justify-self: center;
    // }
  }


  .page-enter-active,
  .page-leave-active
    transition: opacity  .25s ease-in-out 0s, filter .3s ease-in-out 0.1s;

  .page-enter,
  .page-leave-to
    opacity: 0;
    filter: blur(100px);



</style>

