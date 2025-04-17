import { JSX } from "react";
import {
	FaReact,
	FaVuejs,
	FaPython,
	FaJava,
	FaHtml5,
	FaCss3Alt,
	FaNodeJs,
	FaGitAlt,
	FaRust,
	FaAndroid,
	FaDocker,
	FaAws,
} from "react-icons/fa";
import {
	SiTypescript,
	SiNextdotjs,
	SiAntdesign,
	SiCplusplus,
	SiC,
	SiDjango,
	SiSpringboot,
	SiJest,
	SiSolidity,
	SiKotlin,
	SiGo,
	SiPostgresql,
	SiMongodb,
	SiLinux,
	SiElectron,
} from "react-icons/si";

const Skills: React.FC = () => {
	const getSkillIcon = (skill: string) => {
		const iconProps = { className: "text-2xl mr-2" };
		const iconMap: Record<string, JSX.Element> = {
			TypeScript: <SiTypescript {...iconProps} />,
			React: <FaReact {...iconProps} />,
			"Vue.js": <FaVuejs {...iconProps} />,
			Python: <FaPython {...iconProps} />,
			Java: <FaJava {...iconProps} />,
			"Next.js": <SiNextdotjs {...iconProps} />,
			"Ant Design": <SiAntdesign {...iconProps} />,
			HTML: <FaHtml5 {...iconProps} />,
			CSS: <FaCss3Alt {...iconProps} />,
			"Node.js": <FaNodeJs {...iconProps} />,
			"C++": <SiCplusplus {...iconProps} />,
			C: <SiC {...iconProps} />,
			Git: <FaGitAlt {...iconProps} />,
			Rust: <FaRust {...iconProps} />,
			"Native Android": <FaAndroid {...iconProps} />,
			Django: <SiDjango {...iconProps} />,
			"Spring Boot": <SiSpringboot {...iconProps} />,
			Docker: <FaDocker {...iconProps} />,
			Jest: <SiJest {...iconProps} />,
			Solidity: <SiSolidity {...iconProps} />,
			Kotlin: <SiKotlin {...iconProps} />,
			Go: <SiGo {...iconProps} />,
			PostgreSQL: <SiPostgresql {...iconProps} />,
			MongoDB: <SiMongodb {...iconProps} />,
			Linux: <SiLinux {...iconProps} />,
			Electron: <SiElectron {...iconProps} />,
			AWS: <FaAws {...iconProps} />,
		};

		return iconMap[skill] || null;
	};

	const skillCategories = [
		{
			title: "Experienced (>= 2 years)",
			skills: [
				"TypeScript",
				"HTML",
				"CSS",
				"React",
				"Vue.js",
				"Python",
				"Java",
				"Next.js",
				"Ant Design",
			],
			bgColor: "bg-blue-50",
			borderColor: "border-blue-300",
		},
		{
			title: "Intermediate (1-2 years)",
			skills: ["Node.js", "C++", "C", "Git"],
			bgColor: "bg-green-50",
			borderColor: "border-green-300",
		},
		{
			title: "Entry-level (< 1 year)",
			skills: [
				"Rust",
				"Django",
				"Spring Boot",
				"Docker",
				"Jest",
				"Solidity",
				"Kotlin",
				"Go",
				"PostgreSQL",
				"MongoDB",
				"Linux",
				"Electron",
				"AWS",
			],
			bgColor: "bg-amber-50",
			borderColor: "border-amber-300",
		},
	];

	return (
		<section id="skills" className="py-10 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto">
			<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">Skills</h2>

			<div className="space-y-6">
				{skillCategories.map((category) => (
					<div
						key={category.title}
						className={`p-4 sm:p-5 rounded-lg ${category.bgColor} border ${category.borderColor}`}
					>
						<h3 className="text-lg font-semibold mb-3">{category.title}</h3>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
							{category.skills.map((skill) => (
								<div
									key={skill}
									className="bg-white py-2 px-3 rounded shadow-sm text-center flex items-center justify-start hover:shadow-md transition-shadow"
								>
									{getSkillIcon(skill)}
									<span className="text-sm">{skill}</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
