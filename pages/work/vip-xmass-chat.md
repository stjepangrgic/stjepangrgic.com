---
layout: page
---

<!-- <ProjectHeader
  title="Vip "
  subtitle="Farm management software"
  description="As part of a design team in digital marketing agency Grey Entourage, I worked on creating a new influencer oriented marketing campaign called Share Istria for the client Istrian Tourist Board."
  accentColor="#926F52"
/> -->

<titleSection title="Vip Xmas Chat" subtitle="Promotional chat app" accentColor="#E60028"/>
<heroSection heroImage="stjepangrgic-project-vip-chat-cover-image.jpg" bgImage="" bgColor="#E60028" />

<div class="content full-width grid">
<div class="info">
  <div class="periond">
    <small>Period</small>
    <p>2016</p>
  </div>
  <div class="platform">
    <small>Platform</small>
    <p>Web, Mobile</p>
  </div>
  <div class="role">
    <small>My role</small>
    <p>Digital Designer</p>
  </div>
</div>

## Introduction
Vip Xmas Chat was a promotional “chat” application that was part of a Christmas campaign for telecommunication company Vipnet Hrvatska (A1 Telekom Austria Group) aimed at raising brand awareness among a younger audience. I worked on it while employed at agency Gray Entourage.

### My role
I was involved in the whole creative process - from character concepts to final delivery. But my main responsibilities were character illustrations and app design.

### The challenge
Early in campaign development I suggested we could use stylized characters and I could draw them. But I have never done anything like that before.

So the challenges were:
- Can I illustrate characters using a rather limited color palette
- Can I design “chat boot” app

## Characters
<figure class="grid-width fix-img">
  <simg name="stjepangrgic-project-vip-chat-character-bozidar.jpg" />
</figure>

<figure class="grid-width fix-img">
  <simg name="stjepangrgic-project-vip-chat-character-rudolf.jpg" />
</figure>

<figure class="grid-width fix-img">
  <simg name="stjepangrgic-project-vip-chat-character-santa.jpg" />
</figure>

<figure class="grid-width fix-img">
  <simg name="stjepangrgic-project-vip-chat-character-elf-girl.jpg" />
</figure>

<figure class="full-width fix-img big-image">
  <simg name="stjepangrgic-project-vip-chat-character-illustrator-lines.jpg" />
</figure>

## App
We knew a native app wasn't ideal for this project (time, cost), so we opted up for responsive web app. This enabled it to work on smartphones and desktop computers as well as interactive outdoor displays across the country.

<figure class="grid-width fix-img">
  <simg name="stjepangrgic-project-vip-chat-app-phones.png" />
</figure>

<figure class="grid-width fix-img">
  <simg name="stjepangrgic-project-vip-chat-app-displays.jpg" />
</figure>

At the time, chat boots were not a thing, so we created predefined multiple choice answers for users to select. We created 268 different outputs for all 4 characters.

<figure class="grid-width fix-img">
  <simg name="stjepangrgic-project-vip-chat-app-outputs.jpg" />
</figure>


</div> <!-- content end -->

<!-- <figure class="full-width" >
  <simg name="stjepangrgic-vipchat-project-image.jpg" />
</figure> -->


<!-- <figure class="page-hero hero-width">
  <simg name="stjepangrgic-projects-agrivi.jpg" />
</figure>

## Why?
The goal was to promote Istria (distinctive region in Croatia) trough, at the time, innovative approach by using travelers with the big social following. Or as we call them influencers today.

- Branding
- Iconography
- Photography


### Credits
Map - [https://commons.wikimedia.org/wiki/File:Croatia_Istria_County.svg](https://commons.wikimedia.org/wiki/File:Croatia,_Istria_County.svg)

Photo 1 - [https://unsplash.com/photos/aV5xrpB0bwQ](https://unsplash.com/photos/aV5xrpB0bwQ) -->

</div>

<script>
import slink from '@/theme/components/slink.vue'
import simg from '@/theme/components/simg.vue'
import ProjectHeader from '@/theme/components/ProjectHeader.vue'
import titleSection from '@/theme/components/titleSection.vue'
import heroSection from '@/theme/components/heroSection.vue'

export default {
  components: {
    slink, ProjectHeader, simg, titleSection, heroSection
  }
}
</script>

<style lang="stylus" scoped>
.content
  background-color: #FAFAFA;
  > *
    grid-column 3 / -3
    @media screen and (max-width: 800px) {
      /*grid-column 2 / -2*/
    }
  
/*.credits
  a 
    text-decoration: underline;*/

.info
  /*display: grid;*/
  display: flex;
  /*  grid-column-gap 0.625%
  grid-template-columns: 1fr 1fr 1fr*/
  /*align-items: left;*/
  /*justify-items: start;*/
  /*justify-content: start;*/
  margin-top: 7rem;
  > *
    margin-right: 4rem
    display: flex;
    flex-direction: column;
  small
    font-size: 1rem
    line-height: 1.5;
    font-weight: 600;
    color #A9A7B6
  p
    margin: 0;

.big-image
  mix-blend-mode: multiply;
  position: relative;
  /*overflow: scroll;*/
  img
    /*min-height: 300px;*/
    object-fit: cover;
    min-height: 300px;
  &:after
    content ""
    position: absolute;
    width: 100%;
    height: 400px;
    bottom: -400px;
    left: 0;
    opacity: 0.3;
    background-image: linear-gradient(180deg, #E4E4E4 0%, #FAFAFA 100%);

.fix-img
  margin-bottom: 2rem;

p + .fix-img
  margin-top: 2rem;



</style>
