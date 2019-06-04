<template>
	<div class="layout">
		<Header
			:siteName="$static.metaData.siteName"
			siteLogo="/assets/static/src/favicon.png"
		/>
		<slot />
		<Footer v-if="footer" :siteName="$static.metaData.siteName" />
	</div>
</template>

<static-query>
query {
	metaData {
		siteName
	}
}
</static-query>

<script>
import Header from "./partials/Header";
import Footer from "./partials/Footer";

export default {
	name: "DefaultLayout",
	components: {
		Header,
		Footer
	},
	props: {
		footer: {
			type: Boolean,
			default: true
		}
	}
};
</script>

<style lang="sass">
*
	margin: 0
	padding: 0
	box-sizing: border-box

body
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
	font-size: 16px
	-webkit-font-smoothing: antialiased
	color: rgb(44, 62, 80)

a
	color: #3eaf7c
	font-weight: 500
	text-decoration: none

p, ol, ul
	line-height: 1.7
</style>
