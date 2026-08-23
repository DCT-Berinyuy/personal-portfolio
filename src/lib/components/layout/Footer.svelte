<script lang="ts">
	import { profile } from '$lib/data/profile';
	import SecurityBadge from '$lib/components/ui/SecurityBadge.svelte';
	import SocialIcon from '$lib/components/ui/SocialIcon.svelte';
	import { ArrowUp } from 'lucide-svelte';

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<footer class="border-t border-[#1F293D] bg-[#070A12] py-12 text-slate-400">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-12">
			<!-- Brand & Bio -->
			<div class="md:col-span-5 flex flex-col gap-4">
				<div class="flex items-center gap-2">
					<div class="flex h-8 w-8 items-center justify-center rounded-lg border border-[#00F0FF]/40 bg-[#00F0FF]/10 font-mono text-xs font-bold text-[#00F0FF]">
						DCT
					</div>
					<span class="font-mono text-base font-bold text-white tracking-wider">
						VERLA BERINYUY NDEY
					</span>
				</div>

				<p class="text-xs leading-relaxed text-slate-400 max-w-md">
					{profile.title}. Dedicated to engineering high-integrity software systems, leading student innovation at DevSafe, and advancing cybersecurity standards across Africa.
				</p>

				<div class="flex items-center gap-3">
					<SecurityBadge label={profile.clearanceLevel} variant="cyan" size="sm" />
				</div>
			</div>

			<!-- Quick Navigation Links -->
			<div class="md:col-span-3 flex flex-col gap-2">
				<h4 class="font-mono text-xs font-bold tracking-widest text-[#00F0FF] uppercase">
					[ Navigation ]
				</h4>
				<ul class="space-y-1.5 font-mono text-xs">
					<li><a href="#about" class="hover:text-[#00FF9D]">/about</a></li>
					<li><a href="#projects" class="hover:text-[#00FF9D]">/projects (centerpiece)</a></li>
					<li><a href="#achievements" class="hover:text-[#00FF9D]">/track-record</a></li>
					<li><a href="#beyond" class="hover:text-[#00FF9D]">/beyond-code</a></li>
					<li><a href="#contact" class="hover:text-[#00FF9D]">/contact</a></li>
				</ul>
			</div>

			<!-- Social Links & Channels -->
			<div class="md:col-span-4 flex flex-col gap-3">
				<h4 class="font-mono text-xs font-bold tracking-widest text-[#00F0FF] uppercase">
					[ Connect ]
				</h4>
				<div class="flex flex-wrap gap-2">
					<a
						href="https://wa.me/237680001677?text=Hello%20Mr.%20DCT%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect!"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-950/20 px-3 py-1.5 font-mono text-xs text-emerald-400 transition-colors hover:border-emerald-400 hover:text-emerald-300"
					>
						<svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
						</svg>
						<span>WhatsApp</span>
					</a>

					{#each profile.socials as social}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1.5 rounded-lg border border-[#1F293D] bg-[#121826] px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-[#00F0FF] hover:text-[#00F0FF]"
						>
							<SocialIcon name={social.label} class="h-3.5 w-3.5" />
							<span>{social.label}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#1F293D]/60 pt-6 sm:flex-row font-mono text-xs text-slate-500">
			<div>
				© {new Date().getFullYear()} Verla Berinyuy Ndey (Mr. DCT). All Rights Reserved. Built with SvelteKit & Tailwind CSS.
			</div>
			<div class="flex items-center gap-4">
				<span>Based in Yaoundé, Cameroon</span>
				<button
					type="button"
					onclick={scrollToTop}
					class="flex items-center gap-1 rounded bg-[#121826] px-2.5 py-1 text-slate-400 hover:text-[#00F0FF]"
					aria-label="Scroll to top of page"
				>
					<ArrowUp class="h-3.5 w-3.5" />
					<span>Top</span>
				</button>
			</div>
		</div>
	</div>
</footer>
