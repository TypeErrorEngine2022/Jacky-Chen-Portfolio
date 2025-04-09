import { Layout } from "antd";
import { GithubOutlined, MailOutlined } from "@ant-design/icons";

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => (
	<AntFooter className="text-center bg-gray-800 text-white py-4 px-4">
		<p className="mb-1">© 2025 Jacky Chen. All rights reserved.</p>
		<p className="flex flex-wrap justify-center gap-2 items-center">
			<span className="flex items-center gap-1">
				<MailOutlined /> jackychenworkcontact@gmail.com
			</span>
			<span className="hidden sm:inline">|</span>
			<span className="flex items-center gap-1">
				<GithubOutlined />
				<a
					href="https://github.com/TypeErrorEngine2022"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-300 hover:text-blue-200"
				>
					GitHub
				</a>
			</span>
		</p>
	</AntFooter>
);

export default Footer;
