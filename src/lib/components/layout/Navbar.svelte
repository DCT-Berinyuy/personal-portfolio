<script lang="ts">
	import { Terminal, Shield, Menu, X, ArrowUp } from 'lucide-svelte';
	import SecurityBadge from '$lib/components/ui/SecurityBadge.svelte';
	import TerminalModal from '$lib/components/ui/TerminalModal.svelte';

	let isMobileMenuOpen = $state(false);
	let isTerminalOpen = $state(false);
	let scrollY = $state(0);

	let isScrolled = $derived(scrollY > 20);

	const navLinks = [
		{ label: 'About', href: '#about' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Track Record', href: '#achievements' },
		{ label: 'Beyond Code', href: '#beyond' },
		{ label: 'Contact', href: '#contact' }
	];

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}

	function handleWindowKeydown(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
			e.preventDefault();
			isTerminalOpen = !isTerminalOpen;
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:window bind:scrollY={scrollY} onkeydown={handleWindowKeydown} />

<header
	class="sticky top-0 z-40 w-full border-b transition-all duration-300 {isScrolled
		? 'border-[#00F0FF]/30 bg-[#0B0F19]/65 backdrop-blur-xl shadow-lg shadow-black/50 py-0.5'
		: 'border-[#1F293D]/80 bg-[#0B0F19]/95 backdrop-blur-md py-0'}"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
		<!-- Brand / Logo -->
		<a href="/" class="group flex items-center gap-2 text-decoration-none">
			<div class="flex h-9 w-9 items-center justify-center rounded-lg border border-[#00F0FF]/40 bg-[#00F0FF]/10 font-mono text-sm font-bold text-[#00F0FF] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#00F0FF] group-hover:text-black">
				DCT
			</div>
			<div class="flex flex-col">
				<span class="font-mono text-sm font-bold tracking-tight text-white group-hover:text-[#00F0FF]">
					MR. DCT
				</span>
				<span class="text-[10px] font-mono tracking-widest text-slate-400">
					FOUNDER & SECURITY
				</span>
			</div>
		</a>

		<!-- Desktop Navigation Links -->
		<nav class="hidden md:flex items-center gap-6" aria-label="Main Navigation">
			{#each navLinks as link}
				<a
					href={link.href}
					class="font-mono text-xs text-slate-300 transition-colors hover:text-[#00F0FF] focus-visible:text-[#00F0FF]"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<!-- Actions (Terminal button & Status) -->
		<div class="hidden sm:flex items-center gap-3">
			<SecurityBadge label="SYS_OK" variant="mint" size="sm" />
			<button
				type="button"
				onclick={() => (isTerminalOpen = true)}
				class="flex items-center gap-1.5 rounded-lg border border-[#00F0FF]/30 bg-[#00F0FF]/10 px-3 py-1.5 font-mono text-xs text-[#00F0FF] transition-all hover:bg-[#00F0FF]/20 hover:shadow-lg hover:shadow-[#00F0FF]/10"
				aria-label="Open CLI Terminal (Shortcut: Ctrl+K or Cmd+K)"
			>
				<Terminal class="h-3.5 w-3.5" />
				<span>[CLI]</span>
				<kbd class="hidden lg:inline-block rounded border border-[#00F0FF]/30 bg-[#00F0FF]/10 px-1 py-0.5 text-[9px] text-[#00F0FF]">⌘K</kbd>
			</button>
		</div>

		<!-- Mobile Menu Toggle Button -->
		<div class="flex items-center gap-2 md:hidden">
			<button
				type="button"
				onclick={() => (isTerminalOpen = true)}
				class="p-2 text-[#00F0FF] hover:text-white"
				aria-label="Open CLI Terminal"
			>
				<Terminal class="h-5 w-5" />
			</button>
			<button
				type="button"
				onclick={toggleMobileMenu}
				class="p-2 text-slate-300 hover:text-white"
				aria-label="Toggle Navigation Menu"
				aria-expanded={isMobileMenuOpen}
				aria-controls="mobile-nav-drawer"
			>
				{#if isMobileMenuOpen}
					<X class="h-6 w-6" />
				{:else}
					<Menu class="h-6 w-6" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu Drawer -->
	{#if isMobileMenuOpen}
		<div id="mobile-nav-drawer" class="border-b border-[#1F293D] bg-[#0E1424]/95 backdrop-blur-xl px-4 py-4 md:hidden">
			<nav class="flex flex-col gap-3" aria-label="Mobile Navigation">
				{#each navLinks as link}
					<a
						href={link.href}
						onclick={closeMobileMenu}
						class="font-mono text-sm text-slate-200 hover:text-[#00F0FF]"
					>
						{link.label}
					</a>
				{/each}
				<div class="mt-2 pt-3 border-t border-[#1F293D] flex items-center justify-between">
					<SecurityBadge label="SYS_OK" variant="mint" size="sm" />
					<button
						type="button"
						onclick={() => {
							closeMobileMenu();
							isTerminalOpen = true;
						}}
						class="flex items-center gap-1.5 rounded-lg border border-[#00F0FF]/30 bg-[#00F0FF]/10 px-3 py-1.5 font-mono text-xs text-[#00F0FF]"
					>
						<Terminal class="h-3.5 w-3.5" />
						<span>Open CLI Modal</span>
					</button>
				</div>
			</nav>
		</div>
	{/if}
</header>

<!-- Floating Back-to-Top Button -->
<button
	type="button"
	onclick={scrollToTop}
	aria-label="Scroll back to top of page"
	class="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[#00F0FF]/40 bg-[#0B0F19]/80 backdrop-blur-md text-[#00F0FF] shadow-lg shadow-[#00F0FF]/20 transition-all duration-300 hover:scale-110 hover:border-[#00F0FF] hover:bg-[#00F0FF] hover:text-black hover:shadow-[#00F0FF]/40 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] {scrollY > 300
		? 'opacity-100 translate-y-0 pointer-events-auto'
		: 'opacity-0 translate-y-4 pointer-events-none'}"
>
	<ArrowUp class="h-5 w-5" />
</button>

<TerminalModal isOpen={isTerminalOpen} onClose={() => (isTerminalOpen = false)} />

