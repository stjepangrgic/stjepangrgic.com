---
layout: project
navbarTitle: Agrivi

title: Agrivi
subtitle: "Farm management software"
accentColor: "#8E6948"

heroImage: "stjepangrgic-project-agrivi-cover-image.png"
bgColor: "#8E6948"

period: "2016"
platform: "Web, Mobile"
role: "Digital Product Designer"

contentBgColor: "#FCFBFA"
---

## Introduction
Agrivi is agritech startup with a promis of solving world food problem by providing farmers with knowledge-based software solutions. 

### My role
Being only designer in a small team with big dreams is a lot of work. I knew that. But griwing up in countriside souranded with crops and domestic animals I understod painpoints that farmers face. So I decided to join and design products that will solve actual problems . I was involved in whol product cycle, from branding to web and mobile aplications all the way to ads.

### The chalange
As it goes, startups don’t spend a lot of time making apps understandable and easy to use, let alone beautifull. It just has to work and prove the concept. That was the case at the time I joined the company. No consistent branding and poor web app experience.

So the challenge was: rethink company branding, build flexible and lightwaight design system capable of adapting to web an mobile enviroments all while having farmers in mind.

<div class="block full-width grid">

## Branding
Everythin Agrivi was using at the time was few stock icons and logo made from stuf downloaded from internet (nothing new for a sturtup). But logo had a strong idea that I wanted to build upon.

<figure class="grid-width fix-img">
  <simg name="stjepangrgic-project-agrivi-branding-idea.jpg" />
</figure> 
  
</div>

### Colors
Thinking about primary colors green was an obvious choice. But it had to be warm and inviting.  As a young plant lit with warm morning sunshine.

<figure class="grid-width fix-img">
  <simg name="stjepangrgic-project-agrivi-colors.jpg" />
</figure>

### The logomark
I wanted to incorporate idea of a young plant. To symbolize agriculture and something to take care of. It was also idea of a startup -  young growing company.

Perfection of nature reflets in fibonacy numbers. So I constructed two stylized leafs  using the proportions present in nature. 

<figure class="grid-width fix-img two-grid">
  <simg name="stjepangrgic-project-agrivi-logomark-construction.png" />
  <simg name="stjepangrgic-project-agrivi-logomark.png" />
</figure>

### Typography
To quote the fonts autor: "Sofia Pro is a geometric sans font family who dares the modernism and the harmony of the curves". To me it beautifuly reflected perfection of nature i was looking for.
<figure class="grid-width fix-img shadow">
  <simg name="stjepangrgic-project-agrivi-typography.png" />
</figure>

### The logo
To quote the fonts autor: "Sofia Pro is a geometric sans font family who dares the modernism and the harmony of the curves". To me it beautifuly reflected perfection of nature i was looking for.
<figure class="grid-width fix-img shadow">
  <simg name="stjepangrgic-project-agrivi-logo-construction.png" />
</figure>
<figure class="grid-width fix-img shadow">
  <simg name="stjepangrgic-project-agrivi-logo.png" />
</figure>
<figure class="grid-width fix-img shadow">
  <simg name="stjepangrgic-project-agrivi-logo-monochrome.png" />
</figure>

<div class="block full-width grid">

## Web app
I can only share bits of all the work I have been Involwed with regarding web app. These are just a small excerpt of all the screen I worked on.
<figure class="grid-width fix-img shadow">
  <simg name="stjepangrgic-project-agrivi-typography.png" />
</figure>

  
</div>


<script>
import slink from '@/theme/components/slink.vue'
import simg from '@/theme/components/simg.vue'
import ProjectHeader from '@/theme/components/ProjectHeader.vue'
import HeroSection from '@/theme/components/HeroSection.vue'
import ProjectInfo from '@/theme/components/ProjectInfo.vue'
import PageHeader from '@/theme/components/PageHeader.vue'

export default {
  components: {
    slink, ProjectHeader, simg, HeroSection, ProjectInfo, PageHeader
  }
}
</script>

<style lang="stylus" scoped>

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
    border-top 2px solid #E6DFDC
    background-color #fff
    background: linear-gradient(180deg, #FAF8F7 0%, #FCFBFA 100%);
    z-index -1
  
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
