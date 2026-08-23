export interface ProjectMedia {
	type: 'image' | 'video' | 'placeholder';
	aspectRatio: '16:9' | '9:16' | '4:3' | '1:1';
	placeholderTitle: string;
	placeholderInstructions: string;
	src?: string;
}

export interface Project {
	id: string;
	title: string;
	tagline: string;
	category: 'featured' | 'secondary';
	role: string;
	problem: string;
	stack: string[];
	architectureNote?: string;
	outcome: string[];
	liveUrl?: string;
	githubUrl?: string;
	media: ProjectMedia;
	brandAccent?: string;
	badge?: string;
}

export interface Achievement {
	id: string;
	title: string;
	organization: string;
	period: string;
	category: 'hackathon' | 'ctf' | 'leadership' | 'cert';
	description: string;
	metrics?: string;
	badge?: string;
	link?: string;
}

export interface SkillItem {
	name: string;
	level?: string;
	highlight?: boolean;
}

export interface SkillCategory {
	title: string;
	iconName: string;
	skills: SkillItem[];
}

export interface SocialLink {
	label: string;
	url: string;
	iconName: string;
	description?: string;
}

export interface BeyondItem {
	id: string;
	title: string;
	platform: string;
	metric?: string;
	description: string;
	link: string;
	type: 'youtube' | 'tiktok' | 'book';
	media: {
		aspectRatio: '16:9' | '9:16' | '3:4';
		placeholderTitle: string;
		placeholderInstructions: string;
		src?: string;
	};
}
