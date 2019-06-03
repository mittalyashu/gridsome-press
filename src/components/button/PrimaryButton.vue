<template>
	<g-link :to="link" class="primary-button">
		{{ text }}
	</g-link>
</template>

<script>
export default {
	name: "PrimaryButton",
	props: {
		text: {
			type: String,
			default: ""
		},
		link: {
			type: String,
			default: ""
		}
	}
}
</script>

<style lang='sass'>
.primary-button
	display: inline-block
	font-size: 1.2rem
	color: #fff
	background-color: #3eaf7c
	padding: .8rem 1.6rem
	border-radius: 4px
	transition: background-color .1s ease
	box-sizing: border-box
	border-bottom: 1px solid #389d70
</style>
