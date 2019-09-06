<template>
  <fragment>
    <nav class="nav grid">
      <div class="nav__inner">
        <saber-link to="/" style="font-weight: 600;">Stjepan Grgic</saber-link>
        <arrow/>
        <saber-link to="/work">Work</saber-link>
        <arrow/>
        <span>{{page.attributes.title}}</span>
      </div>
    </nav>
    <main>
      <article>
        <header class="main grid">
          <TitleSection
            :title="page.attributes.title"
            :subtitle="page.attributes.subtitle"
            :accentColor="page.attributes.accentColor" />
          <HeroSection 
            :heroImage="page.attributes.heroImage"
            :bgImage="page.attributes.bgImage"
            :bgColor="page.attributes.bgColor" />
        </header>
        <section class="content full-width grid">
          <ProjectInfo
            :period="page.attributes.period"
            :platform="page.attributes.platform"
            :rolerole="page.attributes.role" />
          <slot name="default" />
        </section>
      </article>
    </main>
    <Footer/>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import slink from '@/theme/components/slink.vue'
import simg from '@/theme/components/simg.vue'
import ProjectHeader from '@/theme/components/ProjectHeader.vue'
import TitleSection from '@/theme/components/TitleSection.vue'
import HeroSection from '@/theme/components/HeroSection.vue'
import ProjectCard from '@/theme/components/ProjectCard.vue'
import ProjectInfo from '@/theme/components/ProjectInfo.vue'
import Footer from '@/theme/components/Footer.vue'
import arrow from '@/theme/components/arrow.vue'

export default {
  components: {
    Fragment,
    slink,
    ProjectHeader,
    simg,
    TitleSection,
    HeroSection,
    ProjectCard,
    ProjectInfo,
    Footer,
    arrow
  },
  props: ['page']
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

  main
    margin-top: 16vh
  // .site
  //   margin-top: 16vh
  //   // @media screen and (min-height: 700px) and (max-height: 900px)
  //   //   margin-top 16vh
</style>

