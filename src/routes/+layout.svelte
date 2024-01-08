<script>
	import "../app.scss";
</script>

<header>
	<div class="container header__content">
		<a href="/">
			<!-- prettier-ignore -->
			<img src="/logo.png" alt="logo">
		</a>

		<nav>
			<!-- prettier-ignore -->
			<ul class="nav">
				<li><a class="link" href="TODO">Naušnice</a></li>
				<li><a class="link" href="TODO">Prsteni</a></li>
				<li><a class="link" href="TODO">Ogrlice</a></li>
				<li><a class="link" href="TODO">Po boji</a></li>
				<li><a class="link" href="TODO">Događaji</a></li>
			</ul>
		</nav>

		<div class="header__icons">
			<!-- prettier-ignore -->
			<a href="TODO" class="icon">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
				</svg>
			</a>

			<!-- prettier-ignore -->
			<a href="TODO" class="icon">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
				</svg>
			</a>
		</div>
	</div>
</header>

<main>
	<slot />
</main>

<footer>
	<div class="container">
		<!-- prettier-ignore -->
		<ul class="footer-nav">
			<li><a class="link" href="TODO">Informacije</a></li>
			<li><a class="link" href="TODO">O nama</a></li>
			<li><a class="link" href="TODO">Kontakt</a></li>
		</ul>
	</div>
</footer>

<style lang="scss">
	:global(body) {
		display: flex;
		flex-direction: column;
	}

	main {
		flex-grow: 1;
		padding-block: 2rem;

		display: grid;
		align-content: start;
		$_padding: 1rem;

		grid-template-columns:
			[edge-start] $_padding
			[wide-start] 0
			[standard-start] minmax(0, calc($page-width - 2 * $_padding)) [standard-end]
			0 [wide-end]
			$_padding [edge-end];

		@include desktop-only {
			grid-template-columns:
				[edge-start] minmax($_padding, 1fr)
				[wide-start] minmax(0, 8rem)
				[standard-start] minmax(0, calc($page-width - 2 * $_padding)) [standard-end]
				minmax(0, 8rem) [wide-end]
				minmax($_padding, 1fr) [edge-end];
		}

		> :global(*) {
			grid-column: standard;
		}

		> :global(.content__wide) {
			grid-column: wide;
		}

		> :global(.content__edge) {
			grid-column: edge;
		}
	}

	header {
		padding: 1.5rem;
	}

	.header__content {
		display: grid;
		grid-template-columns: 6rem 1fr 6rem;
		align-items: center;
		gap: 4rem;
	}

	.header__icons {
		display: flex;
		flex-direction: row;
		justify-content: end;
		gap: 1.25rem;

		a {
			flex-basis: 1.25rem;
			aspect-ratio: 1;
		}
	}

	.nav {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		gap: 1rem 2rem;
	}

	footer {
		padding: 1rem;
		background-color: $clr-light-gray;
	}

	.footer-nav {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		gap: 1.25rem;
	}

	.container {
		width: 100%;
		max-width: $page-width;
		margin-inline: auto;
		padding-inline: 1rem;

		footer & {
			max-width: calc($page-width * 0.6); // TODO: var, fine tune
		}
	}

	ul {
		display: contents;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		display: block;
		color: inherit;
		line-height: 1;
	}

	a.link {
		text-decoration-line: underline;
		text-decoration-color: transparent;
		transition: text-decoration-color 50ms ease-out;

		&:hover {
			text-decoration-color: currentColor;
		}
	}

	a.icon {
		transition: color 100ms ease-out;

		&:hover {
			color: $clr-faint;
		}
	}

	svg {
		display: block;
	}
</style>
