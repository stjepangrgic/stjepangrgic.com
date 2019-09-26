<template>
	<figure class="hero-image grid">
    <simg :name="heroImage" class="project-width" />
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

<style lang="stylus">
.hero-image
  margin 0
  background-color var(--content-bgc)
  img
    box-shadow: 0 25px 19px -17px rgba(44,29,22,0.15), 0 1px 10px 0 rgba(0,0,0,0.05);

</style>