---
layout: project
navbarTitle: Vibby

title: Vibby
subtitle: Interactive video platform
heroImage: "stjepangrgic-project-vibby-cover-image.png"

period: "2015"
platform: "Web"
role: "Digital Product Designer"
---

<!-- 538AFF -->
<!-- bgColor: "linear-gradient(180deg, #2CA3FF 0%, #6A7BFF 100%)" -->

## Introduction
Vibby was a US based startup with offices in Zagreb (Croatia), and New York (US). It was a product from a group of brilliant college graduates, some of whom were world-class programmers. They wanted to build personalised and interactive online learning platform using online video. But there was a problem: an interactive online video didn't exist. So they decided to pivot and build just that. And that is a moment when I joined the team.

Before joining Vibby, I had no experience working in a startup. I was amazed by how many smart people worked there and how young the team was. They were all my age and just out of college.  

<div class="idea full-width grid">

### The challenge
How to make an online video more interactive? How to show only essential bits of video to the audience? At the time, I felt something could be done about it. I felt idea had potential and believed we could build something special.

<figure class="grid-width fix-img">
  <simg name="stjepangrgic-project-vibby-idea.jpg" />
</figure> 

<!-- ### The chalange
How to make video more interactive? How to show only important bits of video to the audinece? Looking pack to this question they feal unecesary, but at the time I fealt something can be done about it. I belived we could build something special. -->

### My role
I was the first and only designer on the team. So I was involved in every step of the process of creating a product. From rebranding to developing interactive wireframes. I worked on a web application user interface, website, presentations for investors and user experience of creating interactive videos. 

Unexpectedly I worked as a part of the frontend development team as I had the most experience writing CSS and converting designs in working code. So basicaly I 'sliced' every of designs I did.

</div> <!-- Idea -->

## Experiences
Early on, we realised that creating an interactive online video from existing videos is going to be challenging. So we created two distinct experiences. Creating and watching.

<div class="solutions full-width grid">

### Vib Creation process
Vib creation was 3 part process of highlighting the most important/entertaining/informative/crazy parts of the video. We had to simplify steps several times as test users were not able to figure out how to do it in the first few iterations.

<figure class="full-width fix-img center" style="max-width: 1300px;">
  <simg name="stjepangrgic-project-vibby-vib-creation-process.jpg" />
</figure>

You should be able to see the final result [here](https://www.vibby.com/create/1). If not, you can check out the video below.

</div>

<div class="block full-width grid">

### Vibby player
The interactive player was the second part of the equation. We tried to find an intuitive way of watching the highlighted parts of the video. We experimented and developed a few different ways of commenting on those highlights.
  
<figure class="full-width fix-img center" style="max-width: 1795px;">
  <simg name="stjepangrgic-project-vibby-player.jpg" />
</figure>

I hope you can still see how it works [here](https://www.vibby.com/watch?vib=71KCMcqWZUc).

</div> <!-- Block -->

## Final experience
If links aren't working, you can see the final experience of creating and sharing a 'vib' in the short video below.

<video class="video" loop controls>
  <source src="/vibby-how-it-works.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

Designing and developing those features took most of my time. However, I have also worked on other parts of the product and marketing.

<div class="gradient full-width grid">

## Website
Concept of the short highlighted videos was new to everyone, so we had to communicate that and other functionality on the website. Here are some pages.

<figure class="full-width fix-img center" style="max-width: 1426px;">
  <simg name="stjepangrgic-project-vibby-website.jpg" />
</figure>
</div>

## Branding
I worked on creating new branding as a team pivoted idea from a video education platform to interactive video platform just before I joined.

<figure class="g5-5 fix-img">
  <simg name="stjepangrgic-project-vibby-logo-ideas.jpg" />
</figure>

<!-- After a lot of ideas and experiments I decided to combine multiple I decided to blend the distinctive shape of the Istrian peninsula with all the experiences and photos one might have while visiting this amazing and unique region of Croatia. -->

<figure class="grid-width fix-img">
  <simg name="stjepangrgic-project-vibby-logo-conception.jpg" />
</figure>

<figure class="grid-width fix-img">
  <simg name="stjepangrgic-project-vibby-logo-unaccepted.png" />
</figure>

<!-- But in the end team decided to go with someething other -->

<figure class="grid-width fix-img">
  <simg name="stjepangrgic-project-vibby-logo-accepted.png" />
</figure>

<div class="full-width grid conclusion">

## So was Vibby a success?
Yes and no. It wasn't successful in reaching a big global audience and becoming a way to consume some longer-form video content in a shorter way. However, it was a success in many ways for me. I worked with great smart people that I admire, and I stayed a friend with. I got introduced to the whole startup world and how it functions. While I was there, we managed to go from a few sign-ups a week to over 100 a day. Which was not spectacular on its own, but it mead us feel great.

## Conclusion
Ultimately I will remember the time I was working there as one of the best days of my life. I enjoyed hustling and figuring out technical and creative solutions for the problems we faced. I enjoyed every second.

## Check out next

<div class="grid-width next-project">
  <ProjectCard
    url="/work/agrivi"
    title="Agrivi"
    description="Farm managment software"
    bgImage="stjepangrgic-agrivi-card-bgImage.jpg"
    projectImage="stjepangrgic-agrivi-card-projectImage.png"
    underlinColor="#5FC21E"/>
</div>

</div>

<script>
import slink from '@/theme/components/slink.vue'
import simg from '@/theme/components/simg.vue'
import ProjectCard from '@/theme/components/ProjectCard.vue'

export default {
  components: {
    slink,
    simg,
    ProjectCard
  }
}
</script>

<style lang="stylus">
.vibby
  --hero-section-bg #5D83FF
  --subtitle-color #538AFF
  --content-bgc #F9FAFC
  .content
    padding-bottom: 0;
  .idea
    background-color #32323C
    margin-top 4rem
    padding-bottom 4rem
    
    h3, p
      color #fff
    p
      opacity 0.9
    figure 
      margin-bottom 0

  .block
    background-color #E7F5FF
    margin-top 4rem
    padding-bottom 4rem
    
  .video
    width 100%
    margin-top 2rem
    margin-bottom 2rem
  .conclusion
    background-color: #ECF0F2;
    /*padding-bottom: 4rem;*/
</style>
