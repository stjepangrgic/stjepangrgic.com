<template>
  <div :class="scopeClass()">
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
article
  background-color var(--content-bgc)
  
// .page-header
//   --page-header-bgc var(--content-bgc)
//   --page-header-border-color var(--content-bgc)

</style>

