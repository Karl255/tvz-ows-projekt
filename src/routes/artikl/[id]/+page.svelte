<script lang="ts">
	import { page } from "$app/stores";
	import ProductList from "$lib/component/ProductList.svelte";
	import { allProducts } from "$lib/mock/products";

	$: id = $page.params.id ? Number($page.params.id) : null;

	$: product = allProducts.find((product) => product.id === id)!;
</script>

<div class="product">
	<!-- prettier-ignore -->
	<img src="/product-preview/{product.image}" alt="product preview" class="product__preview">

	<div class="product__info">
		<h1 class="title">{product.name}</h1>
		<p class="price">{product.price.toFixed(2)} €</p>
		<p class="description">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci id corporis officiis commodi qui beatae
			neque libero eos minima nobis? Error qui fuga minima ut magni iste unde, nam minus.
		</p>
		<button class="btn add-to-cart">Dodaj u košaricu</button>
	</div>
</div>

<aside class="suggested">
	<h2 class="suggested__title">Možda će vas zanimati...</h2>

	<div class="suggested__list">
		<ProductList products={allProducts.slice(0, 4)} />
	</div>
</aside>

<style lang="scss">
	.product {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;

		@include desktop-only($page-width-sm) {
			grid-template-columns: 1fr 1fr;
			gap: 4rem;
		}
	}

	.product__preview {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
	}

	.product__info > * + * {
		margin-top: 1rem;
	}

	.title {
		font-size: $fz-title;
		font-weight: $fw-bold;
		border-bottom: 1px solid currentColor;
	}

	.price {
		font-weight: $fw-bold;
	}

	.suggested {
		margin-top: 6rem;
		padding-block: 2rem;

		&__title {
			font-size: $fz-title;
			font-weight: $fw-bold;
			text-align: center;
		}

		&__list {
			margin-top: 2rem;
		}
	}
</style>
