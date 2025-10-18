import { Box, Button, HStack, Heading, Icon, IconButton, Spacer, Stack, Text } from "@chakra-ui/react"
import { LuChevronDown, LuDownload } from "react-icons/lu"
import TransactionItem from "./TransactionItem"
import type { TransactionItemProps } from "@/types/transactions"

interface TransactionsListProps {
  items: TransactionItemProps[]
}

export function TransactionsList({ items }: TransactionsListProps) {
  return (
    <Box bg="bg" borderWidth="1px" rounded="xl" p={{ base: 4, md: 6 }} shadow="xs">
      <HStack mb={4}>
        <Stack spacing={0}>
          <Heading size="sm">24 Transactions</Heading>
          <Text color="fg.muted" fontSize="sm">Your transactions for the last 7 days</Text>
        </Stack>
        <Spacer />
        <HStack>
          <Button variant="subtle" rightIcon={<LuChevronDown />}>Filter</Button>
          <Button variant="outline" leftIcon={<LuDownload />}>Export list</Button>
        </HStack>
      </HStack>

      <Stack>
        {items.map((tx) => (
          <TransactionItem key={`${tx.title}-${tx.date}-${tx.amount}`} {...tx} />
        ))}
      </Stack>
    </Box>
  )
}

export default TransactionsList


