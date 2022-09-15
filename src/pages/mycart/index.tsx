import { NextPage } from "next";

import { AuthPermission } from "@src/components/organisms/AuthPermission";
import { HeaderMain } from "@src/components/organisms/Header";
import { Layout } from "@src/components/organisms/Layout";

const MyCart: NextPage = () => {
	return (
		<AuthPermission>
			<Layout bg={"gray.90"}>
				<HeaderMain />
				<div>{"MyCart"}</div>
			</Layout>
		</AuthPermission>
	);
};

export default MyCart;
