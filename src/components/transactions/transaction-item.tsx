import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { LuArrowDownLeft, LuArrowUpRight } from "react-icons/lu";
import type {
  TransactionItemProps,
  TransactionStatus,
} from "@/types/transactions";

function StatusIcon({
  status,
  title,
}: {
  status: TransactionStatus;
  title: string;
}) {
  const isIncoming =
    status === "success" && !title.toLowerCase().includes("withdrawal");

  return (
    <Box
      width="48px"
      height="48px"
      borderRadius="50%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={isIncoming ? "app.successBg" : "app.dangerBg"}
    >
      <Box color={isIncoming ? "app.success" : "app.danger"}>
        {isIncoming ? <LuArrowDownLeft size={20} /> : <LuArrowUpRight size={20} />}
      </Box>
    </Box>
  );
}

export function TransactionItem(props: TransactionItemProps) {
  const { title, description, status, amount, date } = props;

  return (
    <HStack
      py={4}
      justify="space-between"
      align="center"
    >
      <HStack gap={4} align="center" flex="1">
        <StatusIcon status={status} title={title} />
        <Stack gap={1} flex="1">
          <Text
            fontWeight="medium"
            fontSize="16px"
            color="app.text"
            lineHeight="24px"
          >
            {title}
          </Text>
          <Text
            color="app.textMuted"
            fontSize="14px"
            lineHeight="20px"
            fontWeight="normal"
          >
            {description}
          </Text>
          {status === "pending" && (
            <Text
              color="app.warning"
              fontSize="14px"
              fontWeight="medium"
              mt={1}
            >
              Pending
            </Text>
          )}
          {status === "success" &&
            title.toLowerCase().includes("withdrawal") && (
              <Text
                color="app.success"
                fontSize="14px"
                fontWeight="medium"
                mt={1}
              >
                Successful
              </Text>
            )}
        </Stack>
      </HStack>
      <Stack gap={1} align="end" minW="120px">
        <Text
          fontWeight="semibold"
          fontSize="16px"
          color="app.text"
          lineHeight="24px"
        >
          {amount}
        </Text>
        <Text
          color="app.textMuted"
          fontSize="12px"
          lineHeight="20px"
          fontWeight="normal"
        >
          {date}
        </Text>
      </Stack>
    </HStack>
  );
}

export default TransactionItem;
