import { Card, Tag, Timeline } from "antd";

const AtgWorkingExperience = () => (
	<div>
		<h3 className="text-xl font-semibold">
			Part-time Software Developer @ Applied Technology Group Limited
		</h3>
		<p className="text-gray-600">Jun 2023 - Present</p>
		<ol className="mt-2 text-gray-700 list-disc">
			<li>Revamp over 20 Vue components to React with documented QA</li>
			<li>Took the initiative to develop a swagger compare tool to facilitate API upgrades</li>
			<li>Upgrade over 50 API endpoints with detailed changelog</li>
			<li>
				Design and implement printable pagination of 10 different financial documents using React
			</li>
		</ol>
	</div>
);

const WorkExperience: React.FC = () => (
	<section id="work" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
		<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10">
			Work Experience
		</h2>

		<div className="hidden md:block">
			<Timeline
				mode="left"
				items={[
					{
						children: <AtgWorkingExperience />,
						label: "Present",
						color: "green",
					},
				]}
			/>
		</div>

		<div className="md:hidden space-y-4">
			<Card className="w-full border-l-4 border-green-500">
				<Tag color="green" className="mb-2">
					Present
				</Tag>
				<AtgWorkingExperience />
			</Card>
		</div>
	</section>
);

export default WorkExperience;
