<template>
	<a :href="link" v-if="external">
		<slot />
	</a>
	<g-link v-else :to="link">
		<slot />
	</g-link>
</template>

<script>
export default {
	name: "Link",
	props: {
		link: {
			type: String,
			default: null
		},
		external: {
			type: Boolean,
			default: false
		}
	}
};
</script>
