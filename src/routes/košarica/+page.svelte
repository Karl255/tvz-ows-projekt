<script lang="ts">
	import { allProducts } from "$lib/mock/products";

	const products = allProducts.slice(0, 3);
</script>

<h1 class="sr-only">Košarica</h1>

<div class="container">
	<table class="cart-list">
		<tr class="cart-list__header">
			<th colspan="2">Proizvod</th>
			<th>Cijena</th>
		</tr>

		{#each products as product}
			<tr class="product">
				<td>
					<!-- prettier-ignore -->
					<img src="/product-preview/{product.image}" alt="product preview">
				</td>

				<td>
					<p>{product.name}</p>
				</td>

				<td class="product__info">
					<p>{product.price.toFixed(2)} €</p>
					<button class="btn btn--compact">Obriši</button>
				</td>
			</tr>
		{/each}

		<tr class="total">
			<td>Ukupno</td>
			<td></td>
			<td>50.00 €</td>
		</tr>
	</table>

	<div class="buttons">
		<!-- prettier-ignore -->
		<a href="/artikli" class="btn btn--secondary">Nastavi kupnju</a>
		<button class="btn">Ispuni podatke za dostavu</button>
	</div>
</div>

<style lang="scss">
	.container {
		width: 100%;
		max-width: calc(0.6 * $page-width);
		margin-inline: auto;
		padding-block: 2rem;
	}

	.cart-list {
		display: grid;
		grid-template-columns: auto 1fr auto;

		tr {
			grid-column: 1 / -1;

			display: grid;
			grid-template-columns: inherit;
		}

		th[colspan="2"] {
			grid-column: span 2;
		}

		th {
			text-align-last: left;
			font-weight: $fw-bold;
		}

		th:last-child,
		td:last-child {
			text-align: right;
		}

		&__header {
			margin-bottom: 1.5rem;
		}
	}

	td p {
		width: 100%;
	}

	.product,
	.total {
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 2rem;

		border-top: 1px solid $clr-line;
		padding-block: 1.5rem;
	}

	.total {
		font-weight: $fw-bold;
	}

	.product {
		img {
			width: 100%;
			max-width: 8rem;
			aspect-ratio: 1 / 1;
			object-fit: cover;
		}

		&__info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: start;
		}
	}

	.buttons {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		margin-block: 2rem;
	}
</style>
