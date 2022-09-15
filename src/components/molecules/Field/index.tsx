import { FC, ForwardRefExoticComponent, RefAttributes } from "react";

import { Box, InputProps } from "@chakra-ui/react";
import { Control, Controller, FieldValues, FormState } from "react-hook-form";

import { IOption, ISelectProps } from "@src/components/atoms/Select";

interface IField extends InputProps {
	label?: string;
	type?: string;
	options?: IOption[];
	name: string;
	component:
		| ForwardRefExoticComponent<RefAttributes<HTMLInputElement> | InputProps>
		| ForwardRefExoticComponent<ISelectProps | RefAttributes<any>>;
	control: Control<FieldValues>;
	formState: FormState<FieldValues>;
}

export const Field: FC<IField> = (props) => {
	const {
		label,
		name,
		control,
		formState,
		component: Component,
		...rest
	} = props;
	const { errors } = formState;

	const error = errors[name]?.message as string;

	return (
		<>
			<Box
				as={"label"}
				display={"block"}
				htmlFor={name}
				fontFamily={"Roboto"}
				fontStyle={"normal"}
				fontSize={"sm"}
				color={"black"}
				lineHeight={"14px"}
				mb={2}
			>
				{label}
			</Box>

			{Component.displayName === "ReactSelect" ? (
				<Controller
					name={name}
					control={control}
					render={({ field: { onChange, onBlur, name, ref, value } }) => {
						return (
							<Component
								id={name}
								value={value}
								ref={ref}
								name={name}
								onBlur={onBlur}
								onChange={(option: IOption) => {
									onChange(option.value);
								}}
								isInvalid={!!error}
								{...rest}
							/>
						);
					}}
				/>
			) : (
				<Component
					id={name}
					isInvalid={!!error}
					{...control.register(name)}
					{...rest}
				/>
			)}
			<Box as={"p"} color={"red.500"} fontSize={"2xs"} minH={4}>
				{error}
			</Box>
		</>
	);
};
