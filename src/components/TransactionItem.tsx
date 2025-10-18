import { Badge, Box, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { LuArrowUpRight, LuCheck, LuClock } from "react-icons/lu"
import type { TransactionItemProps, TransactionStatus } from "@/types/transactions"

function StatusIcon({ status }: { status: TransactionStatus }) {
  const color = status === "success" ? "green.500" : "orange.500"
  const icon = status === "success" ? <LuCheck /> : <LuArrowUpRight />
  return (
    <Icon color={color} boxSize={5}>
      {icon}
    </Icon>
  )
}

export function TransactionItem(props: TransactionItemProps) {
  const { title, description, status, amount, date } = props
  return (
    <HStack
      py={4}
      justify="space-between"
      borderBottomWidth="1px"
      transition="background 0.2s ease"
      _hover={{ bg: "bg.muted" }}
    >
      <HStack gap={3} align="start">
        <StatusIcon status={status} />
        <Stack spacing={0}>
          <Text fontWeight="semibold">{title}</Text>
          <Text color="fg.muted" fontSize="sm">
            {description}
          </Text>
          {status === "pending" && (
            <Text color="orange.500" fontSize="xs" mt={1}>
              Pending
            </Text>
          )}
          {status === "success" && (
            <Text color="green.500" fontSize="xs" mt={1}>
              Successful
            </Text>
          )}
        </Stack>
      </HStack>
      <Stack spacing={0} align="end">
        <Text fontWeight="semibold">{amount}</Text>
        <Text color="fg.muted" fontSize="sm">
          {date}
        </Text>
      </Stack>
    </HStack>
  )
}

export default TransactionItem


