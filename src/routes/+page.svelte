<script lang="ts">
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import FeaturedProjects from '$lib/components/sections/FeaturedProjects.svelte';
	import SecondaryProjects from '$lib/components/sections/SecondaryProjects.svelte';
	import AchievementsTimeline from '$lib/components/sections/AchievementsTimeline.svelte';
	import BeyondTheCode from '$lib/components/sections/BeyondTheCode.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import { profile } from '$lib/data/profile';

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: profile.name,
		alternateName: [profile.handle, 'DeepCodeThinking'],
		jobTitle: 'Founder & Chief Executive Officer',
		worksFor: {
			'@type': 'Organization',
			name: 'DevSafe',
			url: 'https://devsafe.cm'
		},
		founderOf: {
			'@type': 'Organization',
			name: 'DevSafe'
		},
		knowsAbout: [
			'Cybersecurity',
			'Escrow Systems',
			'Rust (Axum/Tonic gRPC)',
			'SvelteKit',
			'Flutter & Dart',
			'Penetration Testing',
			'Mobile Money Integration'
		],
		alumniOf: {
			'@type': 'EducationalOrganization',
			name: 'ICT University Yaoundé',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Yaoundé',
				addressCountry: 'Cameroon'
			}
		},
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Yaoundé',
			addressCountry: 'Cameroon'
		},
		sameAs: profile.socials.map((s) => s.url)
	});
</script>

<svelte:head>
	<title>{profile.name} ({profile.handle}) | Founder & CEO @ DevSafe</title>
	<meta name="description" content={profile.shortBio} />
	<meta name="keywords" content="Verla Berinyuy Ndey, Mr. DCT, DeepCodeThinking, DevSafe, Cybersecurity, SvelteKit, Rust, Flutter, BookBridge, Eventra, Cameroon Tech" />
	<link rel="canonical" href="https://devsafe.cm" />

	<!-- OpenGraph Tags -->
	<meta property="og:title" content="{profile.name} ({profile.handle}) | Founder & CEO @ DevSafe" />
	<meta property="og:description" content={profile.shortBio} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://devsafe.cm" />
	<meta property="og:site_name" content="Mr. DCT Portfolio" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{profile.name} ({profile.handle}) | DevSafe Founder" />
	<meta name="twitter:description" content={profile.shortBio} />
	<meta name="twitter:creator" content="@DeepCodeThinking" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<Navbar />

<main id="main-content" class="flex-1 focus:outline-none" tabindex="-1">
	<Hero />
	<About />
	<FeaturedProjects />
	<SecondaryProjects />
	<AchievementsTimeline />
	<BeyondTheCode />
	<Contact />
</main>

<Footer />

