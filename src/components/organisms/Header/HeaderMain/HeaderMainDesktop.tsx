import { FC } from "react";

import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { images } from "@public/accets/images";
import { Button } from "@src/components/atoms/Button";
import { Select } from "@src/components/atoms/Select";
import { IconButton } from "@src/components/molecules/IconButton";
import { MyAccount } from "@src/components/molecules/MyAccount";
import { MyCart } from "@src/components/molecules/MyCart";
import { MyFavorites } from "@src/components/molecules/MyFavorites.tsx";
import { SearchInput } from "@src/components/molecules/SearchInput";
import { routers } from "@src/config/routers";
import { IAuthUser } from "@src/contexts/authContext/types";

interface IHeaderMainDesktopProps {
	// eslint-disable-next-line
	onSubmitSearch?: (value?: string) => void;
	user?: IAuthUser;
}

const languages = [
	{
		label: "English",
		value: "English",
	},
];

const currency = [
	{
		label: "USD",
		value: "USD",
	},
];

export const HeaderMainDesktop: FC<IHeaderMainDesktopProps> = ({
	user,
}): JSX.Element => {
	const router = useRouter();

	return (
		<Flex alignItems={"center"} justifyContent={"space-between"}>
			<IconButton
				href={routers.home()}
				height={"auto"}
				width={"70px"}
				mx={"20px"}
				mb={"1px"}
				src={images.logo}
			/>
			<Box flex={1} pl={"32px"}>
				<SearchInput
					maxW={"730px"}
					placeholder={"Search by any words"}
					onSubmitSearch={() => {}}
				/>
			</Box>
			<Flex alignItems={"center"}>
				{user?.username ? (
					<Flex alignItems={"center"}>
						<MyAccount mr={"5px"} ml={"15px"} />
						<MyFavorites mr={"1px"} />
						<MyCart mr={"15px"} total={10} />
					</Flex>
				) : (
					<Box>
						<Button
							backgroundColor={"white"}
							color={"orange.450"}
							fontWeight={"bold"}
							h={8}
							mx={1}
							onClick={() => router.push(routers.login())}
						>
							{"Sign in"}
						</Button>
						<Button
							backgroundColor={"orange.450"}
							borderRadius={"base"}
							color={"white"}
							fontWeight={"bold"}
							h={8}
							mr={"20px"}
							onClick={() => router.push(routers.signup())}
						>
							{"Sign up for free"}
						</Button>
					</Box>
				)}
				<Box mr={2}>
					{
						<Select
							height={"32px"}
							id={"my_language"}
							isSearchable={false}
							minWidth={"93px"}
							options={languages}
							placeholder={""}
						/>
					}
				</Box>
				<Box>
					{
						<Select
							height={"32px"}
							id={"my_currency"}
							isSearchable={false}
							minWidth={"73px"}
							options={currency}
							placeholder={""}
						/>
					}
				</Box>
			</Flex>
		</Flex>
	);
};
