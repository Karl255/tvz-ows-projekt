<script lang="ts">
	import ProductList from "$lib/component/ProductList.svelte";
	import { featuredProducts } from "$lib/mock/products";
</script>

<h1 class="sr-only">Wood U - color yourself</h1>

<div class="hero content__edge">
	<!-- prettier-ignore -->
	<img src="/hero.png" alt="hero">
</div>

<div class="quote">
	<p>Drveni nakit brenda WOOD U namjenjen je odvažnim ženama koje biraju radost umjesto dram</p>
</div>

<section class="featured">
	<h2 class="featured__title">Istaknuti proizvodi</h2>

	<div>
		<ProductList products={featuredProducts} />
	</div>

	<!-- prettier-ignore -->
	<a href="/artikli" class="btn">Pregledaj sve</a>
</section>

<style lang="scss">
	.hero {
		margin-block: 2rem;

		img {
			// image is 1920x720
			width: 100%;
			aspect-ratio: 8/3;
			min-height: 360px;
			object-fit: cover;

			@include desktop-only {
				max-height: 720px;
				object-fit: contain;
			}
		}
	}

	.quote {
		margin-block: 3rem;

		p {
			max-width: 60ch;
			margin-inline: auto;
			text-align: center;
			text-wrap: balance;
		}
	}

	.featured {
		margin-block: 2rem;

		&__title {
			text-align: center;
		}

		> * + * {
			margin-top: 2rem;
		}
	}

	a.btn {
		color: white;
		background-color: black;
		text-decoration: none;

		display: block;
		width: max-content;
		margin-inline: auto;
		padding: 0.5rem 1rem;

		transition: opacity 100ms ease-out;

		&:hover {
			opacity: 0.8;
		}
	}
</style>
