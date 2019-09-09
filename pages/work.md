---
layout: page
title: Work
navbarTitle: Work
---
<!-- # Work -->
<!-- <PageHeader class="grid-width" title="Work"/> -->

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quos animi consectetur voluptates veniam debitis quia sit consequuntur architecto sapiente facilis voluptas, quasi illo iusto possimus saepe quidem, rerum nam.

<section class="projects grid-width">
  <!-- <h2 class="h3">Featuret projects</h2> -->
  <ProjectCard
    url="/work/vibby"
    title="Vibby"
    description="Interactive video platform startup"
    period="2015"
    image="stjepangrgic-vibby-card.png"
    linkText="Read the case study"
    :tags="['Branding', 'Icons', 'Web Application', 'Corporate Site']"
    underlinColor="#2C45BC"/>
  <ProjectCard
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
    textColor="#000"/>
</section>


<script>
// import slink from '@/theme/components/slink.vue'
// import simg from '@/theme/components/simg.vue'
// import sfigure from '@/theme/components/sfigure.vue'
import ProjectCard from '@/theme/components/ProjectCard.vue'
// import SmallCard from '@/theme/components/SmallCard.vue'
import PageHeader from '@/theme/components/PageHeader.vue'

export default {
  components: {
    // slink,
    // simg,
    // sfigure,
    ProjectCard,
    // SmallCard,
    PageHeader
  }
}
</script>

<style lang="stylus">
.work
  /*background-color: #afa;*/
  .projects
    margin-top: 3rem;
</style>
