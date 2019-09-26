---
layout: project
navbarTitle: Agrivi

title: Agrivi
subtitle: "Farm management software"
heroImage: "stjepangrgic-project-agrivi-cover-image.png"

period: "2016"
platform: "Web, Mobile"
role: "Digital Product Designer"

SeoDescription: "Agrivi is agritech startup with a promise of solving world food problem by providing farmers with knowledge-based software solutions. Designed by Stjepan Grgic"
---

## Introduction
Agrivi is agritech (agriculture technology) startup with a promise of solving world food problem by providing farmers with knowledge-based software solutions. At the time, Agrivi secured a worthy investment to help them grow the company and improve the product. So I was the first designer to join the team.

### My role
As Agrivi was an early-stage startup, I was involved with a whole product. I started with branding, redesigning the logo and setting the groundwork for visual language. Next came web application which had poor experience as it was a proof of concept. I led the rethinking process of changing the existing ways of using the essential features of the web application and created a lightweight design system that can be extended in future. Besides, I designed and coded the emails, designed ads, business cards and all the small things one designer faces within a small team.


### The challenge
How to design appealing and honest branding that would convey Agrivi's mission? How should a web application that would be easy to use for any farmer with any crop look like, be used? Apart from different crops, agriculture processes differ between different regions, seasons and weather conditions. Those were just a couple of questions and consideration I was faced with.

Besides, being the only designer in a small team with big dreams is a lot of work. I knew that. But growing up in the countryside surrounded with crops and domestic animals, I understood pain points that farmers face. So I decided to join and design products that will solve actual problems. 

<hr class="gradient">

## Branding
Agrivi was using a few stock icons and logo made from stuff downloaded from the internet (nothing new for a startup). But they had a firm idea that I wanted to build upon. The concept of a young plant starting its life. Furthermore, it reflected Agrivi as a young company.

<figure class="project-width">
  <simg name="stjepangrgic-project-agrivi-branding-idea.jpg" />
</figure> 
  

### Colours
I was looking for friendly and inviting colours. I went with warm green hues that appear on leaves illuminated with morning sun.

<figure class="photo-width">
  <simg name="stjepangrgic-project-agrivi-colors.png" />
</figure>

<section class="typography">
<div class="text">

### Typography
To quote the fonts author: "Sofia Pro is a geometric sans font family who dares the modernism and the harmony of the curves". To me, it beautifully reflected the perfection of nature I was looking for.

</div>
<figure>
  <simg name="stjepangrgic-project-agrivi-typography.png" />
</figure>
</section>

### Logomark
The perfection of nature reflects in the Fibonacci sequence. So I constructed two stylized leaves using the numbers as a guide.

<figure class="logomark-1">
  <simg name="stjepangrgic-project-agrivi-logomark-construction.png" />
</figure>
<figure class="logomark-2">
  <simg name="stjepangrgic-project-agrivi-logomark.png" />
</figure>

### Logo
All of the above together looks like this.

<figure class="g2-2">
  <simg name="stjepangrgic-project-agrivi-logo-construction.png" />
</figure>
<figure class="g2-2">
  <simg name="stjepangrgic-project-agrivi-logo.png" />
</figure>
<figure class="gcs2 span12">
  <simg name="stjepangrgic-project-agrivi-logo-monochrome-light.png" />
</figure>
<figure class="gcs14 span12">
  <simg name="stjepangrgic-project-agrivi-logo-monochrome-dark.png" />
</figure>

<hr class="gradient">

## Web application
At the moment, I can only share highlights of all the work I have been involved with regarding web application.

<figure class="project-width" style="margin-bottom: 1rem" >
  <simg name="stjepangrgic-project-agrivi-webapp.png" />
</figure>

Field and crop management experience was especially challenging to envision as it widely differed between crops, seasons and countries. Additionally, it differed between organisation structure like a cooperative and individual farmer.

<figure class="project-width" style="margin-top: 2rem">
  <simg name="stjepangrgic-project-agrivi-webapp-fields.png" />
</figure>


<hr class="gradient">

## Website
I have also worked on the website and other public pages. I developed wireframes, custom icons, and illustrations.

<figure class="project-width">
  <simg name="stjepangrgic-project-agrivi-website.jpg" />
</figure>
  
<section class="conclusion full-width grid">

## What I learned
The success of any project or startup is determined by the team's ability to work together, to be harmonious. Interpersonal skills are, therefore, as valuable as technical skills when working in a small group. So after a few months of intensive work, I unhappily realised Agrivi was not a good fit for me.  I firmly believed Agrivi had a great idea and a bright future I could be part of. But circumstances like this happen, so I moved on.

## Check out next

<div class="next-project project-width">
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
@import "../../node_modules/rupture/rupture"
@import "../../styles/_grid.styl"

.agrivi
  --subtitle-color: #8E6948
  --content-bgc: #F8F3F0
  --page-header-bgc: #F8F3F0
  --conclusion-bg: #ECE1DC

  hr.gradient
    &:before
      background-image: linear-gradient(180deg, #ECE1DC 0%, rgba(234,221,216,0.00) 100%);

  .hero-image
    img
      box-shadow none

  .typography
    @extend .g2-2
    @extend .grid-inner
    +above(900px)
      margin-top: 3rem;
    .text
      +above(900px)
        grid-column 14 / span 11
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 2rem;

    figure
      @extend .project-width
      +above(900px)
        grid-column 1 / span 12

  +above(900px)
    #logomark, #logomark + p
      grid-column 5 / span 12
    .logomark-1
      grid-column 5 / span 10
    .logomark-2 
      grid-column 15 / span 10

</style>
