<template>
	<h1 class="pageTitle">
		{{title}} <br v-if="subtitle">
		<span v-if="subtitle" class="subtitle" :style="{ color: accentColor }">{{subtitle}}</span>
	</h1>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'accentColor']
}
</script>

<style lang="stylus" scoped>
	.pageTitle
		font-size 3rem
		line-height 1.333333
		margin 0
		margin-bottom 5rem
		.subtitle
			font-weight: 400;
</style>