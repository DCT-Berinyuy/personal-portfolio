import type { Achievement } from '$lib/types';

export const achievements: Achievement[] = [
	{
		id: 'hackatime-rank-1',
		title: '#1 Rank on Cameroon Hackatime Leaderboard',
		organization: 'Hackatime / Global Developer Leaderboard',
		period: '2025 - 2026',
		category: 'hackathon',
		description:
			'Achieved and maintained the #1 top spot on the national Cameroonian coding leaderboard while mastering systems programming in Rust and building production backends.',
		metrics: '#1 Leaderboard Rank',
		badge: 'CODING MILESTONE'
	},
	{
		id: 'red-shielders-ctf',
		title: '3rd Place - Red Shielders Africa Cloud Breach CTF',
		organization: 'Red Shielders Africa',
		period: '2025',
		category: 'ctf',
		description:
			'Competed against top African cybersecurity teams in a live multi-tenant AWS cloud environment. Exploited IAM misconfigurations, SSRF, and container breakouts under intense time pressure.',
		metrics: '🥉 3rd Place (Pan-African)',
		badge: 'CYBERSECURITY CTF'
	},
	{
		id: 'campus-of-tomorrow-lead',
		title: 'Technical Committee Lead - The Campus of Tomorrow Hackathon',
		organization: 'The Campus of Tomorrow',
		period: '2026',
		category: 'leadership',
		description:
			'Headed the technical jury and platform committee for a major university hackathon featuring a 900,000 FCFA total prize pool, evaluating 30+ student software submissions.',
		metrics: '900,000 FCFA Prize Pool',
		badge: 'LEADERSHIP & JUDGING'
	},
	{
		id: 'gdgoc-tech-lead',
		title: 'AI Engineer & Technical Team Lead',
		organization: 'Google Developer Group on Campus (GDGoC) - ICT University',
		period: '2024 - Present',
		category: 'leadership',
		description:
			'Leading technical workshops, mentoring developer cohorts in Flutter, Web dev, and AI integrations, and orchestrating university hackathons and tech talks.',
		metrics: '500+ Students Mentored',
		badge: 'COMMUNITY LEAD'
	},
	{
		id: 'owasp-yaounde',
		title: 'Active Member & Security Contributor',
		organization: 'OWASP Yaoundé Chapter',
		period: '2024 - Present',
		category: 'ctf',
		description:
			'Participating in local web application security meetups, presenting security research on API security flaws, and advocating OWASP Top 10 defenses in Cameroonian software teams.',
		metrics: 'Security Advocate',
		badge: 'CYBER DEFENSE'
	},
	{
		id: 'certifications-bootcamps',
		title: 'Professional Certifications & Bootcamp Honors',
		organization: 'ICT4Africa, Ministry of ICT, FOR-ALL Tech',
		period: '2024 - 2026',
		category: 'cert',
		description:
			'Recognized across multiple national and continental programs: ICT4Africa Summit Delegate, TIC Hackathon on Education Certificate of Merit, Cameroon ICT Innovation Week Finalist, FOR-ALL Tech Bootcamp Graduate.',
		metrics: '4+ National Diplomas',
		badge: 'HONORS & CERTS'
	}
];
