<template>
  <div class="info">
    <span class="updatedAt">Site updated on <time :datetime="datetime">{{updatedAt}}</time></span>
    <!-- <span v-if="displayReadingTime">{{readingTime}} min read</span> -->
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    attributes: {
      required: true
    },
    displayReadingTime: {
      default: true
    },
    text: {
      required: false
    }
  },
  data: function () {
    return {
      readingTime: 0,
      datetime: "",
      updatedAt: ""
    }
  },
  mounted() {
    this.updatedAt = this.attributes.updatedAt.toString().split(" ").splice(1, 3).join(" ")

    // if (this.displayReadingTime) {
    //   this.readingTime = Math.ceil(this.text.split(/\s/g).length/100) // 100 gives more realistc number of minutes to me then 200
    // }

    // let date = this.attributes.updatedAt
    // this.datetime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    // // console.log(require('@/assets/images/' + this.attributes.smallImage))
    // console.log(this.text)
  },
}
</script>

<style lang="stylus" scoped>
.info
  margin-top 0.5rem
  font-size 1rem
  line-height 40px
</style>
