<h1 class="sr-only">Wood U - color yourself</h1>

<div class="hero content__edge">
	<!-- prettier-ignore -->
	<img src="/hero.png" alt="hero">
</div>

<div class="quote">
	<p>Drveni nakit brenda WOOD U namjenjen je odvažnim ženama koje biraju radost umjesto dram</p>
</div>

<section class="featured content__wide">
	<h2 class="featured__title">Istaknuti proizvodi</h2>
	<p>TODO: product grid/list here</p>
</section>

<style lang="scss">
	.hero {
		margin-block: 1rem;

		img {
			// image is 1920x720
			width: 100%;
			aspect-ratio: 8/3;
			min-height: 360px;
			object-fit: cover;

			@include desktop-only {
				max-height: 720px;
				object-fit: contain;
			}
		}
	}

	.quote {
		margin-block: 3rem;

		p {
			max-width: 60ch;
			margin-inline: auto;
			text-align: center;
			text-wrap: balance;
		}
	}

	.featured {
		margin-block: 1rem;

		&__title {
			text-align: center;
		}
	}
</style>
