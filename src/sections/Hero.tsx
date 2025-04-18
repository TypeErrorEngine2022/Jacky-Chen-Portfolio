const Hero: React.FC = () => (
	<section
		id="hero"
		className="min-h-[100vh] flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 relative"
	>
		<div className="text-center max-w-3xl mx-auto">
			<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
				Hi, I'm Jacky Chen
			</h1>
			<p className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-600 max-w-xl mx-auto">
				A software engineer with over 1.5 years of experience in web development.
			</p>
		</div>
		<div className="mt-12 animate-bounce cursor-pointer">
			<a href="#about" aria-label="Scroll down">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="text-gray-600"
				>
					<path d="M7 13l5 5 5-5"></path>
					<path d="M7 6l5 5 5-5"></path>
				</svg>
			</a>
		</div>
	</section>
);

export default Hero;
