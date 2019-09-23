<template>
  <header class="page-header">
    <h1 class="page-title title-width">
      <span v-html="title" />
      <br v-if="subtitle">
      <span v-if="subtitle" class="subtitle">{{subtitle}}</span>
    </h1>
    <!-- <simg v-if="smallImage" :name="smallImage" class="grid-width small-image" /> -->
    <div class="info nw" v-if="updatedAt">
      <span class="updatedAt">Updated on <time :datetime="datetime">{{updatedAt}}</time></span>
      <span>{{readingTime}} min read</span>
    </div>
  </header>
</template>

<script>
import simg from '@/components/simg.vue'
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
    },
    datetime: {
      type: String
    },
    updatedAt: {
      type: String
    },
    readingTime: {
      type: String
    }
  },
  mounted() {
    console.log(this.test)
  }
}
</script>

<style lang="stylus" scoped>
.page-header
  position relative
  background-color var(--page-header-bgc)

.small-image
  position absolute
  
.page-title
  font-size 3.5rem
  font-weight 800
  line-height 64px
  padding-bottom 5.5rem
  padding-top 29vh
  position relative
  z-index 2
  // letter-spacing -0.021964286em
  // max-width 700px

.info
  display flex
  flex-direction row
  justify-content space-between
  font-size .875rem
  opacity 0.3
  line-height 32px
  padding-bottom 0.5rem
  position absolute
  bottom 0
  width 100%
  left 50%
  transform translateX(-50%)
  // margin 0 auto
  
.subtitle
  font-weight 400
  font-size 3.5rem
  color var(--subtitle-color)

</style>