import { FC } from "react";

import {
	Breadcrumb as ChakraBreadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Text,
} from "@chakra-ui/react";

import { Link } from "@src/components/atoms/Link";
import { LayoutBreadcrumb } from "@src/components/organisms/Layout";
import { routers } from "@src/config/routers";

export const Breadcrumb: FC = (): JSX.Element => {
	return (
		<LayoutBreadcrumb
			width={"100%"}
			h={8}
			alignItems={"center"}
			justifyContent={"center"}
			display={{ base: "none", lg: "flex" }}
		>
			<ChakraBreadcrumb
				fontSize={"xs"}
				separator={">"}
				pt={1}
				width={{
					base: "100%",
					lg: "1180px",
				}}
			>
				<BreadcrumbItem>
					<BreadcrumbLink
						_hover={{
							textDecoration: "none",
						}}
						as={Link}
						color={"blue.550"}
						href={routers.home()}
						textDecoration={"underline"}
					>
						{"PET Project"}
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem isCurrentPage>
					<Text color={"blue.550"} textDecor={"underline"}>
						{"My Page"}
					</Text>
				</BreadcrumbItem>
			</ChakraBreadcrumb>
		</LayoutBreadcrumb>
	);
};
