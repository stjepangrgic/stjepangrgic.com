<template>
  <div :class="['post', scopeClass()]">
    <Navbar :attributes="page.attributes" :class="[scopeClass('__nav')]"/>
    <main>
      <article ref="article">
        <PageHeader
          :title="page.attributes.title"
          :subtitle="page.attributes.subtitle"
          :smallImage="page.attributes.smallImage"
          :updatedAt="updatedAt"
          :datetime="datetime"
          :readingTime="readingTime"/>
        <section class="content text-width-each">
          <slot name="default" />
        </section>
      </article>
    </main>
    <Footer :class="scopeClass('__footer')" />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageInfo from '@/components/PageInfo.vue'
import simg from '@/components/simg.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
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
    this.updatedAt = this.page.attributes.updatedAt.toString().split(" ").splice(1, 3).join(" ")
    this.readingTime = Math.ceil(this.$refs.article.innerText.split(/\s/g).length/150)
    let date = this.page.attributes.updatedAt
    this.datetime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  },
  methods: {
    scopeClass(suffix) {
      if (suffix) {
        return this.page.attributes.slug.split('/').slice(-1)[0] + suffix
      } else {
        return this.page.attributes.slug.split('/').slice(-1)[0]
      }
    }
  },
}

</script>
<style lang="stylus">
.post
  // background-color #afa
  .content
    // background-color #aaf
  
// .page-header
//   --page-header-bgc: linear-gradient(38deg, #FFFFFF 19%, #F8F8F8 54%, #F8F8F8 100%)
  
// .page-title
//   padding-bottom 5.5rem
//   border-bottom 2px solid #FFDB17  
//   background-size 100%
//   display block
//   position relative
  
// .small-image
//   position absolute
//   z-index -1

// .info
//   font-size 1rem
//   padding-top 0.5rem
//   line-height 40px
//   span
//     margin-right 2rem
  
.content
  // margin-top 2rem
  // padding-bottom 4rem
</style>

