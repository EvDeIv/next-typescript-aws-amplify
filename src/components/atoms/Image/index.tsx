import { FC } from "react";

import { BoxProps, Flex, Image as ImageChakra } from "@chakra-ui/react";

export interface IImageProps extends BoxProps {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

export const Image: FC<IImageProps> = ({
  width,
  height,
  src,
  alt,
  ...props
}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      {...props}
      h={height}
      w={width}
    >
      <ImageChakra
        alt={alt}
        height={"auto"}
        margin="auto"
        maxW={"full"}
        objectFit="contain"
        objectPosition={"center center"}
        src={src}
      />
    </Flex>
  );
};
