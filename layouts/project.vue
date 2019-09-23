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
        <section class="content nw">
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
// import { Fragment } from 'vue-fragment'
import slink from '@/components/slink.vue'
import simg from '@/components/simg.vue'
// import ProjectHeader from '@/components/ProjectHeader.vue'
import PageHeader from '@/components/PageHeader.vue'
import ProjectHeroSection from '@/components/ProjectHeroSection.vue'
// import ProjectCard from '@/components/ProjectCard.vue'
import ProjectInfo from '@/components/ProjectInfo.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import arrow from '@/components/arrow.vue'

export default {
  components: {
    // Fragment,
    slink,
    // ProjectHeader,
    simg,
    PageHeader,
    ProjectHeroSection,
    // ProjectCard,
    ProjectInfo,
    Navbar,
    Footer,
    arrow
  },
  props: ['page'],
  computed: {
    // navClass(suffix) {
    //   return this.page.attributes.slug.split('/').slice(-1)[0] + this.suffix
    // }
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
  mounted() {
    // console.log(this.page.attributes)
    // console.log(this.page.attributes.slug.split("/").slice(-1)[0])
  }
}
</script>

<style lang="stylus" scoped>
// nav
//   font-size: 1.5rem
//   margin-top 2rem
//   position absolute
//   top 0
//   left 0
//   right 0
//   width 100%
//   svg 
//     position relative
//     top 2px
//     margin 0 0.5rem
  
.page-header
  --page-header-bgc var(--content-bgc)
  --page-header-border-color var(--content-bgc)

</style>

