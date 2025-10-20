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
import { LuChevronDown, LuDownload } from "react-icons/lu";
import { useState } from "react";
import FilterDrawer from "@/components/transactions/filter-drawer";
import { useTransactions } from "@/hooks/useTransactions";

export default function TransactionsList() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { data: transactions, isLoading } = useTransactions();

  const transactionCount = transactions?.length ?? 0;

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
              {isLoading ? "Loading..." : `${transactionCount} Transactions`}
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
          {isLoading ? (
            <Text color="app.textMuted" textAlign="center" py={8}>
              Loading transactions...
            </Text>
          ) : transactions && transactions.length > 0 ? (
            transactions.map((tx, index) => {
              const isWithdrawal = tx.type === "withdrawal";
              const title = isWithdrawal ? "Cash withdrawal" : tx.metadata?.product_name || "Transaction";
              const description = isWithdrawal ? undefined : tx.metadata?.name;

              return (
                <TransactionItem
                  key={`${tx.payment_reference || index}`}
                  title={title}
                  description={description}
                  amount={`USD ${tx.amount.toLocaleString()}`}
                  date={tx.date}
                  status={tx.status as "successful" | "pending"}
                  type={tx.type as "deposit" | "withdrawal"}
                />
              );
            })
          ) : (
            <Text color="app.textMuted" textAlign="center" py={8}>
              No transactions found
            </Text>
          )}
        </Stack>
      </Flex>
      <FilterDrawer isOpen={isFilterOpen} onOpenChange={setIsFilterOpen} />
    </Box>
  );
}
