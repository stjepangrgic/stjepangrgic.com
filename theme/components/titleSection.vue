<template>
	<h1 class="pageTitle">
		{{first}} <br>
		<span class="second">{{second}}</span>
	</h1>
</template>

<script>
export default {
  props: ['first', 'second']
}
</script>

<style lang="stylus" scoped>
	.pageTitle
		font-size 3rem
		line-height 1.333333
		margin 0
		margin-bottom 5rem
		.second
			font-weight: 400;
</style>