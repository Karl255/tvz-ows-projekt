<script lang="ts">
	import ProductList from "$lib/component/ProductList.svelte";
	import { allProducts } from "$lib/mock/products";
</script>

<h1>Svi proizvodi</h1>

<ProductList products={allProducts} />

<style lang="scss">
	h1 {
		font-size: $fz-title;
		font-weight: $fw-bold;
		text-align: center;
		margin-bottom: 2rem;
	}
</style>
