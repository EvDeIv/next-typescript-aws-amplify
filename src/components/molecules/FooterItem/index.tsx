import React from "react";

import { Link, ListItem } from "@chakra-ui/react";

interface IFooterItem {
  name: string;
  href: string;
  desktop: boolean;
}

export const CategoryFooterItem: React.FC<IFooterItem> = ({
  name,
  href,
  desktop,
}): JSX.Element => {
  if (desktop)
    return (
      <ListItem textAlign={{ base: "center", lg: "start" }}>
        <Link
          _hover={{
            color: "white",
            textDecoration: "underline",
          }}
          borderTop={{ base: "1px solid #666666", lg: "none" }}
          color={"white"}
          display={"block"}
          fontSize={"sm"}
          href={href}
          lineHeight={"21px"}
        >
          {name}
        </Link>
      </ListItem>
    );

  return (
    <ListItem textAlign={{ base: "center", lg: "start" }}>
      <Link
        _hover={{
          color: "white",
          textDecoration: "underline",
        }}
        borderTop={{ base: "1px solid #666666", lg: "none" }}
        color={"white"}
        display={"block"}
        fontSize={"sm"}
        href={href}
        lineHeight={1.58}
        py={3}
      >
        {name}
      </Link>
    </ListItem>
  );
};
