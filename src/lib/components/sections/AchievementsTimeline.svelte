<script lang="ts">
	import { achievements } from '$lib/data/achievements';
	import SecurityBadge from '$lib/components/ui/SecurityBadge.svelte';
	import { Trophy, ShieldAlert, Users, Award, ExternalLink } from 'lucide-svelte';
</script>

<section id="achievements" class="py-20 border-b border-[#1F293D] bg-[#0B0F19]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Title -->
		<div class="flex flex-col items-start mb-16">
			<SecurityBadge label="TRACK RECORD & COMPETITIVE PODIUMS" variant="gold" size="sm" />
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-sans">
				Achievements & <span class="text-amber-300">Milestones</span>
			</h2>
			<p class="mt-2 text-xs font-mono text-slate-400">
				National coding leaderboards, Pan-African CTF competitions, hackathon jury leadership, and community roles.
			</p>
		</div>

		<!-- Scannable Timeline Cards -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each achievements as item}
				<div class="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#1F293D] bg-[#121826] p-6 transition-all duration-300 hover:border-amber-400/40 hover:bg-[#161F33]">
					<div class="scanline absolute inset-0 opacity-10 pointer-events-none"></div>

					<div class="space-y-3">
						<div class="flex items-center justify-between">
							{#if item.badge}
								<SecurityBadge label={item.badge} variant={item.category === 'ctf' ? 'red' : item.category === 'hackathon' ? 'gold' : 'cyan'} size="sm" />
							{/if}
							<span class="font-mono text-xs text-slate-400">{item.period}</span>
						</div>

						<h3 class="text-lg font-bold text-white font-sans group-hover:text-amber-300 transition-colors">
							{item.title}
						</h3>

						<div class="font-mono text-xs text-[#00F0FF]">
							{item.organization}
						</div>

						<p class="text-xs text-slate-300 leading-relaxed font-sans">
							{item.description}
						</p>
					</div>

					{#if item.metrics}
						<div class="mt-4 pt-3 border-t border-[#1F293D]/60 flex items-center justify-between font-mono text-xs">
							<span class="text-slate-400">KEY METRIC:</span>
							<span class="font-bold text-amber-300">{item.metrics}</span>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
