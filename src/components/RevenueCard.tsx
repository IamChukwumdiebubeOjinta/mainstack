import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react"

interface RevenueCardProps {
  amount: string
}

export function RevenueCard({ amount }: RevenueCardProps) {
  return (
    <Box bg="bg" borderWidth="1px" rounded="xl" p={{ base: 4, md: 6 }} shadow="xs">
      <HStack justify="space-between" align="start">
        <Box>
          <Text color="fg.muted" fontWeight="medium" mb={1}>
            Available Balance
          </Text>
          <Heading size={{ base: "lg", md: "2xl" }} letterSpacing="tight">
            {amount}
          </Heading>
        </Box>
        <Button colorPalette="orange" variant="solid" size={{ base: "sm", md: "md" }}>
          Withdraw
        </Button>
      </HStack>
    </Box>
  )
}

export default RevenueCard


