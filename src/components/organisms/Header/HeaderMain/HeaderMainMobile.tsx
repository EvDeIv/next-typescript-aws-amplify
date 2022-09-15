import { FC, useState } from "react";

import { Collapse, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { images } from "@public/accets/images";
import { Button } from "@src/components/atoms/Button";
import { Image } from "@src/components/atoms/Image";
import { IconButton } from "@src/components/molecules/IconButton";
import { SearchInput } from "@src/components/molecules/SearchInput";
import { routers } from "@src/config/routers";

export const HeaderMainMobile: FC = (): JSX.Element => {
	const router = useRouter();

	const [show, setShow] = useState(false);

	return (
		<>
			<Flex alignItems={"center"} justifyContent={"space-between"} h={16}>
				<Flex alignItems={"center"}>
					<Button variant={"unstyled"} pt={"2px"}>
						<Image
							src={images.iconBurgerMenu}
							display={"inline-block"}
							alt={"Dropdown Menu"}
							mx={"19px"}
						/>
					</Button>
					<IconButton
						href={routers.home()}
						height={"auto"}
						width={"60px"}
						src={images.logo}
					/>
				</Flex>
				<Flex alignItems={"center"}>
					<Button variant={"unstyled"}>
						<Image
							src={images.iconFavorite}
							display={"inline-block"}
							alt={"Favorites"}
							height={"25px"}
							width={"21px"}
							onClick={() => router.push(routers.favorites())}
							mt={"11px"}
							mr={4}
						/>
					</Button>
					<Button variant={"unstyled"}>
						<Image
							src={images.iconSearch}
							display={"inline-block"}
							alt={"Search"}
							onClick={() => setShow(!show)}
							mt={"6px"}
							mr={4}
						/>
					</Button>
					<Button variant={"unstyled"}>
						<Image
							src={images.iconShoppingCart}
							display={"inline-block"}
							alt={"Shopping Cart"}
							onClick={() => router.push(routers.myCart())}
							height={"23px"}
							width={"22px"}
							mr={"18px"}
							mt={2}
						/>
					</Button>
				</Flex>
			</Flex>
			<Collapse in={show}>
				<SearchInput
					isMobile
					maxW={"670px"}
					mx={1}
					placeholder={"Search by any words"}
				/>
			</Collapse>
		</>
	);
};
