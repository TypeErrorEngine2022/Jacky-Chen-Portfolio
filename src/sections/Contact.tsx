import { Button, Space } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const Contact: React.FC = () => (
	<section id="get-in-touch" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
		<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Get in Touch</h2>
		<div className="mt-8 text-center">
			<p className="text-lg text-gray-600 flex items-center justify-center gap-2">
				<MailOutlined /> jackychenworkcontact@gmail.com
			</p>
			<Space className="mt-4" size="large">
				<Button
					type="link"
					href="https://github.com/TypeErrorEngine2022"
					target="_blank"
					icon={<GithubOutlined />}
					className="text-lg"
				>
					GitHub
				</Button>
				<Button
					type="link"
					href="https://www.linkedin.com/in/wai-yip-chen-334285274/"
					target="_blank"
					icon={<LinkedinOutlined />}
					className="text-lg"
				>
					LinkedIn
				</Button>
			</Space>
		</div>
	</section>
);

export default Contact;
