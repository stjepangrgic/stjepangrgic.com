<template>
	<div class="project-info">
		<div class="periond">
		  <small>Period</small>
		  <p>{{period}}</p>
		</div>
		<div class="platform">
		  <small>Platform</small>
		  <p>{{platform}}</p>
		</div>
		<div class="role">
		  <small>My role</small>
		  <p>{{role}}</p>
		</div>
	</div>
</template>

<script>
export default {
  props: ['period', 'platform', 'role']
}
</script>

<style lang="stylus" scoped>
.project-info
  /*display: grid;*/
  display: flex;
  /*  grid-column-gap 0.625%
  grid-template-columns: 1fr 1fr 1fr*/
  /*align-items: left;*/
  /*justify-items: start;*/
  /*justify-content: start;*/
  margin-top: 7rem;
  > *
    margin-right: 4rem
    display: flex;
    flex-direction: column;
  small
    font-size: 1rem
    line-height: 1.5;
    font-weight: 600;
    color #A9A7B6
  p
    margin: 0;
</style>