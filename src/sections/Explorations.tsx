import React from "react";
import { GiBoxingGlove, GiTennisRacket, GiShuttlecock } from "react-icons/gi";
import { FaRegStar, FaAmericanSignLanguageInterpreting, FaRunning } from "react-icons/fa";
import SectionContainer from "../components/SectionContainer";

interface Exploration {
	name: string;
	description: string;
	icon: React.ReactNode;
}

const Explorations: React.FC = () => {
	const explorations: Exploration[] = [
		{
			name: "Thai Boxing",
			description:
				"Practiced Thai boxing techniques, including footwork, punches, and kicks for fitness and self-defense in Shaw College Thai Boxing Class.",
			icon: <GiBoxingGlove className="text-3xl text-red-500" />,
		},
		{
			name: "Tennis",
			description: "Practiced forehand and backhand techniques in Shaw College Tennis Class.",
			icon: <GiTennisRacket className="text-3xl text-green-500" />,
		},
		{
			name: "Badminton",
			description: "Weekly games with my girlfriend.",
			icon: <GiShuttlecock className="text-3xl text-purple-500" />,
		},
		{
			name: "Sign Language",
			description:
				"Completed 8 hours of Hong Kong Sign Language Learning in the Hong Kong Sign Language Class.",
			icon: <FaAmericanSignLanguageInterpreting className="text-3xl text-blue-500" />,
		},
		{
			name: "Astronomy",
			description:
				"Explored the solar system, stars, and galaxies through UGEB2401 Astronomy in CUHK",
			icon: <FaRegStar className="text-3xl text-amber-500" />,
		},
		{
			name: "Running",
			description:
				"Finished the 2025 On Track To Save 10KM Run organized by Medicines San Frontiers.",
			icon: <FaRunning className="text-3xl text-emerald-500" />,
		},
	];

	return (
		<SectionContainer id="explorations">
			<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
				Explorations
			</h2>

			<p className="text-center text-gray-600 mb-8 italic">
				Areas I've ventured into out of curiosity and personal growth, beyond my professional
				expertise.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{explorations.map((item) => (
					<div
						key={item.name}
						className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
					>
						<div className="flex items-center mb-4">
							<div className="p-3 rounded-full bg-gray-50 mr-4">{item.icon}</div>
							<h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
						</div>
						<p className="text-gray-600 mb-3">{item.description}</p>
					</div>
				))}
			</div>
		</SectionContainer>
	);
};

export default Explorations;
