<template>
  <saber-link :to="url" class="project-card" :style="styleObject">
    <simg :name="bgImage" class="bgImage" />
    <div class="info">
      <h3 class="h1">{{title}}</h3>
      <p class="description">{{description}}</p>
      <slink>{{linkText}}</slink>
    </div>
    <div class="projectImage img-fix">
      <simg :name="projectImage"  />
    </div>
  </saber-link>
</template>

<script>
import slink from '@/components/slink.vue'
import simg from '@/components/simg.vue'

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    bgImage: {
      type: String,
      required: true
    },
    projectImage: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: false,
      default: "Read the case study"
    },
    underlinColor: {
      type: String,
      required: false,
      default: '#FFDB17'
    },
    textColor: {
      type: String,
      required: false,
      default: '#fff'
    }
  },
  components: {
    slink, simg
  },
  computed: {
    styleObject: function () {
      return {
        '--underlineColor': this.underlinColor,
        '--textColor': this.textColor
      }
    }
  }
}
</script>

<style lang="stylus" >
@import "../node_modules/rupture/rupture"
.project-card
  margin-bottom 2rem
  margin-left auto
  margin-right auto
  max-width 1104px
  width 100%
  display block
  overflow hidden
  &:before
    display none
  .bgImage
    display grid
    max-width 1104px
    width 100%
    height 576px
    object-fit: cover;
    border-radius 2px
    filter: blur(50px)
    transform scale(1.5)
    +below(900px)
      height 512px
  .info
    position absolute
    bottom 3.5rem
    left 6.5rem
    z-index 3
    h3
      max-width 324px
      line-height 64px
    p
      margin-bottom 2rem
    h3,p
      color: var(--textColor);
      white-space: normal;
    .link
      color var(--textColor)
      margin-top 2rem
    p, .link
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    +below(900px)
      bottom auto
      top 2rem
      left 4rem
    +below(500px)
      top 1rem
      left 3rem
  .projectImage
    position absolute
    right -20px
    bottom 0
    transition transform 0.15s ease
    img
      height 576px
      width auto
    +below(900px)
      right 0
      width 80%
      img
        height auto
        // width 80%
        float right
  &:hover
    .projectImage
      transform translateX(-20px)
    .link:before
      height 100%
      width calc(100% + 0.5em)
    +below(900px)
      .projectImage
        transform translateX(0)

//   position relative
//   display flex
//   overflow hidden
//   border-radius 2px
//   &:not(.last-chidl)
//     margin-bottom 1.5rem
//   &:after
//     content ""
//     display block
//     width 100%
//     height 100%
//     position absolute
//     top 0
//     right 0
//     bottom 0
//     left 0
//     box-shadow: inset 0 0 0 2px rgba(0,0,0,0.05);

//   .info
//     position absolute
//     bottom 3.5rem
//     left 5.5rem
//     z-index 9
    
//     h3,
//     p
//       color: var(--textColor);
//       -webkit-font-smoothing: antialiased;
//       -moz-osx-font-smoothing: grayscale;
//     p
//       margin-bottom 2rem
//     .link
//       color var(--textColor)
//       margin-top 2rem
//       // display inline-block
//   .card-title
//     font-size 4rem
//     line-height 1
//     max-width 370px
//   .projectImage
//     position absolute
//     right -20px
//     top 0
//     width 100%
//     transition transform 0.15s ease

//   &:hover
//     .projectImage
//       transform translateX(-20px)
//     .link:before
//       height 100%
//       width calc(100% + 0.5em)
</style>
