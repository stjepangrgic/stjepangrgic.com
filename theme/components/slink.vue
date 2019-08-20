<template>
  <fragment>

    <saber-link 
      class="link" 
      v-if="isLink" 
      :to="url"
      :style="{ color: linkColor}"
      v-bind="$attrs">
        <slot />
    </saber-link>

    <span 
      class="link"
      v-if="!isLink"
      :style="{ color: linkColor}"
      v-bind="$attrs">
        <slot />
    </span>

  </fragment>
</template>

<script>
import arrow from '@/theme/components/icon-arrow.vue'
import { Fragment } from 'vue-fragment'
// console.log(this.vm.$attrs)
export default {
  components: { Fragment, arrow },
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
  // .link {
  //   text-decoration 
  // }
</style>
