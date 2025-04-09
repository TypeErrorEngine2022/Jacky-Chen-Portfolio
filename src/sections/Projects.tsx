import { Card, Button } from "antd";

const Projects: React.FC = () => (
	<section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto bg-gray-50">
		<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Projects</h2>
		<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
			<Card
				className="w-full h-full hover:shadow-lg transition"
				bodyStyle={{ height: "100%", display: "flex", flexDirection: "column" }}
			>
				<h3 className="text-xl font-semibold">Project Name</h3>
				<p className="mt-2 text-gray-600 flex-grow">
					A brief description of the project and technologies used.
				</p>
				<Button type="link" href="#" className="mt-4 p-0 text-blue-500 hover:text-blue-700">
					View Project
				</Button>
			</Card>
			<Card
				className="w-full h-full hover:shadow-lg transition"
				bodyStyle={{ height: "100%", display: "flex", flexDirection: "column" }}
			>
				<h3 className="text-xl font-semibold">Project Name</h3>
				<p className="mt-2 text-gray-600 flex-grow">
					A brief description of the project and technologies used.
				</p>
				<Button type="link" href="#" className="mt-4 p-0 text-blue-500 hover:text-blue-700">
					View Project
				</Button>
			</Card>
		</div>
	</section>
);

export default Projects;
