import React, { ReactNode } from "react";

interface SectionContainerProps {
	id?: string;
	children: ReactNode;
	className?: string;
	bgColor?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
	id,
	children,
	className = "",
	bgColor = "bg-white",
}) => (
	<section
		id={id}
		className={`py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto ${bgColor} ${className}`}
	>
		{children}
	</section>
);

export default SectionContainer;
