<template>
  <fragment>

    <saber-link 
      class="link" 
      v-if="isLink" 
      :to="url"
      v-bind="$attrs">
        <slot />
    </saber-link>

    <span 
      class="link"
      v-if="!isLink"
      v-bind="$attrs">
        <slot />
    </span>

  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
// console.log(this.vm.$attrs)
export default {
  components: { 
    Fragment
  },
  props: {
    url: {
      type: String
    },
    linkColor: {
      type: String,
      default: '#0000EE'
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
}

</script>

<style lang="stylus">
  .link
    line-height 1.1
    z-index 1
</style>
