<template>
  <header class="page-header grid">
    <h1 class="page-title grid-width">
      <span v-html="title" />
      <br v-if="subtitle">
      <span v-if="subtitle" class="subtitle">{{subtitle}}</span>
    </h1>
    <simg v-if="smallImage" :name="smallImage" class="grid-width small-image" />
  </header>
</template>

<script>
import simg from '@/theme/components/simg.vue'
export default {
  components: {
    simg
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    smallImage: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-header
  // background-color #FAF8F7
  // border-bottom 2px solid #E6DFDC
  position relative
  background-color var(--page-header-bgc)
  border-bottom 2px solid var(--page-header-border-color)
  // overflow hidden
  
// .page-header.white
//   background-color #fff
//   border-color #fff
  


.small-image
  position absolute
  
.page-title
  font-size 4rem
  font-weight 800
  line-height 1
  margin-bottom 5.5rem
  margin-top 29vh
  position relative
  z-index 2
  // max-width 700px
  
.subtitle
  font-weight 400
  font-size 3.5rem
  color var(--subtitle-color)

</style>