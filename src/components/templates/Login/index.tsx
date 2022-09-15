import { useState } from "react";

import { Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Button } from "@src/components/atoms/Button";
import { AuthLayput } from "@src/components/organisms/Layout/AuthLayout";
import { LoginForm, TLoginForm } from "@src/components/organisms/LoginForm";
import { routers } from "@src/config/routers";
import { useAuthUserContext } from "@src/contexts/authContext";
import { authService } from "@src/services/authService";

export const Login = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const router = useRouter();

	const toast = useToast();
	const { save } = useAuthUserContext();

	const onSubmit = async (formValues: TLoginForm) => {
		try {
			setIsLoading(true);
			await authService.signIn(formValues);
			const user = await authService.currentAuthenticatedUser();
			save(user);
			router.push(routers.home());
		} catch (e: any) {
			toast({
				title: "SignIn Error",
				description: e.message,
				status: "error",
				duration: 4000,
				isClosable: true,
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AuthLayput>
			<LoginForm onSubmit={onSubmit} isLoading={isLoading} />
			<Text
				color={"black"}
				fontFamily={"Roboto"}
				fontSize={"md"}
				fontStyle={"normal"}
				lineHeight={"18.75px"}
				mt={8}
				textAlign="center"
			>
				{"Don’t have an account?"}
			</Text>
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
				onClick={() => router.push(routers.signup())}
			>
				{"Sign Up for Free"}
			</Button>
		</AuthLayput>
	);
};
