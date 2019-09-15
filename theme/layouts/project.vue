<template>
  <fragment>
    <Navbar :attributes="page.attributes" :class="scopeClass('__nav')"/>
    <main :class="this.page.attributes.slug.split('/').slice(-1)[0]">
      <article>
        <header>
          <PageHeader
            :title="page.attributes.title"
            :subtitle="page.attributes.subtitle"
            :accentColor="page.attributes.accentColor"/>
<!--           <HeroSection 
            :heroImage="page.attributes.heroImage"
            :bgImage="page.attributes.bgImage"
            :bgColor="page.attributes.bgColor" /> -->
        </header>
        <section class="content full-width grid" :style="{ backgroundColor: page.attributes.contentBgColor }">
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
import HeroSection from '@/theme/components/HeroSection.vue'
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
    HeroSection,
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
      return this.page.attributes.slug.split('/').slice(-1)[0] + suffix
    }
  },
  mounted() {
    // console.log(this.page.attributes)
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
.content
  padding-top 6rem
  
// main
//   margin-top 29vh
// .site
//   margin-top: 16vh
//   // @media screen and (min-height: 700px) and (max-height: 900px)
//   //   margin-top 16vh
</style>

