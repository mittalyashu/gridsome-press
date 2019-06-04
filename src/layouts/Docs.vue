<template>
	<div class="docs">
		<div class="docs__sidebar">
			<div class="docs__sidebar-heading">
				{{ slug }}
			</div>
			<template v-if="config.sidebar === 'auto'">
				<ul class="sidebar__group">
					<li
						v-for="subtitle in subtitles"
						:key="subtitle.value"
						class="sidebar__group-item"
					>
						<g-link :to="'/' + slug + subtitle.anchor" class="sidebar-link">
							{{ subtitle.value }}
						</g-link>
					</li>
				</ul>
			</template>
			<template v-else>
				<ul class="sidebar__group">
					<li
						v-for="(link, i1) in links"
						:key="`link-${link.text}-${i1}`"
						class="sidebar__group-item"
					>
						<g-link :to="'/' + slug + link.link" class="sidebar-link">
							{{ link.text }}
						</g-link>
						<ul v-if="config.level === 2" class="sidebar__subgroup">
							<li
								v-for="(subtitle, i2) in subtitles"
								class="sidebar__subgroup-item"
							>
								<g-link
									:key="`sublink-${subtitle.value}-${i2}`"
									class="sidebar-link"
								>
									{{ subtitle.value }}
								</g-link>
							</li>
						</ul>
					</li>
				</ul>
			</template>
		</div>
		<div class="docs__content">
			<div class="docs__content-page">
				<post-layout>
					<slot />
				</post-layout>
			</div>
		</div>
	</div>
</template>

<script>
import PostLayout from "./Post";

export default {
	name: "Docs",
	props: {
		slug: {
			type: String,
			default: null
		},
		config: {
			type: Object,
			default: {}
		},
		links: {
			type: Array,
			default: []
		},
		subtitles: {
			type: Array,
			default: []
		}
	},
	components: {
		PostLayout
	},
	mounted() {
		console.log(this.$route);
	}
};
</script>

<style lang='sass'>
.docs
	margin-top: 3.6rem
	display: flex

	&__sidebar
		padding-top: 1.5rem
		padding-bottom: 1.5rem
		background-color: #fff
		position: fixed
		top: 3.6rem
		bottom: 0
		left: 0
		width: 16.4rem
		z-index: 10
		margin: 0
		border-right: 1px solid #eaecef
		overflow-y: auto

		&-heading
			font-size: 1.1rem
			font-weight: 700
			text-transform: capitalize
			padding: 0 1.5rem
			margin-bottom: .5rem

	&__content
		padding-left: 16.4rem
		width: 100%

		&-page
			padding-left: 2rem
			padding-right: 2rem
			padding-bottom: 2rem

.sidebar__group, .sidebar__subgroup
	padding: 0
	margin: 0
	list-style-type: none

.sidebar
	&-link
		font-weight: 400
		padding-left: 2rem
		color: #2c3e50
		padding: .35rem 1rem .35rem 2rem

	&__group
		&-item
			display: flex
			flex-direction: column

	&__subgroup
		&-item
			padding-left: 1rem
			font-size: .95em

.sidebar-link.active--exact
	font-weight: 600
	color: #3eaf7c
	border-left-color: #3eaf7c

@media (min-width: 719px)
	.docs
		flex-direction: row

		&__sidebar
			width: 20rem

		&__content
			padding-left: 20rem

			&-page
				max-width: 740px
				margin: 0 auto
</style>

