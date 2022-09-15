import { Flex } from "@chakra-ui/react";

import { images } from "@public/accets/images";
import { IconButton } from "@src/components/molecules/IconButton";
import { HeaderLayout } from "@src/components/organisms/Layout";
import { routers } from "@src/config/routers";

export const HeaderAuth = () => {
	return (
		<HeaderLayout>
			<Flex
				justifyContent={"center"}
				boxShadow={"0px 1px 8px rgba(0, 0, 0, 0.12)"}
			>
				<IconButton
					href={routers.home()}
					height={"auto"}
					width={"70px"}
					src={images.logo}
				/>
			</Flex>
		</HeaderLayout>
	);
};
