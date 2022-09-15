import React, { FC } from "react";

import { Flex, InputProps } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { MdSearch } from "react-icons/md";

import { Button } from "@src/components/atoms/Button";
import { Input } from "@src/components/atoms/Input";
import { Field } from "@src/components/molecules/Field";
import { Form } from "@src/components/molecules/Form";
import { ISearchInput } from "@src/types";

export type TSearchInput = ISearchInput | FieldValues;

interface ISearchInputProps extends Omit<InputProps, "onChange" | "value"> {
	//eslint-disable-next-line
	onSubmitSearch?: (values?: TSearchInput) => void;
	value?: string;
	isMobile?: boolean;
}

export const SearchInput: FC<ISearchInputProps> = (props) => {
	const { onSubmitSearch = () => {}, placeholder, isMobile, ...rest } = props;

	const { control, handleSubmit, formState } = useForm<TSearchInput>();

	const handleSearch: SubmitHandler<TSearchInput> = (values) =>
		onSubmitSearch(values);

	if (isMobile) {
		return (
			<Form onSubmit={handleSubmit(handleSearch)}>
				<Flex
					backgroundColor={"#F7F7F7"}
					boxShadow={"0px 1px 0px rgba(0, 0, 0, 0.1) inset"}
					p={2}
				>
					<Field
						name={"search"}
						component={Input}
						control={control}
						formState={formState}
						placeholder={placeholder}
						backgroundColor={"white"}
						border={"transparent"}
						fontSize={"sm"}
						type={"search"}
					/>
					<Button
						bg={"orange.450"}
						color={"white"}
						h={"40px"}
						ml={"8px"}
						p={0}
						type={"submit"}
						w={"40px"}
					>
						<MdSearch fill={"white"} size={26} />
					</Button>
				</Flex>
			</Form>
		);
	}

	return (
		<Form onSubmit={handleSubmit(handleSearch)}>
			<Flex alignItems={"center"} w={"full"} {...rest}>
				<Field
					type={"search"}
					name={"search"}
					component={Input}
					control={control}
					formState={formState}
					placeholder={placeholder}
					_placeholder={{ color: "rgba(0, 0, 0, 0.4)" }}
					backgroundColor={"cyan.0"}
					border={"transparent"}
					borderRadius={"4px"}
					height={"40px"}
					px={4}
				/>
				<Button
					_focus={{ borderColor: "none" }}
					backgroundColor={"orange.450"}
					borderRadius={"4px"}
					h={"40px"}
					ml={2}
					padding={2}
					type={"submit"}
					w={"40px"}
				>
					<MdSearch fill={"white"} size={24} />
				</Button>
			</Flex>
		</Form>
	);
};
