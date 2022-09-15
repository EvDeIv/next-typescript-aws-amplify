import { FC, useState } from "react";

import { Collapse, Flex, List, Text } from "@chakra-ui/react";
import { MdAdd, MdRemove } from "react-icons/md";

import { CategoryFooterItem } from "@src/components/molecules/FooterItem";
import { TCollapseItem } from "@src/components/organisms/Footer/mockFooter";

interface IFooterMainProps {
	name: string;
	data: TCollapseItem[];
}

export const FooterCollapse: FC<IFooterMainProps> = ({ name, data }) => {
	const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);

	return (
		<>
			<Flex
				display={{ base: "flex", lg: "none" }}
				mx={"auto"}
				maxW={"1180px"}
				alignItems={"center"}
				boxShadow={"inset 0px 1px 0px rgba(0, 0, 0, 0.1)"}
				justifyContent={"center"}
				py={5}
				onClick={() => setIsCategoryOpen(!isCategoryOpen)}
			>
				{isCategoryOpen ? (
					<MdRemove size={16} color={"white"} />
				) : (
					<MdAdd size={16} color={"white"} />
				)}
				<Text
					color={"white"}
					fontSize={"sm"}
					fontFamily={"Roboto"}
					fontWeight={"bold"}
					textAlign={"center"}
					lineHeight={"100%"}
					letterSpacing={"-0.02em"}
					ml={1}
				>
					{name}
				</Text>
			</Flex>
			<Collapse animateOpacity in={isCategoryOpen}>
				<List>
					{data?.map((item, index) => (
						<CategoryFooterItem
							desktop={false}
							key={`${item.name}${index}`}
							name={item.name}
							href={item.href}
						/>
					))}
				</List>
			</Collapse>
		</>
	);
};
