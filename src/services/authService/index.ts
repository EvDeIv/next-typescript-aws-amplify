import { Auth } from "aws-amplify";

import { TForgotForm } from "@src/components/organisms/ForgotPasswordForm";
import { TLoginForm } from "@src/components/organisms/LoginForm";
import { TSignUpForm } from "@src/components/organisms/SignUpForm";
import { IAuthUser } from "@src/contexts/authContext/types";

export const authService = {
	signIn: async ({ email, password }: TLoginForm): Promise<void> => {
		return await Auth.signIn(email, password);
	},

	signUp: async ({ email, password, country }: TSignUpForm): Promise<void> => {
		await Auth.signUp(email, password, country);
	},

	currentAuthenticatedUser: async (): Promise<IAuthUser> => {
		return Auth.currentAuthenticatedUser();
	},

	forgotPassword: async ({ email }: TForgotForm): Promise<void> => {
		await Auth.forgotPassword(email);
	},

	signOut: async () => {
		await Auth.signOut({ global: true });
	},
};
