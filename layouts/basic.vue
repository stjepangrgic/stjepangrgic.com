<template>
  <div :class="[scopeClass()]">
    <slot name="default" />
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  components: {
    Fragment
  },
  props: ['page'],
  methods: {
    scopeClass(suffix) {
      if (suffix) {
        return this.page.attributes.slug.split('/').slice(-1)[0] + suffix
      } else {
        return this.page.attributes.slug.split('/').slice(-1)[0]
      }
    }
  },
}
</script>