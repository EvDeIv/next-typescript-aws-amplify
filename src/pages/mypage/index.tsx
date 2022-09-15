import { Box } from "@chakra-ui/react";
import { NextPage } from "next";

import { BackToTop } from "@src/components/molecules/BackToTop";
import { AuthPermission } from "@src/components/organisms/AuthPermission";
import { FooterMain } from "@src/components/organisms/Footer";
import { HeaderMain } from "@src/components/organisms/Header";
import { Layout, MainLayout } from "@src/components/organisms/Layout";
import { CustomerPage } from "@src/components/templates/Mypage";
import { Breadcrumb } from "@src/components/templates/Mypage/components/Breadbrumb";

const MyPage: NextPage = () => {
	return (
		<AuthPermission>
			<Layout bg={"gray.90"}>
				<HeaderMain />
				<Breadcrumb />
				<Box as={MainLayout}>
					<CustomerPage />
				</Box>
				<BackToTop />
				<FooterMain />
			</Layout>
		</AuthPermission>
	);
};

export default MyPage;
