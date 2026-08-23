import type { SkillCategory } from '$lib/types';

export const skillCategories: SkillCategory[] = [
	{
		title: 'Core Systems & Languages',
		iconName: 'Code2',
		skills: [
			{ name: 'Rust', level: 'Advanced / Axum & Tonic', highlight: true },
			{ name: 'Dart', level: 'Advanced / Flutter Engine', highlight: true },
			{ name: 'TypeScript', level: 'Advanced / SvelteKit', highlight: true },
			{ name: 'Python', level: 'Proficient / Automation & Scripting' },
			{ name: 'C / C++', level: 'Systems Fundamentals' },
			{ name: 'POSIX Shell / Bash', level: 'Automation & CLI Tools' },
			{ name: 'SQL', level: 'PostgreSQL & Query Tuning' }
		]
	},
	{
		title: 'Frameworks & Architectures',
		iconName: 'Layers',
		skills: [
			{ name: 'SvelteKit 2 (Svelte 5 Runes)', level: 'Expert Web Stack', highlight: true },
			{ name: 'Flutter (Android / iOS / Web)', level: 'Production Apps', highlight: true },
			{ name: 'Axum & Tonic gRPC', level: 'Microservices & Escrow', highlight: true },
			{ name: 'ConnectRPC', level: 'Type-Safe APIs' },
			{ name: 'Tailwind CSS', level: 'Design Systems' },
			{ name: 'Docker & Microservices', level: 'Container Deployment' }
		]
	},
	{
		title: 'Security & Cloud Infra',
		iconName: 'ShieldCheck',
		skills: [
			{ name: 'Web App Pentesting', level: 'Ethical Hacking', highlight: true },
			{ name: 'OWASP Top 10 & API Security', level: 'Hardening & Auditing', highlight: true },
			{ name: 'AWS Cloud Security', level: 'IAM & CTF Breach Analysis', highlight: true },
			{ name: 'Linux Network Security', level: 'Wayland & NetworkManager' },
			{ name: 'Identity & Access (KYC)', level: 'Auth Architecture' }
		]
	},
	{
		title: 'Databases & Integrations',
		iconName: 'Database',
		skills: [
			{ name: 'PostgreSQL', level: 'Relational Schemas', highlight: true },
			{ name: 'Fapshi / Mobile Money APIs', level: 'Live Cameroon Escrow', highlight: true },
			{ name: 'Supabase & Realtime', level: 'Auth & DB Engine' },
			{ name: 'Firebase Cloud Firestore', level: 'NoSQL Services' },
			{ name: 'WebSockets & gRPC', level: 'Realtime Streaming' }
		]
	}
];
