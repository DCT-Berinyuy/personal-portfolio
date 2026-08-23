<script lang="ts">
	import { beyondItems } from '$lib/data/beyond';
	import SecurityBadge from '$lib/components/ui/SecurityBadge.svelte';
	import MediaPlaceholder from '$lib/components/ui/MediaPlaceholder.svelte';
	import SocialIcon from '$lib/components/ui/SocialIcon.svelte';
	import { BookOpen, ExternalLink } from 'lucide-svelte';
</script>

<section id="beyond" class="py-16 border-b border-[#1F293D] bg-[#070A12] opacity-95">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header (Lighter Visual Weight) -->
		<div class="flex flex-col items-start mb-10">
			<SecurityBadge label="BEYOND THE CODE • CONTENT & AUTHORSHIP" variant="purple" size="sm" />
			<h2 class="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl font-sans">
				Beyond the Code <span class="text-[#00F0FF]">& Mindset</span>
			</h2>
			<p class="mt-1 text-xs font-mono text-slate-400">
				Content creation, computer science education, and personal authorship.
			</p>
		</div>

		<!-- Grid Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each beyondItems as item}
				<div class="group flex flex-col justify-between rounded-xl border border-[#1F293D] bg-[#0E1424] p-6 transition-all duration-300 hover:border-[#00F0FF]/40">
					<div class="space-y-4">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-2 text-[#00F0FF]">
								{#if item.type === 'youtube'}
									<SocialIcon name="youtube" class="h-5 w-5" />
								{:else if item.type === 'tiktok'}
									<SocialIcon name="tiktok" class="h-5 w-5" />
								{:else}
									<BookOpen class="h-5 w-5" />
								{/if}
								<span class="font-mono text-xs font-bold uppercase">{item.platform}</span>
							</div>
							{#if item.metric}
								<span class="rounded bg-[#00F0FF]/10 border border-[#00F0FF]/30 px-2 py-0.5 font-mono text-[11px] text-[#00F0FF]">
									{item.metric}
								</span>
							{/if}
						</div>

						<h3 class="text-xl font-bold text-white font-sans group-hover:text-[#00F0FF]">
							{item.title}
						</h3>

						<p class="text-xs text-slate-300 leading-relaxed font-sans">
							{item.description}
						</p>

						{#if item.link && item.link !== '#'}
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1.5 font-mono text-xs text-purple-400 hover:text-purple-300"
							>
								<span>Visit Channel / Profile</span>
								<ExternalLink class="h-3.5 w-3.5" />
							</a>
						{/if}
					</div>

					<div class="mt-6 pt-4 border-t border-[#1F293D]/60">
						<MediaPlaceholder media={item.media} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
