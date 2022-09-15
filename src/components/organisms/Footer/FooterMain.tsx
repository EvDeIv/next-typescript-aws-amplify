import { FC } from "react";

import {
	Box,
	Divider,
	Flex,
	Text,
	Link,
	List,
	ListItem,
} from "@chakra-ui/react";

import { images } from "@public/accets/images";
import { FooterCollapse } from "@src/components/molecules/FooterCollapse";
import { CategoryFooterItem } from "@src/components/molecules/FooterItem";
import { IconButton } from "@src/components/molecules/IconButton";
import { LayoutFooter } from "@src/components/organisms/Layout";
import { routers } from "@src/config/routers";

import { categories, model, contact, about } from "./mockFooter";

export const FooterMain: FC = () => {
	return (
		<>
			<Box
				as={LayoutFooter}
				bgColor={"black"}
				display={{ base: "none", lg: "block" }}
			>
				<Flex
					fontSize={"sm"}
					color={"white"}
					maxW={"1180px"}
					mx={"auto"}
					letterSpacing={"-0.02em"}
				>
					<Box pt={"51px"} pb={9} w={"198px"} width={"25%"}>
						<IconButton
							href={routers.home()}
							src={images.logo}
							height={"auto"}
							width={"70px"}
							mb={"15px"}
						/>
						<address>
							<Text fontStyle={"normal"} lineHeight={"lg"} mt={9} mb={5}>
								{"adress, adress, address, address"}
								<br />
								{"adress, adress, address,"}
								<br />
								{"111-22222"}
							</Text>
						</address>
						<Text>
							Tel :
							<Link
								color={"white"}
								_hover={{ color: "white", textDecoration: "underline" }}
								href={"tel:+11111111111"}
							>
								{" +11 11 111 1111"}
							</Link>
						</Text>
						<Text>Fax: +11 11 111 1111</Text>
						<Text>
							Email :
							<Link
								color={"white"}
								_hover={{ color: "white", textDecoration: "underline" }}
								href={"mailto:export2@test.co.at"}
							>
								export2@test.co.at
							</Link>
						</Text>
					</Box>
					<List pl={1} pt={"35px"} width={"25%"}>
						<ListItem fontWeight={"bold"} mb={4}>
							{"Category"}
						</ListItem>
						{categories?.map((item, index) => (
							<CategoryFooterItem
								desktop={true}
								key={`${item.name}${index}`}
								name={item.name}
								href={item.href}
							/>
						))}
					</List>
					<List pl={"9px"} pt={"35px"} width={"25%"}>
						<ListItem fontWeight={"bold"} mb={4}>
							{"Select by Maker/Model"}
						</ListItem>
						{model?.map((item, index) => (
							<CategoryFooterItem
								desktop={true}
								key={`${item.name}${index}`}
								name={item.name}
								href={item.href}
							/>
						))}
					</List>
					<List pl={"16px"} pt={"35px"} width={"25%"}>
						<ListItem fontWeight={"bold"} mb={4}>
							{"Contact"}
						</ListItem>
						{contact?.map((item, index) => (
							<ListItem key={`${item.name}${index}`}>
								<Link
									color={"white"}
									_hover={{ color: "white", textDecoration: "underline" }}
									href={item.href}
									lineHeight={1.58}
								>
									{item.name}
								</Link>
							</ListItem>
						))}
						<ListItem fontWeight={"bold"} mt={8} mb={4}>
							{"About"}
						</ListItem>
						{about?.map((item, index) => (
							<ListItem key={`${item.name}${index}`}>
								<Link
									color={"white"}
									_hover={{ color: "white", textDecoration: "underline" }}
									href={item.href}
									lineHeight={1.58}
								>
									{item.name}
								</Link>
							</ListItem>
						))}
					</List>
				</Flex>
			</Box>

			<Box
				as={LayoutFooter}
				bgColor={"black"}
				display={{ base: "block", lg: "none" }}
			>
				<FooterCollapse data={categories} name={"Categoty"} />
				<Divider />
				<FooterCollapse data={model} name={"Select by Maker/Model"} />
				<Divider />
				<FooterCollapse data={contact} name={"Contact"} />
				<Divider />
				<FooterCollapse data={about} name={"About"} />
				<Divider />

				<Flex
					alignItems="center"
					flexDirection="column"
					fontSize={"0.75rem"}
					justifyContent="center"
					pb={6}
					pt={12}
					textAlign="center"
					width={"100%"}
					color={"white"}
					letterSpacing={"-0.02em"}
				>
					<IconButton
						href={routers.home()}
						src={images.logo}
						height={"auto"}
						width={"102px"}
						mb={"15px"}
					/>
					<address>
						<Text fontStyle={"normal"} lineHeight={"lg"} mb={5}>
							{"adress, adress, address, address,"}
							<br />
							{"adress, adress, address, 111-11112"}
						</Text>
					</address>
					<Text>
						Tel :
						<Link
							color={"white"}
							_hover={{ color: "white", textDecoration: "underline" }}
							href={"tel:+11111111111"}
						>
							{" +11 11 111 1111"}
						</Link>
					</Text>
					<Text>Fax: +11 11 111 1111</Text>
					<Text>
						Email :
						<Link
							color={"white"}
							_hover={{ color: "white", textDecoration: "underline" }}
							href={"mailto:export2@test.co.at"}
						>
							export2@test.co.at
						</Link>
					</Text>
				</Flex>
				<Text
					color={"white"}
					fontSize={"xs"}
					textAlign={"center"}
					letterSpacing={"-0.02em"}
				>
					&copy;{"Pet Industry Co., Ltd. All Rights Reserved."}
				</Text>
			</Box>
		</>
	);
};
