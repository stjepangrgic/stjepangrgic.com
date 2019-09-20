<template>
  <div :class="this.page.attributes.slug.split('/').slice(-1)[0] + '__nav'">
    <Navbar :attributes="page.attributes"/>
    <main :class="this.page.attributes.slug.split('/').slice(-1)[0]">
      <article ref="article">
        <PageHeader
          :title="page.attributes.title"
          :subtitle="page.attributes.subtitle"
          :smallImage="page.attributes.smallImage" />
        <div class="info grid">
          <span class="grid-width">
            <span class="updatedAt">Updated on <time :datetime="datetime">{{updatedAt}}</time></span>
            <span>{{readingTime}} min read</span>
            <span v-if="this.page.attributes.otherInfo">{{this.page.attributes.otherInfo}}</span>
          </span>
        </div> <!-- This is temporary solution becouse I have no time to make functional component that is going to work on evey page -->
        <!-- <PageInfo :attributes="page.attributes"/> -->
        <section class="content grid">
          <slot name="default" />
        </section>
      </article>
    </main>
    <Footer :class="this.page.attributes.slug.split('/').slice(-1)[0] + '__footer'" />
  </div>
</template>

<script>
// Vue.use(require('vue-moment'));

// import { Fragment } from 'vue-fragment'
import PageHeader from '@/components/PageHeader.vue'
import PageInfo from '@/components/PageInfo.vue'
import simg from '@/components/simg.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    // Fragment,
    PageHeader,
    PageInfo,
    simg,
    Footer,
    Navbar,
  },
  props: ['page'],
  data: function () {
    return {
      readingTime: 0,
      datetime: "",
      updatedAt: "",
      text: ""
    }
  },
  mounted() {
    // this.text = Math.ceil(this.$refs.article.innerText.split(/\s/g).length/100)
    this.updatedAt = this.page.attributes.updatedAt.toString().split(" ").splice(1, 3).join(" ")
    this.readingTime = Math.ceil(this.$refs.article.innerText.split(/\s/g).length/150) // 150 gives more realistc number of minutes to me then 200
    let date = this.page.attributes.updatedAt
    this.datetime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    // console.log(require('@/assets/images/' + this.page.attributes.smallImage))
  },
}

// console.log(this.page.attributes)
</script>
<style lang="stylus" scoped>
.page-title
  padding-bottom 5.5rem
  border-bottom 2px solid #FFDB17  
  background-size 100%
  display block
  position relative
  
.small-image
  position absolute
  z-index -1

.info
  font-size 1rem
  padding-top 0.5rem
  line-height 40px
  span
    margin-right 2rem
  
.content
  // margin-top 2rem
  // padding-bottom 4rem
</style>

