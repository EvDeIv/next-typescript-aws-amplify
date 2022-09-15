import { FC } from "react";

import { ButtonProps, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { images } from "@public/accets/images";
import { Button } from "@src/components/atoms/Button";
import { Image } from "@src/components/atoms/Image";
import { routers } from "@src/config/routers";

interface IMyCartProps extends ButtonProps {
	total?: number;
	isDesktop?: boolean;
}

export const MyCart: FC<IMyCartProps> = ({
	total,
	isDesktop = true,
	...props
}): JSX.Element => {
	const router = useRouter();

	return (
		<Button
			alignItems={"center"}
			flexDirection={"column"}
			height={"47px"}
			justifyContent="center"
			position={"relative"}
			variant="ghost"
			onClick={() => router.push(routers.myCart())}
			{...props}
		>
			<Image src={images.iconShoppingCart} alt={"Shopping Cart"} pt={2} />
			{total && total !== 0 && (
				<Text
					as={"span"}
					backgroundColor={"orange.450"}
					borderRadius={"50%"}
					color={"white"}
					fontSize={"sm"}
					fontWeight={"bold"}
					alignItems={"center"}
					display={"flex"}
					justifyContent={"center"}
					h={"22px"}
					w={"22px"}
					position={"absolute"}
					right={"12px"}
					top={"-3px"}
				>
					{total}
				</Text>
			)}

			{isDesktop && (
				<Text
					as={"span"}
					color={"black"}
					fontSize={"xs"}
					fontWeight={"normal"}
					mt={1}
				>
					{"Cart"}
				</Text>
			)}
		</Button>
	);
};
