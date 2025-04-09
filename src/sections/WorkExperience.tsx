import { Card, Timeline } from "antd";

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
						children: (
							<div>
								<h3 className="text-xl font-semibold">Job Title @ Company</h3>
								<p className="text-gray-600">Month Year - Present</p>
								<p className="mt-2 text-gray-700">
									Brief description of responsibilities and achievements.
								</p>
							</div>
						),
						label: "Present",
					},
					{
						children: (
							<div>
								<h3 className="text-xl font-semibold">Previous Job Title @ Company</h3>
								<p className="text-gray-600">Month Year - Month Year</p>
								<p className="mt-2 text-gray-700">
									Brief description of responsibilities and achievements.
								</p>
							</div>
						),
						label: "2022",
					},
				]}
			/>
		</div>

		<div className="md:hidden space-y-4">
			<Card className="w-full">
				<h3 className="text-xl font-semibold">Job Title @ Company</h3>
				<p className="text-gray-600">Month Year - Present</p>
				<p className="mt-2 text-gray-700">
					Brief description of responsibilities and achievements.
				</p>
			</Card>
			<Card className="w-full">
				<h3 className="text-xl font-semibold">Previous Job Title @ Company</h3>
				<p className="text-gray-600">Month Year - Month Year</p>
				<p className="mt-2 text-gray-700">
					Brief description of responsibilities and achievements.
				</p>
			</Card>
		</div>
	</section>
);

export default WorkExperience;
