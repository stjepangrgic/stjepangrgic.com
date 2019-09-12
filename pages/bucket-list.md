---
layout: post
title: Bucket list is <br> my way to direct myself
navbarTitle: Bucket list
smallImage: bucket-list.png
---

Having a star, a goal to go twords is veryy important. <!-- Mozda dodaj reference na Petersona i kako sam skuzio da sam uvije imao cilj i uspijevao ici naprijed -->

Moonshots are important
I knew I want to write a bucket list on this site. But then I realized fails are as important as desires.

## Life

## Travel

### Do
<task title="Take photo for National Geographic" />
<task title="Take photos at Serengeti" />
<task title="See polar light" />
<task title="Croatia tour" />
<task title="Ride a camel" done="true" />
<task title="Start a company" done="true" />
<task title="Live in desert for a month" />
<task title="Go on Ted conference" />
<task title="Give TED talk" />
<task title="Israeli national trail" />
<task title="Jordan trail" />


### See
<task title="Orinoco" />
<task title="Mount Roraima" />
<task title="Canyon of Tara river" />
<task title="Every Ex You monument" />
<task title="Angel falls" />
<task title="Acropolis" done="true" />
<task title="Piramids" />
<task title="Great coral reef" />
<task title="White desert in Egipt" />

### Visit
<task title="Every continent" />
<task title="Easter island" />
<task title="Rome" done="true" />
<task title="Egypt" />
<task title="Australia" />
<task title="Hong Kong" />
<task title="Tanzania" />
<task title="Serengety" />
<task title="Kilimangaro" />
<task title="Zanzibar" />
<task title="Kenya" />
<task title="Maroko" />
<task title="Thailand" />
<task title="Venezuela" />
<task title="Petra" done="true" />

<script>
import task from '@/theme/components/task.vue'

export default {
  components: {
    task
  },
  props: ['page']
  
}
</script>

<style lang="stylus">
.bucket-list
  .small-image
    width 220px
    right: 5vw;
    top: -30px;
</style>
