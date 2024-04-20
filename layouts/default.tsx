import { Navbar } from "@/components/navbar";
import { Head } from "./head";
import React from "react";


export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen overflow-hidden transform -translate-y-10">
			<Head />
			<Navbar />
			<main className="container mx-auto max-w-m flex-grow relative z-0">
				{children}
			</main>
		</div>
	);
}