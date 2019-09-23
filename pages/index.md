---
layout: basic
<!-- title: Hi to you! 👋 
subtitle: My name is Stjepan.
smallImage: desk-illustration.png -->
---

<header class="nw">
  <div class="img-fix"><simg name="profile.jpg" class="profile" /></div>
  <h1>Hi to you! <br><div class="subtitle">My name is Stjepan.</div></h1>
</header>

<section class="intro nw">

**I am a curious human being** exploring myself and the world through art and travel. By challenging myself to draw, [take photos](/photography), [read](/book-list), do something different every day, I am trying to grow as a person. If you’re curious, read [my story](/my-story) or find out what I am doing [now](/now).

**I’m a digital product designer** with over six years of experience working in both startups and advertising agencies. I’ve been fortunate enough to work with great companies and greater people. I shaped products and helped companies grow. Check out [my work](/work) or read my <a href="/Stjepan-Grgic-Digital-Product-Designer-Resume.pdf" target="_blank">resume</a>.

<simg name="home-bg.svg" class="home-bg" />
<simg name="laptop-and-phone.svg" class="laptop" />

</section>


<section class="projects pw">
  <div class="section-header">
    <h2>Featured projects</h2>
    <saber-link to="/work">See all</saber-link>
  </div>
  <ProjectCard
    url="/work/agrivi"
    title="Agrivi"
    right="113"
    description="Farm managment software"
    bgImage="stjepangrgic-agrivi-card-bgImage.jpg"
    projectImage="stjepangrgic-agrivi-card-projectImage.png"
    underlinColor="#5FC21E"/>
  <ProjectCard
    url="/work/share-istria"
    title="Share Istria"
    description="Creative Tourism Campaign"
    bgImage="stjepangrgic-share-istria-card-bgImage.png"
    projectImage="stjepangrgic-share-istria-card-projectImage.png"
    underlinColor="#009FE2"/>
  <ProjectCard
    url="/work/vip-xmass-chat"
    title="Vip Xmas Chat"
    description="Promotional Chat App"
    bgImage="stjepangrgic-vip-chat-card-bgImage.jpg"
    projectImage="stjepangrgic-vip-chat-card-projectImage.png"
    textColor="#000"/>
</section>

<!-- <div class="growth grid-width">
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
</div> -->

<script>
import slink from '@/components/slink.vue'
import simg from '@/components/simg.vue'
import sfigure from '@/components/sfigure.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import SmallCard from '@/components/SmallCard.vue'
import PageHeader from '@/components/PageHeader.vue'

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
.nw, .pw
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
.nw
  max-width: 688px;
.pw
  max-width: 1136px;
.img-fix
  display: flex

.index
  header
    margin-top: 8rem;
    margin-top: 3rem;
    /*margin-top: 6vh;*/
    .profile
      border-radius: 50%;
      width: 128px;
    h1
      margin-top: 3rem;
      font-size: 3.5rem;
      font-weight: 800;
      /*line-height: 1;*/
      line-height: 56px;
      position: relative;
      left: -3px;
      .subtitle
        font-size: 2.5rem;
        font-weight: 400;
  .intro
    /*background-color: #afa;*/
    position: relative;
    .home-bg
      position: absolute;
      top: -50%
      right: -50%;
      z-index: -1;
      filter: blur(50px);
      opacity: 0.2;
      width: 1560px;
    .laptop
      width: 400px;
      position: absolute;
      top: -50%;
      right: -70%;
  .projects
    /*background-color: #afa;*/
    .section-header
      display: flex
      flex-direction: row
      justify-content: space-between;
      align-items: baseline
      h2
        font-size: 1.125rem
        color: #CBCBCB;
        line-height: 32px
        text-transform: uppercase;
        margin-top: 3rem;
        /*margin-bottom: 1rem;*/
      a
        line-height: 1.2;


/*  .small-image
    width 785px
    bottom 0
    right 0
    transform translate(72px, 3.3613445%)
  .content
    padding-top 4rem
    
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
    }*/
</style>
