---
layout: page
title: Photography was
subtitle: my first love.
navbarTitle: Photography
---

<!-- All that and the right moment emotion emerges -->
<b>Photography made me see how light reveals the world to us.</b> It made me see the colours, shapes, bright spots and dark shadows. Ultimately, It made me a better designer.

<vue-picture-swipe class="gallery" :items="images" />

<!-- ### How it all started
It all started with the [Wild Kingdom](#). I fall in love with photography, watching an old man go around Africa, play with lions, . I was maybe 4-5 years old, but I can remember it clearly. Mine mind was like a disco ball.

It was the Wild Kingdom. I used to dream about going there and look at them, explore them, take pictures of them, and film them. 
 -->

<script>
import Vue from 'vue'
import VuePictureSwipe from 'vue-picture-swipe';
Vue.component('vue-picture-swipe', VuePictureSwipe);
import simg from '@/components/simg.vue'

export default {
  data( ){
    return {
      images: [
        {
          src: require('@/assets/images/photography/sg-photo-09.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-09.jpg'),
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-01.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-01.jpg'),
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-02.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-02.jpg'),
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-18.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-18.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-03.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-03.jpg'),
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-24.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-24.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-04.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-04.jpg'),
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-05.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-05.jpg'),
          w: 2048,
          h: 1348,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-11.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-11.jpg'),
          class: 'test',
          w: 1365,
          h: 2048,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-06.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-06.jpg'),
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-07.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-07.jpg'),
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-08.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-08.jpg'),
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-10.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-10.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },

        {
          src: require('@/assets/images/photography/sg-photo-12.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-12.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-13.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-13.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-14.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-14.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-15.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-15.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-16.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-16.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-17.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-17.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-19.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-19.jpg'),
          class: 'test',
          w: 1594,
          h: 2048,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-20.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-20.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-22.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-22.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-28.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-28.jpg'),
          class: 'test',
          w: 2048,
          h: 1331,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-36.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-36.jpg'),
          class: 'test',
          w: 1405,
          h: 2048,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-31.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-31.jpg'),
          class: 'test',
          w: 1365,
          h: 2048,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-37.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-37.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-32.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-32.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-34.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-34.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-35.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-35.jpg'),
          class: 'test',
          w: 2048,
          h: 1152,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-25.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-25.jpg'),
          class: 'test',
          w: 2048,
          h: 1365,
          alt: 'Image',
        },
        {
          src: require('@/assets/images/photography/sg-photo-30.jpg'),
          thumbnail: require('@/assets/images/photography/thumb/sg-photo-30.jpg'),
          class: 'test',
          w: 1365,
          h: 2048,
          alt: 'Image',
        },
      ]
    }
  },
  components: {
    simg
  }
}
</script>
<style lang="stylus">
.photography
  --content-bgc: #111
  /*--page-header-bgc: linear-gradient(43deg, #111111 6%, #111111 33%, #1F1F1F 100%)*/
  --page-header-bgc: #111
  --conclusion-bg: #111

  p b
    font-weight: 700
  *
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  &__nav
    color #fafafa
    a:hover
      color #111
  .page-title
    color #eee
  .content
    background-color: #111;
    h2,h3,p
      color #fafafa
    > p
      margin-top: 2rem;
      margin-bottom: 2rem;
  .gallery
    grid-column 2/ -2
    padding-bottom: 3rem
    .my-gallery
      display: grid;
      grid-gap 5px
      grid-template-columns repeat(auto-fit, minmax(260px, 1fr))
      grid-auto-rows 174px
      grid-auto-flow dense
      figure
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        &:nth-of-type(9),
        &:nth-of-type(20)
        &:nth-of-type(24)
        &:nth-of-type(25)
          grid-row: span 2;

        &:nth-of-type(1),
        &:nth-of-type(4),
        &:nth-of-type(18)
          grid-row: span 2;
          grid-column: span 2;
        a
          display: flex;
          height: 100%;
          width: 100%;
          &:before
            display: none;

          img
            max-width: initial;
            width: 100%;
            height: 100%;
            object-fit: cover

  &__footer
    background-color: #111;
    border-top-color: transparent;
    *
      color #eee
    .gray
      p
        color #555
      a
        color #888
        &:before
          background-color: #555;
        &:hover
          color #fff

</style> 
