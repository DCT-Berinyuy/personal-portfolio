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
