import SectionContainer from "../components/SectionContainer";

const About: React.FC = () => (
	<SectionContainer id="about">
		<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">About Me</h2>
		<div className="mt-6 sm:mt-8 max-w-3xl mx-auto">
			<p className="text-base sm:text-lg text-gray-600 leading-relaxed">
				Computer Science student with over 1.5 years of working experience seeking the role of
				graduate Software Engineer to gain valuable experience in the Software Engineering industry.
				Eager to be a full-stack architect and make a positive impact as a motivated and dedicated
				team member.
			</p>
		</div>
	</SectionContainer>
);

export default About;
