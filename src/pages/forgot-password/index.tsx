import { NextPage } from "next";

import { FooterAuth } from "@src/components/organisms/Footer/FooterAuth";
import { HeaderAuth } from "@src/components/organisms/Header";
import { Layout } from "@src/components/organisms/Layout";
import { ForgotPassword } from "@src/components/templates/ForgotPassword";

const ForgotPasswordPage: NextPage = () => {
	return (
		<Layout>
			<HeaderAuth />
			<ForgotPassword />
			<FooterAuth />
		</Layout>
	);
};

export default ForgotPasswordPage;
