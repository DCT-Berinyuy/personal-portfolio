<script lang="ts">
	import { Terminal, X, CornerDownLeft } from 'lucide-svelte';
	import { profile } from '$lib/data/profile';
	import { projects } from '$lib/data/projects';
	import { achievements } from '$lib/data/achievements';
	import { skillCategories } from '$lib/data/skills';

	interface Props {
		isOpen: boolean;
		onClose: () => void;
	}

	let { isOpen, onClose }: Props = $props();

	let commandInput = $state('');
	let history = $state<Array<{ command: string; output: string }>>([
		{
			command: 'whoami',
			output: `${profile.name} (${profile.handle}) - ${profile.title}\nBased in ${profile.location}. Status: ${profile.status}`
		},
		{
			command: 'help',
			output: 'Available commands:\n  whoami       - Display Mr. DCT bio & status\n  projects     - List flagship DevSafe & personal builds\n  skills       - View security & tech stack breakdown\n  achievements - View Hackatime #1, CTFs & leadership\n  contact      - Get direct contact info & social links\n  clear        - Clear terminal history'
		}
	]);

	let terminalContainer: HTMLDivElement | undefined = $state();
	let inputElement: HTMLInputElement | undefined = $state();

	$effect(() => {
		if (isOpen && inputElement) {
			setTimeout(() => inputElement?.focus(), 50);
		}
	});

	function executeCommand(cmd: string) {
		const cleanCmd = cmd.trim().toLowerCase();
		let responseOutput = '';

		switch (cleanCmd) {
			case 'help':
				responseOutput =
					'Available commands:\n  whoami       - Display Mr. DCT bio & status\n  projects     - List flagship DevSafe & personal builds\n  skills       - View security & tech stack breakdown\n  achievements - View Hackatime #1, CTFs & leadership\n  contact      - Get direct contact info & social links\n  clear        - Clear terminal history';
				break;
			case 'whoami':
				responseOutput = `NAME: ${profile.name}\nHANDLE: ${profile.handle}\nROLE: ${profile.title}\nLOCATION: ${profile.location}\nCLEARANCE: ${profile.clearanceLevel}\nBIO: ${profile.shortBio}`;
				break;
			case 'projects':
				responseOutput = projects
					.map((p, i) => `[${i + 1}] ${p.title} (${p.stack.slice(0, 3).join(', ')})\n    ${p.tagline}`)
					.join('\n\n');
				break;
			case 'skills':
				responseOutput = skillCategories
					.map((c) => `== ${c.title} ==\n  ` + c.skills.map((s) => s.name).join(', '))
					.join('\n\n');
				break;
			case 'achievements':
				responseOutput = achievements
					.map((a) => `• ${a.title} (${a.period})\n  ${a.metrics || a.organization}`)
					.join('\n');
				break;
			case 'contact':
				responseOutput = `EMAIL: ${profile.contactEmail}\nGITHUB: https://github.com/DCT-Berinyuy\nLINKTREE: https://linktr.ee/DeepCodeThinking\nYOUTUBE: https://youtube.com/@dct_lab`;
				break;
			case 'clear':
				history = [];
				commandInput = '';
				return;
			case '':
				return;
			default:
				responseOutput = `Command not recognized: '${cleanCmd}'. Type 'help' for available commands.`;
		}

		history = [...history, { command: cmd, output: responseOutput }];
		commandInput = '';

		setTimeout(() => {
			if (terminalContainer) {
				terminalContainer.scrollTop = terminalContainer.scrollHeight;
			}
		}, 50);
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			executeCommand(commandInput);
		} else if (e.key === 'Escape') {
			onClose();
		}
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}
</script>

