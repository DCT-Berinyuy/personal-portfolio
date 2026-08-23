<script lang="ts">
	import { profile } from '$lib/data/profile';
	import SecurityBadge from '$lib/components/ui/SecurityBadge.svelte';
	import StatCard from '$lib/components/ui/StatCard.svelte';
	import { ArrowRight, Code, ShieldCheck, Terminal, Download, Sparkles } from 'lucide-svelte';
</script>

<section id="hero" class="relative min-h-[90vh] flex flex-col justify-center pt-8 pb-16 overflow-hidden border-b border-[#1F293D]">
	<!-- Background Cyber Grid & Ambient Lights -->
	<div class="absolute inset-0 bg-[radial-gradient(#1F293D_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>
	<div class="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#00F0FF]/10 blur-[120px] pointer-events-none"></div>
	<div class="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-[#00FF9D]/10 blur-[120px] pointer-events-none"></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Top Security Header Strip -->
		<div class="mb-6 flex flex-wrap items-center gap-3">
			<SecurityBadge label={profile.clearanceLevel} variant="cyan" size="sm" />
			<span class="text-xs font-mono text-slate-300 font-medium">
				📍 {profile.location}
			</span>
		</div>

		<!-- Main Hero Headlines -->
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
			<div class="lg:col-span-7 flex flex-col items-start">
				<div class="inline-flex items-center gap-2 rounded-full border border-[#00F0FF]/40 bg-[#00F0FF]/10 px-3.5 py-1 font-mono text-xs text-[#00F0FF] font-semibold mb-4">
					<Sparkles class="h-3.5 w-3.5" />
					<span>FOUNDER & CEO AT DEVSAFE</span>
				</div>

				<h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-sans leading-[1.1]">
					Hi, I'm <span class="text-[#00F0FF]">{profile.name}</span>
				</h1>
				
				<div class="mt-2 font-mono text-xl sm:text-2xl font-bold text-slate-200">
					AKA <span class="text-[#00F0FF]">[{profile.handle}]</span>
				</div>

				<p class="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
					{profile.shortBio}
				</p>

				<!-- Core Stack Badge Bar -->
				<div class="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs text-slate-300">
					<span class="text-slate-400 font-bold uppercase tracking-widest">[ CORE STACK ]:</span>
					<span class="rounded-md bg-[#121826] border border-[#1F293D] px-2.5 py-1 text-slate-200 font-medium transition-colors hover:border-[#00F0FF]/40 hover:text-[#00F0FF]">Flutter / Dart</span>
					<span class="rounded-md bg-[#121826] border border-[#1F293D] px-2.5 py-1 text-slate-200 font-medium transition-colors hover:border-[#00F0FF]/40 hover:text-[#00F0FF]">SvelteKit</span>
					<span class="rounded-md bg-[#121826] border border-[#1F293D] px-2.5 py-1 text-slate-200 font-medium transition-colors hover:border-[#00F0FF]/40 hover:text-[#00F0FF]">Rust (Axum/Tonic)</span>
					<span class="rounded-md bg-[#121826] border border-[#1F293D] px-2.5 py-1 text-slate-200 font-medium transition-colors hover:border-[#00F0FF]/40 hover:text-[#00F0FF]">Python</span>
					<span class="rounded-md bg-[#121826] border border-[#1F293D] px-2.5 py-1 text-slate-200 font-medium transition-colors hover:border-[#00F0FF]/40 hover:text-[#00F0FF]">Web Pentesting</span>
				</div>

				<!-- CTAs -->
				<div class="mt-8 flex flex-wrap items-center gap-4">
					<a
						href="#projects"
						class="group inline-flex items-center gap-2 rounded-xl bg-[#00F0FF] px-6 py-3.5 font-mono text-sm font-bold text-black transition-all hover:bg-[#38BDF8] hover:shadow-lg hover:shadow-[#00F0FF]/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
						aria-label="View Projects section"
					>
						<span>View Projects</span>
						<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</a>

					<a
						href="#contact"
						class="inline-flex items-center gap-2 rounded-xl border border-[#1F293D] bg-[#121826] px-6 py-3.5 font-mono text-sm font-bold text-slate-200 transition-all hover:border-[#00F0FF] hover:text-[#00F0FF] active:scale-95 focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
						aria-label="Navigate to Contact section"
					>
						<span>Get In Touch</span>
					</a>
				</div>
			</div>

			<!-- Terminal Graphic Card / Hero Visual -->
			<div class="lg:col-span-5 w-full">
				<div class="relative overflow-hidden rounded-2xl border border-[#00F0FF]/30 bg-[#0B0F19] p-4 sm:p-6 shadow-2xl w-full">
					<div class="scanline absolute inset-0 opacity-30 pointer-events-none"></div>

					<!-- Card Header -->
					<div class="flex items-center justify-between border-b border-[#1F293D] pb-3 font-mono text-xs text-slate-400">
						<div class="flex items-center gap-2 text-[#00F0FF]">
							<Terminal class="h-4 w-4" />
							<span class="text-[11px] sm:text-xs">SYSTEM_CORE_INFO</span>
						</div>
						<div class="flex items-center gap-1.5 text-xs text-[#00F0FF]">
							<span class="h-2 w-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
							<span>LIVE</span>
						</div>
					</div>

					<!-- Card Content -->
					<div class="mt-4 space-y-3 font-mono text-xs overflow-x-auto no-scrollbar">
						<div class="whitespace-nowrap sm:whitespace-normal leading-relaxed">
							<span class="text-slate-500">const</span> <span class="text-[#00F0FF]">founder</span> = &#123;<br />
							&nbsp;&nbsp;<span class="text-slate-400">name:</span> <span class="text-white">"{profile.name}"</span>,<br />
							&nbsp;&nbsp;<span class="text-slate-400">entity:</span> <span class="text-slate-200">"DevSafe (Student Startup)"</span>,<br />
							&nbsp;&nbsp;<span class="text-slate-400">major:</span> <span class="text-[#00F0FF]">"Cybersecurity @ ICT Univ"</span>,<br />
							&nbsp;&nbsp;<span class="text-slate-400">location:</span> <span class="text-slate-300">"Yaoundé, Cameroon"</span>,<br />
							&nbsp;&nbsp;<span class="text-slate-400">focus:</span> [<span class="text-slate-200">"Escrow Systems"</span>, <span class="text-[#00F0FF]">"gRPC"</span>, <span class="text-slate-200">"Pentesting"</span>]<br />
							&#125;;
						</div>

						<div class="border-t border-[#1F293D] pt-3 text-slate-400">
							<span class="text-[#00F0FF]">$ devsafe status</span><br />
							<span class="text-slate-300">✓ BookBridge (3rd Place ICT for Africa)</span><br />
							<span class="text-slate-300">✓ Eventra (Live in Prod)</span><br />
							<span class="text-slate-300">✓ Bella Call (ConnectRPC + GPS)</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Hero Stats Strip -->
		<div class="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
			{#each profile.heroStats as stat}
				<StatCard label={stat.label} value={stat.value} subtext={stat.subtext} />
			{/each}
		</div>
	</div>
</section>
