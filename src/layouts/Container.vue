<template>
	<div :style="{ maxWidth: width }" class="container">
		<slot />
	</div>
</template>

<script>
export default {
	name: "Container",
	props: {
		width: {
			type: String,
			default: null
		}
	}
};
</script>

<style lang='sass'>
.container
	margin: 0 auto
	padding-left: 20px
	padding-right: 20px
</style>
