<template>
  <fragment>
    <Navbar :attributes="page.attributes"/>
    <main>
      <article ref="article" class="grid">
        <header class="grid-width">
          <!-- v-html so I could use <br> inside title -->
          <!-- :style="{ backgroundImage: require('@/assets/images/' + this.page.attributes.smallImage) }" / -->
          <h1 class="page-title">
            <span v-html="page.attributes.title" />
            <simg v-if="page.attributes.smallImage" :name="page.attributes.smallImage" class="small-image" />
          </h1>
          <div class="info">
            <span class="updatedAt">Updated on <time :datetime="datetime">{{updatedAt}}</time></span>
            <span>{{readingTime}} min read</span>
          </div>
        </header>
        <section class="content">
          <slot name="default" />
        </section>
      </article>
<!--       <article>
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
        <section class="content full-width grid" :style="{ backgroundColor: page.attributes.contentBgColor }">
          <ProjectInfo
            :period="page.attributes.period"
            :platform="page.attributes.platform"
            :role="page.attributes.role" />
          <slot name="default" />
        </section>
      </article> -->
    </main>
    <Footer/>
  </fragment>
</template>

<script>
// Vue.use(require('vue-moment'));

import { Fragment } from 'vue-fragment'
// import slink from '@/theme/components/slink.vue'
import simg from '@/theme/components/simg.vue'
// import ProjectHeader from '@/theme/components/ProjectHeader.vue'
// import TitleSection from '@/theme/components/TitleSection.vue'
// import HeroSection from '@/theme/components/HeroSection.vue'
// import ProjectCard from '@/theme/components/ProjectCard.vue'
// import ProjectInfo from '@/theme/components/ProjectInfo.vue'
import Footer from '@/theme/components/Footer.vue'
import Navbar from '@/theme/components/Navbar.vue'
// import arrow from '@/theme/components/arrow.vue'

export default {
  components: {
    Fragment,
    // slink,
    // ProjectHeader,
    simg,
    // TitleSection,
    // HeroSection,
    // ProjectCard,
    // ProjectInfo,
    Footer,
    Navbar,
    // arrow
  },
  props: ['page'],
  data: function () {
    return {
      readingTime: 0,
      datetime: "",
      updatedAt: ""
    }
  },
  mounted() {
    this.updatedAt = this.page.attributes.updatedAt.toString().split(" ").splice(1, 3).join(" ")
    this.readingTime = Math.ceil(this.$refs.article.innerText.split(/\s/g).length/100) // 100 gives more realistc number of minutes to me then 200
    let date = this.page.attributes.updatedAt
    this.datetime = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    // console.log(require('@/assets/images/' + this.page.attributes.smallImage))
  },
}

// console.log(this.page.attributes)
</script>
<style lang="stylus">
.page-title
  padding-bottom 5.5rem
  border-bottom 2px solid #FFDB17  
  background-size 100%
  display block
  position relative
  
.small-image
  position absolute
  z-index -1

.info
  font-size 1rem
  padding-top 0.5rem
  line-height 40px
  .updatedAt
    margin-right 2rem

main
  margin-top 29vh
  // margin-top 14rem
  
.content
  margin-top 3.5rem
</style>

