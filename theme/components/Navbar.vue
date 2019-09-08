<template>
  <nav class="nav grid">
    <div class="nav__inner grid-width">
      <saber-link to="/">Stjepan Grgic</saber-link>
      <arrow/>
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
import arrow from '@/theme/components/arrow.vue'

export default {
  components: {
    arrow
  },
  props: [
    "attributes",
  ],
  // computed: {
  //   capitalizedParentPage: function () {
  //     return this.parentPage.charAt(1).toUpperCase() + this.parentPage.slice(2)
  //   }
  // }
  mounted() {
    // console.log(this.attributes.updatedAt.getFullYear())
    // console.log(this.attributes.slug.split('/').length)
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
  &__inner
    font-size: 1.5rem
    > a
      font-weight 600
    svg 
      position relative
      top 2px
      margin 0 0.5rem
</style>
