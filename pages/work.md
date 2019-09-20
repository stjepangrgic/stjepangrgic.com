---
layout: page
title: Projects and work
subtitle: I am proud of.
navbarTitle: Work
---

<section class="projects grid-width">
  <!-- <h2 class="h3">Featuret projects</h2> -->
  <ProjectCard
    url="/work/agrivi"
    title="Agrivi"
    description="Farm managment software"
    bgImage="stjepangrgic-agrivi-card-bgImage.jpg"
    projectImage="stjepangrgic-agrivi-card-projectImage.png"
    underlinColor="#5FC21E"/>
  <ProjectCard
    url="/work/vibby"
    title="Vibby"
    description="Interactive video platform"
    bgImage="stjepangrgic-vibby-card-bgImage.png"
    projectImage="stjepangrgic-vibby-card-projectImage.png"
    underlinColor="#3CACF5"/>
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

<!--     background-image: linear-gradient(180deg, #F5F5F5 0%, #F2F2F2 100%);
    box-shadow: inset 0 -2px 0 0 #F2F2F2;
    border-radius: 3px; -->

<!--   <ProjectCard
    url="/work/vibby"
    title="Vibby"
    description="Interactive video platform startup"
    bgImage="stjepangrgic-vibby-card.png"
    projectImage="test.png"
    underlinColor="#2C45BC"/> -->
<!--   <ProjectCard
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
    textColor="#000"/> -->
</section>


<script>
import ProjectCard from '@/components/ProjectCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    ProjectCard,
    PageHeader
  },
}
</script>

<style lang="stylus">
.work
  .projects
    /*margin-top: 3rem;*/
</style>
