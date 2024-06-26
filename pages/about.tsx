import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { AuroraBackground } from "@/components/aurora-background";
import { motion } from "framer-motion";

export default function IndexPage() {
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
					<h4 className={title({color: "blue"})}>
						About me under development.
					</h4>
				</div>
			</section>
			</motion.div>
			</AuroraBackground>
		</DefaultLayout>
	);
}
