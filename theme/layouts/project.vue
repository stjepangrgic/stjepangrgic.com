<template>
  <fragment>
    <Navbar :attributes="page.attributes" :class="scopeClass('__nav')"/>
    <main :class="scopeClass()">
      <article>
        <PageHeader
          :title="page.attributes.title"
          :subtitle="page.attributes.subtitle"/>
        <ProjectHeroSection 
          :heroImage="page.attributes.heroImage"
          :bgImage="page.attributes.bgImage"/>
        <section class="content full-width grid">
          <ProjectInfo
            :period="page.attributes.period"
            :platform="page.attributes.platform"
            :role="page.attributes.role" />
          <slot name="default" />
        </section>
      </article>
    </main>
    <Footer :class="scopeClass('__footer')"/>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import slink from '@/theme/components/slink.vue'
import simg from '@/theme/components/simg.vue'
// import ProjectHeader from '@/theme/components/ProjectHeader.vue'
import PageHeader from '@/theme/components/PageHeader.vue'
import ProjectHeroSection from '@/theme/components/ProjectHeroSection.vue'
import ProjectCard from '@/theme/components/ProjectCard.vue'
import ProjectInfo from '@/theme/components/ProjectInfo.vue'
import Navbar from '@/theme/components/Navbar.vue'
import Footer from '@/theme/components/Footer.vue'
import arrow from '@/theme/components/arrow.vue'

export default {
  components: {
    Fragment,
    slink,
    // ProjectHeader,
    simg,
    PageHeader,
    ProjectHeroSection,
    ProjectCard,
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
    console.log(this.page.attributes)
    // console.log(this.page.attributes.slug.split("/").slice(-1)[0])
  }
}
</script>

<style lang="stylus" scoped>
nav
  font-size: 1.5rem
  margin-top 2rem
  position absolute
  top 0
  left 0
  right 0
  width 100%
  svg 
    position relative
    top 2px
    margin 0 0.5rem
  
.page-header
  --page-header-bgc #fff
  --page-header-border-color #fff

</style>

