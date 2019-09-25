<template>
  <nav class="nav grid">
    <div class="nav__wrap">
      <saber-link to="/" class="nav-profile">
        <simg name="navbar-profile.jpg" />
      </saber-link>
      <arrow v-if="!isIndex"/>
      <span v-if="isDeep">{{this.attributes.navbarTitle}}</span>
      <fragment v-else>
        <saber-link :to="secondLinkUrl">{{secondLinkText}}</saber-link>
        <arrow/>
        <span>{{this.attributes.navbarTitle}}</span>
      </fragment>
    </div>
  </nav>
</template>

<script>
import arrow from '@/components/arrow.vue'
import simg from '@/components/simg.vue'
import { Fragment } from 'vue-fragment'

export default {
  components: {
    simg,
    arrow,
    Fragment
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
  margin 2rem auto 0
  width 100%
  &__wrap
    width 100%
    z-index 999
    display flex
    flex-direction row
    align-items center
    // max-width 944px
    // width 100%
    // margin 2rem auto 0
    // position absolute
    // top 0
    // left 50%
    // transform translateX(-50%)
    // padding-left 1rem
    // padding-right 1rem
    
    svg 
      margin 0 1rem 0 1rem
    a
      font-weight 400
      line-height 24px
    .nav-profile
      position relative
      height 40px
      width 40px
      border-radius 50%
      box-shadow: inset 0 0 0 1px #FFDB17;
      &:before
        display none !important     
      &:after
        content ""
        position absolute
        width 48px
        height 48px
        top -4px
        left -4px
        z-index 2
        border-radius 50%
        box-shadow: inset 0 0 0 1px #FFDB17;
        transition all 0.2s ease
      img
        border-radius 50%
      &:hover
        &:after
          box-shadow: inset 0 0 0 4px #FFDB17;
</style>