{#if isOpen}
	<div
		role="dialog"
		aria-modal="true"
		aria-labelledby="terminal-modal-title"
		onclick={handleBackdropClick}
		onkeydown={handleKeyDown}
		tabindex="-1"
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4 backdrop-blur-sm focus:outline-none"
	>
		<div class="relative w-full max-w-3xl overflow-hidden rounded-xl border border-[#00F0FF]/40 bg-[#0B0F19] shadow-2xl glow-cyan max-h-[92vh] flex flex-col">
			<!-- Terminal Header -->
			<div class="flex items-center justify-between border-b border-[#1F293D] bg-[#121826] px-3 py-2.5 sm:px-4 sm:py-3">
				<div class="flex items-center gap-2 min-w-0">
					<div class="flex gap-1.5 flex-shrink-0">
						<button type="button" onclick={onClose} class="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-rose-500 hover:opacity-80" aria-label="Close modal"></button>
						<div class="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-amber-500"></div>
						<div class="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-emerald-500"></div>
					</div>
					<span id="terminal-modal-title" class="ml-1 sm:ml-2 font-mono text-[10px] sm:text-xs text-slate-300 truncate max-w-[170px] sm:max-w-none">
						[DCT CLI v2.5] - bash@devsafe:~
					</span>
				</div>
				<button type="button" onclick={onClose} class="text-slate-400 hover:text-white p-1 flex-shrink-0 ml-2" aria-label="Close terminal dialog">
					<X class="h-4 w-4" />
				</button>
			</div>

			<!-- Terminal Output Area -->
			<div
				bind:this={terminalContainer}
				role="region"
				tabindex="0"
				aria-label="Terminal output log"
				class="h-[50vh] sm:h-[380px] max-h-[380px] min-h-[200px] overflow-y-auto p-3 sm:p-4 font-mono text-[11px] sm:text-xs text-slate-300 scanline"
			>
				<div class="mb-3 sm:mb-4 text-[#00F0FF]">
					Welcome to Mr. DCT Terminal Interface.<br />
					Type <span class="underline font-bold">help</span> or click command buttons below.
				</div>

				{#each history as item}
					<div class="mb-3">
						<div class="flex items-center gap-1.5 sm:gap-2 text-[#00FF9D]">
							<span class="hidden sm:inline">dct@devsafe:~$</span>
							<span class="sm:hidden">$</span>
							<span class="text-white font-bold">{item.command}</span>
						</div>
						<pre class="mt-1 whitespace-pre-wrap font-mono text-slate-200 text-[11px] sm:text-xs">{item.output}</pre>
					</div>
				{/each}
			</div>

			<!-- Preset Quick Command Buttons -->
			<div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar border-t border-[#1F293D] bg-[#0E1424] px-3 py-2 sm:px-4 sm:py-2.5 text-xs whitespace-nowrap">
				<span class="font-mono text-[10px] sm:text-[11px] text-slate-400 font-semibold flex-shrink-0">Quick Commands:</span>
				{#each ['whoami', 'projects', 'skills', 'achievements', 'contact', 'clear'] as cmd}
					<button
						type="button"
						onclick={() => executeCommand(cmd)}
						class="flex-shrink-0 rounded bg-[#1A2338] px-2 sm:px-2.5 py-1 sm:py-1.5 font-mono text-[11px] sm:text-xs text-[#00F0FF] hover:bg-[#00F0FF] hover:text-black transition-colors focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
						aria-label={`Run ${cmd} command`}
					>
						{cmd}
					</button>
				{/each}
			</div>

			<!-- Input Line -->
			<div class="flex items-center gap-1.5 sm:gap-2 border-t border-[#1F293D] bg-[#121826] px-3 py-2.5 sm:px-4 sm:py-3">
				<label for="cli-input-field" class="font-mono text-[11px] sm:text-xs font-bold text-[#00FF9D] whitespace-nowrap flex-shrink-0">
					<span class="hidden sm:inline">dct@devsafe:~$</span>
					<span class="sm:hidden">$</span>
				</label>
				<input
					id="cli-input-field"
					type="text"
					bind:this={inputElement}
					bind:value={commandInput}
					onkeydown={handleKeyDown}
					placeholder="type command..."
					class="flex-1 min-w-0 bg-transparent font-mono text-[11px] sm:text-xs text-white placeholder-slate-500 focus:outline-none"
					aria-label="CLI Command Input"
				/>
				<button
					type="button"
					onclick={() => executeCommand(commandInput)}
					class="flex-shrink-0 rounded bg-[#00F0FF]/20 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-mono text-[#00F0FF] hover:bg-[#00F0FF] hover:text-black transition-colors"
					aria-label="Execute command"
				>
					<CornerDownLeft class="h-3.5 w-3.5" />
				</button>
			</div>
		</div>
	</div>
{/if}

