import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { images } from "@public/accets/images";
import { Button } from "@src/components/atoms/Button";
import { Image } from "@src/components/atoms/Image";
import { AuthLayput } from "@src/components/organisms/Layout/AuthLayout";
import { routers } from "@src/config/routers";

export const SignUpComplete = () => {
	const { query, push: routerPush } = useRouter();
	return (
		<AuthLayput>
			<Heading
				as={"h1"}
				color={"black"}
				fontFamily={"Roboto"}
				fontSize={{ base: "xl", lg: "2xl" }}
				fontWeight={"bold"}
				lineHeight={"base"}
				mb={8}
				textAlign={"center"}
			>
				{"Verify your email"}
			</Heading>
			<Flex justifyContent={"center"} mb={6}>
				<Image
					alt={"Verify your email"}
					height={"62px"}
					src={images.iconEmail}
					width={"62px"}
				/>
			</Flex>
			<Text
				backgroundColor={"gray.75"}
				color={"black"}
				fontSize={"md"}
				lineHeight={"28px"}
				mb={8}
				p={"8px"}
				textAlign={"center"}
			>
				{`Verification email was sent to `}
				<Text as={"span"} fontWeight={"bold"}>
					{query.email}
				</Text>
				{`.Please click verification link in 72 hours.`}
			</Text>
			<Text
				color={"black"}
				fontSize={{ base: "sm", lg: "md" }}
				lineHeight={"none"}
				textAlign={"center"}
			>
				{"Let’s complete the profile first and start."}
			</Text>
			<Button
				background={"orange.450"}
				color={"white"}
				h={"40px"}
				mt={"20px"}
				type={"submit"}
				w={"full"}
				onClick={() => routerPush(routers.home())}
			>
				{"Home"}
			</Button>
		</AuthLayput>
	);
};
