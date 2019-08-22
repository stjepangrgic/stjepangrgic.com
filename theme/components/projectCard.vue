<template>
  <saber-link :to="url" class="project-card" :style="styleObject"> <!-- :style="{ backgroundImage: 'url(' + require('@/assets/images/' + image) + ')' }" -->
    <simg :name="image" class="image" />
    <div class="info">
      <h3 class="h2">{{title}}</h3>
      <p class="description">{{description}}</p>
      <slink :isLink="false">{{linkText}}</slink>
    </div>
    <div class="tags">
      <span v-for="tag in tags">{{ tag }}</span>
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
    linkText: {
      type: String,
      required: false,
      default: "See more"
    },
    tags: {
      type: Array,
      required: true
    },
    underlinColor: {
      type: String,
      required: true
    }
  },
  components: {
    slink, simg
  },
  computed: {
    styleObject: function () {
      return {'--underlineColor': this.underlinColor}
    }
  }
}
</script>

<style lang="stylus" >

  .project-card
    margin-bottom 1.5rem
    display flex
    position relative
    overflow hidden
    @media screen and (max-width 900px) {
      height 450px
    }
    
    .image
      min-width 1064px
      min-height 584px
      position relative
      left 70%
      transform translateX(-70%)
      @media screen and (max-width 900px) {
        top 100%
        transform translateX(-70%) translateY(-100%)
      }
    p
      margin 0
    
    .info
      position absolute
      bottom 0
      left 0
      padding-left 5.5rem
      padding-bottom 4rem
      @media screen and (max-width 900px) {
        padding-left 2rem
        padding-bottom 2rem
      }
      
      .h2
        margin 0
        margin-top auto
        color #fff
      
      .description
        color #fff
        margin-bottom 1.5rem
        
    .tags
      position absolute
      top 3rem
      right 4.5rem
      display flex
      flex-direction column
      align-items flex-end
      @media screen and (max-width 900px) {
        top 2rem
        right 2rem
      }
      span
        color #fff
        font-size 1.25rem
        line-height 2

    .link
      color #fff
      
    @media screen and (max-width 900px) {
      
    }

</style>
