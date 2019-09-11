---
layout: page
title: Hi to you! 👋
subtitle: My name is Stjepan.
smallImage: desk-illustration.png
---
  
<!-- ### Human -->
<b>I am a courious human being</b>, exploring myself and the world through art and travel. By challenging myself to draw, [take photos](/photography), [read](/book-list) and do something different every day I am trying to grow as a person. If you're curious, read [my story](/my-story) or find out what I am doing [now](/now).

<!-- ### Designer -->
<b>I am digital product designer</b> with over six years of experience working in both startups and advertising agencies. I’ve been fortunate enough to work with great companies and greater people. I shaped products and helped companies grow. Check out [my work](/work) or read my [resume](/resume).


<section class="projects grid-width">
  <div class="title-wrap">
    <h2 class="h3">Featuret projects</h2>
    <saber-link to="/work">See all</saber-link>
  </div>
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
import PageHeader from '@/theme/components/PageHeader.vue'

export default {
  components: {
    slink,
    simg,
    sfigure,
    ProjectCard,
    SmallCard,
    PageHeader
  }
}
</script>

<style lang="stylus">
.index
  .small-image
    width 785px
    bottom 0
    right 0
    transform translate(72px, 3.3613445%)
  .content
    /*margin-top 4rem*/
  /*.intro*/
    /*h3*/
      /*background-color #afa*/
      /*font-weight 700*/
      /*margin-top 2rem*/
      /*margin-bottom 0rem*/
    
  .title-wrap
    display: flex
    flex-direction: row
    justify-content: space-between;
    align-items: baseline
    a
      line-height: 1.2
  .h3
    margin-bottom: 1.5rem;
    margin-top: 4rem;
    font-weight: 800;
    font-size: 2rem;

  .growth-grid
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-column-gap 1.6161616%
    height: 272px
    margin-bottom: 5rem;
    @media screen and (max-width 700px) {
      display: flex
      flex-direction: column
      height auto
      .small-card {
        height 272px
        margin-bottom: 1rem
      }
    }
</style>
