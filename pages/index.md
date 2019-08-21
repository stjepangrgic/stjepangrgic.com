---
layout: page
---

<header class="grid-width">
  <p><b>Hi, my name is Stjepan</b>. I am a curious human being exploring myself and the world through art and travel. By challenging myself to draw, take photos, read, do something different every day I am trying to grow as a person. If you're curious, read <saber-link to="/my-story">my story</saber-link> or find out what I am doing <saber-link to="/my-story">now</saber-link>.</p>
  <p class="short"><b>I am also a digital product designer</b> with over six years of experience working in both startups and advertising agencies.  I’ve been fortunate enough to work with great companies and even greater people. I shaped products and helped companies grow. If you wonder how that looks like, check out <saber-link to="/my">my work</saber-link> or read my <saber-link to="/my-story">resume</saber-link>.</p>
  <simg name="desk-illustration.svg" class="desk" />
  <!-- <simg name="stjepangrgic-portrait.jpg" /> -->
</header>




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
    // icon() {
    //   return {
    //     backgroundImage: 'url(' + require('@/assets/images/' + 'fail.svg') + ')'
    //   }
    // }
  }
}
</script>

<style lang="stylus" scoped>

  .site
    margin-top: 4vh;

  header
    position relative
    .desk
      position: relative;
      top: -2rem;
      @media screen and (min-width: 800px)
        position: absolute;
        right: -4.7rem;
        bottom: -6rem

</style>





