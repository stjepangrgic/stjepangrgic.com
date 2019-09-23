<template>
  <div :class="[scopeClass()]">
    <slot name="default" />
    <Footer :class="[scopeClass('__footer')]"/>
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Fragment,
    Footer
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