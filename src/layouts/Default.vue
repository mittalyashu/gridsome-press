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

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
<script>
import Header from "./partials/Header";
import Footer from "./partials/Footer";

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
