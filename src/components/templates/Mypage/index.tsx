import { FC } from "react";

import { Box, Stack } from "@chakra-ui/react";

import { MyMenu } from "@src/components/templates/Mypage/components/MyMenu";
import { MyNotifications } from "@src/components/templates/Mypage/components/MyNotifications";
import { NewStockList } from "@src/components/templates/Mypage/components/NewStockList";
import { RequiredExtraInfo } from "@src/components/templates/Mypage/components/RequiredExtraInfo";

const special_offer = [
	{
		name: "Latest Engine Stock",
		image: "https://i.ibb.co/3FpJR7Q/Rectangle-3217.png",
		value: "engine",
	},
	{
		name: "New Arrivals",
		image: "https://i.ibb.co/8rczKzd/Rectangle-3217-1.png",
		value: "arrival",
	},
];

const notifications = [
	{
		date: "20-20-2020",
		name: "test20",
		title: "test20test20test20test20test20test20",
	},
	{
		date: "22-22-2022",
		name: "test22",
		title: "test22test22test22test22test22test22test22test22test22test22test22",
	},
];

export const CustomerPage: FC = (): JSX.Element => {
	return (
		<Box
			maxW={"1180px"}
			width={"auto"}
			mx={"auto"}
			mb={{ base: "190px", lg: "206px" }}
		>
			<Stack mt={{ base: 5, lg: 10 }} spacing={"40px"}>
				<RequiredExtraInfo />
				<NewStockList data={special_offer} />
				<MyMenu />
				<MyNotifications data={notifications} />
			</Stack>
		</Box>
	);
};
