<template>
  <fragment>
  <saber-link
    v-if="isLink"
    :to="url"
    class="link"
    :style="cssProps"
  >
    <slot/>
    <span class="arrow">
      <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.083 11.34L6.747 9.97l3.33-3.279H.498V4.767h9.58l-3.33-3.288L8.083.11l5.58 5.616z" fill-rule="nonzero"/>
      </svg>
    </span>
  </saber-link>
  <span
    v-if="!isLink"
    class="link"
    :style="cssProps"
  >
    <slot/>
    <span class="arrow">
      <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.083 11.34L6.747 9.97l3.33-3.279H.498V4.767h9.58l-3.33-3.288L8.083.11l5.58 5.616z" fill-rule="nonzero"/>
      </svg>
    </span>
  </span>
</fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  components: { Fragment },
  props: {
    url: {
      type: String,
      required: true
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
  computed: {
    cssProps() {
      return {
        '--link-color': this.linkColor,
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .link {
    color: var(--link-color);
    text-decoration none
    .arrow svg {
      margin-left 4px
      width 14px
      height 12px
      fill var(--link-color)
      opacity 0.5
      // transition all 0.15s ease-out
      transition transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    }

    &:hover {
      // darken(var(--link-color), 30%) // this is not working in stylus at this point https://stackoverflow.com/questions/51394677/how-to-add-a-css-var-into-a-stylus-built-in-function
      .arrow svg {
        transform translateX(8px)
        opacity 1
      }
    }
  }
</style>
