<template>
  <nav :class="['nav g', { hidden: isIndex } ]">
    <div class="nav__wrap g5-5">
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
    menuicon,
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
// .nav
//   position absolute
//   top 0
//   left 0
//   right 0
//   width 100%
//   margin 2rem auto 0
//   z-index 999
//   &__wrap
//     display flex
//     flex-direction row
//     align-items center
//     a
//       font-weight 400
//       line-height 24px
//     svg 
//       // position relative
//       // top 2px
//       margin 0 0.5rem 0 0.6rem
//     svg:first-of-type
//       margin-left 0.8rem
//   &.hidden
//     display none
//   .nav-profile
//     // background-color #afa
//     height 40px
//     width 40px
//     display inline-block
//     // display flex
//     &:before
//       display none !important
//     &:after
//       content ""
//       position absolute
//       // background-color #afa
//       width 48px
//       height 48px
//       top -4px
//       left -4px
//       border-radius 50%
//       // border 2px solid #FFDB17
//       box-shadow: inset 0 0 0 1px #FFDB17;
//       transition all 0.2s ease
//     img
//       width 40px
//       height 40px
//       border-radius 50%
//   .nav-profile:hover
//     &:after
//       box-shadow: inset 0 0 0 4px #FFDB17;
</style>
