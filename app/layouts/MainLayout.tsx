"use client";

import { usePathname } from "next/navigation";
import TopNav from "./includes/TopNav";

type Props = {
	children: React.ReactNode;
};

export default function MainLayout({
    children
}:Props) {
	const pathname = usePathname();

	return (
		<>
        <TopNav />
			<div
				className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 ${
					pathname === "/" ? "max-w-[1140px]" : ""
				}`}
			>{children}</div>
		</>
	);
}
