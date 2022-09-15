import { NextPage } from "next";

import { FooterAuth } from "@src/components/organisms/Footer/FooterAuth";
import { HeaderAuth } from "@src/components/organisms/Header";
import { Layout } from "@src/components/organisms/Layout";
import { SignUpComplete } from "@src/components/templates/SignUpComplete";

const SignUpCompletedPage: NextPage = () => {
	return (
		<Layout>
			<HeaderAuth />
			<SignUpComplete />
			<FooterAuth />
		</Layout>
	);
};

export default SignUpCompletedPage;
