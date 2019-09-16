<template>
  <saber-link :to="url" class="project-card" :style="styleObject">
    <simg :name="bgImage" class="bgImage" />
    <div class="info">
      <h3 class="card-title">{{title}}</h3>
      <p class="description">{{description}}</p>
      <slink>{{linkText}}</slink>
    </div>
    <div class="projectImage">
      <simg :name="projectImage"  />
    </div>
  </saber-link>
</template>

<script>
import slink from '@/theme/components/slink.vue'
import simg from '@/theme/components/simg.vue'

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
  },
  mounted() {

  }

}
</script>

<style lang="stylus" >
.project-card
  position relative
  display flex
  overflow hidden
  margin-bottom 1rem
  &:after
    content ""
    display block
    width 100%
    height 100%
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    box-shadow: inset 0 0 0 2px rgba(0,0,0,0.05);
  .bgImage
    border-radius 2px
  .info
    position absolute
    bottom 3.5rem
    left 5.5rem
    z-index 9
    // display inline-block
    // display flex
    // flex-direction column
    // align-items flex-start
    h3,
    p
      color: var(--textColor);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    p
      margin-bottom 2rem
    .link
      color var(--textColor)
      margin-top 2rem
      // display inline-block
  .card-title
    font-size 4rem
    line-height 1
    max-width 360px
  .projectImage
    position absolute
    right -20px
    top 0
    width 100%
    // height 100%
    // height 430px
    // width 741px
    // width 600px
    // height 481px
    transition transform 0.15s ease

  &:hover
    .projectImage
      transform translateX(-20px)
    .link:before
      height 100%
      width calc(100% + 0.5em)



  // .project-card
    // margin-bottom 2rem
    // display flex
    // position relative
    // overflow hidden
    // // box-shadow: inset 0 0 0 2px rgba(0,0,0,0.05);
    // border-radius 3px
    // z-index 1
    // @media screen and (max-width 900px) {
    //   height 450px
    // }
    // &:after
    //   content ""
    //   display block
    //   width 100%
    //   height 100%
    //   position absolute
    //   top 0
    //   right 0
    //   bottom 0
    //   left 0
    //   box-shadow: inset 0 0 0 2px rgba(0,0,0,0.05);
    
    // .image
    //   min-width 1064px
    //   min-height 584px
    //   height 584px
    //   position relative
    //   left 70%
    //   transform translateX(-70%)
    //   z-index -1
    //   @media screen and (max-width 900px) {
    //     top 100%
    //     transform translateX(-70%) translateY(-100%)
    //   }
    // p
    //   margin 0
    
    // .info
    //   position absolute
    //   bottom 0
    //   left 0
    //   padding-left 5.5rem
    //   padding-bottom 4rem
    //   @media screen and (max-width 900px) {
    //     padding-left 2rem
    //     padding-bottom 2rem
    //   }
      
    //   .h2
    //     margin 0
    //     margin-top auto
    //     color var(--textColor)
      
    //   .description
    //     color var(--textColor)
    //     margin-bottom 1.5rem
        
    // .tags
    //   position absolute
    //   top 3rem
    //   right 4.5rem
    //   display flex
    //   flex-direction column
    //   align-items flex-end
    //   @media screen and (max-width 900px) {
    //     top 2rem
    //     right 2rem
    //   }
    //   span
    //     color var(--textColor)
    //     font-size 1.25rem
    //     line-height 2

    // .link
    //   color var(--textColor)
      
    // @media screen and (max-width 900px) {
      
    // }
    
    // &:hover .link:before
    //   height 100%
    //   width calc(100% + 0.5em)

</style>
