import { NextPage } from "next";

import { FooterAuth } from "@src/components/organisms/Footer/FooterAuth";
import { HeaderAuth } from "@src/components/organisms/Header";
import { Layout } from "@src/components/organisms/Layout";
import { Login } from "@src/components/templates/Login";

const LoginPage: NextPage = () => {
	return (
		<Layout>
			<HeaderAuth />
			<Login />
			<FooterAuth />
		</Layout>
	);
};

export default LoginPage;
