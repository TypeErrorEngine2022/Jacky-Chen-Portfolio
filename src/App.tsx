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

const { Content } = Layout;

const App: React.FC = () => (
	<Layout className="min-h-screen w-full">
		<Layout>
			<Header />
			<Content className="w-full pt-16">
				<Hero />
				<About />
				<Skills />
				<WorkExperience />
				<Education />
				<Projects />
				<Explorations />
				<Contact />
			</Content>
			<Footer />
		</Layout>
	</Layout>
);

export default App;
