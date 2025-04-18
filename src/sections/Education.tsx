import { Card } from "antd";
import React from "react";

const Education: React.FC = () => (
	<section id="education" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
		<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10">
			Education
		</h2>

		<Card className="w-full border-l-4 border-blue-500 mb-6">
			<div>
				<div className="flex justify-between items-center">
					<h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
					<h4 className="text-lg font-medium mt-2">The Chinese University of Hong Kong (CUHK)</h4>
				</div>
				<p className="text-gray-600">Aug 2021 – Jul 2025 (Expected)</p>
				<p className="text-gray-700">CGPA: 3.7 / 4.00</p>
				<div className="mt-2">
					<p className="font-medium text-gray-700">Relevant courses taken:</p>
					<p className="text-gray-700">
						Software Engineering, Distributed and Parallel Computing, Cloud Computing, DSA,
						Databases, Operating Systems, Computer Networking, Blockchain Development, Basic Banking
						and Finance
					</p>
				</div>
			</div>
		</Card>
	</section>
);

export default Education;
