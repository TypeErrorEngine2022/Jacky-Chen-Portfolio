import { Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import WorkExperience from "./sections/WorkExperience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Explorations from "./sections/Explorations";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const { Content } = Layout;

const App: React.FC = () => (
	<Layout className="h-[100dvh] w-[100dvw] overflow-x-hidden">
		<Layout className="w-full overflow-x-hidden">
			<Header />
			<Content className="w-full max-w-[100dvw] pt-[var(--header-height)] overflow-x-hidden">
				<Hero />
				<About />
				<Skills />
				<WorkExperience />
				<Education />
				<Projects />
				<Explorations />
				<Contact />
				<Footer />
				<Analytics />
				<SpeedInsights />
			</Content>
		</Layout>
	</Layout>
);

export default App;
