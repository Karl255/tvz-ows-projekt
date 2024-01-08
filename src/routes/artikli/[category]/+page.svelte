<script lang="ts">
	import { page } from "$app/stores";
	import ProductList from "$lib/component/ProductList.svelte";
	import { allProducts } from "$lib/mock/products";
	import { ProductType } from "$lib/model/product";

	interface Category {
		title: string;
		productType: ProductType;
	}

	const categories: Record<string, Category> = {
		["naušnice"]: {
			title: "Naušnice",
			productType: ProductType.EARRINGS,
		},
		["prsteni"]: {
			title: "Prsteni",
			productType: ProductType.RING,
		},
		["ogrlice"]: {
			title: "Ogrlice",
			productType: ProductType.NECKLACE,
		},
	};

	$: category = categories[$page.params.category]!;

	$: products = allProducts.filter(({ type }) => type === category.productType);
</script>

<h1>{category.title}</h1>

<ProductList {products} />

<style lang="scss">
	h1 {
		font-size: 1.5rem;
		font-weight: $fw-bold;
		text-align: center;
		margin-bottom: 2rem;
	}
</style>
