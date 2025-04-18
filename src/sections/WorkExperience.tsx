import { Card, Tag, Timeline } from "antd";
import { PropsWithChildren } from "react";
import GitHubCalendar from "react-github-calendar";
import SectionContainer from "../components/SectionContainer";

interface WorkExperienceContentProps {
	jobTitle: string;
	company: string;
	duration: string;
	descriptions: React.ReactNode[];
}

const WorkExperienceContent = ({
	jobTitle,
	company,
	duration,
	descriptions,
}: WorkExperienceContentProps) => (
	<div>
		<h3 className="text-lg font-semibold">{jobTitle}</h3>
		<p className="text-gray-600">{company}</p>
		<p className="text-gray-600">{duration}</p>
		<ol className="mt-2 text-gray-700 list-disc">
			{descriptions.map((desc, index) => (
				<li key={index}>{desc}</li>
			))}
		</ol>
	</div>
);

const WorkingExperienceCard = ({
	children,
	color,
	isPresent,
}: PropsWithChildren<{ color: string; isPresent?: boolean }>) => (
	<Card className={`w-full border-${color}-500`}>
		<Tag color={isPresent ? color : "default"}>{isPresent === true ? "Present" : "Past"}</Tag>
		{children}
	</Card>
);

const WorkExperienceItems: Record<string, WorkExperienceContentProps> = {
	atgPartTime: {
		jobTitle: "Part-time Software Developer",
		company: "Applied Technology Group Limited",
		duration: "Sep 2023 - Present",
		descriptions: [
			<span>
				Revamp <strong>20+</strong> Vue components to React with documented QA
			</span>,
			<span>Took the initiative to develop a swagger compare tool to facilitate API upgrades</span>,
			<span>
				Upgrade <strong>50+</strong> API endpoints with detailed changelog
			</span>,
			<span>
				Design and implement printable pagination of <strong>10</strong> different financial
				documents using React
			</span>,
			<span>
				Reduced <strong>40%</strong> API calls in React through optimizing state management
			</span>,
			<span>
				Developed robust SignalR auto-reconnect logic, eliminating <strong>80%</strong> of user
				interruptions
			</span>,
		],
	},
	atgIntern: {
		jobTitle: "Intern",
		company: "Applied Technology Group Limited",
		duration: "Jun 2023 - Aug 2023",
		descriptions: [
			<span>
				Developed a responsive and scalable periodontal chart with React in the summer internship
			</span>,
			<span>
				Migrated <strong>5+</strong> APIs to REST architecture using NestJS and TypeORM
			</span>,
		],
	},
};

const WorkExperience: React.FC = () => (
	<SectionContainer id="work">
		<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10">
			Work Experience
		</h2>

		<div className="hidden md:block">
			<Timeline
				mode="left"
				items={[
					{
						children: <WorkExperienceContent {...WorkExperienceItems.atgPartTime} />,
						label: "Present",
						color: "green",
					},
					{
						children: <WorkExperienceContent {...WorkExperienceItems.atgIntern} />,
						label: "Jun 2023 - Aug 2023",
						color: "gray",
					},
				]}
			/>
		</div>

		<div className="md:hidden space-y-4">
			<WorkingExperienceCard color="green" isPresent>
				<WorkExperienceContent {...WorkExperienceItems.atgPartTime} />
			</WorkingExperienceCard>
			<WorkingExperienceCard color="gray">
				<WorkExperienceContent {...WorkExperienceItems.atgIntern} />
			</WorkingExperienceCard>
		</div>

		<div className="flex justify-center mt-4">
			<GitHubCalendar username="TypeErrorEngine2022" />
		</div>
	</SectionContainer>
);

export default WorkExperience;
