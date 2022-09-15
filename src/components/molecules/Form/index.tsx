import { FC } from "react";

import { Box, BoxProps } from "@chakra-ui/react";

interface IForm extends BoxProps {
  onSubmit: () => void;
}

export const Form: FC<IForm> = ({ onSubmit, children, ...rest }) => {
  return (
    <Box {...rest}>
      <Box as={"form"} onSubmit={onSubmit}>
        {children}
      </Box>
    </Box>
  );
};
