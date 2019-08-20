---
layout: page
---

# Bucket list

Moonshots are important
I knew I want to write a bucket list on this site. But then I realized fails are as important as desires.

## Life

## Travel

### Do
<task title="Take photo for National Geographic" />
<task title="Take photos at Serengeti" />
<task title="See polar light" />
<task title="Croatia tour" />
<task title="Ride a camel" done="true" link="/test" />
<task title="Start a company" done="true" link="/test" />
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
<task title="Acropolis" done="true" link="/test" />
<task title="Piramids" />
<task title="Great coral reef" />
<task title="White desert in Egipt" />

### Visit
<task title="Every continent" />
<task title="Easter island" />
<task title="Rome" done="true" link="/test" />
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
<task title="Petra" done="true" link="/test" />

<script>
import task from '@/theme/components/task.vue'

export default {
  components: {
    task
  },
  props: ['page']
  
}
</script>

<style lang="stylus" scoped>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		li {
			input {
				
			}
		}
	}
</style>