import { FC } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

import { images } from "@public/accets/images";
import { Image } from "@src/components/atoms/Image";
import { Link } from "@src/components/atoms/Link";
import { routers } from "@src/config/routers";

interface IMyPageProrps {
	instruction?: boolean;
	isSigned?: boolean;
}

export const RequiredExtraInfo: FC<IMyPageProrps> = (): JSX.Element => {
	return (
		<Box
			bg={"white"}
			p={{ base: "1rem 1.5rem  0", lg: "1.5rem 0 0 0" }}
			borderRadius={{ lg: "4px" }}
		>
			<Text
				color={"red.450"}
				fontSize={"xl"}
				fontWeight={"medium"}
				lineHeight={"150%"}
				textAlign={"center"}
				fontFamily={"Roboto"}
			>
				{
					"Please to proceed with your order, it is necesary to complete your Account Information."
				}
			</Text>
			<Flex
				flexDir={{ base: "column", lg: "row" }}
				alignItems={{ base: "flex-start", lg: "center" }}
				justifyContent={"center"}
				padding={{ base: "1rem 0 0", lg: "0 1.5rem 1.5rem" }}
				mt={{ base: 2, lg: 6 }}
			>
				<Flex alignItems={"center"}>
					<Image
						src={images.recentActorsMypage}
						alt={"Account Information Icon"}
					/>
					<Link
						href={routers.default()}
						color={"blue.550"}
						fontFamily={"Roboto"}
						fontSize={"lg"}
						fontWeight={{ base: "normal", lg: "bold" }}
						lineHeight={"18px"}
						textDecoration={"underline"}
						_hover={{ textDecoration: "none" }}
						ml={{ base: 1.5, lg: 4 }}
					>
						{"Account Information"}
					</Link>
				</Flex>
				<Box
					w={{ base: "2px", lg: "80px" }}
					h={{ base: "32px", lg: "1px" }}
					m={{ base: "0 0 0 31px", lg: "0 40px 0 40px" }}
					bgColor={"gray.450"}
				></Box>
				<Flex alignItems={"center"} w={"196px"} mb={{ base: 6, lg: 0 }}>
					<Image
						src={images.contractMypage}
						alt={"Account Information Icon"}
						ml={{ lg: "23px" }}
					/>
					<Link
						href={routers.default()}
						color={"blue.550"}
						fontFamily={"Roboto"}
						fontSize={"lg"}
						fontWeight={{ base: "normal", lg: "bold" }}
						lineHeight={"18px"}
						textDecoration={"underline"}
						_hover={{ textDecoration: "none" }}
						ml={{ base: 1.5, lg: 4 }}
					>
						{"Contract"}
					</Link>
				</Flex>
			</Flex>
		</Box>
	);
};
