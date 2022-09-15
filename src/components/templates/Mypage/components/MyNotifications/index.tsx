import { FC } from "react";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { useArticles } from "../../hooks/useArticles";

interface IMyNotification {
  date: string;
  name: string;
  title: string;
}

interface IMyNotificationsProps {
  data?: IMyNotification[];
}

export const MyNotifications: FC<IMyNotificationsProps> = (): JSX.Element => {
  const { data } = useArticles(3);

  return (
    <Box
      bgColor={"white"}
      mx={{ base: -4, lg: 0 }}
      mb={{ base: "190px", lg: "206px" }}
      p={{ base: 4, lg: 6 }}
      pt={{ base: "14px", lg: 6 }}
      pb={{ base: "16px", lg: 6 }}
      borderRadius={{ lg: "4px" }}
    >
      <Heading
        as={"h2"}
        fontFamily={"Roboto"}
        fontWeight={"bold"}
        fontSize={{ base: "xl", lg: "2xl" }}
        lineHeight={6}
        borderBottomColor={"gray.450"}
        borderBottomWidth={1}
        color={"black"}
        pb={"15px"}
      >
        {"Notifications"}
      </Heading>
      <Box mt={{ base: 5, lg: 6 }}>
        {data?.map((item, index) => (
          <Flex key={index} mt={`${index === 0 ? 0 : 4}`}>
            <Text
              color={"gray.650"}
              fontFamily={"Roboto"}
              fontSize={"md"}
              fontStyle={"normal"}
              fontWeight={"normal"}
              lineHeight={"150%"}
            >
              {item.id}
            </Text>
            <Text
              color={"gray.850"}
              fontFamily={"Roboto"}
              fontSize={"md"}
              fontStyle={"normal"}
              fontWeight={"normal"}
              lineHeight={"150%"}
              ml={"24px"}
            >
              {item.title}
            </Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};
