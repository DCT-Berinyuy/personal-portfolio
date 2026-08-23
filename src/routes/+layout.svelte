<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<a href="#main-content" class="sr-skip-link font-mono text-xs">
	Skip to main content
</a>

<div class="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0B0F19] text-slate-100 flex flex-col font-sans selection:bg-[#00F0FF]/30 selection:text-[#00F0FF]">
	{@render children()}
</div>

