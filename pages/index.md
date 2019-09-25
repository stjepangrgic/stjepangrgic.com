---
layout: basic
---

<header class="grid">
  <div class="img-fix"><simg name="profile.jpg" class="profile" /></div>
  <h1>Hi to you! <br><div class="subtitle">My name is Stjepan.</div></h1>
</header>

<section class="intro grid">
  <simg name="home-bg.svg" class="home-bg" />
  <simg name="laptop-and-phone.svg" class="laptop" />

**I am a curious human being** exploring myself and the world through art and travel. By challenging myself to draw, [take photos](/photography), [read](/book-list), do something different every day, I am trying to grow as a person. If you’re curious, read [my story](/my-story) or find out what I am doing [now](/now).

**I’m a digital product designer** with over six years of experience working in both startups and advertising agencies. I’ve been fortunate enough to work with great companies and greater people. I shaped products and helped companies grow. Check out [my work](/work) or read my <a href="/Stjepan-Grgic-Digital-Product-Designer-Resume.pdf" target="_blank">resume</a>.

</section>

<section class="projects grid">
  <div class="projects__header">
    <h2>Featured projects</h2>
    <saber-link to="/work">See all</saber-link>
  </div>
  <div class="projects__wrap project-width">
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
      bgImage="stjepangrgic-share-istria-card-bgImage.jpg"
      projectImage="stjepangrgic-share-istria-card-projectImage.png"
      underlinColor="#009FE2"/>
    <ProjectCard
      url="/work/vip-xmass-chat"
      title="Vip Xmas Chat"
      description="Promotional Chat App"
      bgImage="stjepangrgic-vip-chat-card-bgImage.jpg"
      projectImage="stjepangrgic-vip-chat-card-projectImage.png"
      textColor="#000"/>
  </div>
</section>

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
.index
  .profile
    width: 128px;
    border-radius: 50%
  header
    margin-top: 8rem;
    margin-bottom: 2rem;
    position: relative;
    .profile
      border-radius: 50%;
      width: 128px;
    h1
      margin-top: 3rem;
      font-size: 3.5rem;
      font-weight: 800;
      line-height: 56px;
      position: relative;
      left: -3px;
      .subtitle
        font-size: 2.5rem;
        font-weight: 400;
  .intro
    position: relative
    p
      position: relative;
    .home-bg
      position: absolute;
      top: -50%
      right: -50%;
      z-index: -1;
      filter: blur(50px);
      opacity: 0.2;
      width: 1560px;
      height: 533px;
    .laptop
      width: 400px;
      position: absolute;
      top: -50%;
      right: -70%;
  .projects
    padding-bottom: 2rem;
    &__header
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
      line-height 24px
      h2
        font-size: 1.125rem
        color: #CBCBCB;
        line-height: 32px
        text-transform: uppercase;
/*.index
  header
    margin-top: 8rem;
    margin-bottom: 2rem;
    .profile
      border-radius: 50%;
      width: 128px;
    h1
      margin-top: 3rem;
      font-size: 3.5rem;
      font-weight: 800;
      line-height: 56px;
      position: relative;
      left: -3px;
      .subtitle
        font-size: 2.5rem;
        font-weight: 400;
  .projects
    margin-bottom: 4rem;
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
      a
        line-height: 1.2;*/
</style>

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
