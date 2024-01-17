<script lang="ts">
	import ProductList from "$lib/component/ProductList.svelte";
	import { featuredProducts } from "$lib/mock/products";
</script>

<h1 class="sr-only">Wood U - color yourself</h1>

<div class="hero content__edge">
	<!-- 768px = 0.8 * $page-width -->
	<img
		srcset="/hero-mini.webp 960w, /hero.webp 1920w"
		sizes="(max-width: 768px) 960px, 1920px"
		src="/hero.webp"
		alt="hero"
	/>
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
	<a href="/artikli" class="btn show-all">Pregledaj sve</a>
</section>

<style lang="scss">
	.hero {
		margin-block: 1rem;

		img {
			// image is 1920x720
			width: 100%;
			min-height: 360px;
			object-fit: cover;

			@include desktop-only {
				max-height: 720px;
				object-fit: contain;
			}
		}
	}

	.quote {
		margin-block: 4rem;

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
