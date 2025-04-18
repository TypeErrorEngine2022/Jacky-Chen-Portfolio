import { Col, Menu, Row } from "antd";
import { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";

const headerItems = [
	{ key: "About", label: "About", href: "#about" },
	{ key: "Skills", label: "Skills", href: "#skills" },
	{ key: "Work", label: "Work", href: "#work" },
	{ key: "Education", label: "Education", href: "#education" },
	{ key: "Explorations", label: "Explorations", href: "#explorations" },
	{ key: "Projects", label: "Projects", href: "#projects" },
	{ key: "GetInTouch", label: "Get In Touch", href: "#get-in-touch" },
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

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
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
					<div className="flex items-center">
						<img
							src="/images/sun-32.webp"
							srcSet="/images/sun-32.webp 1x, /images/sun-96.webp 3x"
							alt="Logo"
							className="h-8 w-8 rounded-full mr-2"
							width="32"
							height="32"
						/>
						<div className="text-2xl font-bold">Jacky Chen</div>
					</div>
				</Col>

				{/* Desktop Menu */}
				<Col xs={0} sm={11}>
					<Menu
						mode="horizontal"
						items={headerItems.map((item) => ({
							key: item.key,
							label: <a href={item.href}>{item.label}</a>,
						}))}
					/>
				</Col>

				<Col className="menu-toggle flex justify-end" xs={2} sm={0}>
					<MenuOutlined onClick={toggleMenu} className="text-2xl cursor-pointer" />
				</Col>
			</Row>

			{/* Mobile Menu Dropdown */}
			{!collapsed && (
				<div className="fixed top-[var(--header-height)] inset-0 bg-white z-50 flex flex-col mobile-menu">
					<div className="flex flex-col justify-evenly h-[calc(100dvh-var(--header-height))] items-center pt-4 pb-16">
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
