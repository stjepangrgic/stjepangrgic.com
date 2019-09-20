<template>
  <nav class="nav grid">
    <!-- <menuicon class="menu-icon" /> -->
    <div :class="['nav__inner', 'grid-width', { hidden: isIndex } ]" >
      <saber-link to="/">Stjepan Grgic</saber-link>
      <arrow v-if="!isIndex"/>
      <span v-if="isDeep">{{this.attributes.navbarTitle}}</span>
      <span v-else>
        <saber-link :to="secondLinkUrl">{{secondLinkText}}</saber-link>
        <arrow/>
        <span>{{this.attributes.navbarTitle}}</span>
      </span>
    </div>
  </nav>
</template>

<script>
import menuicon from '@/components/menu-icon.vue'
import arrow from '@/components/arrow.vue'

export default {
  components: {
    arrow,
    menuicon
  },
  data() {
    return {
      secondLinkText: "",
      secondLinkUrl: ""
    }
  },
  props: [
    "attributes"
  ],
  computed: {
    isIndex: function () {
      if (this.attributes.slug.split('/')[0] == 'index' ) return true
      return false
    },
    isDeep() {
      if (this.attributes.slug.split('/').length < 2) return true
      return false
    }
  },
  mounted() {
    // console.log(this.attributes.updatedAt.getFullYear())
    this.secondLinkText = this.attributes.slug.split('/')[0].charAt(0).toUpperCase() + this.attributes.slug.split('/')[0].slice(1)
    this.secondLinkUrl = '/' + this.attributes.slug.split('/')[0]
    // console.log("isIndex", this.isIndex)
  }
}
</script>

<style lang="stylus" scoped>
.nav
  position absolute
  top 0
  left 0
  right 0
  width 100%
  margin 2rem auto 0
  z-index 999
  &__inner
    font-size: 1.5rem
    > a
      font-weight 600
    svg 
      position relative
      top 2px
      margin 0 0.5rem
    &.hidden
      display none
  .menu-icon
    grid-column 1 / span 1
    justify-self end
    align-self center
</style>
