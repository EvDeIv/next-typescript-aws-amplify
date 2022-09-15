import { FC } from "react";

import {
  Link as LinkChakra,
  LinkProps as LinkChakraProps,
} from "@chakra-ui/layout";
import LinkNext, { LinkProps } from "next/link";

export type TLinkProps = LinkProps &
  LinkChakraProps & {
    color?: string;
  };

export const Link: FC<TLinkProps> = ({
  color,
  href,
  children,
  ...props
}): JSX.Element => {
  return (
    <LinkNext href={href}>
      <LinkChakra
        color={color ?? "blue.570"}
        _hover={{
          opacity: 0.8,
          color: "blue.570",
          cursor: "pointer",
          textDecoration: "underline",
        }}
        _focus={{
          boxShadow: "none",
        }}
        href={href}
        {...props}
      >
        {children}
      </LinkChakra>
    </LinkNext>
  );
};
