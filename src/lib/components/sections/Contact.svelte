<script lang="ts">
	import { profile } from '$lib/data/profile';
	import SecurityBadge from '$lib/components/ui/SecurityBadge.svelte';
	import CopyButton from '$lib/components/ui/CopyButton.svelte';
	import SocialIcon from '$lib/components/ui/SocialIcon.svelte';
	import { Mail, Send, CheckCircle2, MessageSquare } from 'lucide-svelte';

	let formName = $state('');
	let formEmail = $state('');
	let formSubject = $state('');
	let formMessage = $state('');
	let isSubmitting = $state(false);
	let isSubmitted = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!formName || !formEmail || !formMessage) return;

		isSubmitting = true;

		// Simulate API call handler
		await new Promise((resolve) => setTimeout(resolve, 1000));

		isSubmitting = false;
		isSubmitted = true;
		formName = '';
		formEmail = '';
		formSubject = '';
		formMessage = '';

		setTimeout(() => {
			isSubmitted = false;
		}, 5000);
	}
</script>

<section id="contact" class="relative py-24 bg-[#0B0F19]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Title -->
		<div class="flex flex-col items-start mb-16">
			<SecurityBadge label="COMMUNICATION & INQUIRIES" variant="cyan" size="sm" />
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-sans">
				Get In <span class="text-[#00F0FF]">Touch</span>
			</h2>
			<p class="mt-2 text-xs font-mono text-slate-400 max-w-2xl">
				Looking to discuss a software project, hackathon collaboration, security audit, or speaking engagement? Reach out directly.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
			<!-- Contact Information & Direct Channels -->
			<div class="lg:col-span-5 flex flex-col justify-between space-y-8 rounded-2xl border border-[#1F293D] bg-[#0E1424] p-8">
				<div class="space-y-6">
					<h3 class="font-mono text-sm font-bold text-[#00F0FF] uppercase tracking-wider">
						[ DIRECT DISPATCH ]
					</h3>

					<div class="space-y-4">
						<!-- Email -->
						<div class="rounded-xl border border-[#1F293D] bg-[#121826] p-4">
							<div class="text-xs font-mono text-slate-400 mb-1">Direct Email:</div>
							<div class="flex items-center justify-between gap-2">
								<span class="font-mono text-sm font-semibold text-white break-all">
									{profile.contactEmail}
								</span>
								<CopyButton text={profile.contactEmail} label="Copy" />
							</div>
						</div>

						<!-- Location & Base -->
						<div class="rounded-xl border border-[#1F293D] bg-[#121826] p-4 font-mono text-xs text-slate-300">
							<div class="text-slate-400 mb-1">Base of Operations:</div>
							<div class="font-bold text-white">{profile.location}</div>
						</div>
					</div>

					<!-- Social Hub -->
					<div>
						<div class="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
							[ ONLINE PRESENCE & REPOS ]:
						</div>
						<div class="flex flex-col gap-2 font-mono text-xs">
							{#each profile.socials as social}
								<a
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center justify-between rounded-lg border border-[#1F293D] bg-[#121826] p-3 text-slate-300 transition-colors hover:border-[#00F0FF] hover:text-[#00F0FF]"
								>
									<span class="font-bold">{social.label}</span>
									<span class="text-slate-400 text-[11px]">{social.description}</span>
								</a>
							{/each}
						</div>
					</div>
				</div>

				<div class="pt-4 border-t border-[#1F293D] font-mono text-xs text-slate-500">
					Status: Available for technical lead & security consulting roles.
				</div>
			</div>

			<!-- Interactive Message Form -->
			<div class="lg:col-span-7 rounded-2xl border border-[#1F293D] bg-[#0E1424] p-8">
				<h3 class="font-mono text-sm font-bold text-[#00FF9D] uppercase tracking-wider mb-6">
					[ TRANSMIT MESSAGE ]
				</h3>

				{#if isSubmitted}
					<div class="flex items-center gap-3 rounded-xl border border-[#00FF9D]/40 bg-[#00FF9D]/10 p-4 text-xs font-mono text-[#00FF9D]">
						<CheckCircle2 class="h-5 w-5 flex-shrink-0" />
						<span>Message transmitted successfully! Mr. DCT will respond shortly.</span>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="space-y-4 font-sans text-xs">
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div>
								<label for="contact-name" class="block font-mono text-xs text-slate-300 mb-1">Your Name *</label>
								<input
									id="contact-name"
									type="text"
									required
									bind:value={formName}
									placeholder="e.g. Alex Johnson"
									class="w-full rounded-xl border border-[#1F293D] bg-[#121826] px-4 py-3 text-white placeholder-slate-500 focus:border-[#00F0FF] focus:outline-none font-mono text-xs"
								/>
							</div>

							<div>
								<label for="contact-email" class="block font-mono text-xs text-slate-300 mb-1">Your Email *</label>
								<input
									id="contact-email"
									type="email"
									required
									bind:value={formEmail}
									placeholder="alex@company.com"
									class="w-full rounded-xl border border-[#1F293D] bg-[#121826] px-4 py-3 text-white placeholder-slate-500 focus:border-[#00F0FF] focus:outline-none font-mono text-xs"
								/>
							</div>
						</div>

						<div>
							<label for="contact-subject" class="block font-mono text-xs text-slate-300 mb-1">Subject</label>
							<input
								id="contact-subject"
								type="text"
								bind:value={formSubject}
								placeholder="Project Inquiry / Hackathon / Security Audit"
								class="w-full rounded-xl border border-[#1F293D] bg-[#121826] px-4 py-3 text-white placeholder-slate-500 focus:border-[#00F0FF] focus:outline-none font-mono text-xs"
							/>
						</div>

						<div>
							<label for="contact-message" class="block font-mono text-xs text-slate-300 mb-1">Message *</label>
							<textarea
								id="contact-message"
								rows="5"
								required
								bind:value={formMessage}
								placeholder="Share details about your request or project..."
								class="w-full rounded-xl border border-[#1F293D] bg-[#121826] px-4 py-3 text-white placeholder-slate-500 focus:border-[#00F0FF] focus:outline-none font-mono text-xs"
							></textarea>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							class="w-full flex items-center justify-center gap-2 rounded-xl bg-[#00F0FF] py-3.5 font-mono text-xs font-bold text-black transition-all hover:bg-[#00FF9D] active:scale-98 disabled:opacity-50"
						>
							{#if isSubmitting}
								<span>Transmitting...</span>
							{:else}
								<Send class="h-4 w-4" />
								<span>Send Message</span>
							{/if}
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
