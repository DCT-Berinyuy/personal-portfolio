<script lang="ts">
	import { Copy, Check } from 'lucide-svelte';

	interface Props {
		text: string;
		label?: string;
		className?: string;
	}

	let { text, label = 'Copy', className = '' }: Props = $props();
	let copied = $state(false);

	async function handleCopy() {
		try {
			await navigator.clipboard.writeText(text);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	}
</script>

<button
	type="button"
	onclick={handleCopy}
	class="inline-flex items-center gap-1.5 rounded-lg border border-[#1F293D] bg-[#121826] px-3 py-1.5 text-xs font-mono text-slate-300 transition-all duration-200 hover:border-[#00F0FF] hover:bg-[#1A2338] hover:text-[#00F0FF] active:scale-95 ${className}"
>
	{#if copied}
		<Check class="h-3.5 w-3.5 text-[#00FF9D]" />
		<span class="text-[#00FF9D]">Copied!</span>
	{:else}
		<Copy class="h-3.5 w-3.5 text-slate-400" />
		<span>{label}</span>
	{/if}
</button>
