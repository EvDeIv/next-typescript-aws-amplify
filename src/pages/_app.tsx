import { useEffect, useState } from "react";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";

import { Loading } from "@src/components/atoms/Loading";
import { Head } from "@src/components/templates/Head/Head";
import { awsConfig } from "@src/config/awsConfig";
import { AuthContextProvider } from "@src/contexts/authContext";
import { AUTH_USER } from "@src/contexts/authContext/hooks/useAuthUser";
import { storageService } from "@src/services";
import { authService } from "@src/services";
import { theme } from "@src/theme";

import "../../styles/globals.css";

Amplify.configure(awsConfig);

function MyApp({ Component, pageProps }: AppProps) {
	const [isLoadingUser, setIsLoadingUser] = useState(true);

	async function getUser() {
		const user = await authService.currentAuthenticatedUser();

		storageService.set(AUTH_USER, user);
	}

	useEffect(() => {
		getUser().finally(() => {
			setIsLoadingUser(false);
		});
	});

	if (isLoadingUser)
		return (
			<ChakraProvider theme={theme}>
				<Flex
					alignItems="center"
					h={"100vh"}
					justifyContent="center"
					w={"full"}
				>
					<Loading size="xl" />
				</Flex>
			</ChakraProvider>
		);

	return (
		<ChakraProvider theme={theme}>
			<AuthContextProvider>
				<Head />
				<Component {...pageProps} />
			</AuthContextProvider>
		</ChakraProvider>
	);
}

export default MyApp;
