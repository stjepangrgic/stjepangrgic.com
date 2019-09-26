<template>
  <div :class="['project', scopeClass()]">
    <Navbar :attributes="page.attributes" :class="scopeClass('__nav')"/>
    <main>
      <article>
        <PageHeader
          :title="page.attributes.title"
          :subtitle="page.attributes.subtitle"/>
        <ProjectHeroSection 
          :heroImage="page.attributes.heroImage"
          :bgImage="page.attributes.bgImage"/>
        <section class="content grid">
          <ProjectInfo
            :period="page.attributes.period"
            :platform="page.attributes.platform"
            :role="page.attributes.role" />
          <slot name="default" />
        </section>
      </article>
    </main>
    <Footer :class="scopeClass('__footer')"/>
  </div>
</template>

<script>
import slink from '@/components/slink.vue'
import simg from '@/components/simg.vue'
import PageHeader from '@/components/PageHeader.vue'
import ProjectHeroSection from '@/components/ProjectHeroSection.vue'
import ProjectInfo from '@/components/ProjectInfo.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import arrow from '@/components/arrow.vue'

export default {
  components: {
    slink,
    simg,
    PageHeader,
    ProjectHeroSection,
    ProjectInfo,
    Navbar,
    Footer,
    arrow
  },
  data: function () {
    return {
      socialImage: "",
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

<style lang="stylus">
.project
  article
    background-color var(--content-bgc)
  
// .page-header
//   --page-header-bgc var(--content-bgc)
//   --page-header-border-color var(--content-bgc)

</style>

