---
layout: page
---

<header>
  <h1>Hi, my name is Stjepan <!-- <span role="img" aria-label="Waving Hand">👋</span> --></h1>
  <p>
    I can describe myself as a designer because solving problems makes me happy. Above all, I am a curious human being exploring the world and myself through art and travel. This site houses my thoughts and ideas. It also showcases commercial and personal projects I worked on.
    For more read <saber-link to="/my-story">my story</saber-link> or check what I'm doing <saber-link to="/my-story">now</saber-link>.
  </p>
</header>

<!-- <figure class="page-hero hero-width">
  <simg name="stjepangrgic-portrait.jpg" />
</figure> -->


## Work
Some of my work. Understanding of color, light, shapes, perspective helped me to go on design road I never have planed understanding of color, light, shapes.

<slink url="/work">All projects</slink>

<figure class="projects work-width">
  <projectCard
    url="/work/agrivi"
    title="Agrivi"
    tags="Branding,  Icons,  Web Application,  Corporate Site"
    linkColor="#A5EB3C"
    textColor="#fff"
    image="stjepangrgic-projects-agrivi.jpg"/>
  <projectCard
    url="/work/share-istria" 
    title="Share Istra"
    tags="Branding,  Icons,  Website"
    linkColor="#49EFE7"
    textColor="#fff"
    image="stjepangrgic-projects-share-istria.jpg"/>
</figure>


<!-- ## Personal projects
Some of my work. Understanding of color, light, shapes, perspective helped me to go on design road I never have planed.

<div class="personal">
  <div class="card"></div>
</div> -->

## Growth
Some of my work. Understanding of color, light, shapes, perspective helped me to go on design road I never have planed.

<div class="growth personal-width">
  <smallCard
    url="/fail-list" 
    title="Fail list"
    bgColor="#4F818D"
    icon="fail.svg"/>
  <smallCard
    url="/book-list" 
    title="Book list"
    bgColor="#946395"
    icon="book.svg"/>
  <smallCard
    url="/bucket-list" 
    title="Bucket list"
    bgColor="#B54538"
    icon="bucket.svg"/>
</div>


<script>
import slink from '@/theme/components/slink.vue'
import simg from '@/theme/components/simg.vue'
import sfigure from '@/theme/components/sfigure.vue'
import projectCard from '@/theme/components/projectCard.vue'
import smallCard from '@/theme/components/smallCard.vue'

export default {
  components: {
    slink,
    simg,
    sfigure,
    projectCard,
    smallCard
  },
  computed: {
    icon() {
      return {
        backgroundImage: 'url(' + require('@/assets/images/' + 'fail.svg') + ')'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  header {
    /*padding-top: 10rem;*/
    h1 span {
      font-size: 3rem;
      position: relative;
      top: -0.25rem;
    }
  }

  .projects {
    /*margin-top: 1.5rem;*/
    /*margin-bottom: 2rem;*/
    width: 100%;
    /*grid-column 6/ span 18*/
/*    display: grid;
    grid-column-gap 1rem
    grid-column-gap 1.183432%
    grid-template-columns: 1fr 1fr;
    grid-template-rows: .112676056fr  1fr .112676056fr
    grid-row-gap 0
    a {
      grid-row 1/-2
      &:last-of-type {
        grid-row: 2/-1;
      }
    }*/
  }
  .growth{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap 1.6161616% /*16px*/
    /*grid-template-rows: 1rem 1rem 240px 1rem 1rem*/
    margin-top: 1.5rem;
    height: 272px;
/*    a:nth-child(1) {
      grid-row 3/-1
    }
    a:nth-child(2) {
      grid-row 2/-2
    }
    a:nth-child(3) {
      grid-row 1/-3
    }*/
  }
</style>





