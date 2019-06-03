<template>
	<Layout>
		<container width="960px">
			<div class="home">
				<div class="home__hero">
					<g-image
						alt="Logo"
						src="~/favicon.png"
						width="280"
						class="home__hero-image"
					/>

					<h1 class="home__hero-title">Gridsome Docs</h1>

					<div class="home__hero-label label">
						Gridsome-powered static site generator for docs
					</div>

					<primary-button
						text="Get Started"
						link="/guide"
						class="home__hero-cta"
					/>
				</div>
				<div class="home__features">
					<features />
				</div>
			</div>
		</container>
	</Layout>
</template>

<script>
import Container from "../layouts/Container";
import PrimaryButton from "../components/button/PrimaryButton";
import Features from "../components/Features";

export default {
	name: "IndexPage",
	components: {
		Container,
		PrimaryButton,
		Features
	}
};
</script>
<style lang="sass">
.home
	padding: 3.6rem 2rem 0px
	margin-top: 3rem
	text-align: center

	&__hero
		&-image
			margin-bottom: 1.5rem

		&-title
			margin-top: .3rem
			margin-bottom: 1.8rem
			font-size: 3rem
			font-weight: 600
			line-height: 1.25

		&-label
			margin-bottom: 1.8rem
			margin-left: auto
			margin-right: auto
			max-width: 35rem
			font-size: 1.6rem
			line-height: 1.3
			color: #6a8bad

		&-cta
			margin-bottom: 1.8rem

	&__features
		border-top: 1px solid #eaecef
		padding: 1.2rem 0
		margin-top: 2.5rem
</style>
