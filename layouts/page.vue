<template>
  <div :class="[scopeClass()]">
    <Navbar :attributes="page.attributes" :class="[scopeClass('__nav')]"/>
    <main>
      <PageHeader
        :title="page.attributes.title"
        :subtitle="page.attributes.subtitle"
        :smallImage="page.attributes.smallImage" />
      <section class="content grid">
        <slot name="default" />
      </section>
    </main>
    <Footer :class="[scopeClass('__footer')]"/>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    PageHeader,
    Footer,
    Navbar,
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

<style lang="stylus" scoped>
// .page-title
//   padding-bottom 5.5rem
//   border-bottom 2px solid #FFDB17  
//   background-size 100%
//   display block
//   position relative
  
// .content
  // margin-top 2rem
  // padding-bottom 4rem
  
</style>

