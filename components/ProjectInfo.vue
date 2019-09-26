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

<style lang="stylus">
@import "../node_modules/rupture/rupture"
.project-info
  display: flex;
  margin-top: 3rem;
  > *
    margin-right: 3rem
    display: flex;
    flex-direction: column;
  +below(380px)
    flex-direction: column;
    margin-top 2rem
    > *
      margin-top 1rem
      p
        margin-top 0
  small
    font-size: 1rem
    line-height: 1.5;
    color rgba(#000, 0.3)
</style>