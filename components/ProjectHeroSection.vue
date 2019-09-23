<template>
	<figure class="hero-section">
    <div class="hero-image ww">
      <simg :name="heroImage" />
    </div>
	</figure>
</template>

<script>
import simg from '@/components/simg.vue'
export default {
  components: {
    simg
  },
  props: {
  	heroImage: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.hero-section
  position relative
  z-index 99
  margin 0
  // margin-bottom -2rem
  // background-color var(--hero-section-bg)
  background-color var(--content-bgc)
  // height 640px

.hero-image
  position relative
  // top 3.5rem
  border-radius 3px
  // overflow hidden
  display grid
  // margin-top 6rem
  // padding 2.5rem 0  
  img
    z-index -1
    border-radius 2px
    // height 560px
    // box-shadow 0 25px 19px -17px rgba(44,29,22,0.15)
    box-shadow: 0 25px 19px -17px rgba(44,29,22,0.15), 0 1px 10px 0 rgba(0,0,0,0.05);
    margin 0 auto
    // width:100%;
    
  figure
    margin 0
    // margin-bottom -2rem

</style>