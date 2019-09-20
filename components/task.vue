<template>
  <p class="task">
    <span v-if="done" class="divider">✓</span>
    <span v-if="!done" class="divider">-</span>
    <span>{{ title }}</span>
    <span v-if="link" class="divider"> - </span>
    <a v-if="link" :href="link">Read more</a>
  </p>
</template>

<script>
export default {
  props: ['url', 'title', 'done', 'link'],
}
</script>

<style lang="stylus" scoped>
.task
  margin-top 0
.divider
  display inline-block
  width 30px
  text-align center
</style>