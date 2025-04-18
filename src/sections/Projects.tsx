import { Card, Button } from "antd";

interface ProjectCardProps {
	title: string;
	duration: string;
	description: string[];
	link: string;
}

const ProjectCard = ({ title, duration, description, link }: ProjectCardProps) => (
	<Card className="w-full h-full hover:shadow-lg transition">
		<h3 className="text-xl font-semibold">{title}</h3>
		<p className="text-gray-500">{duration}</p>
		<ul className="list-disc list-inside mt-2">
			{description.map((desc, index) => (
				<li key={index} className="text-gray-700">
					{desc}
				</li>
			))}
		</ul>
		<Button type="link" href={link} className="mt-4 p-0 text-blue-500 hover:text-blue-700">
			View Project
		</Button>
	</Card>
);

const projects = [
	{
		title: "Compare and Contrast Formulae in Shang-Han-Lun",
		duration: "Oct 2023 - Mar 2024",
		description: [
			"Pre-process hundreds of images automatically with OpenCV and Python for text recognition",
			"Collaborate with a Chinese Medicine student to devise feature engineering strategies for the textual data",
			"Visualize the results by interactive graphs such as treemap, and sunburst chart using Python Plotly",
			"Build a Formula Origin Finder using Dash",
		],
		link: "https://dsprojects.lib.cuhk.edu.hk/en/projects/shanghanlun/introduction/",
	},
];

const Projects: React.FC = () => (
	<section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto bg-gray-50">
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
	</section>
);

export default Projects;
