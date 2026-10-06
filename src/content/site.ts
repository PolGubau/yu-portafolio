// ─────────────────────────────────────────────────────────────────────────────
// All the editable copy of the site lives here. Change a text, link or photo
// and save: no need to touch any page or component.
//
// Tip: in the "about" paragraphs, wrap words in **double asterisks** to make
// them bold.
// ─────────────────────────────────────────────────────────────────────────────

export interface Link {
	label: string;
	href: string;
}

export interface PhotoInfo {
	src: string;
	alt: string;
}

export const site = {
	name: "Yunaplena",
	// Used when a page has no description of its own.
	description: "Yu Vilaseca - DJ and Art Director based in Barcelona.",
	// Page titles are built as "<page title> - <site name>".
	titleSeparator: " - ",
};

export const contact = {
	email: "yuvilaseca@gmail.com",
	instagram: { url: "https://www.instagram.com/yunaplenaa/", handle: "@yunaplenaa" },
	soundcloud: { url: "https://soundcloud.com/yunaplena", label: "Soundcloud" },
};

// Footer navigation shown on every page except the home.
export const navigation: Link[] = [
	{ label: "Home", href: "/" },
	{ label: "Portfolio", href: "/portfolio" },
	{ label: "DJ & Music", href: "/dj-music" },
	{ label: "About me", href: "/about-me" },
	{ label: "Contact", href: `mailto:${contact.email}` },
];

export const home = {
	title: "Yunaplena - Yu Vilaseca",
	description: "DJ & Music portfolio of Yu Vilaseca, based in Barcelona.",
	photo: "/media/home/yu.JPG",
	photoAlt: "Yu Vilaseca, photographed in black and white",
	logo: "/media/home/primary_whiteyunaplena.png",
	logoAlt: "Yunaplena",
	// The four corner links (position is fixed: topLeft, topRight, ...).
	corners: {
		topLeft: { label: "DJ & MUSIC", href: "/dj-music" },
		topRight: { label: "PORTFOLIO", href: "/portfolio" },
		bottomLeft: { label: "ABOUT ME", href: "/about-me" },
		bottomRight: { label: "CONTACT", href: `mailto:${contact.email}` },
	},
};

export const portfolio = {
	title: "Portfolio",
	description: "Selected art direction and music projects by Yu Vilaseca.",
};

export const artDirection = {
	title: "Art direction",
	description: "Art direction projects by Yu Vilaseca.",
};

export const video = {
	title: "Video",
	description: "Video projects by Yu Vilaseca.",
};

// Project detail pages (the project texts live in projects.js).
export const projectPage = {
	// {category} is replaced by the project category.
	description: "{category} project by Yu Vilaseca.",
	galleryLabel: "gallery", // "<project title> gallery"
	imageAlt: "image", // "<project title> - image 1"
	videoTitle: "Yunaplena presentation",
};

export const djMusic = {
	title: "DJ & Music",
	description: "DJ sets and event history for Yu Vilaseca.",
	heading: "DJ & MUSIC",
	linkLabels: { sets: "Dj sets", contact: "Contact", instagram: "Instagram" },
	eventsHeading: "Events",
	eventsColumns: ["Name", "Location", "Genres", "Type", "Date"],
	galleryLabel: "DJ photographs",
	photoAlt: "Yu Vilaseca performing", // "<alt> - 1", "<alt> - 2"...
	gallery: [
		"/media/dj/IMG_1172.jpg",
		"/media/dj/IMG_0939.JPG",
		"/media/dj/IMG_0060.jpg",
		"/media/dj/IMG_1167-2.jpg",
		"/media/dj/99450564-5ece-4eb3-a899-0ccaedbd1608-copia.JPG",
		"/media/dj/sumak.jpeg",
		"/media/dj/DSC06446.jpeg",
	],
};

export const about = {
	title: "About me",
	heading: "ABOUT",
	contactHeading: "Contact",
	portrait: {
		src: "/media/about/classicu-2025-10-30-121419.809-2.JPG",
		alt: "Portrait of Yu Vilaseca",
	},
	// The small photo shown after the 4th paragraph.
	inset: {
		src: "/media/about/IMG_4912.jpg",
		alt: "Yu Vilaseca in a warm, double-exposure portrait",
		afterParagraph: 4,
	},
	paragraphs: [
		"**Yu Vilaseca is a DJ and Art Director based in Barcelona.**",
		"Her versatile musical approach spans a wide range of styles, from techno and the many shades of house music to soulful sounds and occasional commercial influences when the atmosphere calls for it.",
		"She has performed at renowned venues such as Pacha Barcelona and Macarena Club. She is currently a resident **DJ at W Barcelona**, where she has refined her sonic vision across rooftops, clubs, and private events.",
		"In her sets, **Yu blends the energy of electronic music with organic and instrumental elements, creating distinctive atmospheres where each session develops its own identity.**",
		"Guided by curiosity, she is constantly exploring new sounds, ideas, and influences, keeping an open-minded approach to both music and creativity.",
		"Yu values communication, collaboration, and shared experiences. Her calm and grounded personality is balanced by a natural sense of spontaneity and adaptability, allowing her to move effortlessly between different settings, audiences, and musical styles.",
		"Driven by movement, discovery, and continuous evolution, she finds inspiration in new places, cultures, and creative projects. For Yu, the most meaningful experiences emerge where passion, authenticity, and well-being come together.",
	],
};

// Builds "<page title> - <site name>".
export const pageTitle = (title: string): string => `${title}${site.titleSeparator}${site.name}`;
