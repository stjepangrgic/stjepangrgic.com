---
layout: project
navbarTitle: Vip Xmas Chat

title: Vip Xmas Chat
subtitle: Promotional chat app
heroImage: "stjepangrgic-project-vip-chat-cover-image.jpg"

period: "2014"
platform: "Web, Social media"
role: "Digital Designer"
---

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
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolorum cumque, dolorem impedit deserunt, consequatur libero exercitationem cupiditate nulla quisquam laudantium ab expedita dolor dolore et quibusdam incidunt itaque officia!

<figure class="project-width">
  <simg name="stjepangrgic-project-vip-chat-character-bozidar.jpg" />
</figure>

<figure class="project-width">
  <simg name="stjepangrgic-project-vip-chat-character-rudolf.jpg" />
</figure>

<figure class="project-width">
  <simg name="stjepangrgic-project-vip-chat-character-santa.jpg" />
</figure>

<figure class="project-width">
  <simg name="stjepangrgic-project-vip-chat-character-elf-girl.jpg" />
</figure>

<figure class="big-img g2-2">
  <simg name="stjepangrgic-project-vip-chat-character-illustrator-lines.jpg" />
</figure>

## The App
We knew a native app wasn't ideal for this project (time and cost reasons), so we opted up for responsive web app. This enabled the app to work on smartphones and desktop computers as well as interactive outdoor displays across the country.

<figure class="project-width">
  <simg name="stjepangrgic-project-vip-chat-app-phones.jpg" />
</figure>

<figure class="project-width">
  <simg name="stjepangrgic-project-vip-chat-app-displays.jpg" />
</figure>

At the time, chat boots were not a thing, so we created predefined multiple choice answers for users to select. We created 268 different outputs for all 4 characters.

<figure class="project-width">
  <simg name="stjepangrgic-project-vip-chat-app-outputs.jpg" />
</figure>

## Results
The campaign was very well received. Thousands of users participated and spent, on average, over 4 minutes chatting with their favorite character. Rudolph turned out to be the most popular one.

There were also special coupon rewards that generated a large number of leads towards Vipnet webshop.

<figure class="project-width">
  <simg name="stjepangrgic-project-vip-chat-coupons.jpg" />
</figure>

<section class="conclusion full-width grid">

## Conclusion
I loved the project and how the proces went along. I saw how simple ideas can be powerfull if execude creatively. I felt empowered becaus my voice was heard.
To this day I think of it as one of most enjed projects and fun time of my career.

## Check out next

<div class="next-project project-width">
  <ProjectCard
    url="/work/share-istria"
    title="Share Istria"
    description="Creative Tourism Campaign"
    bgImage="stjepangrgic-share-istria-card-bgImage.jpg"
    projectImage="stjepangrgic-share-istria-card-projectImage.png"
    underlinColor="#009FE2"/>
</div>

</section>

<script>
import slink from '@/components/slink.vue'
import simg from '@/components/simg.vue'
// import ProjectHeader from '@/components/ProjectHeader.vue'
import PageHeader from '@/components/PageHeader.vue'
import ProjectHeroSection from '@/components/ProjectHeroSection.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectInfo from '@/components/ProjectInfo.vue'

export default {
  components: {
    slink,
    // ProjectHeader,
    simg,
    PageHeader,
    ProjectHeroSection,
    ProjectCard,
    ProjectInfo
  }
}
</script>

<style lang="stylus">
.vip-xmass-chat
  --page-header-bgc: #F5F5F5
  --subtitle-color: #E60028
  --content-bgc #F5F5F5
  --conclusion-bg: #EEEEEE

  .big-img
    mix-blend-mode: multiply;
    position: relative;
    img
      object-fit cover
      min-height 300px
    &:after
      content ""
      position: absolute;
      width: 100vw;
      height: 200px;
      bottom: -200px;
      left: 50%
      transform translateX(-50%)
      opacity: 0.3;
      background-image: linear-gradient(180deg, #E4E4E4 0%, #FAFAFA 100%);

</style>
