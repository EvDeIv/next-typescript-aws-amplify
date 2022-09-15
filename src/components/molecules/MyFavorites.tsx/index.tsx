import { FC } from "react";

import { ButtonProps, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { images } from "@public/accets/images";
import { Button } from "@src/components/atoms/Button";
import { Image } from "@src/components/atoms/Image";
import { routers } from "@src/config/routers";

export const MyFavorites: FC<ButtonProps> = (props): JSX.Element => {
	const router = useRouter();

	return (
		<Button
			alignItems={"center"}
			flexDirection={"column"}
			justifyContent="center"
			variant="ghost"
			onClick={() => router.push(routers.favorites())}
			{...props}
		>
			<Image src={images.iconFavorite} alt={"Favorites"} pt={3} />

			<Text color={"black"} fontSize={"xs"} fontWeight={"normal"} mt={"7px"}>
				{"Favorites"}
			</Text>
		</Button>
	);
};
