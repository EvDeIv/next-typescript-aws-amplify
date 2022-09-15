import { FC } from "react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { images } from "@public/accets/images";
import { Image } from "@src/components/atoms/Image";
import { routers } from "@src/config/routers";

interface IMyAccountProps extends FlexProps {}

export const MyAccount: FC<IMyAccountProps> = (props): JSX.Element => {
	const router = useRouter();

	return (
		<Flex
			flexDir={"column"}
			alignItems={"center"}
			onClick={() => {
				router.push(routers.myPage());
			}}
			_hover={{ cursor: "pointer" }}
			{...props}
		>
			<Image src={images.iconMyAccount} alt={"My account"} pt={"10px"} />

			<Flex alignItems={"center"} flexDir={"row"}>
				<Text
					color={"black"}
					fontSize={"xs"}
					fontWeight={"normal"}
					mt={"4px"}
					textAlign={"center"}
				>
					{"My Account"}
				</Text>
				<ChevronDownIcon mt={1} />
			</Flex>
		</Flex>
	);
};
