<template>
  <fragment>
    <Navbar :attributes="page.attributes"/>
    <main class="home">
      <PageHeader
        :title="page.attributes.title"
        :subtitle="page.attributes.subtitle"
        :smallImage="page.attributes.smallImage"
        test="test" class="test"/>
      <!-- <PageInfo :attributes="page.attributes" :displayReadingTime="false" /> --> <!-- This is temporary solution becouse I have no time to make functional component that is going to work on evey page -->
      <section class="content grid">
        <slot name="default" />
      </section>
    </main>
    <Footer/>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import PageHeader from '@/theme/components/PageHeader.vue'
import PageInfo from '@/theme/components/PageInfo.vue'
import Footer from '@/theme/components/Footer.vue'
import Navbar from '@/theme/components/Navbar.vue'

export default {
  components: {
    Fragment,
    PageHeader,
    PageInfo,
    Footer,
    Navbar,
  },
  props: ['page'],
  data: function () {
    return {
    }
  },
  mounted() {
    // console.log(this.page)
  }
}
</script>

<style lang="stylus">
.home
  .small-image
    width 785px
    bottom 0
    right 0
    transform translate(72px, 3.3613445%)
  .content
    margin-top 5rem
</style>

