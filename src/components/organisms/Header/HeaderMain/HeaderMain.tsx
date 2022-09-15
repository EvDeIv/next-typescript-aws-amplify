import { Box } from "@chakra-ui/react";

import { HeaderMainDesktop } from "@src/components/organisms/Header";
import { HeaderMainMobile } from "@src/components/organisms/Header";
import { HeaderLayout } from "@src/components/organisms/Layout";
import { Navigation } from "@src/components/organisms/Navigation";
import { useAuthUserContext } from "@src/contexts/authContext";

export const HeaderMain = () => {
	const { user } = useAuthUserContext();

	return (
		<>
			<HeaderLayout>
				<Box
					boxShadow={"inset 0px -1px 0px rgba(0, 0, 0, 0.1)"}
					display={{ base: "none", lg: "block" }}
					pr={4}
				>
					<HeaderMainDesktop user={user} />
				</Box>
				<Box
					boxShadow={"0px 1px 8px rgba(0, 0, 0, 0.12)"}
					display={{ base: "block", lg: "none" }}
				>
					<HeaderMainMobile />
				</Box>
			</HeaderLayout>
			<Navigation />
		</>
	);
};
