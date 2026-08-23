<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans selection:bg-[#00F0FF]/30 selection:text-[#00F0FF]">
	{@render children()}
</div>
