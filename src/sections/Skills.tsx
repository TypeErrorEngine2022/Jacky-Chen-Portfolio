import { IconType } from "react-icons";
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
	SiJira,
} from "react-icons/si";

const Skills: React.FC = () => {
	// Define all skill categories first
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
				"Git",
				"Next.js",
				"Ant Design",
				"Jira",
			],
			bgColor: "bg-blue-50",
			borderColor: "border-blue-300",
		},
		{
			title: "Intermediate (1-2 years)",
			skills: ["Node.js", "C++", "C", "Java"],
			bgColor: "bg-green-50",
			borderColor: "border-green-300",
		},
		{
			title: "Entry-level (< 1 year)",
			skills: [
				"Rust",
				"Go",
				"Docker",
				"Jest",
				"Django",
				"Solidity",
				"Kotlin",
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

	// Generate a set of all unique skills
	const allSkills = new Set<string>();
	skillCategories.forEach((category) => {
		category.skills.forEach((skill) => allSkills.add(skill));
	});

	// Create an icon map only for the skills we're using
	const iconMap: Record<string, IconType> = {
		TypeScript: SiTypescript,
		React: FaReact,
		"Vue.js": FaVuejs,
		Python: FaPython,
		Java: FaJava,
		"Next.js": SiNextdotjs,
		"Ant Design": SiAntdesign,
		HTML: FaHtml5,
		CSS: FaCss3Alt,
		"Node.js": FaNodeJs,
		"C++": SiCplusplus,
		C: SiC,
		Git: FaGitAlt,
		Rust: FaRust,
		"Native Android": FaAndroid,
		Django: SiDjango,
		"Spring Boot": SiSpringboot,
		Docker: FaDocker,
		Jest: SiJest,
		Solidity: SiSolidity,
		Kotlin: SiKotlin,
		Go: SiGo,
		PostgreSQL: SiPostgresql,
		MongoDB: SiMongodb,
		Linux: SiLinux,
		Electron: SiElectron,
		AWS: FaAws,
		Jira: SiJira,
	};

	const getSkillIcon = (skill: string) => {
		const iconProps = { className: "text-2xl mr-2" };
		const Icon = iconMap[skill];

		return Icon ? <Icon {...iconProps} /> : null;
	};

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
