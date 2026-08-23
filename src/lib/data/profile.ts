import type { SocialLink } from '$lib/types';

export const profile = {
	name: 'Verla Berinyuy Ndey',
	handle: 'Mr. DCT',
	title: 'Founder & CEO @ DevSafe | Security-Minded Full-Stack Builder',
	shortBio:
		'Cybersecurity Major at ICT University Yaoundé & Founder of DevSafe. I build high-performance mobile, web, and backend systems with deep security engineering and product leadership.',
	location: 'Yaoundé, Cameroon (Origin: Bamenda)',
	status: 'BUILDING & LEADING',
	clearanceLevel: 'SEC-LEVEL 01 // FOUNDER & ENGINEER',
	heroStats: [
		{ label: 'Startup Founded', value: 'DevSafe', subtext: 'Student Tech Venture' },
		{ label: 'Hackatime Rank', value: '#1', subtext: 'Cameroon Leaderboard' },
		{ label: 'CTF Podium', value: '3rd Place', subtext: 'Red Shielders Africa CTF' },
		{ label: 'Flagship Event', value: '900K FCFA', subtext: 'Campus of Tomorrow Lead' }
	],
	aboutBio: [
		'I am Verla Berinyuy Ndey (popularly known online as Mr. DCT / DeepCodeThinking). I am the Founder & CEO of DevSafe, a student tech startup based in Yaoundé, Cameroon, originally from Bamenda.',
		'Currently pursuing my Bachelor’s degree in Cybersecurity at ICT University Yaoundé, my engineering discipline spans from low-level systems programming in Rust and C/C++ to scalable cross-platform mobile apps with Flutter/Dart and reactive web frontends in SvelteKit.',
		'What sets my work apart is security-first architecture. Whether building live escrow payment engines for African commerce, gRPC microservices, or zero-account ephemeral chat apps, I approach every system with an ethical hacker’s eye for threat models, input validation, and memory safety.'
	],
	contactEmail: 'berinyuy.verla@devsafe.cm',
	socials: [
		{
			label: 'GitHub',
			url: 'https://github.com/DCT-Berinyuy',
			iconName: 'Github',
			description: 'DCT-Berinyuy'
		},
		{
			label: 'Linktree',
			url: 'https://linktr.ee/DeepCodeThinking',
			iconName: 'Link',
			description: 'DeepCodeThinking Hub'
		},
		{
			label: 'YouTube',
			url: 'https://youtube.com/@dct_lab',
			iconName: 'Youtube',
			description: 'DCT Lab Channel'
		},
		{
			label: 'TikTok',
			url: 'https://tiktok.com/@dct_deepcodethinking',
			iconName: 'Video',
			description: '@dct_deepcodethinking (1,000+ Followers)'
		}
	] as SocialLink[]
};
