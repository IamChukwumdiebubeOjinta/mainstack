import { Box, VStack, HStack, Text, Icon } from "@chakra-ui/react";
import { LuInfo } from "react-icons/lu";

interface StatItemData {
  label: string;
  value: string;
}

interface StatsPanelProps {
  stats: StatItemData[];
}

function StatsPanel({ stats }: StatsPanelProps) {
  return (
    <Box bg="white">
      <VStack gap={8} align="stretch">
        {stats.map((stat) => (
          <Box key={stat.label}>
            <HStack justify="space-between" mb={2}>
              <Text
                fontSize="sm"
                color="#56616B"
                fontWeight="meduim"
                lineHeight="16px"
                letterSpacing="-0.2px"
              >
                {stat.label}
              </Text>
              <Icon as={LuInfo} boxSize={5} color="#56616B" />
            </HStack>
            <Text
              fontSize="28px"
              fontWeight="bold"
              color="#131316"
              lineHeight="36px"
              letterSpacing="-0.02em"
            >
              {stat.value}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default StatsPanel;
