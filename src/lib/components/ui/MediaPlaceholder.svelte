<script lang="ts">
	import type { ProjectMedia } from '$lib/types';
	import { Image, Upload, AlertCircle } from 'lucide-svelte';

	interface Props {
		media: ProjectMedia | { aspectRatio: string; placeholderTitle: string; placeholderInstructions: string; src?: string; type?: string };
		className?: string;
	}

	let { media, className = '' }: Props = $props();

	const aspectClasses: Record<string, string> = {
		'16:9': 'aspect-video',
		'9:16': 'aspect-[9/16] max-h-[460px] mx-auto',
		'4:3': 'aspect-[4/3]',
		'3:4': 'aspect-[3/4] max-h-[400px] mx-auto',
		'1:1': 'aspect-square'
	};
</script>

<div
	class="group relative overflow-hidden rounded-xl border border-[#1F293D] bg-[#0D1322] transition-all duration-300 hover:border-[#00F0FF]/40 ${aspectClasses[media.aspectRatio] || 'aspect-video'} ${className}"
>
	{#if media.src}
		<img
			src={media.src}
			alt={media.placeholderTitle}
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
		/>
	{:else}
		<!-- Cyber Placeholder Grid Overlay -->
		<div class="scanline absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
		
		<div class="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center">
			<div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF] transition-transform duration-300 group-hover:scale-110">
				<Image class="h-6 w-6" />
			</div>

			<span class="mb-1 text-xs font-mono tracking-wider text-[#00F0FF] uppercase">
				[ MEDIA PLACEHOLDER • {media.aspectRatio} ]
			</span>

			<h4 class="mb-2 text-sm font-semibold text-slate-200">
				{media.placeholderTitle}
			</h4>

			<div class="mt-2 flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs text-amber-300">
				<AlertCircle class="h-3.5 w-3.5 flex-shrink-0" />
				<span class="text-[11px] leading-tight text-left">
					{media.placeholderInstructions}
				</span>
			</div>

			<div class="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-slate-400 group-hover:text-[#00FF9D]">
				<Upload class="h-3 w-3" />
				<span>Pass real media URL in src/lib/data/</span>
			</div>
		</div>
	{/if}
</div>
