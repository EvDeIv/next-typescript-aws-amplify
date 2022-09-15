import { FC } from "react";

import { Text } from "@chakra-ui/react";

import { Link } from "@src/components/atoms/Link";
import { routers } from "@src/config/routers";

export const TermsAndPolicyText: FC = () => {
	return (
		<>
			<Text
				color={"black"}
				fontFamily={"Roboto"}
				fontSize={"sm"}
				fontStyle={"normal"}
				lineHeight={"18px"}
				mt={8}
				textAlign={"center"}
			>
				{`By creating an account, you agree to terms & conditions`}
			</Text>
			<Text
				color={"black"}
				fontFamily={"Roboto"}
				fontSize={"sm"}
				fontStyle={"normal"}
				lineHeight={"18px"}
				textAlign={"center"}
			>
				<Link href={routers.home()}>{"Terms & Conditions"}</Link>
				{" and "}
				<Link href={routers.home()}>{"Privacy Policy"}</Link>
			</Text>
		</>
	);
};
