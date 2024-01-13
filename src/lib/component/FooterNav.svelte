<div class="footer">
	<section class="group">
		<h2>Informacije</h2>

		<!-- prettier-ignore -->
		<ul class="links">
			<li><a class="link" href="TODO">Plaćanja</a></li>
			<li><a class="link" href="TODO">Dostava</a></li>
			<li><a class="link" href="TODO">Uvjeti i odredbe</a></li>
			<li><a class="link" href="TODO">Izjava o privatnosti</a></li>
		</ul>
	</section>

	<section class="group">
		<h2>Wood U</h2>

		<!-- prettier-ignore -->
		<ul class="links">
			<li><a class="link" href="TODO">O meni</a></li>
			<li><a class="link" href="/kontakt">Kontakt</a></li>
			<li><a class="link" href="https://www.facebook.com/WoodUColorYourself">Wood U na Facebooku</a></li>
		</ul>
	</section>
</div>

<style lang="scss">
	.footer {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 2rem;

		padding: 2rem;
	}

	.group > * + * {
		margin-top: 1rem;
	}

	h2 {
		font-weight: $fw-bold;
	}

	.links {
		display: flex;
		flex-flow: column;
		justify-content: center;
		gap: 1rem;
	}

	ul {
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
</style>
