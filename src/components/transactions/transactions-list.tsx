import { Box, Button, Heading, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import TransactionItem from "@/components/transactions/transaction-item";
import type { TransactionItemProps } from "@/types/transactions";
import { LuChevronDown, LuDownload } from "react-icons/lu";

interface TransactionsListProps {
  items: TransactionItemProps[];
}

export function TransactionsList({ items }: TransactionsListProps) {
  return (
    <Box mt={{ base: 6, md: 10 }}>
      <Box
        bg="bg"
        borderWidth="1px"
        rounded="xl"
        p={{ base: 4, md: 6 }}
        shadow="xs"
      >
        <HStack mb={4}>
          <Stack spacing={0}>
            <Heading size="sm">24 Transactions</Heading>
            <Text color="fg.muted" fontSize="sm">
              Your transactions for the last 7 days
            </Text>
          </Stack>
          <Spacer />
          <HStack>
            <Button variant="subtle" rightIcon={<LuChevronDown />}>
              Filter
            </Button>
            <Button variant="outline" leftIcon={<LuDownload />}>
              Export list
            </Button>
          </HStack>
        </HStack>

        <Stack>
          {items.map((tx) => (
            <TransactionItem
              key={`${tx.title}-${tx.date}-${tx.amount}`}
              {...tx}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default TransactionsList;
