import { FC } from "react";

import { Heading, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@src/components/atoms/Button";
import { Input } from "@src/components/atoms/Input";
import { Field } from "@src/components/molecules/Field";
import { Form } from "@src/components/molecules/Form";
import { ForgotPasswordSchema } from "@src/resolverSchemas";
import { IUserForgotPassword } from "@src/types";

export type TForgotForm = IUserForgotPassword | FieldValues;

interface IForgotPasswordProps {
	//eslint-disable-next-line
	onSubmit: (value: TForgotForm) => void;
	isLoading: boolean;
}

export const ForgotPasswordForm: FC<IForgotPasswordProps> = ({ onSubmit }) => {
	const { control, handleSubmit, formState } = useForm<TForgotForm>({
		mode: "onTouched",
		reValidateMode: "onChange",
		resolver: yupResolver(ForgotPasswordSchema),
	});

	const handleSingIn: SubmitHandler<TForgotForm> = (value) => onSubmit(value);

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
				mb={2}
			>
				{"Password Reset"}
			</Heading>
			<Text
				color={"black"}
				fontFamily={"Roboto"}
				fontSize={"md"}
				fontStyle={"normal"}
				lineHeight={"1.75"}
				mb={8}
			>
				{`We'll email you PIN code for creating your new password.`}
			</Text>
			<Field
				name="email"
				control={control}
				formState={formState}
				component={Input}
				label={"Email"}
				placeholder={"Email"}
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
				{"Send"}
			</Button>
		</Form>
	);
};
