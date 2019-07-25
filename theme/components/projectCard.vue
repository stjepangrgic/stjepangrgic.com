<template>
  <saber-link
    :to="url"
    class="project-card"
    :style="styling"
  >
    <div class="project-card--inside">
      <!-- <h3>{{ title }}</h3> -->
      <!-- <p class="tags">{{ tags }}</p> -->
      <slink url="/my-story" :linkColor="linkColor" :isLink="false">See more</slink>
    </div>
  </saber-link>
</template>

<script>
import slink from '@/theme/components/slink.vue'  
export default {
  props: ['url', 'linkColor', 'tags', 'title', 'image', 'textColor'],
  components: {
    slink
  },
  computed: {
    styling() {
      return {
        '--link-color': this.textColor,
        color: this.textColor,
        backgroundImage: 'url(' + require('@/assets/images/' + this.image) + ')'
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
  .project-card {
    background-size cover
    background-position 50% 50%
    display block
    position relative
    display flex
    border-radius 3px
    overflow hidden
    height 632px
    margin-bottom 2rem
    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
    }
    &--inside {
      position absolute
      bottom 2.5rem
      left 4.5rem
      display grid
      text-align left
    }
    h3 {
      font-size 3.5rem
      grid-row 2
      margin 0
      line-height 1.142857143
      color inherit
    }
    p {
      font-size 14px
      text-transform uppercase
      font-weight 800
      color inherit
      opacity 0.7
    }  
  }
</style>
