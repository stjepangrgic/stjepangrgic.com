<template>
  <header class="page-header grid" :class="{ white: isWhite }">
    <h1 class="page-title grid-width">
      <span v-html="title" />
      <br v-if="subtitle">
      <span v-if="subtitle" class="subtitle" :style="{ color: accentColor }">{{subtitle}}</span>
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
    accentColor: {
      type: String
    },
    isWhite: {
      type: Boolean,
      default: false
    },
    smallImage: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-header
  background-color #FAF8F7
  border-bottom 2px solid #E6DFDC
  position relative
  // overflow hidden
  
.page-header.white
  background-color #fff
  border-color #fff

.small-image
  position absolute
  // z-index -1
  // left 0
  // bottom 0
  
.page-title
  font-size 4rem
  font-weight 800
  line-height 1.1
  margin-bottom 5.5rem
  margin-top 23vh
  position relative
  z-index 2
  
.subtitle
  font-weight 400
//   .page-title
//     margin 0
//     margin-bottom 5.5rem
//     border-bottom none
//     .subtitle
//       font-weight: 400;
</style>