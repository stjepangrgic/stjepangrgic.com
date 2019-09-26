<template>
  <div :class="['post', scopeClass()]">
    <Navbar :attributes="page.attributes" :class="[scopeClass('__nav')]"/>
    <main>
      <article ref="article">
        <PageHeader
          :title="page.attributes.title"
          :subtitle="page.attributes.subtitle"
          :smallImage="page.attributes.smallImage"
          :updatedAt="updatedAt"
          :datetime="datetime"
          :readingTime="readingTime"/>
        <section class="content grid">
          <slot name="default" />
        </section>
      </article>
    </main>
    <Footer :class="scopeClass('__footer')" />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageInfo from '@/components/PageInfo.vue'
import simg from '@/components/simg.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    PageHeader,
    PageInfo,
    simg,
    Footer,
    Navbar,
  },
  props: ['page'],
  data: function () {
    return {
      readingTime: 0,
      datetime: "",
      updatedAt: "",
      text: "",
      socialImage: ""
    }
  },
  mounted() {
    this.updatedAt = this.page.attributes.updatedAt.toString().split(" ").splice(1, 3).join(" ")
    this.readingTime = Math.ceil(this.$refs.article.innerText.split(/\s/g).length/150)
    let date = this.page.attributes.updatedAt
    this.datetime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    if (this.page.attributes.heroImage) {
      this.socialImage = require('@/assets/images/' + this.page.attributes.heroImage)
    } else {
      this.socialImage = require('@/assets/images/stjepangrgic-portrait.jpg')
    }

    // console.log(this.page.attributes.updatedAt)
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
        }
      ],
    }
  },
}

</script>
<style lang="stylus">
.post
  .content
    padding-bottom 4rem

</style>

