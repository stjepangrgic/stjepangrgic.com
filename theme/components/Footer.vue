<template>
  <div class="footer full-width grid">
    <div class="grid-width">
      <header>
        <h2>
          You are awesome<br>
          <span class="light">
            for reaching all the way down!
            <span role="img" aria-label="Praise Hands">🙌</span>
          </span>
        </h2>
      </header>
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
      </section>
      <section class="gray">
        <p>Content © {{now}} Stjepan Grgic. All rights reserved. <br> Design and code (except graphics) are open source on <saber-link to="/credits">GitHub</saber-link>. Built with <saber-link to="/credits">Vue Js</saber-link> and <saber-link to="/credits">Saber</saber-link>. Hosted on <saber-link to="/credits">Netlify</saber-link>.</p> <br>

        <p>See any grammar mistake or have feedback on this site? Pleas open an GitHub issue. <br> Read the <saber-link to="/credits">credits</saber-link>. </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
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

<style lang="stylus" scoped>
  .footer
    transition: filter .5s cubic-bezier(.52,.02,.5,1.02)
    background-color #ccc
    padding-bottom 100px
    // margin-top 6rem
    background: #FAFAFA;
    border-top 2px solid #F1F1F2;
    .gray
      line-height 36px
      margin-top 4rem
      font-size 1.25rem
      p 
        margin-bottom 0
        color #777
      a
        color inherit
        text-decoration underline
        &:before
          display none
        
    h2
      margin-top 4rem
      font-size 36px
      // line-height 1.160714286
      line-height 48px
      .light
        font-weight 400
  .newsletter
    display grid
    grid-template-columns: 1fr 1fr
    margin-top 2rem
    @media screen and (max-width 800px) {
      display flex
      flex-direction column
      // display block
    }
  form
    margin-top 3rem
    max-width 488px
    // width 488px
    width 100%
    display grid
    grid-row-gap 20px
    grid-template-columns: 1fr 2fr
    align-items center
    @media screen and (max-width 800px) {
      margin-top 0
      max-width 100%
      span {
        grid-column 1/ -1
      }
    }
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
