import { Card } from "antd";
import React from "react";
import SectionContainer from "../components/SectionContainer";

const Education: React.FC = () => (
	<SectionContainer id="education">
		<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10">
			Education
		</h2>

		<Card className="w-full border-l-4 border-blue-500 mb-6">
			<div>
				<div className="flex flex-col md:flex-row md:justify-between md:items-center">
					<h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
					<h4 className="text-md font-medium">The Chinese University of Hong Kong (CUHK)</h4>
				</div>
				<p className="text-gray-600">Aug 2021 – Jul 2025 (Expected)</p>
				<p className="text-gray-700">CGPA: 3.7 / 4.0</p>
				<div className="mt-2">
					<p className="font-medium text-gray-700">Relevant courses taken:</p>
					<p className="text-gray-700">
						Software Engineering, Distributed and Parallel Computing, Cloud Computing, DSA,
						Databases, Operating Systems, Computer Networking, Blockchain Development, Basic Banking
						and Finance
					</p>
				</div>

				<div className="mt-4">
					<p className="font-medium text-gray-700 text-lg">Awards & Honors:</p>
					<ul className="list-disc pl-5 mt-2 text-gray-700">
						<li>College Head's List 2022/23, 2023/24 from the Shaw College, CUHK</li>
						<li>
							Dean's List (2021-2022, 2022-2023, 2023-2024) from the Faculty of Engineering, CUHK
						</li>
						<li>Department/Programme Scholarships 2022/23 from the Shaw College, CUHK</li>
						<li>Li Po Chun Charitable Trust Fund Undergraduate Scholarship 2021-2022</li>
					</ul>
				</div>
			</div>
		</Card>
	</SectionContainer>
);

export default Education;
