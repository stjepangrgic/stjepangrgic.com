---
layout: page
---

<TitleSection class="grid-width" title="Hi to you! 👋" subtitle="My name is Stjepan."/>

<div class="text full-width grid">
  <div class="text-inner grid-width">
    <p><b>I am a curious human</b> being exploring myself and the world through art and travel. By challenging myself to draw, <saber-link to="/photos">take photos</saber-link>, <saber-link to="/book-list">read</saber-link>, do something different every day I am trying to grow as a person. If you're curious, read <saber-link to="/my-story">my story</saber-link> or find out what I am doing <saber-link to="/now">now</saber-link>.</p>
    <p class="short"><b>I am also a digital product designer</b> with over six years of experience working in both startups and advertising agencies. I’ve been fortunate enough to work with great companies and greater people. I shaped products and helped companies grow. Check out <saber-link to="/work">my work</saber-link> or read my <saber-link to="/resume">resume</saber-link>.</p>
    <simg name="paperplane-illustration.svg" class="paperplane" />
    <simg name="desk-illustration.png" class="desk" />
  </div>
</div>

<section class="projects grid-width">
  <h2 class="h3">Featuret projects <saber-link to="/work">See all</saber-link></h2>
  <ProjectCard
    url="/work/agrivi"
    title="Agrivi"
    description="Farm managment software"
    period="2016"
    image="stjepangrgic-agrivi-card.jpg"
    linkText="Read the case study"
    :tags="['Branding', 'Icons', 'Web Application', 'Corporate Site']"
    underlinColor="#3A9300"/>
  <ProjectCard
    url="/work/share-istria"
    title="Share Istria"
    description="Creative Tourism Campaign"
    period="2016"
    image="stjepangrgic-shareistria-card.jpg"
    linkText="Read the case study"
    :tags="['Branding', 'Icons', 'Web Application', 'Corporate Site']"
    underlinColor="#0082AF"/>
  <ProjectCard
    url="/work/vip-xmass-chat"
    title="Vip Xmas Chat"
    description="Promotional Chat App"
    period="2016"
    image="stjepangrgic-card-vip-chat.jpg"
    linkText="Read the case study"
    :tags="['Branding', 'Icons', 'Web Application', 'Corporate Site']"
    textColor="#000"/>
</section>

<!-- ## Growth
Some of my work. Understanding of color, light, shapes, perspective helped me to go on design road I never have planed. -->
<div class="growth grid-width">
  <h2 class="h3">Growth</h2>
  <div class="growth-grid">
    <SmallCard
      url="/book-list" 
      title="Book list"
      icon="book.svg"/>
    <SmallCard
      url="/fail-list" 
      title="Fail list"
      icon="fail.svg"/>
    <SmallCard
      url="/bucket-list" 
      title="Bucket list"
      icon="bucket.svg"/>
  </div>
</div>




<script>
import slink from '@/theme/components/slink.vue'
import simg from '@/theme/components/simg.vue'
import sfigure from '@/theme/components/sfigure.vue'
import ProjectCard from '@/theme/components/ProjectCard.vue'
import SmallCard from '@/theme/components/SmallCard.vue'
import TitleSection from '@/theme/components/TitleSection.vue'

export default {
  components: {
    slink,
    simg,
    sfigure,
    ProjectCard,
    SmallCard,
    TitleSection
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
        z-index: 1
        width 786px
        /* height 238px */
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
        @media screen and (max-width 1310px) {
          display: none
        }
    p
      margin-top: 4rem
      margin-bottom: 3rem
      z-index: 2
      position: relative
      &:last-of-type
        margin-top: 3rem
        margin-bottom: 4rem
  
  .short
    max-width: 632px

  .growth-grid
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-column-gap 1.6161616% /*16px*/
    height: 272px
    @media screen and (max-width 700px) {
      display: flex
      flex-direction: column
      height auto
      .small-card {
        height 272px
        margin-bottom: 1rem
      }
    }
  .h3
    margin-bottom: 1.5rem
    display: flex
    justify-content: space-between
    align-items: baseline
    a
      /*background-color: #afa*/
      height: 29px
      display: block
      line-height: 1.3
      font-weight: 400

  .growth
    margin-bottom: 4rem

</style>





