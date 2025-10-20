import { useWallet } from "@/hooks/useWallet";
import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";

export function RevenueCard() {
    const { data, isLoading } = useWallet();
    const amount = data?.balance.toLocaleString("en-US");
    return (
        <Box bg="bg" p={{ base: 4, md: 6 }}>
            <HStack gap="64px" align="center">
                <Flex direction="column" gap="8px">
                    <Text
                        color="gray.400"
                        fontWeight="medium"
                        fontSize="14px"
                        lineHeight="16px"
                        letterSpacing="-0.2px"
                        cursor="default"
                    >
                        Available Balance
                    </Text>
                    <Heading
                        size={{ base: "lg", md: "2xl" }}
                        letterSpacing="-1.5px"
                        fontWeight="bold"
                        fontSize="36px"
                        lineHeight="46px"
                        cursor="default"
                        minW="15.625rem"
                    >
                        USD {isLoading ? "****" : amount}
                    </Heading>
                </Flex>
                <Button
                    colorPalette="black"
                    variant="solid"
                    size="lg"
                    fontWeight="medium"
                    fontSize="14px"
                    lineHeight="16px"
                    letterSpacing="-0.2px"
                    cursor="pointer"
                    rounded="100px"
                    px="28px"
                    py="14px"
                    onClick={() =>
                        alert("Lol...You're not touching that money")
                    }
                >
                    Withdraw
                </Button>
            </HStack>
        </Box>
    );
}

export default RevenueCard;
