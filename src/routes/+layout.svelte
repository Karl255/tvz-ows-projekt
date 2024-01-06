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
			<ul class="nav-links">
				<li><a class="link" href=".">Naušnice</a></li>
				<li><a class="link" href=".">Prsteni</a></li>
				<li><a class="link" href=".">Ogrlice</a></li>
				<li><a class="link" href=".">Po boji</a></li>
				<li><a class="link" href=".">Događaji</a></li>
			</ul>
		</nav>

		<div class="header__icons">
			<!-- prettier-ignore -->
			<a href="." class="icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					<path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
				  </svg>
			</a>

			<!-- prettier-ignore -->
			<a href="." class="icon">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
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
		<ul class="nav-links">
			<li><a class="link" href=".">Dostava</a></li>
			<li><a class="link" href=".">O nama</a></li>
			<li><a class="link" href=".">Kontakt</a></li>
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
		padding-block: 1rem;

		display: grid;
		align-content: start;
		$_padding: 1rem;

		// prettier-ignore
		grid-template-columns:
			minmax($_padding, 1fr)
			[wide-start] minmax(0, 8rem)
			[standard-start] calc($page-width - 2 * $_padding) [standard-end]
			minmax(0, 8rem) [wide-end]
			minmax($_padding, 1fr);

		// TODO: mobile
		/*
		grid-template-columns:
			$_padding
			[wide-start] 0
			[standard-start] minmax(0, calc($page-width - 2 * $_padding)) [standard-end]
			0 [wide-end]
			$_padding;
		*/

		> :global(*) {
			grid-column: standard;
		}

		> :global(.content__wide) {
			grid-column: wide;
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

	footer {
		padding: 1rem;
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

	.nav-links {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	a {
		display: block;
		color: inherit;
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
			color: #555;
		}
	}

	svg {
		display: block;
	}

	ul {
		display: contents;
		margin: 0;
		padding: 0;
		list-style: none;
	}
</style>
