<script lang="ts">
	import { projects } from '$lib/data/projects';
	import SecurityBadge from '$lib/components/ui/SecurityBadge.svelte';
	import MediaPlaceholder from '$lib/components/ui/MediaPlaceholder.svelte';
	import SocialIcon from '$lib/components/ui/SocialIcon.svelte';
	import { ExternalLink, Trophy, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-svelte';

	const featured = projects.filter((p) => p.category === 'featured');
</script>

<section id="projects" class="relative py-24 border-b border-[#1F293D] bg-[#0B0F19]">
	<!-- Ambient glow -->
	<div class="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#00F0FF]/5 blur-[150px] pointer-events-none"></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="flex flex-col items-start mb-16">
			<SecurityBadge label="THE CENTERPIECE • FEATURED SHIPPED PRODUCTS" variant="cyan" size="sm" />
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl font-sans">
				Engineering & <span class="text-[#00F0FF]">Product Showcase</span>
			</h2>
			<p class="mt-2 text-base font-mono text-slate-400 max-w-3xl">
				Production platforms, live payment escrows, gRPC microservices, and startup ventures built and led by Mr. DCT.
			</p>
		</div>

		<!-- Featured Project Cards -->
		<div class="space-y-16">
			{#each featured as project, index}
				<div class="group relative overflow-hidden rounded-2xl border border-[#1F293D] bg-[#0E1424] p-6 sm:p-8 transition-all duration-300 hover:border-[#00F0FF]/50 hover:shadow-2xl hover:shadow-[#00F0FF]/10">
					<!-- Card Header Strip -->
					<div class="flex flex-wrap items-center justify-between gap-3 border-b border-[#1F293D] pb-4 mb-6">
						<div class="flex items-center gap-3">
							<span class="font-mono text-xs font-bold text-[#00F0FF]">
								[0{index + 1} // FEATURED BUILD]
							</span>
							{#if project.badge}
								<SecurityBadge
									label={project.badge}
									variant={index % 2 === 0 ? 'mint' : 'cyan'}
									size="sm"
								/>
							{/if}
						</div>
						<div class="font-mono text-xs text-slate-400">
							Role: <span class="text-white font-semibold">{project.role}</span>
						</div>
					</div>

					<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
						<!-- Content Column -->
						<div class="lg:col-span-7 flex flex-col items-start space-y-4">
							<div>
								<h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
									{project.title}
								</h3>
								<p class="mt-1 font-mono text-sm text-[#00F0FF]">
									{project.tagline}
								</p>
							</div>

							<!-- Problem Statement -->
							<div class="rounded-xl border border-[#1F293D] bg-[#121826] p-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
								<span class="font-mono font-bold text-amber-300 uppercase tracking-wider block mb-1">
									[ THE PROBLEM ]:
								</span>
								{project.problem}
							</div>

							<!-- Tech Stack Pills -->
							<div>
								<span class="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2">
									[ TECH ARCHITECTURE ]:
								</span>
								<div class="flex flex-wrap gap-2">
									{#each project.stack as tech}
										<span class="rounded-lg border border-[#1F293D] bg-[#161F33] px-3 py-1 font-mono text-xs text-[#00FF9D]">
											{tech}
										</span>
									{/each}
								</div>
							</div>

							<!-- Architecture Note -->
							{#if project.architectureNote}
								<div class="text-xs font-mono text-slate-300 flex items-start gap-2 bg-[#0B0F19] p-3 rounded-lg border border-[#1F293D]">
									<Cpu class="h-4 w-4 text-[#00F0FF] flex-shrink-0 mt-0.5" />
									<span>{project.architectureNote}</span>
								</div>
							{/if}

							<!-- Outcomes / Awards -->
							<div>
								<span class="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2">
									[ IMPACT & RECOGNITION ]:
								</span>
								<ul class="space-y-1.5 text-xs sm:text-sm text-slate-200">
									{#each project.outcome as item}
										<li class="flex items-center gap-2">
											<span>{item}</span>
										</li>
									{/each}
								</ul>
							</div>

							<!-- Action Buttons -->
							<div class="pt-2 flex flex-wrap items-center gap-3">
								{#if project.liveUrl}
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-2 rounded-xl bg-[#00F0FF] px-5 py-2.5 font-mono text-xs font-bold text-black transition-all hover:bg-[#00FF9D]"
									>
										<span>Visit Live App</span>
										<ArrowUpRight class="h-4 w-4" />
									</a>
								{/if}

								{#if project.githubUrl}
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-2 rounded-xl border border-[#1F293D] bg-[#121826] px-5 py-2.5 font-mono text-xs text-slate-200 transition-all hover:border-[#00F0FF] hover:text-[#00F0FF]"
									>
										<SocialIcon name="github" class="h-4 w-4" />
										<span>Source Code</span>
									</a>
								{/if}
							</div>
						</div>

						<!-- Visual Screenshot / Video Placeholder Column -->
						<div class="lg:col-span-5">
							<MediaPlaceholder media={project.media} />
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
