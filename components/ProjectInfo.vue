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
// .project-info
//   display: flex;
//   margin-top: 7rem;
//   // width min-content;
//   > *
//     margin-right: 4rem
//     display: flex;
//     flex-direction: column;
//   @media screen and (max-width: 800px)
//     flex-direction: column;
//     margin-top 5rem
//     > *
//       margin-top 1rem
//   small
//     font-size: 1rem
//     line-height: 1.5;
//     color rgba(#000, 0.3)
//   p
//     margin: 0;
</style>