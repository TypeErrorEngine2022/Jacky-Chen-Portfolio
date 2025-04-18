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
	bgColor = "",
}) => (
	<section id={id} className={`p-6 sm:px-6 max-w-5xl mx-auto ${bgColor} ${className}`}>
		{children}
	</section>
);

export default SectionContainer;
