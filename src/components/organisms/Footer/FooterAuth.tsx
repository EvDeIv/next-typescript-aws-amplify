import { FC } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

import { Link } from "@src/components/atoms/Link";
import { LayoutFooter } from "@src/components/organisms/Layout";
import { routers } from "@src/config/routers";

export const FooterAuth: FC = () => {
	return (
		<Box as={LayoutFooter} bg={"transparent"}>
			<Flex
				alignItems={"center"}
				boxShadow={"inset 0px 1px 0px rgba(0, 0, 0, 0.1)"}
				h={12}
				justifyContent={"center"}
				px={2}
				py={4}
			>
				<Link
					_active={{
						color: "#111111",
					}}
					_hover={{
						textDecoration: "none",
					}}
					color={"#111111"}
					fontFamily={"Roboto"}
					fontSize={{ base: "xs", lg: "sm" }}
					fontStyle={"normal"}
					href={routers.home()}
					lineHeight={"16.41px"}
				>
					{"Privacy Policy"}
				</Link>
				<Text color={"gray.450"} mx={5}>
					|
				</Text>
				<Link
					_active={{
						color: "#111111",
					}}
					_hover={{
						textDecoration: "none",
					}}
					color={"#111111"}
					fontFamily={"Roboto"}
					fontSize={{ base: "xs", lg: "sm" }}
					fontStyle={"normal"}
					href={routers.home()}
					lineHeight={"16.41px"}
				>
					{"Terms and Conditions"}
				</Link>
			</Flex>
			<Flex
				alignItems={"center"}
				bg={"#111111"}
				justifyContent={"center"}
				py={2}
			>
				<Text
					color={"#FFFFFF"}
					fontFamily={"Roboto"}
					fontSize={{ base: "xs", lg: "sm" }}
					fontStyle={"normal"}
					fontWeight={"normal"}
					lineHeight={"16.41px"}
				>
					{"©Pet Industry Co., Ltd. All Rights Reserved."}
				</Text>
			</Flex>
		</Box>
	);
};
