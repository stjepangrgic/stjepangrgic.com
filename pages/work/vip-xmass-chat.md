---
layout: page
navbarTitle: Vip Xmas Chat
---

<TitleSection
  title="Vip Xmas Chat"
  subtitle="Promotional chat app"
  accentColor="#E60028"
/>

<HeroSection
  heroImage="stjepangrgic-project-vip-chat-cover-image.jpg"
  bgImage=""
  bgColor="#E60028"
/>


<div class="content full-width grid">
  <ProjectInfo
    period="2014"
    platform="Web, Social media"
    role="Digital Designer"
  />

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

## The App
We knew a native app wasn't ideal for this project (time and cost reasons), so we opted up for responsive web app. This enabled the app to work on smartphones and desktop computers as well as interactive outdoor displays across the country.

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

## Results
The campaign was very well received. Thousands of users participated and spent, on average, over 4 minutes chatting with their favorite character. Rudolph turned out to be the most popular one.

There were also special coupon rewards that generated a large number of leads towards Vipnet webshop.

<figure class="grid-width fix-img">
  <simg name="stjepangrgic-project-vip-chat-coupons.jpg" />
</figure>

## Conclusion
I loved the project and how the proces went along. I saw how simple ideas can be powerfull if execude creatively. I felt empowered becaus my voice was heard.
To this day I think of it as one of most enjed projects and fun time of my career.

## Check out next
<div class="grid-width next-project">
  <ProjectCard
    url="/work/share-istria"
    title="Share Istria"
    description="Creative Tourism Campaign"
    period="2016"
    image="stjepangrgic-shareistria-card.jpg"
    linkText="Read the case study"
    :tags="['Branding', 'Icons', 'Web Application', 'Corporate Site']"
    underlinColor="#0082AF"/>
</div>

</div> <!-- content end -->

</div>

<script>
import slink from '@/theme/components/slink.vue'
import simg from '@/theme/components/simg.vue'
import ProjectHeader from '@/theme/components/ProjectHeader.vue'
import TitleSection from '@/theme/components/TitleSection.vue'
import HeroSection from '@/theme/components/HeroSection.vue'
import ProjectCard from '@/theme/components/ProjectCard.vue'
import ProjectInfo from '@/theme/components/ProjectInfo.vue'

export default {
  components: {
    slink, ProjectHeader, simg, TitleSection, HeroSection, ProjectCard, ProjectInfo
  }
}
</script>

<style lang="stylus" scoped>
.content
  background-color: #FAFAFA;
/*  > *
    grid-column 3 / -3*/
  
/*.credits
  a 
    text-decoration: underline;*/



.big-image
  mix-blend-mode: multiply;
  position: relative;
  /*overflow: scroll;*/
  img
    /*min-height: 300px;*/
    object-fit cover
    min-height 300px
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
  /*margin-bottom: 2rem;*/

/*p + .fix-img
  margin-top: 2rem;*/



</style>
