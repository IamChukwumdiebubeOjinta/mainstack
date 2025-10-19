import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import TransactionItem from "@/components/transactions/transaction-item";
import type { TransactionItemProps } from "@/types/transactions";
import { LuChevronDown, LuDownload } from "react-icons/lu";
import { useState } from "react";
import FilterDrawer from "@/components/transactions/filter-drawer";

interface TransactionsListProps {
  items: TransactionItemProps[];
}

export default function TransactionsList({ items }: TransactionsListProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <Box mt={{ base: 6, md: 10 }}>
      <Flex bg="card.bg" rounded="card" direction="column" gap="33px">
        {/* Header Section */}
        <HStack
          justify="space-between"
          borderBottom="1px solid"
          borderColor="app.borderMuted"
          pb="24px"
        >
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
              px="20px"
              py="12px"
              height={{ base: "40px", md: "48px" }}
              borderRadius="100px"
              _hover={{ bg: "bg.muted" }}
              onClick={() => setIsFilterOpen(true)}
            >
              Filter
              <LuChevronDown />
            </Button>
            <Button
              variant="ghost"
              bg="app.surfaceMuted"
              color="app.text"
              fontSize="14px"
              fontWeight="medium"
              px="20px"
              py="12px"
              height={{ base: "40px", md: "48px" }}
              borderRadius="100px"
              _hover={{ bg: "bg.muted" }}
            >
              Export list
              <LuDownload />
            </Button>
          </HStack>
        </HStack>

        {/* Transaction List */}
        <Stack>
          {items.map((tx) => (
            <TransactionItem
              key={`${tx.title}-${tx.date}-${tx.amount}`}
              {...tx}
            />
          ))}
        </Stack>
      </Flex>
      <FilterDrawer isOpen={isFilterOpen} onOpenChange={setIsFilterOpen} />
    </Box>
  );
}
