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

## Introduction
Vibby was a US-based startup with offices in Zagreb (Croatia), and New York (US). It was a product from a group of brilliant college graduates, some of whom were world-class programmers. They wanted to build personalised and interactive online learning platform using online video. But there was a problem: an interactive online video didn't exist. So they decided to pivot and build just that. And that is a moment when I joined the team.

Before joining Vibby, I had no experience working in a startup environment. I was amazed by how many smart people worked there and how young the team was. They were all my age and just out of college. 

<section class="idea g1-1 grid-inner">

### The challenge
How to make an online video more interactive? How to show only essential bits of video to the audience? At the time, I felt something could be done about it. I felt idea had potential and believed we could build something special.

<figure class="project-width">
  <simg name="stjepangrgic-project-vibby-idea.jpg" />
</figure> 

### My role
I was the first and only designer on the team. So I was involved in every step of product creation from rebranding to developing interactive wireframes. I worked on a video player user interface, the experience of creating interactive videos, website and presentations for investors.

Unexpectedly I worked as a part of the frontend development team as I had the most experience writing CSS and converting designs in working code. So basically I 'sliced' every one of the designs I did.

</section>

## Experiences
Early on, we realised that creating an interactive online video from existing videos is going to be challenging. So we created two distinct experiences. Creating and watching.


### Vib Creation process
Vib creation was 3 part process of highlighting the most important/entertaining/informative/crazy parts of the video. We had to simplify steps several times as test users were not able to figure out how to do it in the first few iterations.

<figure class="project-width" style="mix-blend-mode: darken;">
  <simg name="stjepangrgic-project-vibby-vib-creation-process.jpg" />
</figure>

You should be able to see the final result [here](https://www.vibby.com/create/1). If not, you can check out the video below.


<div class="vibby-player full-width grid-inner">

### Vibby player
The interactive player was the second part of the equation. We tried to find an intuitive way of watching the highlighted parts of the video. We experimented and developed a few different ways of commenting on those highlights.
  
<figure class="full-width"> <!-- style="max-width: 1795px;" -->
  <simg name="stjepangrgic-project-vibby-player.jpg" />
</figure>

I hope you can still see how it works [here](https://www.vibby.com/watch?vib=71KCMcqWZUc).

</div>

## Final experience
If links above aren't working, you can see the final experience of creating and sharing a 'vib' in the short video below.

<div class="video photo-width">
  <video loop controls>
    <source src="/vibby-how-it-works.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
  </video>
</div>

Designing and developing those features took most of my time. However, I have also worked on other parts of the product and marketing.

<hr class="gradient">

## Website
Concept of the short highlighted videos was new to everyone, so we had to communicate that and other functionality on the website. Here are some pages.

<figure class="project-width">
  <simg name="stjepangrgic-project-vibby-website.jpg" />
</figure>

<hr class="gradient">

## Branding
I worked on creating new branding as a team pivoted idea from a video education platform to interactive video platform just before I joined.

<figure class="project-width" style="mix-blend-mode: darken;">
  <simg name="stjepangrgic-project-vibby-logo-ideas.jpg" />
</figure>

<figure class="project-width">
  <simg name="stjepangrgic-project-vibby-logo-conception.jpg" />
</figure>

<figure class="project-width">
  <simg name="stjepangrgic-project-vibby-logo-unaccepted.png" />
</figure>

The final logo team decided to use.

<figure class="project-width">
  <simg name="stjepangrgic-project-vibby-logo-accepted.png" />
</figure>

<div class="conclusion full-width grid">

## So was Vibby a success?
Yes and no. It wasn't successful in reaching a big global audience and becoming a way to consume some longer-form video content in a shorter way. However, it was a success in many ways for me. I worked with great smart people that I admire, and I stayed a friend with. I got introduced to the whole startup world and how it functions. While I was there, we managed to go from a few sign-ups a week to over 100 a day. Which was not spectacular on its own, but it mead us feel great.

## Conclusion
Ultimately I will remember the time I was working there as one of the best days of my life. I enjoyed hustling and figuring out technical and creative solutions for the problems we faced. I enjoyed every second.

## Check out next

<div class="next-project project-width">
  <ProjectCard
    url="/work/agrivi"
    title="Agrivi"
    description="Farm management software"
    bgImage="stjepangrgic-agrivi-card-bgImage.jpg"
    projectImage="stjepangrgic-agrivi-card-projectImage.png"
    underlinColor="#5FC21E"/>
</div>

</div>

<script>
import slink from '@/components/slink.vue'
import simg from '@/components/simg.vue'
import ProjectCard from '@/components/ProjectCard.vue'

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
  --subtitle-color #538AFF
  --page-header-bgc #F9FAFC
  --content-bgc #F9FAFC
  --conclusion-bg: #ECF0F2

  .idea
    background-color #32323C
    margin-top: 3rem;
    padding-bottom: 4rem;
    h3, p
      color #fff
    p
      opacity 0.9
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

  .vibby-player
    background-color: #E7F5FF;
    margin-top: 4rem;
    padding-bottom: 4rem;
    figure
      margin-top: 2rem !important
      margin-bottom: 2rem !important
  .video
    margin: 1rem auto;
    video
      width: 100%
</style>
