import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { AuroraBackground } from "@/components/aurora-background";
import { motion } from "framer-motion";
import { useTheme } from 'next-themes';

export default function IndexPage() {
	const { theme } = useTheme();
	return (
		<DefaultLayout>
			<AuroraBackground>
				<motion.div
					initial={{ opacity: 0.0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
					}}
					className="relative flex flex-col gap-4 items-center justify-center px-4"
				>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 transform -translate-y-14">
				<div className="inline-block max-w-xl text-center justify-center">
					<h1 className={title({color: "blue" })}>Hello!&nbsp;</h1>
					<h1 className={title({color: theme === 'dark' ? 'foreground' : 'darkblue' })}>
						I'm David,
					</h1>
					<br />
					<h2 className={title({color: theme === 'dark' ? 'foreground' : 'darkblue' })}>
						your friendly neighborhood
					</h2>
					<br />
					<h3 className={title({color: "blue"})}>
						software engineer.
					</h3>
					<h4 className={subtitle()}>
						Click around to learn more about me!
					</h4>
				</div>
			</section>
			</motion.div>
			</AuroraBackground>
		</DefaultLayout>
	);
}
