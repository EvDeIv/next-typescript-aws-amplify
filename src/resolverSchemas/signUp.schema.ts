import * as yup from "yup";

import { emailRegExp } from "./schemasRegExp";

export const SignUpSchema = yup.object().shape({
	email: yup
		.string()
		.required("Email is required")
		.matches(emailRegExp, "Email is not valid"),
	password: yup
		.string()
		.required("Password is required")
		.min(8, "Password must be at least 8 characters"),
	countryId: yup.number().required("Country is required"),
});

export default SignUpSchema;
