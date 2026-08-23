import type { BeyondItem } from '$lib/types';

export const beyondItems: BeyondItem[] = [
	{
		id: 'dct-lab-youtube',
		title: 'DCT Lab (YouTube Channel)',
		platform: 'YouTube',
		metric: 'Educational Content Studio',
		type: 'youtube',
		description:
			'Creating deep-dive tutorials on Cameroonian GCE A-Level Computer Science syllabus, practical web security/ethical hacking demonstrations, and developer mindset guidance.',
		link: 'https://youtube.com/@dct_lab',
		media: {
			aspectRatio: '16:9',
			placeholderTitle: 'DCT Lab YouTube Channel & Code Tutorials',
			placeholderInstructions: 'Needs 16:9 thumbnail or screenshot of DCT Lab channel header.'
		}
	},
	{
		id: 'dct-tiktok',
		title: '@dct_deepcodethinking',
		platform: 'TikTok',
		metric: '1,000+ Tech Followers',
		type: 'tiktok',
		description:
			'Short-form breakdown videos sharing coding hacks, student founder logs, security tips, and motivational content for aspiring African developers.',
		link: 'https://tiktok.com/@dct_deepcodethinking',
		media: {
			aspectRatio: '9:16',
			placeholderTitle: 'TikTok @dct_deepcodethinking Profile',
			placeholderInstructions: 'Needs vertical video frame or screenshot of TikTok profile/top video.'
		}
	},
	{
		id: 'mastering-mind-of-light',
		title: 'Mastering the Mind of Light',
		platform: 'Upcoming Book',
		metric: 'Spiritual & Mental Discipline',
		type: 'book',
		description:
			'Subtitle: "A Spiritual Journey to Renewed Thinking". Exploring the intersection of mental clarity, spiritual renewal, personal discipline, and focus in a high-distraction modern world.',
		link: '#',
		media: {
			aspectRatio: '3:4',
			placeholderTitle: 'Book Cover Concept: Mastering the Mind of Light',
			placeholderInstructions: 'Needs 3:4 book cover mockup or preview graphic.'
		}
	}
];
