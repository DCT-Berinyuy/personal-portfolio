<script lang="ts">
	import { profile } from '$lib/data/profile';
	import SecurityBadge from '$lib/components/ui/SecurityBadge.svelte';
	import CopyButton from '$lib/components/ui/CopyButton.svelte';
	import SocialIcon from '$lib/components/ui/SocialIcon.svelte';
	import { Mail, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-svelte';

	let formName = $state('');
	let formEmail = $state('');
	let formSubject = $state('');
	let formMessage = $state('');
	let isSubmitting = $state(false);
	let isSubmitted = $state(false);
	let errorMessage = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!formName || !formEmail || !formMessage) return;

		isSubmitting = true;
		errorMessage = '';

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					access_key: '71139355-045b-431d-aa43-931b1b206028',
					name: formName,
					email: formEmail,
					subject: formSubject || `New Portfolio Message from ${formName}`,
					message: formMessage,
					from_name: 'Mr. DCT Portfolio'
				})
			});

			const data = await response.json();

			if (data.success) {
				isSubmitted = true;
				formName = '';
				formEmail = '';
				formSubject = '';
				formMessage = '';

				setTimeout(() => {
					isSubmitted = false;
				}, 6000);
			} else {
				errorMessage = data.message || 'Submission failed. Please try again or email directly.';
			}
		} catch (err) {
			errorMessage = 'Network error during submission. Please reach out directly via email.';
		} finally {
			isSubmitting = false;
		}
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
			<p class="mt-2 text-xs font-mono text-slate-300 max-w-2xl">
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
							<div class="text-xs font-mono text-slate-300 mb-1">Direct Email:</div>
							<div class="flex items-center justify-between gap-2">
								<span class="font-mono text-sm font-semibold text-white break-all">
									{profile.contactEmail}
								</span>
								<CopyButton text={profile.contactEmail} label="Copy" />
							</div>
						</div>

						<!-- WhatsApp Direct Chat Card -->
						<a
							href="https://wa.me/237680001677?text=Hello%20Mr.%20DCT%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect!"
							target="_blank"
							rel="noopener noreferrer"
							class="group flex items-center justify-between rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-900/30"
						>
							<div>
								<div class="text-xs font-mono text-emerald-400 mb-0.5">WhatsApp Direct Chat:</div>
								<div class="font-mono text-sm font-bold text-white group-hover:text-emerald-300">
									+237 680 001 677
								</div>
							</div>
							<div class="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-[#25D366]/10 text-emerald-400 transition-colors group-hover:bg-[#25D366] group-hover:text-black">
								<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
								</svg>
							</div>
						</a>

						<!-- Location & Base -->
						<div class="rounded-xl border border-[#1F293D] bg-[#121826] p-4 font-mono text-xs text-slate-200">
							<div class="text-slate-300 mb-1">Base of Operations:</div>
							<div class="font-bold text-white">{profile.location}</div>
						</div>
					</div>

					<!-- Social Hub -->
					<div>
						<div class="font-mono text-xs text-slate-300 uppercase tracking-wider mb-3">
							[ ONLINE PRESENCE & REPOS ]:
						</div>
						<div class="flex flex-col gap-2 font-mono text-xs">
							{#each profile.socials as social}
								<a
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center justify-between rounded-lg border border-[#1F293D] bg-[#121826] p-3 text-slate-200 transition-colors hover:border-[#00F0FF] hover:text-[#00F0FF] focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
								>
									<span class="font-bold">{social.label}</span>
									<span class="text-slate-300 text-[11px]">{social.description}</span>
								</a>
							{/each}
						</div>
					</div>
				</div>

				<div class="pt-4 border-t border-[#1F293D] font-mono text-xs text-slate-400">
					Status: Available for technical lead & security consulting roles.
				</div>
			</div>

			<!-- Interactive Message Form -->
			<div class="lg:col-span-7 rounded-2xl border border-[#1F293D] bg-[#0E1424] p-8">
				<h3 class="font-mono text-sm font-bold text-[#00FF9D] uppercase tracking-wider mb-6">
					[ TRANSMIT MESSAGE ]
				</h3>

				<div aria-live="polite" aria-atomic="true">
					{#if errorMessage}
						<div class="mb-4 flex items-center gap-3 rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 text-xs font-mono text-rose-300">
							<AlertCircle class="h-5 w-5 flex-shrink-0" />
							<span>{errorMessage}</span>
						</div>
					{/if}

					{#if isSubmitted}
						<div class="flex items-center gap-3 rounded-xl border border-[#00FF9D]/40 bg-[#00FF9D]/10 p-4 text-xs font-mono text-[#00FF9D]">
							<CheckCircle2 class="h-5 w-5 flex-shrink-0" />
							<span>Message transmitted successfully! Mr. DCT will respond shortly.</span>
						</div>
					{:else}
						<form onsubmit={handleSubmit} class="space-y-4 font-sans text-xs">
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label for="contact-name" class="block font-mono text-xs text-slate-200 font-medium mb-1">Your Name *</label>
									<input
										id="contact-name"
										name="name"
										type="text"
										required
										bind:value={formName}
										placeholder="e.g. Alex Johnson"
										class="w-full rounded-xl border border-[#1F293D] bg-[#121826] px-4 py-3 text-white placeholder-slate-400 focus:border-[#00F0FF] focus:outline-none font-mono text-xs focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
									/>
								</div>

								<div>
									<label for="contact-email" class="block font-mono text-xs text-slate-200 font-medium mb-1">Your Email *</label>
									<input
										id="contact-email"
										name="email"
										type="email"
										required
										bind:value={formEmail}
										placeholder="alex@company.com"
										class="w-full rounded-xl border border-[#1F293D] bg-[#121826] px-4 py-3 text-white placeholder-slate-400 focus:border-[#00F0FF] focus:outline-none font-mono text-xs focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
									/>
								</div>
							</div>

							<div>
								<label for="contact-subject" class="block font-mono text-xs text-slate-200 font-medium mb-1">Subject</label>
								<input
									id="contact-subject"
									name="subject"
									type="text"
									bind:value={formSubject}
									placeholder="Project Inquiry / Hackathon / Security Audit"
									class="w-full rounded-xl border border-[#1F293D] bg-[#121826] px-4 py-3 text-white placeholder-slate-400 focus:border-[#00F0FF] focus:outline-none font-mono text-xs focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
								/>
							</div>

							<div>
								<label for="contact-message" class="block font-mono text-xs text-slate-200 font-medium mb-1">Message *</label>
								<textarea
									id="contact-message"
									name="message"
									rows="5"
									required
									bind:value={formMessage}
									placeholder="Share details about your request or project..."
									class="w-full rounded-xl border border-[#1F293D] bg-[#121826] px-4 py-3 text-white placeholder-slate-400 focus:border-[#00F0FF] focus:outline-none font-mono text-xs focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
								></textarea>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								class="w-full flex items-center justify-center gap-2 rounded-xl bg-[#00F0FF] py-3.5 font-mono text-xs font-bold text-black transition-all hover:bg-[#00FF9D] active:scale-98 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-white"
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
	</div>
</section>

