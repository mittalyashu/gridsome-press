<template>
	<div v-if="features.length > 0" class="features__list">
		<div v-for="feature in features" class="features__list-item">
			<h2>{{ feature.title }}</h2>
			<p>{{ feature.description }}</p>
		</div>
	</div>
</template>

<script>
import featuresData from "../data/features.yml";

export default {
	name: "Features",
	computed: {
		features() {
			return featuresData;
		}
	}
}
</script>

<style lang='sass'>
.features__list
	display: flex
	flex-direction: column
	flex-wrap: wrap
	align-items: flex-start
	align-content: stretch
	justify-content: space-between

	&-item
		text-align: left
		flex-grow: 1
		flex-basis: 30%
		padding: 0px 1.5rem

		h2
			font-size: 1.4rem
			font-weight: 500
			color: rgb(58, 81, 105)

		p
			color: rgb(78, 110, 142)

@media (min-width: 719px)
	.features__list
		flex-direction: row

		&-item
			max-width: 30%
			padding: 0
</style>
