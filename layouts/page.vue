<template>
  <div :class="['page', scopeClass()]">
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
  data: function () {
    return {
      socialImage: ""
    }
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
  mounted() {
    if (this.page.attributes.heroImage) {
      this.socialImage = require('@/assets/images/' + this.page.attributes.heroImage)
    } else {
      this.socialImage = require('@/assets/images/stjepangrgic-portrait.jpg')
    }
  },
  head() {
    return {
      title: `${this.page.navbarTitle} - Stjepan Grgic`,
      meta: [
        {
          name: 'description',
          content: (this.page.SeoDescription) ? `${this.page.SeoDescription}` : `${this.page.navbarTitle} - by Stjepan Grgic`
        },
        {
          'http-equiv': 'Content-Type',
          content: `text/html`,
          charset: `utf-8`
        },
        {
          property: 'og:title',
          content: `${this.page.navbarTitle} - Stjepan Grgic`
        },
        {
          property: 'og:type',
          content: `article`
        },
        {
          property: 'og:url',
          content: `https://stjepangrgic.com${this.page.permalink}`
        },
        {
          property: 'og:image',
          content: `https://stjepangrgic.com${this.socialImage}`
        },
        {
          property: 'og:description',
          content: (this.page.SeoDescription) ? `${this.page.SeoDescription}` : `${this.page.navbarTitle} - Designed by Stjepan Grgic`
        },
      ],
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

