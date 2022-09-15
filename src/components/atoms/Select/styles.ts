import { Props as SelectProps } from "react-select";

import { theme } from "@src/theme";

export interface IStyleProps {
  isInvalid?: boolean;
  minWidth?: number | string;
  height?: number | string;
  background?: string;
  color?: string;
}

const controlBorderColor = ({
  isFocused,
  isInvalid,
  isHovered,
}: {
  isFocused?: boolean;
  isInvalid?: boolean;
  isHovered?: boolean;
}) => {
  if (isFocused) {
    return "#2C9A7A";
  }
  if (isInvalid) {
    return "#dd352f";
  }
  if (isHovered) {
    return "#444";
  }
  return "#CCCCCC";
};

// eslint-disable-next-line
export const customStyle: (props: IStyleProps) => SelectProps["styles"] = ({
  isInvalid,
  minWidth,
  height,
  background,
  color,
}) => ({
  control: (provided, { isFocused }) => ({
    ...provided,
    paddingLeft: "2px",
    borderRadius: "4px",
    borderColor: controlBorderColor({ isFocused, isInvalid }),
    height: height,
    minHeight: "32px",
    background: background,
  }),
  option: (provided) => ({
    ...provided,
    textOverflow: "ellipsis",
    fontSize: "14px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    padding: "6px 8px 6px 12px",
  }),
  container: (provided) => ({
    ...provided,
    minWidth: minWidth,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0 7px",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: theme.fontSizes.sm,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "5px 11px 5px 0",
    color: color,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    marginLeft: "-8px",
  }),
  menuList: (base) => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "4px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
});
