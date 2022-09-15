import { FC } from "react";

import { Box, Heading } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@src/components/atoms/Button";
import { Input } from "@src/components/atoms/Input";
import { Select } from "@src/components/atoms/Select";
import { Field } from "@src/components/molecules/Field";
import { Form } from "@src/components/molecules/Form";
import { PasswordInput } from "@src/components/molecules/Form/PasswordInput";
import { countryOptions } from "@src/constants/countries";
import { SignUpSchema } from "@src/resolverSchemas";
import { IUserSignUp } from "@src/types";

export type TSignUpForm = IUserSignUp | FieldValues;

interface ISignUpProps {
	//eslint-disable-next-line
	onSubmit: (value: TSignUpForm) => void;
	isLoading?: boolean;
}

export const SignUpForm: FC<ISignUpProps> = ({ onSubmit }) => {
	const { control, handleSubmit, formState } = useForm<TSignUpForm>({
		mode: "onTouched",
		reValidateMode: "onChange",
		resolver: yupResolver(SignUpSchema),
	});

	const handleSingIn: SubmitHandler<TSignUpForm> = (values) => onSubmit(values);

	return (
		<Form onSubmit={handleSubmit(handleSingIn)}>
			<Heading
				as={"h1"}
				color={"black"}
				fontFamily={"Roboto"}
				fontSize={"xl"}
				fontStyle={"normal"}
				fontWeight={"bold"}
				lineHeight={"base"}
				mb={8}
			>
				{"Sign Up for Free"}
			</Heading>
			<Box mb={2}>
				<Field
					name="email"
					control={control}
					formState={formState}
					component={Input}
					label={"Email"}
					placeholder={"Email"}
				/>
			</Box>
			<Field
				name="password"
				control={control}
				formState={formState}
				component={PasswordInput}
				label={"Password"}
				placeholder={"At least 8 characters including a number"}
			/>
			<Field
				name="countryId"
				control={control}
				formState={formState}
				component={Select}
				options={countryOptions}
				label={"Country"}
				placeholder={"Select Country"}
				height={"40px"}
			/>
			<Button
				background={"orange.450"}
				borderRadius={"base"}
				color={"white"}
				fontFamily={"Roboto"}
				fontSize={"md"}
				fontStyle={"normal"}
				isLoading={false}
				lineHeight={4}
				mt={6}
				type={"submit"}
				w={"full"}
			>
				{"Sign Up"}
			</Button>
		</Form>
	);
};
