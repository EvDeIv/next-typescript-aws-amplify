import { FC } from "react";

import {
	Box,
	Button,
	Center,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdOutlineClose } from "react-icons/md";

import { Link } from "@src/components/atoms/Link";
import { NavigationLayout } from "@src/components/organisms/Layout";
import { routers } from "@src/config/routers";

import { BurgerIcon } from "./styled";

export const Navigation: FC = (): JSX.Element => {
	const router = useRouter();
	return (
		<Flex
			as={NavigationLayout}
			bg={"white"}
			justifyContent="space-between"
			alignItems={"center"}
			w={"full"}
			display={{ base: "none", lg: "flex" }}
		>
			<Flex alignItems={"center"}>
				<Menu isLazy>
					{({ isOpen }) => (
						<>
							<MenuButton
								as={Button}
								_expanded={{ bg: "orange.450" }}
								backgroundColor={"white"}
								borderRadius={0}
								color={isOpen ? "white" : "black"}
								fontSize={"md"}
								fontWeight={"normal"}
								lineHeight={"normal"}
								h={"64px"}
								pl={6}
								rightIcon={
									isOpen ? (
										<Center w={"26px"}>
											<MdOutlineClose color={"white"} size={20} />
										</Center>
									) : (
										<BurgerIcon size={26} />
									)
								}
								w={"137px"}
							>
								{"Category"}
							</MenuButton>
							<MenuList
								borderRadius={0}
								fontSize={"14px"}
								overflow={"hidden"}
								p={0}
							>
								<div style={{ overflowY: "scroll", height: "322px" }}>
									<MenuItem borderBottom={"1px solid #DDDDDD"} h={"46px"}>
										{"Some Items"}
									</MenuItem>
								</div>
							</MenuList>
						</>
					)}
				</Menu>
				<Box
					sx={{
						px: "12px",
					}}
					borderLeft={"1px solid #C4C4C4"}
				>
					<Link
						color={"black"}
						fontSize={"md"}
						fontWeight={"normal"}
						lineHeight={"normal"}
						mx={"12px"}
						href={routers.default()}
					>
						{"Catalog"}
					</Link>

					<Link
						color={"black"}
						fontSize={"md"}
						fontWeight={"normal"}
						lineHeight={"normal"}
						mx={"12px"}
						href={routers.default()}
					>
						{"Freight Simulator"}
					</Link>
				</Box>
			</Flex>
			<Button
				backgroundColor={"blue.850"}
				borderRadius={4}
				color={"white"}
				h={8}
				width={"111px"}
				mr={4}
				onClick={() => router.push(routers.default())}
				mb={"2px"}
			>
				{"Contact us"}
			</Button>
		</Flex>
	);
};
