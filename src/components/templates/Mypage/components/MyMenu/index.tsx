import { FC } from "react";

import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

import { Link } from "@src/components/atoms/Link";
import { routers } from "@src/config/routers";

interface IMenu {
	title: string;
	link: {
		name: string;
		href: string;
	}[];
}

export const MyMenu: FC = (): JSX.Element => {
	const menuData: IMenu[] = [
		{
			title: "Inquires",
			link: [
				{
					name: "Proforma Invoice Confirmation",
					href: `${routers.default()}`,
				},
				{
					name: "Request Orders",
					href: `${routers.default()}`,
				},
			],
		},
		{
			title: "Purchased Items",
			link: [
				{
					name: "Container Status",
					href: `${routers.default()}`,
				},
				{
					name: "Container Order",
					href: `${routers.default()}`,
				},
				{
					name: "Parts Instructions",
					href: `${routers.default()}`,
				},
				{
					name: "Purchase History",
					href: `${routers.default()}`,
				},
			],
		},
		{
			title: "Settings",
			link: [
				{
					name: "Account information",
					href: `${routers.default()}`,
				},
				{
					name: "Consignee information",
					href: `${routers.default()}`,
				},
				{
					name: "Update your password",
					href: `${routers.default()}`,
				},
			],
		},
	];
	return (
		<Box
			bgColor={"white"}
			mx={{ base: -4, lg: 0 }}
			p={{ base: 4, lg: 6 }}
			pt={{ base: "14px", lg: 6 }}
			pb={{ base: "14px", lg: 6 }}
			borderRadius={{ lg: "4px" }}
		>
			<Heading
				as={"h2"}
				fontFamily={"Roboto"}
				fontWeight={"bold"}
				fontSize={{ base: "xl", lg: "2xl" }}
				lineHeight={6}
				borderBottomColor={"gray.450"}
				borderBottomWidth={1}
				color={"black"}
				pb={"15px"}
			>
				{"Menu"}
			</Heading>
			<Grid
				gap={{ base: 6, lg: 6 }}
				mt={{ base: 5, lg: 6 }}
				templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
				width={"100%"}
			>
				{menuData.map((item, index) => (
					<GridItem
						key={index}
						border={"1px"}
						borderColor={"gray.425"}
						p={{ base: "14px", lg: 4 }}
						pb={{ base: "13px", lg: 4 }}
						width={"100%"}
						borderRadius={"4px"}
					>
						<Heading
							as={"h3"}
							color={"black"}
							fontFamily={"Roboto"}
							fontSize={{ base: "md", lg: "xl" }}
							fontWeight={"bold"}
							lineHeight={{ base: "100%", lg: "20px" }}
							mb={{ base: "15px", lg: 4 }}
						>
							{item.title}
						</Heading>
						{item.link.map((link, itemIndex) => {
							return (
								<Box
									key={itemIndex}
									lineHeight={"16px"}
									mt={{ base: "9px", lg: 2 }}
								>
									<Link
										_hover={{
											textDecoration: "none",
										}}
										color={"blue.550"}
										fontFamily={"Roboto"}
										fontSize={"sm"}
										fontStyle={"normal"}
										fontWeight={"normal"}
										href={link.href ?? "#"}
										textDecoration={"underline"}
									>
										{link.name}
									</Link>
								</Box>
							);
						})}
					</GridItem>
				))}
			</Grid>
		</Box>
	);
};
