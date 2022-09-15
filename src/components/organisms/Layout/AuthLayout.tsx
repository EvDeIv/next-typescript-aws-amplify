import { FC } from "react";

import { Box, BoxProps } from "@chakra-ui/react";

import { MainLayout } from "@src/components/organisms/Layout";

export const AuthLayput: FC<BoxProps> = ({ children }) => {
	return (
		<Box
			as={MainLayout}
			mx={"auto"}
			maxW={380}
			w={{
				base: "full",
				"2xl": "1212px",
			}}
			p={{
				base: 4,
				lg: 8,
			}}
			pt={{
				base: 5,
				lg: 18,
			}}
		>
			{children}
		</Box>
	);
};
