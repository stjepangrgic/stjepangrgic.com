---
layout: page
---

<ProjectHeader
  title="Share Istria"
  subtitle="Creative Tourism Campaign"
  description="Is therm i never herd befor starting to work for Agrivi. While Idea seamed ridiculus to me at first, I found out what such software can actualy do. So I decided to join and go on the journay, that ended too soon."
  accentColor="#0CB9A3"
/>
<div class="hero hero-width">
  <img src="@/assets/images/stjepangrgic-projects-share-istria.jpg">
</div>

## The Idea
My idea was to use incorporate distinctive triangular shape of Istrian peninsula together with saturated and energetic colors. My idea was to use incorporate distinctive triangular shape of Istrian peninsula together with saturated and energetic colors:

- Branding
- Iconography
- Photography

<div class="gradient full-width">

<div class="grid text-width">

## Branding
My idea was to use incorporate distinctive triangular shape of Istrian peninsula together with saturated and energetic colors.

### Energetic colors

<ul class="colors">
  <li v-for="color in colors" :style="{ backgroundColor: color }">
    <span>{{color}}</span>
  </li>
</ul>

<div class="test">
  <div class="clean">
    <span class="plus">+</span>
    <h3>Clean & Fun Type</h3>
    <img src="@/assets/images/stjepangrgic-projects-share-istria-font@2x.png" alt="">
  </div>
  <div class="plus">+</div>
  <div class="peninsula">
    <h3>Istrian Peninsula + Travel Photos</h3>
    <img src="@/assets/images/stjepangrgic-projects-share-istria-peninsula@2x.png" alt="">
  </div>
</div>

<div class="logo">
  <img src="@/assets/images/stjepangrgic-projects-share-istria-logo@2x.png" alt="">
</div>

</div>

</div> <!-- Gradient END -->

## Iconography
My idea was to use incorporate distinctive triangular shape of Istrian peninsula together with saturated and energetic colors. My idea was to use incorporate distinctive triangular shape of Istrian peninsula together with saturated and energetic colors:

<div class="img-icons icon-width">
  <img src="@/assets/images/stjepangrgic-projects-share-istria-icons@2x.jpg">
</div>

## Photography
Bussy photo can only convey business, so I suggested to use colorful photos with one focus, and bold colors. My idea was to use incorporate distinctive triangular shape of Istrian peninsula together with saturated and energetic colors.

<div class="photograhy icon-width">
  <img src="@/assets/images/stjepangrgic-projects-share-istria-photography@2x.png">
</div>


<script>
import slink from '@/theme/components/slink.vue'
import ProjectHeader from '@/theme/components/ProjectHeader.vue'
export default {
  components: {
    slink, ProjectHeader
  },
  data() {
    return {
      colors: [
        '#4640AC',
        '#BF54AD',
        '#00A0E6',
        '#FFC41F',
        '#FF514D',
        '#47B900'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .hero {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }
  .test {
    margin-top: 3rem;
    max-width: 970px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    /*grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));*/
    grid-template-columns 1fr 1fr 1fr
    align-items: center;

    h3 {
      padding-left: 0;
      margin-bottom: 3rem;
    }
    .clean {
      height: 100%;
      display: flex;
      flex-direction: column;

      .plus {
        margin-bottom: 2rem;
      }
    }
  }
  .plus {
    opacity: 0.3;
    font-size: 48px;
    color: #00A0E6;
    letter-spacing: 0.47px;
    text-align: center;
    font-weight: 400;
    /*justify-content: center;*/
  }
  .gradient {
    background-image: linear-gradient(180deg, #FFFFFF 0%, #F9FBFC 21%);
    margin-bottom: 5rem;
  }

  .logo {
    padding: 7rem 0;
    display: flex;
    justify-content: center;
    img {
      align-self: center
      max-width: 613px;
      width: 100%;
    }
  }
  .colors {
    margin-top: 2rem;
    list-style: none
    display grid
    padding-left: 0rem;
    padding-right: 0rem;
    /*grid-template-columns repeat(6, 1fr);*/
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-column-gap 16px
    grid-row-gap 16px

    li {
      padding: 0;
      margin: 0;
      height: 120px;
      display: flex;
      border-radius: 3px;
      box-shadow: 0 2px 13px 0 rgba(110,114,120,0.15);
      overflow: hidden;
      span {
        padding-left: 1rem;
        align-self: flex-end;
        width: 100%;
        background-color: #fff;
        font-size: 1rem;
        line-height: 2.5;
      }
    }
  }

  .img-icons {
    margin-top: 2rem;
    margin-bottom: 7rem;
  }

  .photograhy {
    margin-top: 2rem;
  }
</style>