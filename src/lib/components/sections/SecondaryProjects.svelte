<script lang="ts">
	import { projects } from '$lib/data/projects';
	import MediaPlaceholder from '$lib/components/ui/MediaPlaceholder.svelte';
	import SecurityBadge from '$lib/components/ui/SecurityBadge.svelte';
	import SocialIcon from '$lib/components/ui/SocialIcon.svelte';
	import { ExternalLink } from 'lucide-svelte';

	const secondary = projects.filter((p) => p.category === 'secondary');
</script>

<section class="py-20 border-b border-[#1F293D] bg-[#070A12]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Title -->
		<div class="flex flex-col items-start mb-12">
			<SecurityBadge label="OPEN SOURCE & HACKATHON BUILDS" variant="mint" size="sm" />
			<h2 class="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl font-sans">
				Secondary <span class="text-[#00FF9D]">Engineering Projects</span>
			</h2>
			<p class="mt-1 text-xs font-mono text-slate-400">
				Specialized utilities, open-source Linux tools, and hackathon-winning applications.
			</p>
		</div>

		<!-- 2x2 Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each secondary as item}
				<div class="group flex flex-col justify-between rounded-xl border border-[#1F293D] bg-[#0E1424] p-6 transition-all duration-300 hover:border-[#00FF9D]/40">
					<div class="space-y-4">
						<!-- Header -->
						<div class="flex items-center justify-between">
							<h3 class="text-xl font-bold text-white font-sans group-hover:text-[#00FF9D]">
								{item.title}
							</h3>
							{#if item.githubUrl}
								<a
									href={item.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="text-slate-400 hover:text-white"
									aria-label="GitHub Repository"
								>
									<SocialIcon name="github" class="h-4 w-4" />
								</a>
							{/if}
						</div>

						<p class="font-mono text-xs text-[#00F0FF]">
							{item.tagline}
						</p>

						<p class="text-xs text-slate-300 leading-relaxed">
							{item.problem}
						</p>

						<!-- Tech stack pills -->
						<div class="flex flex-wrap gap-1.5">
							{#each item.stack as tech}
								<span class="rounded border border-[#1F293D] bg-[#121826] px-2 py-0.5 font-mono text-[11px] text-slate-300">
									{tech}
								</span>
							{/each}
						</div>

						<!-- Outcomes -->
						<ul class="space-y-1 text-xs text-slate-300 font-sans">
							{#each item.outcome as out}
								<li>• {out}</li>
							{/each}
						</ul>
					</div>

					<!-- Media Placeholder -->
					<div class="mt-6 pt-4 border-t border-[#1F293D]/60">
						<MediaPlaceholder media={item.media} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
