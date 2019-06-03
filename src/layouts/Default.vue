<template>
	<div class="layout">
		<Header
			:siteName="$static.metaData.siteName"
			siteLogo="/assets/static/src/favicon.png"
		/>
		<slot />
		<Footer
			v-if="footer"
			:siteName="$static.metaData.siteName"
			siteLogo="~/assets/static/src/favicon.png"
		/>
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


</style>
