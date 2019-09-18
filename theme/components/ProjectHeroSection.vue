<template>
	<figure class="full-width grid hero-section">
    <simg v-if="bgImage" :name="bgImage" />
    <div class="grid-width hero-image">
      <simg :name="heroImage" />
    </div>
	</figure>
</template>

<script>
import simg from '@/theme/components/simg.vue'
export default {
  components: {
    simg
  },
  props: {
  	heroImage: {
      type: String,
      required: true
    },
    bgImage: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.hero-section
  position relative
  z-index 99
  margin 0
  background-color var(--hero-section-bg)
  // height 640px

.hero-image
  position relative
  top 3.5rem
  border-radius 3px
  // overflow hidden
  display grid
  // margin-top 6rem
  padding 2.5rem 0  
  img
    z-index -1
    border-radius 2px
    // height 560px
    box-shadow 0 25px 19px -17px rgba(44,29,22,0.15)
    margin 0 auto
    // width:100%;
    
  figure
    margin 0

</style>