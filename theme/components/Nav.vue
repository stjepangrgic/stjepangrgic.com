<template>
  <nav class="nav grid">
    <div class="path grid-width">
      <saber-link to="/" class="logo ">Stjepan Grgic</saber-link>
    </div>
  </nav>
</template>

<script>
import simg from '@/theme/components/simg.vue'
import slink from '@/theme/components/slink.vue'
export default {
  data () {
    return {
      scrolled: false
    };
  },
  components: {
    simg, slink
  },
  methods: {
    openMenu () {
      console.log("klik na button")
      document.querySelector('.nav').classList.toggle('open-menu')
      document.querySelector('.footer').classList.toggle('blur')
      document.querySelector('.main').classList.toggle('blur')
      return {}
    },
    handleSCroll (event) {
      let nav = document.querySelector(".nav");
      if (window.scrollY > 40) {
        nav.classList.add('scrolled'); 
      } else if (window.scrollY < 40) {
        nav.classList.remove('scrolled');
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleSCroll);

  },
  destroyed () {
    window.removeEventListener('scroll', this.handleSCroll);
  }
}
</script>

<style lang="stylus" scoped>
  .nav
    z-index 999
  .logo
    font-size: 3rem
    font-weight 600
    letter-spacing -0.01249em
</style>
