---
layout: project
navbarTitle: Agrivi

title: Agrivi
subtitle: "Farm management software"
heroImage: "stjepangrgic-project-agrivi-cover-image.png"

period: "2016"
platform: "Web, Mobile"
role: "Digital Product Designer"
---

## Introduction
Agrivi is agritech (agriculture technology) startup with a promise of solving world food problem by providing farmers with knowledge-based software solutions. At the time, Agrivi secured a worthy investment to help them grow the company and improve the product. So I was the first designer to join the team.

### My role
As Agrivi was an early-stage startup, I was involved with a whole product. I started with branding, redesigning the logo and setting the groundwork for visual language. Next came web application which had poor experience as it was a proof of concept. I led the rethinking process of changing the existing ways of using the essential features of the web application and created a lightweight design system that can be extended in future. Besides, I designed and coded the emails, designed ads, business cards and all the small things one designer faces within a small team.

### The chalange
How to design appealing and honest branding that would convey Agrivi's mission? How should a web application that would be easy to use for any farmer with any crop look like, be used? Apart from different crops, agriculture processes differ between different regions, seasons and weather conditions. Those were just a couple of questions and consideration I was faced with.

Besides, being the only designer in a small team with big dreams is a lot of work. I knew that. But growing up in the countryside surrounded with crops and domestic animals, I understood pain points that farmers face. So I decided to join and design products that will solve actual problems. 

<div class="block g1-1 grid">

## Branding
Agrivi was using a few stock icons and logo made from stuff downloaded from the internet (nothing new for a startup). But they had a firm idea that I wanted to build upon. The concept of a young plant starting its life. Furthermore, it reflected Agrivi as a young company.

<figure class="g1-1">
  <simg name="stjepangrgic-project-agrivi-branding-idea.jpg" />
</figure> 
  
</div>

### Colours
I was looking for friendly and inviting colours. I went with warm green hues that appear on leaves illuminated with morning sun.

<figure class="g5-5">
  <simg name="stjepangrgic-project-agrivi-colors.png" />
</figure>

<div class="typography g1-1 grid">
  <div class="text">
    <h3>Typography</h3>
    <p>To quote the fonts author: "Sofia Pro is a geometric sans font family who dares the modernism and the harmony of the curves". To me, it beautifully reflected the perfection of nature I was looking for.</p>
  </div>
  <figure>
    <simg name="stjepangrgic-project-agrivi-typography.png" />
  </figure>
</div>


<div class="gcs4 span12" style="margin-bottom: 1.5rem">
  <h3>The logomark</h3>
  <p>The perfection of nature reflects in the Fibonacci sequence. So I constructed two stylized leaves using the numbers as a guide.</p>
</div>
<figure class="gcs4 span10">
  <simg name="stjepangrgic-project-agrivi-logomark-construction.png" />
</figure>
<figure class="gcs14 span10">
  <simg name="stjepangrgic-project-agrivi-logomark.png" />
</figure>


### The logo
All of the above together looks like this.

<figure class="g1-1 mb8">
  <simg name="stjepangrgic-project-agrivi-logo-construction.png" />
</figure>
<figure class="g1-1 mb8">
  <simg name="stjepangrgic-project-agrivi-logo.png" />
</figure>
<figure class="gcs1 span12 mb8">
  <simg name="stjepangrgic-project-agrivi-logo-monochrome-light.png" />
</figure>
<figure class="gcs13 span12 mb8">
  <simg name="stjepangrgic-project-agrivi-logo-monochrome-dark.png" />
</figure>

<div class="block g1-1 grid" style="position: relative; z-index: 11">

## Web app
At the moment, I can only share highlights of all the work I have been involved with regarding web application.

<figure class="grid-width " style="margin-bottom: 2rem">
  <simg name="stjepangrgic-project-agrivi-webapp.png" />
</figure>

Field and crop management experience was especially challenging to envision as it widely differed between crops, seasons and countries. Additionally, it differed between organisation structure like a cooperative and individual farmer.

<figure class="grid-width" style="margin-top: 2.5rem">
  <simg name="stjepangrgic-project-agrivi-webapp-fields.png" />
</figure>

  
</div>

<div class="block reverse g1-1 grid">

## The website
I have also worked on the website and other public pages. I developed wireframes, custom icons, and illustrations.

<figure class="grid-width " style="margin-bottom: 2rem">
  <simg name="stjepangrgic-project-agrivi-website.jpg" />
</figure>
  
</div>


<div class="block g1-1 grid">

## What I learned
The success of any project or startup is determined by the team's ability to work together, to be harmonious. Interpersonal skills are, therefore, as valuable as technical skills when working in a small group. So after a few months of intensive work, I unhappily realised Agrivi was not a good fit for me.  I firmly believed Agrivi had a great idea and a bright future I could be part of. But circumstances like this happen, so I moved on.

## Check out next

<div class="grid-width next-project">
  <ProjectCard
    url="/work/vip-xmass-chat"
    title="Vip Xmas Chat"
    description="Promotional Chat App"
    bgImage="stjepangrgic-vip-chat-card-bgImage.jpg"
    projectImage="stjepangrgic-vip-chat-card-projectImage.png"
    textColor="#000"/>
</div>
  
</div>


<script>
import slink from '@/components/slink.vue'
import simg from '@/components/simg.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectHeroSection from '@/components/ProjectHeroSection.vue'
import ProjectInfo from '@/components/ProjectInfo.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    slink,
    ProjectCard,
    simg,
    ProjectHeroSection,
    ProjectInfo,
    PageHeader
  }
}
</script>

<style lang="stylus">
.agrivi
  --hero-section-bg: #7F5A43
  --subtitle-color: #8E6948
  --content-bgc #F8F3F0
  .hero-image
    top: 3.375rem
    img
      box-shadow none
      max-width: 967px;
      width 100%
  figure
    display flex
  figure img
    border-radius: 1px;
  .block
    position relative
    margin-top 4rem
    z-index 2
    &:before
      content ""
      display block
      position absolute
      width 100vw
      left 50%
      transform translateX(-50%)
      height 700px
      /*border-top 2px solid #E6DFDC*/
      background-color #fff
      /*background: linear-gradient(180deg, #FAF8F7 0%, #FCFBFA 100%);*/
      background: linear-gradient(180deg, #ECE1DC 0%, rgba(#ECE1DC, 0) 100%);
      z-index -1
  .block.reverse:before
    transform translateX(-50%) rotate(180deg)
    top -700px 

  .typography
    margin-bottom 1rem
    figure
      grid-column 2 / span 12
      margin-bottom 0
    .text
      grid-column 14 / span 10
      align-self: end;
      margin-bottom: 3rem;
      padding-left: 2rem;
    @media screen and (max-width: 900px) {
      .text {
        margin-bottom: 0;
        padding: 0;
        grid-column: 4/-4;
      }
      figure {
        grid-column 2 / -2
      }
    }
  figure.mb8
    margin-bottom: 0.5rem;

  .credits
    a 
      text-decoration: underline;

  .shadow
    box-shadow: 0 12px 19px -8px rgba(44,29,22,0.15);
  .two-grid
    display: flex;
    flex-direction: row;
    img
      width: 50%;

</style>
