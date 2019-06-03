<template>
	<header class="header">
		<div class="header__menu-toggle">

		</div>
		<g-link to="/" class="header__site">
			<g-image :src="siteLogo" class="header__site-logo" />
			<div class="header__site-name">
				{{ siteName }}
			</div>
		</g-link>
		<div class="header__navbar">
			<g-link :to="item.link" v-for="item in navbar" :key="item.text" class="header__navbar-item">
				{{ item.text.trim() }}
			</g-link>
		</div>
	</header>
</template>

<script>
import NavbarItem from "../../data/navbar.json"

export default {
	name: "Header",
	props: {
		siteLogo: {
			type: String,
			default: ""
		},
		siteName: {
			type: String,
			default: ""
		}
	},
	computed: {
		navbar() {
			return NavbarItem
		}
	},
}
</script>

<style lang='sass'>
.header
	display: flex
	z-index: 20
	border-bottom: 1px solid rgb(234, 236, 239)
	position: fixed
	top: 0
	left: 0
	right: 0
	background-color: white
	line-height: 2.2rem
	padding: 0.7rem 1.5rem

	&__menu-toggle
		display: none
		width: 1.25rem
		height: 1.25rem
		position: absolute
		top: 0.6rem
		left: 1rem
		cursor: pointer
		padding: 0.6rem

	&__site
		display: inline-flex

		&-logo
			height: 2.2rem
			min-width: 2.2rem
			margin-right: .8rem

		&-name
			font-size: 1.3rem
			font-weight: 600
			color: rgb(44, 62, 80)

	&__navbar
		margin-left: auto

		.active--exact
			margin-bottom: -2px
			border-bottom: 2px solid #46bd87

		&-item
			margin-left: 1.5rem
			line-height: 2rem
			color: #2c3e50

			&:hover
				margin-bottom: -2px
				border-bottom: 2px solid #46bd87
</style>

