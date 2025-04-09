import { Menu } from "antd";
import { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
	const [collapsed, setCollapsed] = useState(true);
	const [scrolled, setScrolled] = useState(false);

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (!target.closest(".mobile-menu") && !target.closest(".menu-toggle")) {
				setCollapsed(true);
			}
		};

		// Add scroll event listener to add shadow on scroll
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		document.addEventListener("click", handleClickOutside);
		window.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("click", handleClickOutside);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrolled]);

	const toggleMenu = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCollapsed(!collapsed);
	};

	return (
		<nav
			className={`bg-white fixed w-full z-10 transition-shadow duration-300 ${
				scrolled ? "shadow-md" : ""
			}`}
		>
			<div className="max-w-5xl mx-auto px-4 flex items-center justify-between py-4">
				<div className="text-2xl font-bold mr-5">Jacky Chen</div>
				{/* Desktop Menu */}
				<div className="w-fit hidden sm:flex">
					<Menu
						className="w-full"
						mode="horizontal"
						items={[
							{ key: "home", label: <a href="#hero">Home</a> },
							{ key: "about", label: <a href="#about">About</a> },
							{ key: "skills", label: <a href="#skills">Skills</a> },
							{ key: "work", label: <a href="#work">Work</a> },
							{ key: "projects", label: <a href="#projects">Projects</a> },
							{ key: "contact", label: <a href="#contact">Contact</a> },
						]}
					/>
				</div>
				{/* Mobile Menu Toggle */}
				<div className="menu-toggle sm:hidden">
					<MenuOutlined onClick={toggleMenu} className="text-2xl cursor-pointer" />
				</div>
			</div>
			{/* Mobile Menu Dropdown */}
			{!collapsed && (
				<Menu
					mode="vertical"
					className="bg-white border-t mobile-menu max-h-[calc(100vh-60px)] overflow-y-auto"
					items={[
						{
							key: "home",
							label: (
								<a href="#hero" onClick={toggleMenu}>
									Home
								</a>
							),
						},
						{
							key: "about",
							label: (
								<a href="#about" onClick={toggleMenu}>
									About
								</a>
							),
						},
						{
							key: "skills",
							label: (
								<a href="#skills" onClick={toggleMenu}>
									Skills
								</a>
							),
						},
						{
							key: "work",
							label: (
								<a href="#work" onClick={toggleMenu}>
									Work
								</a>
							),
						},
						{
							key: "projects",
							label: (
								<a href="#projects" onClick={toggleMenu}>
									Projects
								</a>
							),
						},
						{
							key: "contact",
							label: (
								<a href="#contact" onClick={toggleMenu}>
									Contact
								</a>
							),
						},
					]}
				/>
			)}
		</nav>
	);
};

export default Header;
