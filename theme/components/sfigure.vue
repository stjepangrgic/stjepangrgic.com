<template>
  <figure :class="sclass">
    <slot/>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: ['sclass','caption'],
}
</script>

<style scoped>
</style>
