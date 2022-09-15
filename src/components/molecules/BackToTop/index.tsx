import React, { FC } from "react";

import { Box } from "@chakra-ui/layout";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import { Button } from "@src/components/atoms/Button";
import { LayoutBackToTop } from "@src/components/organisms/Layout";

export const BackToTop: FC = (): JSX.Element => {
	return (
		<Box as={LayoutBackToTop} bg={"#fff"}>
			<Button
				_hover={{
					background: "#AAAAAA",
				}}
				bg={"gray.650"}
				borderRadius={"none"}
				boxShadow="0px -1px 0px #CCCCCC"
				color={"white"}
				fontFamily={"Roboto"}
				fontSize={"sm"}
				h={"40px"}
				variant={"ghost"}
				w={"full"}
				leftIcon={
					<Box>
						<MdOutlineKeyboardArrowUp color={"white"} size={22} />
					</Box>
				}
				iconSpacing={"4px"}
				letterSpacing={"-0.02em"}
				onClick={() => window && window.scrollTo({ top: 0 })}
			>
				{"Back to top"}
			</Button>
		</Box>
	);
};
