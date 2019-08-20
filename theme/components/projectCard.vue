<template>
  <saber-link :to="url" class="project-card">
    <simg :name="image" />
    <slink :isLink="false" :linkColor="linkColor">See more</slink>
  </saber-link>
</template>

<script>
import slink from '@/theme/components/slink.vue'
import simg from '@/theme/components/simg.vue'

export default {
  props: ['url', 'linkColor', 'tags', 'title', 'image', 'textColor'],
  components: {
    slink, simg
  },
}
</script>

<style lang="stylus">
  .project-card
    background-size cover
    background-position 50% 50%
    display block
    position relative
    display flex
    border-radius 3px
    overflow hidden
    transition background-size 0.2s ease
    &:not(:last-child)
      margin-bottom 2rem
    .link 
      position absolute
      left 72px
      bottom 40px
    &:hover
      .link
        text-decoration underline

</style>
