<template>
  <div :class="[scopeClass()]">
    <slot name="default" />
    <Footer :class="[scopeClass('__footer')]"/>
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Fragment,
    Footer
  },
  props: ['page'],
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
          content: `https://stjepangrgic.com${require('@/assets/images/' + this.page.attributes.heroImage)}`
        },
        {
          property: 'og:description',
          content: (this.page.SeoDescription) ? `${this.page.SeoDescription}` : `${this.page.navbarTitle} - Designed by Stjepan Grgic`
        },
      ],
    }
  },
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