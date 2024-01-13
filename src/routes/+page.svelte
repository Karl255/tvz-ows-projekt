<script lang="ts">
	import ProductList from "$lib/component/ProductList.svelte";
	import { featuredProducts } from "$lib/mock/products";
</script>

<h1 class="sr-only">Wood U - color yourself</h1>

<div class="hero content__edge">
	<!-- prettier-ignore -->
	<img src="/hero.png" alt="hero">

	<div class="quote">
		<p>Drveni nakit brenda WOOD U namjenjen je odvažnim ženama koje biraju radost umjesto dram</p>
	</div>
</div>

<section class="featured">
	<h2 class="featured__title">Istaknuti proizvodi</h2>

	<div>
		<ProductList products={featuredProducts} />
	</div>

	<!-- prettier-ignore -->
	<a href="/artikli" class="btn show-all">Pregledaj sve</a>
</section>

<style lang="scss">
	.hero {
		margin-block: 2rem;
		display: grid;
		place-items: center;

		> * {
			grid-area: 1 / 1;
		}

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
		p {
			max-width: 45ch;
			margin-inline: auto;
			padding: 2rem;

			background-color: #fffa;
			backdrop-filter: blur(2px);
			font-weight: $fw-bold;

			text-align: center;
			text-wrap: balance;
			transition: background-color 200ms ease-out;

			&:hover {
				background-color: #fffd;
			}
		}
	}

	.featured {
		margin-block: 2rem;

		&__title {
			text-align: center;
			font-weight: $fw-bold;
			font-size: $fz-title;
		}

		> * + * {
			margin-top: 2rem;
		}
	}

	.show-all {
		display: block;
		width: max-content;
		margin-inline: auto;
	}
</style>
