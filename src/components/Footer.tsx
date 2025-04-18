import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => (
	<AntFooter className="text-center bg-gray-800 text-white py-4 px-4">
		<p className="mb-1">© 2025 Jacky Chen. Feel free to fork and remix.</p>
	</AntFooter>
);

export default Footer;
