<template>
	<layout :footer="false">
		<docs-layout :config="config" :links="links" :subtitles="$page.doc.subtitles" :slug="slug">
			<div v-html="$page.doc.content"></div>
		</docs-layout>
	</layout>
</template>

<page-query>
query DocPage ($path: String!) {
	doc: docPage (path: $path) {
		path
		headings(depth: h1) {
			value
		}
		subtitles: headings(depth: h2) {
			value
			anchor
		}
		content
	}
}
</page-query>

<script>
import DocsLayout from "../layouts/Docs";
import Links from "../data/sidebar.json";

export default {
	name: "DocsTemplate",
	components: {
		DocsLayout
	},
	computed: {
		slug() {
			return this.$router.history.current.path.split("/")[1];
		},
		config() {
			let currentRoute = "/" + this.slug;
			return Links[currentRoute].config;
		},
		links() {
			let currentRoute = "/" + this.slug;
			return Links[currentRoute].links;
		}
	}
};
</script>
