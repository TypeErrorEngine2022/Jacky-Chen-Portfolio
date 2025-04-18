import { Col, Menu, Row } from "antd";
import { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";

const headerItems = [
	{ key: "About", label: "About", href: "#about" },
	{ key: "Skills", label: "Skills", href: "#skills" },
	{ key: "Work", label: "Work", href: "#work" },
	{ key: "Projects", label: "Projects", href: "#projects" },
	{ key: "Contact", label: "Get In Touch", href: "#contact" },
];

const Header: React.FC = () => {
	const [collapsed, setCollapsed] = useState(true);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		if (!collapsed) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [collapsed]);

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (!target.closest(".mobile-menu") && !target.closest(".menu-toggle")) {
				setCollapsed(true);
			}
		};

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
			className={`bg-white h-[var(--header-height)] fixed w-full z-10 transition-shadow duration-300 ${
				scrolled ? "shadow-md" : ""
			}`}
		>
			<Row className="px-12 py-2 w-full h-full" justify="space-between" align="middle">
				<Col flex="auto">
					<div className="text-2xl font-bold">Jacky Chen</div>
				</Col>

				{/* Desktop Menu */}
				<Col xs={0} sm={8}>
					<Menu
						mode="horizontal"
						items={headerItems.map((item) => ({
							key: item.key,
							label: <a href={item.href}>{item.label}</a>,
						}))}
					/>
				</Col>

				{/* Mobile Menu Toggle - positioned in the same place as desktop menu */}
				<Col className="menu-toggle flex justify-end" xs={2} sm={0}>
					<MenuOutlined onClick={toggleMenu} className="text-2xl cursor-pointer" />
				</Col>
			</Row>

			{/* Mobile Menu Dropdown */}
			{!collapsed && (
				<div className="fixed top-[var(--header-height)] inset-0 bg-white z-50 flex flex-col mobile-menu">
					<div className="flex flex-col justify-evenly h-full items-center pt-4 pb-16">
						{headerItems.map((item) => (
							<a
								key={item.key}
								href={item.href}
								onClick={toggleMenu}
								className="text-2xl py-4 hover:text-blue-500 transition-colors"
							>
								{item.label}
							</a>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Header;
