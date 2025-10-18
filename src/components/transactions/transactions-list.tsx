import { Box, Button, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import TransactionItem from "@/components/transactions/transaction-item";
import type { TransactionItemProps } from "@/types/transactions";
import { LuChevronDown, LuDownload } from "react-icons/lu";

interface TransactionsListProps {
  items: TransactionItemProps[];
}

export function TransactionsList({ items }: TransactionsListProps) {
  return (
    <Box mt={{ base: 6, md: 10 }}>
      <Flex
        bg="card.bg"
        rounded="card"
        direction="column"
        gap="33px"
      >
        {/* Header Section */}
        <HStack justify="space-between">
          <Stack gap={1}>
            <Heading 
              size="lg" 
              fontWeight="bold" 
              color="app.text"
              fontSize="24px"
              lineHeight="32px"
            >
              24 Transactions
            </Heading>
            <Text 
              color="app.textMuted" 
              fontSize="14px"
              lineHeight="20px"
              fontWeight="normal"
            >
              Your transactions for the last 7 days
            </Text>
          </Stack>
          <HStack gap={3}>
            <Button 
              variant="ghost" 
              bg="app.surfaceMuted"
              color="app.text"
              fontSize="14px"
              fontWeight="medium"
              px={4}
              py={2}
              borderRadius="action"
              _hover={{ bg: "bg.muted" }}
            >
              <LuChevronDown style={{ marginRight: '8px' }} />
              Filter
            </Button>
            <Button 
              variant="ghost" 
              bg="app.surfaceMuted"
              color="app.text"
              fontSize="14px"
              fontWeight="medium"
              px={4}
              py={2}
              borderRadius="action"
              _hover={{ bg: "bg.muted" }}
            >
              <LuDownload style={{ marginRight: '8px' }} />
              Export list
            </Button>
          </HStack>
        </HStack>

        {/* Transaction List */}
        <Stack gap={0}>
          {items.map((tx, index) => (
            <TransactionItem
              key={`${tx.title}-${tx.date}-${tx.amount}`}
              {...tx}
              isLast={index === items.length - 1}
            />
          ))}
        </Stack>
      </Flex>
    </Box>
  );
}

export default TransactionsList;
