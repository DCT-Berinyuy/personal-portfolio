<script lang="ts">
	import { Terminal, Shield, Menu, X } from 'lucide-svelte';
	import SecurityBadge from '$lib/components/ui/SecurityBadge.svelte';
	import TerminalModal from '$lib/components/ui/TerminalModal.svelte';

	let isMobileMenuOpen = $state(false);
	let isTerminalOpen = $state(false);

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
</script>

<header class="sticky top-0 z-40 w-full border-b border-[#1F293D]/80 bg-[#0B0F19]/80 backdrop-blur-md">
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
		<nav class="hidden md:flex items-center gap-6">
			{#each navLinks as link}
				<a
					href={link.href}
					class="font-mono text-xs text-slate-300 transition-colors hover:text-[#00F0FF]"
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
			>
				<Terminal class="h-3.5 w-3.5" />
				<span>[CLI]</span>
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
		<div class="border-b border-[#1F293D] bg-[#0E1424] px-4 py-4 md:hidden">
			<nav class="flex flex-col gap-3">
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

<TerminalModal isOpen={isTerminalOpen} onClose={() => (isTerminalOpen = false)} />
