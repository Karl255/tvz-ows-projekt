<script lang="ts">
	import { allProducts } from "$lib/mock/products";
</script>

{#each allProducts as product}
	<!-- prettier-ignore -->
	<div>
		<p>{product.name}</p>
		<p>{product.price} €</p>
		<p>{product.type}</p>
		<p>{product.colors.join(", ")}</p>
		<img src="/product-preview" alt={product.name}>
	</div>
{/each}
