<template>
  <fragment>
    <Navbar :attributes="page.attributes"/>
    <main :class="this.page.attributes.slug.split('/').slice(-1)[0]">
      <article ref="article">
        <PageHeader
          :title="page.attributes.title"
          :subtitle="page.attributes.subtitle"
          :smallImage="page.attributes.smallImage" />
        <section class="content grid">
          <slot name="default" />
        </section>
      </article>
    </main>
    <Footer/>
  </fragment>
</template>

<script>
// Vue.use(require('vue-moment'));

import { Fragment } from 'vue-fragment'
// import slink from '@/theme/components/slink.vue'
import PageHeader from '@/theme/components/PageHeader.vue'
import Footer from '@/theme/components/Footer.vue'
import Navbar from '@/theme/components/Navbar.vue'

export default {
  components: {
    Fragment,
    PageHeader,
    Footer,
    Navbar,
  },
  props: ['page'],
}
</script>

<style lang="stylus" scoped>
.page-title
  padding-bottom 5.5rem
  border-bottom 2px solid #FFDB17  
  background-size 100%
  display block
  position relative
  
.content
  margin-top 2rem
  padding-bottom 4rem
</style>

