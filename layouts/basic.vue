<template>
  <div :class="['basic', scopeClass()]">
    <slot name="default" />
    <Footer :class="[scopeClass('__footer')]"/>
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Footer from '@/components/Footer.vue'

// const socialImage = require('@/assets/images/' + this.page.attributes.heroImage)
// console.log(socialImage)

export default {
  components: {
    Fragment,
    Footer
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