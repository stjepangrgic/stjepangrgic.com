<template>
  <nav class="nav grid">
    <!-- <menuicon class="menu-icon" /> -->
    <div :class="['nav__inner', 'grid-width', classObject ]" >
      <saber-link to="/">Stjepan Grgic</saber-link>
      <arrow v-if="this.attributes.slug.split('/')[0] !== 'index' "/>
      <!-- This is a mass but works for now -->
      <span v-if="this.attributes.slug.split('/').length < 2">{{this.attributes.navbarTitle}}</span>
      <span v-else>
        <saber-link :to="'/' + this.attributes.slug.split('/')[0]">
          {{this.attributes.slug.split('/')[0].charAt(0).toUpperCase() + this.attributes.slug.split('/')[0].slice(1)}}
        </saber-link>
        <arrow/>
        <span>{{this.attributes.navbarTitle}}</span>
      </span>
    </div>
  </nav>
</template>

<script>
import menuicon from '@/theme/components/menu-icon.vue'
import arrow from '@/theme/components/arrow.vue'

export default {
  components: {
    arrow,
    menuicon
  },
  props: [
    "attributes",
    "isHidden"
  ],
  computed: {
    classObject: function () {
      return {
        hidden: this.attributes.slug.split('/').slice(-1)[0] == 'index'
      }
    }
  },
  // computed: {
  //   capitalizedParentPage: function () {
  //     return this.parentPage.charAt(1).toUpperCase() + this.parentPage.slice(2)
  //   }
  // }
  mounted() {
    // console.log(this.attributes.updatedAt.getFullYear())
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
