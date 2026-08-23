<script lang="ts">
	interface Props {
		label: string;
		variant?: 'cyan' | 'mint' | 'gold' | 'purple' | 'red';
		size?: 'sm' | 'md';
		pulse?: boolean;
	}

	let { label, variant = 'cyan', size = 'md', pulse = true }: Props = $props();

	const variantStyles = {
		cyan: 'border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF]',
		mint: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
		gold: 'border-slate-700 bg-slate-800/80 text-slate-300',
		purple: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
		red: 'border-rose-500/30 bg-rose-500/10 text-rose-400'
	};

	const dotColors = {
		cyan: 'bg-[#00F0FF]',
		mint: 'bg-emerald-400',
		gold: 'bg-slate-400',
		purple: 'bg-blue-400',
		red: 'bg-rose-500'
	};
</script>

<span
	class="inline-flex items-center gap-2 rounded-full border font-mono tracking-wide uppercase transition-all duration-300 ${variantStyles[variant]} ${size === 'sm' ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'}"
>
	{#if pulse}
		<span class="relative flex h-2 w-2">
			<span class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dotColors[variant]}"></span>
			<span class="relative inline-flex h-2 w-2 rounded-full ${dotColors[variant]}"></span>
		</span>
	{/if}
	{label}
</span>
