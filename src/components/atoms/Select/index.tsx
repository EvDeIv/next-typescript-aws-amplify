import { forwardRef } from "react";

import ReactSelect, {
	components,
	Props as ReactSelectProps,
} from "react-select";

import { images } from "@public/accets/images";
import { Image } from "@src/components/atoms/Image";

import { customStyle } from "./styles";

export interface IOption {
	value: any;
	label: string;
}

const DropdownIndicator = (props: any) => (
	<components.DropdownIndicator {...props}>
		<Image
			height={"6px"}
			width={"9px"}
			src={images.dropdownArrow}
			alt={"Select Dropdown"}
		/>
	</components.DropdownIndicator>
);

export interface ISelectProps extends ReactSelectProps {
	isInvalid?: boolean;
	value?: any;
	options?: IOption[];
	minWidth?: number | string;
	height?: number | string;
	background?: string | undefined;
	color?: string | undefined;
}

export const Select = forwardRef<any, ISelectProps>((props, ref) => {
	const {
		options,
		placeholder,
		// eslint-disable-next-line
		value,
		isInvalid,
		minWidth,
		height,
		background,
		color,
		...rest
	} = props;

	return (
		<ReactSelect
			ref={ref}
			options={options}
			components={{ DropdownIndicator }}
			placeholder={placeholder}
			styles={customStyle({ isInvalid, minWidth, height, background, color })}
			{...rest}
			id={`react-select-${props.id}-listbox`}
			instanceId={props.id ?? "id-select"}
		/>
	);
});

Select.displayName = "ReactSelect";
