import { Button, Space } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const Contact: React.FC = () => (
	<section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
		<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Get in Touch</h2>
		<div className="mt-8 text-center">
			<p className="text-lg text-gray-600 flex items-center justify-center gap-2">
				<MailOutlined /> your.email@example.com
			</p>
			<Space className="mt-4" size="large">
				<Button
					type="link"
					href="https://github.com/yourusername"
					target="_blank"
					icon={<GithubOutlined />}
					className="text-lg"
				>
					GitHub
				</Button>
				<Button
					type="link"
					href="https://linkedin.com/in/yourusername"
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
