<template>
  <saber-link
    :to="url"
    class="small-card"
    :style="styling">
      <h3>{{ title }}</h3>
      <slink :isLink="false" linkColor="#fff" >See more</slink>
  </saber-link>
</template>

<script>
import slink from '@/theme/components/slink.vue'  
export default {
  props: ['url', 'title', 'bgColor', 'icon'],
  components: {
    slink
  },
  computed: {
    styling() {
      return {
        backgroundColor: this.bgColor,
        backgroundImage: 'url(' + require('@/assets/images/' + this.icon) + ')'
      }
    }
  },
}
</script>

<style lang="stylus">
  .small-card {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-bottom: 24px;
    padding-right 2rem
    border-radius: 3px;
    overflow: hidden;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    color #fff
    text-decoration none
    &:hover {
      .link {
        text-decoration underline
      }
    }
    // .link {
    //   position relative
    //   top 4px
    // }
    h3 {
      margin-top: auto;
      font-size 30px
      color: #fff;
      // line-height 1.2
      line-height 42px
      margin-bottom 0
    }
  }
</style>
