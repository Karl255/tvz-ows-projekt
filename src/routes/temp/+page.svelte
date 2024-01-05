<script lang="ts">
	import { allProducts } from "$lib/mock/products";
</script>

<div class="list">
	{#each allProducts as product}
		<!-- prettier-ignore -->
		<div class="product">
			<p>{product.name}, {product.price} €</p>
			<p>{product.type}</p>
			<p>{product.colors.join(", ")}</p>
			<img src="/product-preview/{product.image}" alt="preview link is broken">
		</div>
	{/each}
</div>

<style lang="scss">
	.list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
		gap: 2rem;
	}

	.product > * + * {
		margin-top: 0.5rem;
	}

	p {
		margin: 0;
	}
</style>
