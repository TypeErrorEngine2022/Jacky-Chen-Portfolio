import React, { useState } from "react";
import { Card } from "antd";
import SectionContainer from "../components/SectionContainer";

interface ProjectCardProps {
	title: string;
	duration: string;
	description: string[];
	images?: { src: string; alt: string; aspect: string }[];
	link: string;
}

const ImageWithPlaceholder: React.FC<{
	src: string;
	alt: string;
	aspect?: string;
	className?: string;
}> = ({ src, alt, aspect = "aspect-video", className }) => {
	const [loaded, setLoaded] = useState(false);
	return (
		<div className={`relative w-full ${aspect} bg-gray-200 overflow-hidden ${className || ""}`}>
			{!loaded && (
				<div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse" />
			)}
			<img
				src={src}
				alt={alt}
				loading="lazy"
				className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
				onLoad={() => setLoaded(true)}
			/>
		</div>
	);
};

const ProjectCard = ({ title, duration, description, images, link }: ProjectCardProps) => (
	<Card className="w-full h-full hover:shadow-lg transition">
		<h3>
			<span className="text-xl font-semibold mr-2">{title}</span>
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center gap-1 align-middle"
			>
				link
				<span
					aria-label="Opens in new tab"
					title="Opens in new tab"
					className="inline-block align-middle"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-4 h-4 ml-0.5 text-gray-500"
					>
						<path d="M13.25 2a.75.75 0 0 0 0 1.5h2.19l-5.72 5.72a.75.75 0 1 0 1.06 1.06l5.72-5.72v2.19a.75.75 0 0 0 1.5 0V2.75A.75.75 0 0 0 17.25 2h-4z" />
						<path d="M5.25 4A2.25 2.25 0 0 0 3 6.25v7.5A2.25 2.25 0 0 0 5.25 16h7.5A2.25 2.25 0 0 0 15 13.75V10a.75.75 0 0 0-1.5 0v3.75c0 .41-.34.75-.75.75h-7.5a.75.75 0 0 1-.75-.75v-7.5c0-.41.34-.75.75-.75H10a.75.75 0 0 0 0-1.5H5.25z" />
					</svg>
				</span>
			</a>
		</h3>
		<p className="text-gray-500">{duration}</p>
		<ul className="list-disc list-inside mt-2">
			{description.map((desc, index) => (
				<li key={index} className="text-gray-700">
					{desc}
				</li>
			))}
		</ul>
		{images &&
			images.length > 0 &&
			images.map((image) => (
				<div key={`${title} - ${image.alt}`} className="mt-4">
					<ImageWithPlaceholder
						src={image.src}
						alt={`${title} - ${image.alt}`}
						aspect={image.aspect}
					/>
				</div>
			))}
	</Card>
);

const projects: ProjectCardProps[] = [
	{
		title: "Compare and Contrast Formulae in Shang-Han-Lun",
		duration: "Oct 2023 - Mar 2024",
		description: [
			"Pre-process hundreds of images automatically with OpenCV and Python for text recognition",
			"Collaborate with a Chinese Medicine student to devise feature engineering strategies for the textual data",
			"Visualize the results by interactive graphs such as treemap, and sunburst chart using Python Plotly",
			"Build a Formula Origin Finder using Dash",
		],
		images: [{ src: "/projects/cmed/poster.png", alt: "Poster", aspect: "aspect-[3401/5291]" }],
		link: "https://dsprojects.lib.cuhk.edu.hk/en/projects/shanghanlun/introduction/",
	},
];

const Projects: React.FC = () => (
	<SectionContainer id="projects" bgColor="bg-gray-50">
		<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Projects</h2>
		<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
			{projects.map((project, idx) => {
				const isLastOdd = projects.length % 2 === 1 && idx === projects.length - 1;
				return (
					<div key={project.title} className={isLastOdd ? "md:col-span-2" : undefined}>
						<ProjectCard {...project} />
					</div>
				);
			})}
		</div>
	</SectionContainer>
);

export default Projects;
