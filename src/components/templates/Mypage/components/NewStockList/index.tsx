import { FC } from "react";

import { Box, Button, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { MdCloudDownload } from "react-icons/md";

import { Image } from "@src/components/atoms/Image";

interface IItem {
	name: string;
	image: string;
	value: string;
}

interface INewStockList {
	data: IItem[];
}

export const NewStockList: FC<INewStockList> = ({ data }): JSX.Element => {
	return (
		<Box
			bgColor={"white"}
			mx={{ base: -4, lg: 0 }}
			p={{ base: 4, lg: 6 }}
			pt={{ base: "14px" }}
			borderRadius={{ lg: "4px" }}
		>
			<Heading
				as={"h2"}
				borderBottomColor={"gray.450"}
				borderBottomWidth={1}
				color={"black"}
				fontFamily={"Roboto"}
				fontSize={{ base: "xl", lg: "2xl" }}
				fontStyle={"normal"}
				fontWeight={"bold"}
				lineHeight={"24px"}
				pb={{ base: "14px", lg: "17px" }}
			>
				{"New Stock List"}
			</Heading>
			<Grid
				gap={4}
				templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
				mt={{ base: 5, lg: 6 }}
				width={"100%"}
			>
				{data.map((item, index) => (
					<GridItem key={`${item.name}${index}`}>
						<Flex
							alignItems={"center"}
							border={"1px"}
							borderRadius={"4px"}
							borderColor={"gray.425"}
							flexDirection={{ base: "column", lg: "row" }}
							p={{ base: "15px" }}
						>
							<Image alt={item.name} h={"145px"} src={item.image} w={"200px"} />
							<Box pl={{ base: "0px", lg: 6 }} pt={{ base: "24px", lg: "0px" }}>
								<Heading
									as={"h3"}
									color={"black"}
									fontFamily={"Roboto"}
									fontSize={"xl"}
									fontStyle={"normal"}
									fontWeight={"bold"}
									lineHeight={"20px"}
									pb={{ base: 4, lg: 6 }}
									textAlign={{ base: "center", lg: "left" }}
								>
									{item.name}
								</Heading>
								<Button
									as="a"
									fontFamily={"Roboto"}
									bgColor={"gray.30"}
									border={"1px"}
									borderColor={"gray.450"}
									color={"black"}
									height={"40px"}
									leftIcon={<MdCloudDownload size={20} />}
									target="_blank"
									variant="solid"
									width={{ base: "311px", lg: "178px" }}
									onClick={() => {}}
								>
									{"Download List"}
								</Button>
							</Box>
						</Flex>
					</GridItem>
				))}
			</Grid>
		</Box>
	);
};
