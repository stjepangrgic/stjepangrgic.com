<template>
  <fragment>
    <slot name="default" />
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  components: {
    Fragment
  },
  props: ['page']
}
</script>