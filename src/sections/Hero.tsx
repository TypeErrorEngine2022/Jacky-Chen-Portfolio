import { Button } from "antd";

const Hero: React.FC = () => (
	<section
		id="hero"
		className="min-h-[100vh] flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6"
	>
		<div className="text-center max-w-3xl mx-auto">
			<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
				Hi, I'm Jacky Chen
			</h1>
			<p className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-600 max-w-xl mx-auto">
				A software engineer with over 1.5 years of experience in web development.
			</p>
			<Button
				type="primary"
				size="large"
				href="#projects"
				className="mt-8 text-base sm:text-lg bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600"
			>
				See My Work
			</Button>
		</div>
	</section>
);

export default Hero;
