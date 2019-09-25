---
layout: page
title: Projects and work
subtitle: I am proud of.
navbarTitle: Work
info: false
---

<section class="projects project-width">
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
    bgImage="stjepangrgic-vibby-card-bgImage.jpg"
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
  --page-header-bgc #fff
  .projects
    padding-bottom: 3rem;

</style>
