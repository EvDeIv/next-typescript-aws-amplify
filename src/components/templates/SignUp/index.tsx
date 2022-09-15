import { useState } from "react";

import { Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Link } from "@src/components/atoms/Link";
import { TermsAndPolicyText } from "@src/components/molecules/TermsPocilyText";
import { AuthLayput } from "@src/components/organisms/Layout/AuthLayout";
import { TSignUpForm, SignUpForm } from "@src/components/organisms/SignUpForm";
import { routers } from "@src/config/routers";
import { authService } from "@src/services/authService";

export const SignUp = () => {
	const router = useRouter();
	const toast = useToast();

	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (formValues: TSignUpForm) => {
		try {
			setIsLoading(true);
			await authService.signUp(formValues);
			router.push(routers.signUpComplete({ email: formValues?.email ?? "" }));
		} catch (e: any) {
			toast({
				title: "SignUp error",
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
			<SignUpForm onSubmit={onSubmit} isLoading={isLoading} />
			<TermsAndPolicyText />
			<Text
				color={"black"}
				fontFamily={"Roboto"}
				fontSize={"sm"}
				fontStyle={"normal"}
				lineHeight={"14px"}
				mt={8}
				textAlign={"center"}
			>
				{"Already have an account?"}
				<Link href={routers.login()} ml={2.5}>
					{"Login"}
				</Link>
			</Text>
		</AuthLayput>
	);
};
