import { HStack, Icon, Text } from "@chakra-ui/react"
import { LuInfo } from "react-icons/lu"

interface StatItemProps {
  label: string
  value: string
}

export function StatItem({ label, value }: StatItemProps) {
  return (
    <HStack justify="space-between" py={3} borderBottomWidth="1px">
      <Text color="fg.muted" fontWeight="medium">
        {label}
      </Text>
      <HStack gap={2}>
        <Text fontWeight="semibold">{value}</Text>
        <Icon color="fg.muted">
          <LuInfo />
        </Icon>
      </HStack>
    </HStack>
  )
}

export default StatItem
