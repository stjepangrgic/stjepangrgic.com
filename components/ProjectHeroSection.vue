<template>
	<figure class="hero-section">
    <div class="hero-image img-fix project-width">
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
// .hero-section
//   position relative
//   z-index 99
//   margin 0
//   background-color var(--content-bgc)

// .hero-image
//   position relative
//   border-radius 3px
//   img
//     z-index -1
//     border-radius 2px
//     box-shadow: 0 25px 19px -17px rgba(44,29,22,0.15), 0 1px 10px 0 rgba(0,0,0,0.05);
//     margin 0 auto
//   figure
//     margin 0

</style>