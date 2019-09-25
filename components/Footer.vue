<template>
  <footer class="footer grid">
    <!-- <simg name="paperplane-illustration.svg" class="paperplane project-width" /> -->
    <div class="paperplane project-width">
      <svg width="181" height="105" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path d="M85.128 83.337a36.487 36.487 0 0 0-7.454 9.732c-.587 1.119 1.102 2.107 1.689.988a34.604 34.604 0 0 1 7.148-9.334c.926-.857-.457-2.243-1.383-1.386z" fill="#0FF7AA" fill-rule="nonzero"/>
          <path d="M80.028 59.214c2.857-1.053 5.713-2.113 8.57-3.166 1.174-.432.665-2.329-.522-1.89-2.856 1.053-5.713 2.112-8.57 3.166-1.167.431-.665 2.328.522 1.89z" fill="#FF922B" fill-rule="nonzero"/>
          <path d="M65.035 68.057c1.278-.824 2.563-1.648 3.841-2.472 1.057-.68.078-2.381-.985-1.694-1.278.824-2.563 1.648-3.841 2.472-1.057.68-.078 2.38.985 1.694zM109.233 70.327C102.809 78.235 97.539 86.914 93.54 96.3c-.489 1.15 1.194 2.152 1.69.987 3.932-9.222 9.071-17.804 15.39-25.575.783-.968-.593-2.36-1.388-1.386zM36.45 104.98c7.083-.058 14.257-1.766 20.387-5.396 4.46-2.642 7.833-6.436 11.159-10.341 9.658-11.335 21.339-20.126 35.06-25.954 1.155-.49.157-2.178-.984-1.694C89.348 66.997 77.837 74.997 68.7 85.423c-3.437 3.918-6.607 8.163-10.898 11.205-6.156 4.362-13.891 6.331-21.359 6.397-1.252.006-1.258 1.968.007 1.955zM30.815 89.001c-2.23-3.846-7.676-5.16-10.924-1.864-3.11 3.153-3.032 8.11-.41 11.499 3.195 4.127 8.517 5.527 13.447 6.155 1.246.157 1.233-1.806 0-1.963-5.165-.654-13.617-3.093-13.487-9.772.085-4.31 4.37-7.58 8.179-4.657 4.154 3.186 1.954 6.059-1.105 8.413-.991.753-.013 2.46.985 1.688 3.183-2.453 5.787-5.24 3.315-9.499z" fill="#E6DFDC" fill-rule="nonzero"/>
          <path d="M7.467 98.027c2.387 2.381 5.25 4.232 8.616 4.795 1.232.21 1.76-1.681.521-1.89-3.058-.51-5.582-2.126-7.754-4.291-.893-.89-2.276.497-1.383 1.386z" fill="#D787FF" fill-rule="nonzero"/>
          <path d="M.678 84.704a32.31 32.31 0 0 0 2.642 7.482c.567 1.132 2.256.138 1.689-.987-1.122-2.237-1.905-4.572-2.446-7.012-.274-1.236-2.159-.713-1.885.517z" fill="#E6DFDC" fill-rule="nonzero"/>
          <path stroke="#2470DF" stroke-width="1.304" fill="#D9E7FF" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round" d="M115.683 57.212l27.652-24.744-32.205 8.346z"/>
          <path stroke="#2470DF" stroke-width="1.304" fill="#FFF" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round" d="M93.88 27.445L179.452 1 133.93 52.189l-17.758-9.883-.49 14.906-8.934-20.728z"/>
          <path stroke="#2470DF" stroke-width="1.304" stroke-linecap="round" stroke-linejoin="round" d="M106.748 36.484L165.763 8.3l-49.591 34.006"/>
        </g>
      </svg>
    </div>
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
      <section class="gray">
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
        <p class="notice">Content © {{now}} Stjepan Grgic. All rights reserved. <br> Design and code (except graphics) are open source on <a href="https://github.com/stjepangrgic/stjepangrgic.com" target="_blank">GitHub</a>. Built with <a href="https://vuejs.org/" target="_blank">VueJS</a> and <a href="https://saber.land/" target="_blank">Saber</a>. Hosted on <a href="https://www.netlify.com/" target="_blank">Netlify</a>. <!-- Read the <saber-link to="/credits">credits</saber-link>.</p> -->

        <!-- <p>See any grammar mistake or have feedback on this site? <br> Please open a <a href="">GitHub issue</a>. --> </p>
      </section>
  </footer>
</template>

<script>
import simg from '@/components/simg.vue'
import slink from '@/components/slink.vue'

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
@import "../node_modules/rupture/rupture"
.footer
  position relative
  background-color #F8F8F8
  padding-top 3rem
  padding-bottom 5rem
  .paperplane
    position absolute
    top -27px
    right 5px
    +below(800px)
      display none
  .footer-links
    a
      margin-right 1.5rem
      // font-weight 400
      color #333
  .gray
    p
      font-size 1rem
      padding-top 1rem
      color #333
    
//   // border-top 2px solid #E6DFDC;
//   position relative
//   z-index 80
//   .footer-links
//     margin-bottom 1rem
//     a
//       margin-right 1.5rem
//   .paperplane
//     position absolute
//     top -27px
//     right -70px
//   .gray
//     margin 3rem 0 4rem
//     p 
//       margin-bottom 0
//       color #777
//       font-size 1rem
//       // line-height 1.6
//     a
//       color #777
//       transition all 0.1s ease
//       &:before
//         background-color #E6DFDC
//       &:hover
//         color #333
     
//   h2
//     margin-top 4rem
//     font-size 36px
//     line-height 48px
//     .light
//       font-weight 400
      
//   .newsletter
//     display grid
//     grid-template-columns: 1fr 1.4fr
//     margin-top 2rem
//     font-size 1.5rem
//     @media screen and (max-width 800px)
//       display flex
//       flex-direction column
      
//   form
//     margin-top 3rem
//     max-width 488px
//     width 100%
//     display grid
//     grid-row-gap 20px
//     grid-template-columns: 1fr 2fr
//     align-items center
//     @media screen and (max-width 800px)
//       margin-top 0
//       max-width 100%
//       span
//         grid-column 1/ -1

//     input
//       grid-column 1/ -1
//     span
//       line-height 16px
//       text-transform uppercase
//       max-width 162px
//       display inline-block
//       font-size 12px
//       font-weight 500
//       opacity 0.5
//     input[type=submit]
//       grid-column 2/ span 1
//       justify-self end

</style>
