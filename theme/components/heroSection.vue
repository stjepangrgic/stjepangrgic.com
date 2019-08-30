<template>
	<figure class="full-width grid hero-section" :style="styleObject">
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
    },
    bgColor: {
      type: String,
      required: false
    }
  },
  computed: {
    styleObject: function () {
      return {
        background: this.bgColor,
        // backgroundImage: 'url(' + require('@/assets/images/' + this.bgImage) + ')'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.hero-section
  position relative
  z-index 99
  margin 0

.hero-image
  box-shadow 0 25px 19px -17px rgba(44,29,22,0.15)
  position relative
  top 3rem
  border-radius 3px
  overflow hidden
  // display flex
  display grid
  img
    z-index -1
    width:100%;
    
  figure
    margin 0

</style>