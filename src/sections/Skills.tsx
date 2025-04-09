const Skills: React.FC = () => {
	const skills = ["React", "TypeScript", "Tailwind CSS", "Ant Design", "JavaScript", "CSS"];

	return (
		<section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto bg-gray-50">
			<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Skills</h2>
			<div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
				{skills.map((skill) => (
					<div
						key={skill}
						className="p-4 bg-white shadow-md rounded-lg text-center text-gray-700 hover:shadow-lg transition"
					>
						{skill}
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
