<script lang="ts">
	interface Props {
		label: string;
		value: string;
		subtext?: string;
	}

	let { label, value, subtext }: Props = $props();
</script>

<div class="group relative overflow-hidden rounded-xl border border-[#1F293D] bg-[#121826]/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#00F0FF]/40 hover:bg-[#161F33]">
	<div class="scanline absolute inset-0 opacity-20 pointer-events-none"></div>
	<div class="text-2xl font-bold font-mono tracking-tight text-[#00F0FF] group-hover:text-[#00FF9D] transition-colors">
		{value}
	</div>
	<div class="mt-1 text-sm font-semibold text-slate-200">
		{label}
	</div>
	{#if subtext}
		<div class="mt-0.5 text-xs text-slate-400 font-mono">
			{subtext}
		</div>
	{/if}
</div>
