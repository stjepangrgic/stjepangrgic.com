<template>
  <nav class="nav">

    <div class="action-menu grid">
      <button class="button" @click="openMenu">
        <simg name="menu.svg" class="icon"/>
      </button>
      <saber-link to="/" class="logo">Stjepan Grgic</saber-link>
    </div>

    <div class="main-menu grid">
      <ul>
        <li><saber-link to="/">Home</saber-link></li>
        <li><saber-link to="/my-story">My story</saber-link></li>
        <li><saber-link to="/Now">Now</saber-link></li>
        <li><saber-link to="/work">Work</saber-link></li>
        <li><saber-link to="/">Personal projects</saber-link></li>
        <li><saber-link to="/">Blog</saber-link></li>
        <!-- <li><saber-link to="/" class="special instagram">Instagram</saber-link></li>
        <li><saber-link to="/" class="special dribbble">Dribble</saber-link></li>
        <li><saber-link to="/" class="special behance">Behance</saber-link></li> -->
      </ul>
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
      document.querySelector('.main').classList.toggle('blur')
      return {}
    },
    handleSCroll (event) {
      let nav = document.querySelector(".nav");
      if (window.scrollY > 80) {
        nav.classList.add('scrolled'); 
      } else if (window.scrollY < 80) {
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
    .action-menu
      z-index 2
      position fixed
      width 100%
      top 32px
      left 0
      .button
        background-color transparent
        border none
        padding 0
        margin 0
        border-radius 0
        cursor pointer
        outline none
        grid-column 2
        .icon
          width: 32px;
          height: 22px;
          border-radius 0

      .logo
        grid-column 3/ -3
        justify-self start
        text-decoration none
        font-weight bold
        transition all 0.2s ease
    .main-menu
      z-index 1
      width 100%
      position fixed
      height 100vh
      opacity 0
      width 0
      transition:
        opacity 0.3s cubic-bezier(0,.5,.5,1.02) 0s,
        transform 0.5s cubic-bezier(.52,.02,.5,1.02) 0s,
        background-color 0.5s cubic-bezier(0,.5,.5,1.02) 0.1s,
        width 0s 0.6s;
      align-items center
      transform translateX(-100px)
      & > ul
        grid-column 3/-3
        list-style none
        padding 0
        margin 0
      li a
        font-size 6vh
        text-decoration none 
        font-weight bold
        &.special
          color transparent
          background-clip: text;
        &.instagram
          background-color: #d6249f;
          background-image: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)
        &.dribbble
          background-color #ea4c89
        &.behance
          background-color #1769ff

    &.scrolled
      .action-menu .logo
        opacity 0

    &.open-menu
      .main-menu
        transition:
          width 0s 0s,
          opacity 0.5s 0.1s,
          transform .5s cubic-bezier(0,.5,.5,1.02) 0s;
        background-color rgba(#fff, 0.8)
        transform translateX(0px)
        opacity 1
        width 100%

      &.scrolled
        .action-menu .logo
          opacity 1
</style>
