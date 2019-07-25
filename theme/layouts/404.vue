<template>
  <div class="warp">
    <Navbar/>
    <main>
      <h1>404</h1>
      <!-- <slot name="default" /> -->
    </main>
  </div>
</template>

<script>
import Navbar from './../components/Nav.vue'

export default {
  components: {
    Navbar
	},
  props: ['page']
  
}
</script>
