<script lang="ts">
	import ProductList from "$lib/component/ProductList.svelte";
	import { allProducts } from "$lib/mock/products";

	let results = allProducts;

	function search() {
		results = allProducts.slice(0, 3);
	}
</script>

<div class="search">
	<!-- prettier-ignore -->
	<input type="text" class="input">
	<!-- prettier-ignore -->
	<button class="btn" on:click={search}>Pretraži</button>
</div>

{#key results}
	<div class="fade-in">
		<ProductList products={results} />
	</div>
{/key}

<style lang="scss">
	.search {
		justify-self: center;
		width: 100%;
		max-width: calc(0.6 * $page-width);

		padding-bottom: 4rem;

		display: flex;
		gap: 2rem;

		input {
			flex-grow: 1;
		}
	}

	.fade-in {
		animation: 500ms ease-out fade-in;
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
