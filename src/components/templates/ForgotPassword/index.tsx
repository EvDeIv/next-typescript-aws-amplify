import { useToast } from "@chakra-ui/react";

import {
	ForgotPasswordForm,
	TForgotForm,
} from "@src/components/organisms/ForgotPasswordForm";
import { AuthLayput } from "@src/components/organisms/Layout/AuthLayout";
import { authService } from "@src/services/authService";

export const ForgotPassword = () => {
	const toast = useToast();

	const onSubmit = async (formValues: TForgotForm) => {
		try {
			await authService.forgotPassword(formValues);
			toast({
				title: "Verification code has been sended to your email",
				status: "error",
				duration: 4000,
				isClosable: true,
			});
		} catch (e: any) {
			toast({
				title: "Forgot Password Error",
				description: e.message,
				status: "error",
				duration: 4000,
				isClosable: true,
			});
		}
	};

	return (
		<AuthLayput>
			<ForgotPasswordForm onSubmit={onSubmit} isLoading={false} />
		</AuthLayput>
	);
};
