<script lang="ts">
	import type { Product } from "$lib/model/product";
	import ProductComponent from "./Product.svelte";

	export let products: Product[];
</script>

<div class="list">
	{#each products as product}
		<ProductComponent {product} />
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

	@keyframes fade-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
