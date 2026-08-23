import type { Project } from '$lib/types';

export const projects: Project[] = [
	{
		id: 'bookbridge',
		title: 'BookBridge',
		tagline: 'Peer-to-Peer Educational Marketplace & Escrow Platform for African Students',
		category: 'featured',
		role: 'Co-Founder & Lead Systems Architect',
		problem:
			'African university students struggle to access affordable textbooks and study materials due to high retail costs and lack of secure local peer-to-peer payment verification.',
		stack: ['Flutter', 'Dart', 'Rust (Axum)', 'Fapshi / Mobile Money', 'PostgreSQL', 'Docker'],
		architectureNote:
			'Built a high-performance Rust (Axum) API engine processing live escrow transactions with automated webhook reconciliation for Cameroonian Mobile Money (MTN MoMo & Orange Money via Fapshi API).',
		outcome: [
			'🥉 3rd Place at ICT for Africa Tech Innovation Challenge 2026 (250,000 FCFA prize)',
			'🏆 Top 5 Finalist at PROMOTE 2026 International Exhibition',
			'📺 Featured on CRTV National News Broadcast',
			'🚀 Regional Finalist at MTN YaMo Pitch Season 4'
		],
		brandAccent: '#EAB308', // Gold theme
		badge: 'AWARD-WINNING PRODUCT',
		media: {
			type: 'placeholder',
			aspectRatio: '9:16',
			placeholderTitle: 'BookBridge Mobile App & Escrow Checkout',
			placeholderInstructions:
				'Needs vertical screenshot/demo clip showing Flutter UI, book catalog, and Mobile Money escrow flow.'
		}
	},
	{
		id: 'eventra',
		title: 'Eventra',
		tagline: 'Flagship Event Ticketing, Management & Monetized Voting Platform for Central Africa',
		category: 'featured',
		role: 'Lead Full-Stack & Security Engineer',
		problem:
			'Event organizers in Central Africa face high fraud rates, unreliable manual ticket verification, and complex payment collection for competitive voting contests.',
		stack: ['SvelteKit', 'TypeScript', 'Rust (Tonic gRPC)', 'Flutter', 'Mobile Money', 'PostgreSQL'],
		architectureNote:
			'Designed gRPC microservice architecture powered by Rust (Tonic) for sub-millisecond vote validation and ticket verification, paired with a SvelteKit web portal and Flutter mobile scanner app.',
		outcome: [
			'🌐 Live in production at eventra.dev.devsafe.cm',
			'⚡ Processed live paid voting contests and ticket sales across Cameroon',
			'🔒 DevSafe flagship client deployment with multi-tenant event isolation'
		],
		liveUrl: 'https://eventra.dev.devsafe.cm',
		brandAccent: '#00F0FF',
		badge: 'IN PRODUCTION',
		media: {
			type: 'placeholder',
			aspectRatio: '16:9',
			placeholderTitle: 'Eventra Web Portal & Voting Dashboard',
			placeholderInstructions:
				'Needs 16:9 desktop screenshot of eventra.dev.devsafe.cm showing live event ticketing and voting interface.'
		}
	},
	{
		id: 'bella-call',
		title: 'Bella Call',
		tagline: 'On-Demand Beauty & Hairdressing Marketplace with Real-Time Tracking & KYC',
		category: 'featured',
		role: 'Backend Architect & Security Engineer',
		problem:
			'Connecting freelance beauty professionals with clients safely in urban Cameroonian cities requires verified identities, real-time location mapping, and secure in-app communication.',
		stack: ['Flutter', 'Rust (ConnectRPC)', 'Geospatial Indexing', 'WebSockets', 'Supabase Auth'],
		architectureNote:
			'Implemented ConnectRPC backend handlers in Rust with real-time WebSocket location tracking, end-to-end identity verification (KYC), and encrypted client-beautician chat.',
		outcome: [
			'📍 Live GPS provider discovery and booking dispatch',
			'🔐 Bank-grade customer and provider identity verification (KYC)',
			'💬 Low-latency real-time chat & status notification engine'
		],
		brandAccent: '#A855F7',
		badge: 'STARTUP MVP',
		media: {
			type: 'placeholder',
			aspectRatio: '9:16',
			placeholderTitle: 'Bella Call Provider Map & Booking Flow',
			placeholderInstructions:
				'Needs vertical screenshot of Flutter app showing GPS provider tracking and service booking screen.'
		}
	},
	{
		id: 'devsafe',
		title: 'DevSafe',
		tagline: 'Student Tech Venture — Software Engineering & Cybersecurity Agency + Product Studio',
		category: 'featured',
		role: 'Founder & CEO',
		problem:
			'Bridging the gap between student engineering talent and production-grade enterprise software delivery in Central Africa through a hybrid agency + product incubator model.',
		stack: ['SvelteKit', 'Rust', 'Flutter', 'Python', 'Supabase', 'Docker', 'OWASP Standards'],
		architectureNote:
			'Operates on a dual-lane growth strategy: high-quality client engineering services (Eventra, custom web/mobile security audits) funding internal R&D products (BookBridge, Bella Call).',
		outcome: [
			'💼 Founded & led cross-functional team of student developers and cybersecurity analysts',
			'🚀 Built, shipped, and monetized 3 major client/owned web & mobile platforms',
			'🛡️ Conducted ethical hacking & web security audits for client applications'
		],
		liveUrl: 'https://devsafe.cm',
		brandAccent: '#00FF9D',
		badge: 'FOUNDER VENTURE',
		media: {
			type: 'placeholder',
			aspectRatio: '16:9',
			placeholderTitle: 'DevSafe Brand & Engineering Operations',
			placeholderInstructions:
				'Needs 16:9 banner image or logo graphic representing DevSafe team, agency showcase, and brand identity.'
		}
	},
	{
		id: 'marketimise',
		title: 'Marketimise',
		tagline: 'Two-Surface SME E-Commerce & Merchant Operations Portal',
		category: 'secondary',
		role: 'Full-Stack Developer',
		problem:
			'Small and medium enterprises need a lightweight, dual-surface platform for inventory management and customer checkout without heavy SaaS overhead.',
		stack: ['SvelteKit', 'Rust (Axum)', 'Tailwind CSS', 'PostgreSQL'],
		outcome: [
			'⚡ Dual merchant management dashboard and customer store front',
			'🚀 High-concurrency Rust Axum backend with low-bandwidth optimization'
		],
		media: {
			type: 'placeholder',
			aspectRatio: '16:9',
			placeholderTitle: 'Marketimise Dashboard Screenshot',
			placeholderInstructions: 'Needs 16:9 screenshot of SME merchant management portal.'
		}
	},
	{
		id: 'radar',
		title: 'Radar',
		tagline: 'Cross-Platform Audio & Media DSP Utility Powered by Rust Engine',
		category: 'secondary',
		role: 'Mobile & Audio DSP Developer',
		problem:
			'Mobile media processing often suffers from high latency and battery drain when relying solely on native mobile runtimes.',
		stack: ['Flutter', 'Rust (FFI)', 'DSP Processing', 'Dart'],
		outcome: [
			'🎵 High-speed audio signal filtering via embedded Rust FFI binaries',
			'📱 Smooth 60fps Flutter UI for real-time waveform visualization'
		],
		media: {
			type: 'placeholder',
			aspectRatio: '9:16',
			placeholderTitle: 'Radar Waveform & Audio Player UI',
			placeholderInstructions: 'Needs vertical screenshot of Radar audio utility interface.'
		}
	},
	{
		id: 'omarchy-hotspot',
		title: 'omarchy-hotspot',
		tagline: 'Terminal-Native Wi-Fi Hotspot & Network Interface Manager for Arch/Wayland',
		category: 'secondary',
		role: 'Open-Source Creator',
		problem:
			'Linux power-users on Arch Linux and Wayland compositors lack a minimal, dependency-light CLI utility to create and manage AP hotspots.',
		stack: ['Bash / POSIX Shell', 'Linux Networking (nmcli/iptables)', 'Arch Linux', 'Wayland'],
		outcome: [
			'⭐ Published open-source utility on GitHub for the Linux community',
			'💻 Seamless terminal CLI control for hotspot routing and DNS management'
		],
		githubUrl: 'https://github.com/DCT-Berinyuy/omarchy-hotspot',
		media: {
			type: 'placeholder',
			aspectRatio: '16:9',
			placeholderTitle: 'omarchy-hotspot Terminal Session',
			placeholderInstructions: 'Needs terminal screenshot showing omarchy-hotspot execution.'
		}
	},
	{
		id: 'renndo',
		title: 'Renndo',
		tagline: 'Zero-Account Ephemeral Group Chat App for Privacy-Conscious Users',
		category: 'secondary',
		role: 'Hackathon Lead Developer',
		problem:
			'Temporary event groups and hackathon teams need instant, secure chat rooms without requiring email signups or persistent data storage.',
		stack: ['SvelteKit', 'Supabase Realtime', 'Tailwind CSS', 'Crypto Web API'],
		outcome: [
			'🥇 1st Place Winner at Digital Strike 6-Hour Hackathon',
			'🔒 Zero-login ephemeral rooms auto-expiring with end-to-end memory disposal'
		],
		media: {
			type: 'placeholder',
			aspectRatio: '16:9',
			placeholderTitle: 'Renndo Instant Chat Interface',
			placeholderInstructions: 'Needs screenshot of Renndo zero-login group room.'
		}
	}
];
