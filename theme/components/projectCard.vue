<template>
  <saber-link :to="url" class="project-card">
    <div class="info">
      <h3 class="h2">{{title}}</h3>
      <p class="description">{{description}}</p>
      <p class="period">{{period}}</p>
      <slink :isLink="false" class="test">{{linkText}}</slink>
    </div>
    <simg :name="image" class="image" />
    <!-- <slink :isLink="false" :linkColor="linkColor">{{linkText}}</slink> -->
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
    image: {
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
    period: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: false,
      default: "See more"
    }
  },
  components: {
    slink, simg
  },
}
</script>

<style lang="stylus" >

  .project-card
    display grid
    grid-row-gap 0
    grid-template-columns 416fr 648fr
    text-decoration none
    color #000
    &:hover
      background-color #afa
      .link:before
        width 100%
    
    @media screen and (max-width: 600px)
      grid-template-columns 1fr
      grid-template-rows 1fr 200px
      // direction: rtl;

    
    .info
      background-color #afa
      display flex
      // align-self: flex-start
      align-items: flex-start
      flex-direction column
      // margin-top auto
      padding-left 4rem
      padding-bottom 3.5rem
      background-color #FAFAFA
      
      border 2px solid #F1F1F2
      z-index 3
      @media screen and (max-width: 600px)
        order: 1
      
    .image
      background-color #aaf
      @media screen and (max-width: 600px)
        order: 0
    p
      margin 0
      
    .h2
      margin 0
      margin-top auto
    
    .description
      font-size 1.25rem
      line-height 2
      
    .period
      font-size 1rem
      line-height 1.5
      color #A9A7B6
      margin-bottom 2.5rem

      

      // min-width 360px
  // .project-card
  //   margin-top 2rem
  //   margin-bottom 2rem
  //   background-size cover
  //   background-position 50% 50%
  //   display block
  //   position relative
  //   display flex
  //   border-radius 3px
  //   overflow hidden
  //   transition background-size 0.2s ease
  //   &:not(:last-child)
  //     margin-bottom 2rem
  //   .link 
  //     position absolute
  //     left 72px
  //     bottom 40px
  //   &:hover
  //     .link
  //       text-decoration underline

</style>
