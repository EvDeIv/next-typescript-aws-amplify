import { NextPage } from "next";

import { FooterAuth } from "@src/components/organisms/Footer/FooterAuth";
import { HeaderAuth } from "@src/components/organisms/Header";
import { Layout } from "@src/components/organisms/Layout";
import { SignUp } from "@src/components/templates/SignUp";

const SignUpPage: NextPage = () => {
	return (
		<Layout>
			<HeaderAuth />
			<SignUp />
			<FooterAuth />
		</Layout>
	);
};

export default SignUpPage;
