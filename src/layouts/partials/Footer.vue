<template>
	<footer>
		MIT Licensed | Copyright © 2018-present {{ siteName }}
	</footer>
</template>

<script>
export default {
	name: "Footer",
	props: {
		siteName: {
			type: String,
			default: ""
		}
	}
};
</script>

<style lang='sass'>
footer
	padding: 2.5rem
	border-top: 1px solid #eaecef
	text-align: center
	color: #4e6e8e
</style>
