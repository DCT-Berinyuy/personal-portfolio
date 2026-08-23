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

<!-- Floating Action Buttons Container -->
<div class="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
	<!-- Floating Back-to-Top Button -->
	<button
		type="button"
		onclick={scrollToTop}
		aria-label="Scroll back to top of page"
		class="flex h-11 w-11 items-center justify-center rounded-full border border-[#00F0FF]/40 bg-[#0B0F19]/90 backdrop-blur-md text-[#00F0FF] shadow-lg shadow-[#00F0FF]/15 transition-all duration-300 hover:scale-110 hover:border-[#00F0FF] hover:bg-[#00F0FF] hover:text-black hover:shadow-[#00F0FF]/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] {scrollY > 300
			? 'opacity-100 translate-y-0 pointer-events-auto'
			: 'opacity-0 translate-y-4 pointer-events-none'}"
	>
		<ArrowUp class="h-5 w-5" />
	</button>

	<!-- Floating WhatsApp Direct Chat Button -->
	<a
		href="https://wa.me/237680001677?text=Hello%20Mr.%20DCT%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect!"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Chat directly with Mr. DCT on WhatsApp (+237 680001677)"
		class="group relative flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/40 bg-[#0B0F19]/95 text-emerald-400 shadow-xl shadow-emerald-500/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-emerald-400 hover:bg-[#25D366] hover:text-black hover:shadow-emerald-500/40 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
	>
		<svg class="h-6 w-6 fill-current transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24">
			<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
		</svg>
		<span class="sr-only">WhatsApp (+237 680001677)</span>
	</a>
</div>

<TerminalModal isOpen={isTerminalOpen} onClose={() => (isTerminalOpen = false)} />

