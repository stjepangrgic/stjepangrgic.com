<template>
  <footer class="footer full-width grid">
    <simg name="paperplane-illustration.svg" class="paperplane" />
    <!--    
    <header>
      <h2>
        You are awesome<br>
        <span class="light">
          for reaching all the way down!
          <span role="img" aria-label="Praise Hands">🙌</span>
        </span>
      </h2>
    </header> -->
    <!-- Not ready yet -->
    <!--       
    <section class="newsletter">
      <p>
        <b>For updates</b> on new work,<br>
        travel stories<br>
        and design articles,<br>
        <b>subscribe to newsletter</b>.
      </p>
      <form action="">
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <span>I dont send spam unsubscribe at any time</span>
        <input type="submit" value="Subscribe to newsletter">
      </form>
      </section> -->
      <section class="gray g3-3">
        <div class="footer-links">
          <slink url="/">Home</slink>
          <slink url="/now">Now</slink>
          <slink url="/my-story">My Story</slink>
          <slink url="/work">Work</slink>
          <slink url="/book-list">Book list</slink>
<!--           <slink url="/fail-list">Fail list</slink>
          <slink url="/bucket-list">Bucket list</slink> -->
          <slink url="/photography">Photorgaphy</slink>
        </div>
        <p>Content © {{now}} Stjepan Grgic. All rights reserved. <br> Design and code (except graphics) are open source on <a href="https://github.com/stjepangrgic/stjepangrgic.com" target="_blank">GitHub</a>. Built with <a href="https://vuejs.org/" target="_blank">VueJS</a> and <a href="https://saber.land/" target="_blank">Saber</a>. Hosted on <a href="https://www.netlify.com/" target="_blank">Netlify</a>. <!-- Read the <saber-link to="/credits">credits</saber-link>.</p> -->

        <!-- <p>See any grammar mistake or have feedback on this site? <br> Please open a <a href="">GitHub issue</a>. --> </p>
      </section>
  </footer>
</template>

<script>
import simg from '@/theme/components/simg.vue'
import slink from '@/theme/components/slink.vue'

export default {
  components: {
    simg,
    slink
  },
  data () {
    return {};
  },
  computed: {
    now: function () {
      return new Date().getFullYear();
    }
  }
}
</script>

<style lang="stylus">
.footer
  transition: filter .5s cubic-bezier(.52,.02,.5,1.02)
  background-color #FAF8F7
  // padding-bottom 100px
  border-top 2px solid #E6DFDC;
  position relative
  z-index 80
  // overflow-y hidden    
  // margin-top 4rem
  .footer-links
    margin-bottom 1rem
    a
      margin-right 1.5rem
  .paperplane
    position absolute
    top -29px
    right -70px
  .gray
    line-height 36px
    // margin-top 3rem
    margin 4rem 0
    // font-size 1.25rem
    p 
      margin-bottom 0
      color #777
    a
      color #777
      // border-bottom 2px solid #ccc
      transition all 0.1s ease
      &:before
        background-color #E6DFDC
      &:hover
        color #333
        // border-bottom 1px solid #333
      
  h2
    margin-top 4rem
    font-size 36px
    line-height 48px
    .light
      font-weight 400
      
  .newsletter
    display grid
    grid-template-columns: 1fr 1.4fr
    margin-top 2rem
    font-size 1.5rem
    @media screen and (max-width 800px)
      display flex
      flex-direction column
      
  form
    margin-top 3rem
    max-width 488px
    width 100%
    display grid
    grid-row-gap 20px
    grid-template-columns: 1fr 2fr
    align-items center
    @media screen and (max-width 800px)
      margin-top 0
      max-width 100%
      span
        grid-column 1/ -1

    input
      grid-column 1/ -1
    span
      line-height 16px
      text-transform uppercase
      max-width 162px
      display inline-block
      font-size 12px
      font-weight 500
      opacity 0.5
    input[type=submit]
      grid-column 2/ span 1
      justify-self end

</style>
