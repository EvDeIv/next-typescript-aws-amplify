import { FC } from "react";

import { Box, Heading } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@src/components/atoms/Button";
import { Input } from "@src/components/atoms/Input";
import { Field } from "@src/components/molecules/Field";
import { Form } from "@src/components/molecules/Form";
import { PasswordInput } from "@src/components/molecules/Form/PasswordInput";
import { LoginSchema } from "@src/resolverSchemas";
import { IUserLogin } from "@src/types";

export type TLoginForm = IUserLogin | FieldValues;

interface ILoginProps {
	//eslint-disable-next-line
	onSubmit: (value: TLoginForm) => void;
	isLoading?: boolean;
}

export const LoginForm: FC<ILoginProps> = ({ onSubmit }) => {
	const { control, handleSubmit, formState } = useForm<TLoginForm>({
		mode: "onTouched",
		reValidateMode: "onChange",
		resolver: yupResolver(LoginSchema),
	});

	const handleSingIn: SubmitHandler<TLoginForm> = (value) => onSubmit(value);

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
				{"Sign In"}
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
				placeholder={"Password"}
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
				{"Sign In"}
			</Button>
		</Form>
	);
};
