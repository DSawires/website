export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "David Sawires",
	description: "This is David's personal website.",
	navItems: [
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "About Me",
			href: "/about",
		},
		{
			label: "Photography",
			href: "/photography",
		},
		{
			label: "Resume",
			href: "/resume",
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Photography",
			href: "/photography",
		},
		{
			label: "Resume",
			href: "/resume",
		},
		{
			label: "About Me",
			href: "/about",
		},
		{
			label: "GitHub",
			href: "siteConfig.links.github",
		},
		{
			label: "LinkedIn",
			href: "siteConfig.links.linkedin",
		},
		{
			label: "Contact Me",
			href: "/about",
		}
	],
	links: {
		github: "https://github.com/dsawires",
		linkedin: "https://linkedin.com/in/dsawires",
    	sponsor: "mailto:contact@davidsawires.com"
	},
};
