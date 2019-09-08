<template>
  <h1 class="page-title grid-width">
    {{title}} <br v-if="subtitle">
    <span v-if="subtitle" class="subtitle" :style="{ color: accentColor }">{{subtitle}}</span>
  </h1>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'accentColor']
}
</script>

<style lang="stylus" scoped>
  .page-title
    margin 0
    margin-bottom 5.5rem
    .subtitle
      font-weight: 400;
</style>