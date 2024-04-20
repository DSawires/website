export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "David Sawires",
	description: "Webby timeeeee.",
	navItems: [
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
			href: "/about",
		},
		{
			label: "LinkedIn",
			href: "/about",
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
