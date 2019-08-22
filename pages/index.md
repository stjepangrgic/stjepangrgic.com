---
layout: page
---

<titleSection class="grid-width" first="Hi to you! 👋" second="My name is Stjepan."/>

<div class="text full-width grid">
  <div class="text-inner grid-width">
    <p><b>I am a curious human</b> being exploring myself and the world through art and travel. By challenging myself to draw, <saber-link to="/my-story">take photos</saber-link>, <saber-link to="/my-story">read</saber-link>, do something different every day I am trying to grow as a person. If you're curious, read <saber-link to="/my-story">my story</saber-link> or find out what I am doing <saber-link to="/my-story">now</saber-link>.</p>
    <p class="short"><b>I am also a digital product designer</b> with over six years of experience working in both startups and advertising agencies. I’ve been fortunate enough to work with great companies and greater people. I shaped products and helped companies grow. Check out <saber-link to="/my-story">my work</saber-link> or read my <saber-link to="/my-story">resume</saber-link>.</p>
    <simg name="paperplane-illustration.svg" class="paperplane" />
    <simg name="desk-illustration.svg" class="desk" />
  </div>
</div>

<section class="projects grid-width">
  <h2 class="h3">Featuret projects</h2>
  <projectCard
    url="/work/agrivi"
    title="Agrivi"
    description="Farm managment software"
    period="2016"
    image="stjepangrgic-agrivi-card.jpg"
    linkText="Read the case study"/>
  <projectCard
    class="reversed"
    url="/work/share-istria"
    title="Share Istra"
    description="Creative Tourism Campaign"
    period="2015"
    image="stjepangrgic-agrivi-card.jpg"
    linkText="Read the case study"/>
</section>




<script>
import slink from '@/theme/components/slink.vue'
import simg from '@/theme/components/simg.vue'
import sfigure from '@/theme/components/sfigure.vue'
import projectCard from '@/theme/components/projectCard.vue'
import smallCard from '@/theme/components/smallCard.vue'
import titleSection from '@/theme/components/titleSection.vue'

export default {
  components: {
    slink,
    simg,
    sfigure,
    projectCard,
    smallCard,
    titleSection
  },
  computed: {
    // icon() {
    //   return {
    //     backgroundImage: 'url(' + require('@/assets/images/' + 'fail.svg') + ')'
    //   }
    // }
  }
}
</script>

<style lang="stylus" scoped>

  .text
    background-color #FAF8F7
    border-top 2px solid #E6DFDC
    border-bottom 2px solid #E6DFDC
    position: relative
    &-inner
      position: relative
      .desk
        position: absolute
        bottom: -8px
        right: -76px
        z-index: -1
        @media screen and (max-width 900px) {
          position relative
          margin-top: -6rem
          bottom: -13px
          right: auto
        }

      .paperplane
        position absolute
        top -2rem
        left -14rem
    p
      margin-top: 4rem
      margin-bottom: 3rem
      &:last-of-type
        margin-top: 3rem
        margin-bottom: 4rem
  
  .short
    max-width: 632px

  
/*  .header
    position relative
    background-color #FAF8F7
    border-top 2px solid #E6DFDC
    border-bottom 2px solid #E6DFDC*/
/*    .paperplane
      position absolute
      top 0
      left -14rem

    .desk
      margin-top -3rem
      margin-right -4.7rem
      @media screen and (min-width 900px)
        margin-top -6rem
        float right*/
/*      position: relative
      top: -2rem
      @media screen and (min-width: 800px)
        top initial
        position: absolute
        right: -4.7rem
        bottom: -6rem*/

  .projects
    /*background-color: #afa*/
    /*margin-top: 6rem*/

</style>





