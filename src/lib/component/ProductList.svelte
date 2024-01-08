<script lang="ts">
	import type { Product } from "$lib/model/product";

	export let products: Product[];
</script>

<div class="list">
	{#each products as product}
		<a href="TODO">
			<article class="product">
				<!-- prettier-ignore -->
				<img src="/product-preview/{product.image}" alt="preview link is broken" class="product__preview">
				<div class="product__info">
					<p class="product__name">{product.name}</p>
					<p class="product__price">{product.price} €</p>
				</div>
			</article>
		</a>
	{/each}
</div>

<style lang="scss">
	.list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
		gap: 2rem;

		// maybe?
		// animation: 500ms ease-out fade-in;
	}

	p {
		margin: 0;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.product {
		text-align: center;
		line-height: 1;

		transition: all 100ms ease-out;

		&__preview {
			width: 100%;
			aspect-ratio: 1;
			object-fit: cover;

			box-shadow: 0 0 0 $clr-faint;
			transition: box-shadow 100ms ease-out;
		}

		&__info {
			padding: 1rem;

			> * + * {
				margin-top: 0.5rem;
			}
		}

		&__name {
			text-decoration-line: underline;
			text-decoration-color: transparent;
			transition: text-decoration-color 100ms ease-out;
			font-weight: $fw-bold;
		}

		&__price {
			color: $clr-faint;
		}
	}

	a:hover {
		.product__preview {
			// opacity: 0.9;
			box-shadow: 0 0 5px $clr-faint;
		}

		.product__name {
			text-decoration-color: currentColor;
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
