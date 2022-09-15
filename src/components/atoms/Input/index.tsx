import { forwardRef } from "react";

import { InputProps, Input as InputChakra } from "@chakra-ui/react";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <InputChakra
      ref={ref}
      borderColor="gray.425"
      borderRadius="base"
      fontSize={"sm"}
      px={3}
      _hover={{ backgroundColor: "#ddd" }}
      {...props}
    />
  );
});

Input.displayName = "InputChakra";
