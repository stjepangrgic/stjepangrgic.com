<template>
  <!-- <img :src="imgSrc(name)" :alt="alt"> -->
  <saber-image
    :src="imgSrc(name)"
    :alt="alt"
    :lazy="{
      placeholder: true,
      lazyLoad: true,
      blendIn: true
    }"
  />
</template>

<script>
export default {
  props: ['name'],
  computed: {
    alt() {
      return this.name.split('-').join(' ').split('.')[0]
    }
  },

  methods: {
    imgSrc(name) {
      return require('@/assets/images/' + name)
    }
  }
}
</script>

<style scoped>
</style>
