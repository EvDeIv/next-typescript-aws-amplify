import { Button as ButtonChakra, ButtonProps } from "@chakra-ui/react";

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonChakra _hover={{ backgroundColor: "#D4D4D4" }} {...props}>
      {children}
    </ButtonChakra>
  );
};
