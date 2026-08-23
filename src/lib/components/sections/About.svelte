<script lang="ts">
	import { profile } from '$lib/data/profile';
	import { skillCategories } from '$lib/data/skills';
	import SecurityBadge from '$lib/components/ui/SecurityBadge.svelte';
	import { Code2, Layers, ShieldCheck, Database, CheckCircle2 } from 'lucide-svelte';

	const iconMap: Record<string, typeof Code2> = {
		Code2,
		Layers,
		ShieldCheck,
		Database
	};
</script>

<section id="about" class="relative py-20 border-b border-[#1F293D] bg-[#070A12]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="flex flex-col items-start mb-12">
			<SecurityBadge label="PROFILE & SECURITY ARCHITECTURE" variant="cyan" size="sm" />
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-sans">
				About <span class="text-[#00F0FF]">Verla Berinyuy Ndey</span>
			</h2>
			<p class="mt-2 text-sm font-mono text-slate-400">
				Founder & CEO of DevSafe • Cybersecurity Major @ ICT University Yaoundé • From Bamenda, based in Yaoundé
			</p>
		</div>

		<!-- Grid Layout: Bio Text + Quick Profile Card -->
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start mb-16">
			<!-- Narrative Column -->
			<div class="lg:col-span-7 space-y-4 text-base text-slate-300 leading-relaxed">
				{#each profile.aboutBio as paragraph}
					<p>{paragraph}</p>
				{/each}

				<div class="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-slate-300">
					<div class="flex items-center gap-2 rounded-lg border border-[#1F293D] bg-[#121826] p-3">
						<CheckCircle2 class="h-4 w-4 text-[#00FF9D]" />
						<span>Ethical Hacking & Web Audits</span>
					</div>
					<div class="flex items-center gap-2 rounded-lg border border-[#1F293D] bg-[#121826] p-3">
						<CheckCircle2 class="h-4 w-4 text-[#00F0FF]" />
						<span>Live Mobile Money Escrows</span>
					</div>
					<div class="flex items-center gap-2 rounded-lg border border-[#1F293D] bg-[#121826] p-3">
						<CheckCircle2 class="h-4 w-4 text-amber-300" />
						<span>High-Concurrency Rust Backends</span>
					</div>
					<div class="flex items-center gap-2 rounded-lg border border-[#1F293D] bg-[#121826] p-3">
						<CheckCircle2 class="h-4 w-4 text-purple-300" />
						<span>Cross-Platform Flutter Apps</span>
					</div>
				</div>
			</div>

			<!-- Quick Profile Card -->
			<div class="lg:col-span-5 rounded-2xl border border-[#1F293D] bg-[#121826] p-6 space-y-4">
				<h3 class="font-mono text-sm font-bold text-[#00F0FF] uppercase tracking-wider border-b border-[#1F293D] pb-3">
					[ DEVELOPER SUMMARY ]
				</h3>

				<div class="space-y-3 font-mono text-xs">
					<div class="flex justify-between border-b border-[#1F293D]/60 pb-2">
						<span class="text-slate-400">Legal Name:</span>
						<span class="text-white font-semibold">{profile.name}</span>
					</div>
					<div class="flex justify-between border-b border-[#1F293D]/60 pb-2">
						<span class="text-slate-400">Handle / Brand:</span>
						<span class="text-[#00F0FF]">{profile.handle}</span>
					</div>
					<div class="flex justify-between border-b border-[#1F293D]/60 pb-2">
						<span class="text-slate-400">Startup Role:</span>
						<span class="text-[#00FF9D]">Founder & CEO @ DevSafe</span>
					</div>
					<div class="flex justify-between border-b border-[#1F293D]/60 pb-2">
						<span class="text-slate-400">Academic Major:</span>
						<span class="text-amber-300">B.Sc. Cybersecurity</span>
					</div>
					<div class="flex justify-between border-b border-[#1F293D]/60 pb-2">
						<span class="text-slate-400">University:</span>
						<span class="text-slate-200">ICT University Yaoundé</span>
					</div>
					<div class="flex justify-between pb-1">
						<span class="text-slate-400">Origin / Base:</span>
						<span class="text-slate-200">Bamenda / Yaoundé, CM</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Categorized Skill Matrix -->
		<div>
			<h3 class="font-mono text-lg font-bold text-white mb-6 tracking-tight flex items-center gap-2">
				<span class="text-[#00FF9D]">[ STACK MATRIX ]</span> Core Technical Capabilities
			</h3>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each skillCategories as cat}
					{@const Icon = iconMap[cat.iconName] || Code2}
					<div class="rounded-xl border border-[#1F293D] bg-[#0E1424] p-5 space-y-4 transition-all duration-300 hover:border-[#00F0FF]/40">
						<div class="flex items-center gap-2 border-b border-[#1F293D] pb-3 text-[#00F0FF]">
							<Icon class="h-5 w-5" />
							<h4 class="font-mono text-sm font-bold text-slate-100">{cat.title}</h4>
						</div>

						<ul class="space-y-2.5">
							{#each cat.skills as skill}
								<li class="flex flex-col text-xs font-mono">
									<div class="flex items-center justify-between">
										<span class={skill.highlight ? 'text-[#00FF9D] font-bold' : 'text-slate-200'}>
											{skill.name}
										</span>
									</div>
									{#if skill.level}
										<span class="text-[11px] text-slate-400 font-sans mt-0.5">
											{skill.level}
										</span>
									{/if}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
