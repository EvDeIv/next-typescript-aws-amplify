import * as yup from "yup";

import { emailRegExp } from "./schemasRegExp";

export const ForgotPasswordSchema = yup.object().shape({
	email: yup
		.string()
		.required("Email is required")
		.matches(emailRegExp, "Email is not valid"),
});

export default ForgotPasswordSchema;
