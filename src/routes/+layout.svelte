<header>
	<div class="container">
		<span class="temp">LOGO</span>

		<nav>
			<!-- prettier-ignore -->
			<ul class="nav-links">
				<li><a class="link" href=".">Naušnice</a></li>
				<li><a class="link" href=".">Narukvice</a></li>
				<li><a class="link" href=".">Prsteni</a></li>
				<li><a class="link" href=".">Ogrlice</a></li>
				<li><a class="link" href=".">Događaji</a></li>
			</ul>
		</nav>

		<div class="icons">
			<a href=".">
				<!-- prettier-ignore -->
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					<path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
				  </svg>
			</a>
			<a href=".">
				<!-- prettier-ignore -->
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
			<li><a class="link" href=".">O nama</a></li>
			<li><a class="link" href=".">Misija</a></li>
			<li><a class="link" href=".">Kontakt</a></li>
		</ul>
	</div>
</footer>

<style>
	:global(body) {
		display: flex;
		flex-direction: column;
	}

	:global(:root) {
		--page-width: 50rem; /* TODO: fine tune */
	}

	main {
		flex-grow: 1;
	}

	/* header */

	header {
		background-color: #eee;
	}

	header > * {
		display: grid;
		grid-template-columns: 4.5rem 1fr 4.5rem;
		align-items: center;
		gap: 2rem; /* TODO: reduce on smaller screens? */
	}

	header .icons {
		display: flex;
		flex-direction: row;
		justify-content: end;
		gap: 1.25rem;
	}

	header .icons a {
		flex-basis: 1.25rem;
		aspect-ratio: 1;
	}

	/* footer */

	footer {
		background-color: #eee;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	/* all */

	.container {
		width: 100%;
		max-width: var(--page-width);
		margin-inline: auto;
		padding-inline: 1rem;
	}

	.nav-links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	a {
		display: block;
		color: inherit;
		text-decoration: none; /* TODO: maybe remove? */
	}

	a.link {
		padding: 1rem;
	}

	a.link:hover {
		background-color: #ddd;
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
