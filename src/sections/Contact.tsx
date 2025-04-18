import { Button } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { SiLeetcode } from "react-icons/si";
import SectionContainer from "../components/SectionContainer";

const Contact: React.FC = () => (
	<SectionContainer id="get-in-touch" className="overflow-x-hidden">
		<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Get in Touch</h2>
		<div className="mt-8 text-center">
			<p className="text-lg text-gray-600 flex items-center justify-center gap-2 flex-wrap">
				<MailOutlined /> jackychenworkcontact@gmail.com
			</p>
			<div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
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
				<Button
					type="link"
					href="https://leetcode.com/u/yipAtCS/"
					target="_blank"
					icon={<SiLeetcode />}
					className="text-lg"
				>
					Leetcode
				</Button>
			</div>
		</div>
	</SectionContainer>
);

export default Contact;
