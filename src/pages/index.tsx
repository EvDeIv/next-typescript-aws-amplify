import { Heading, useToast } from "@chakra-ui/react";
import type { NextPage } from "next";

import { Button } from "@src/components/atoms/Button";
import { HeaderMain } from "@src/components/organisms/Header";
import { useAuthUserContext } from "@src/contexts/authContext";
import { authService } from "@src/services/authService";

const Home: NextPage = () => {
	const toast = useToast();

	const { user, remove } = useAuthUserContext();

	const onSignOut = async () => {
		try {
			await authService.signOut();
			remove();
		} catch (e: any) {
			toast({
				title: "Sign Out Error",
				description: e.message,
				status: "error",
				duration: 4000,
				isClosable: true,
			});
		}
	};

	return (
		<>
			<HeaderMain />
			<Heading
				as={"h1"}
				color={"black"}
				fontFamily={"Roboto"}
				fontSize={"xl"}
				fontStyle={"normal"}
				fontWeight={"bold"}
				lineHeight={"base"}
				textAlign={"center"}
				mb={8}
			>
				{"Home Page"}
			</Heading>
			{user && (
				<Button
					backgroundColor={"gray.30"}
					border={"1px"}
					borderColor={"gray.425"}
					color={"gray.850"}
					display={"flex"}
					fontFamily={"Roboto"}
					fontSize={"md"}
					fontStyle={"normal"}
					fontWeight={"bold"}
					lineHeight={4}
					mt={3}
					textColor={"gray.850"}
					w={"full"}
					onClick={onSignOut}
				>
					{"Sign Out"}
				</Button>
			)}
		</>
	);
};

export default Home;
