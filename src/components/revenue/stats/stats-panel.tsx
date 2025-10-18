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
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      rounded="xl"
      p={{ base: 6, md: 8 }}
      shadow="xs"
    >
      <VStack spacing={8} align="stretch">
        {stats.map((stat, index) => (
          <Box key={stat.label}>
            <HStack justify="space-between" mb={3}>
              <Text
                fontSize="sm"
                color="#56616B"
                fontWeight="normal"
                lineHeight="20px"
              >
                {stat.label}
              </Text>
              <Icon as={LuInfo} boxSize={5} color="#C1C7CD" />
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
            {index < stats.length - 1 && (
              <Box
                mt={8}
                borderBottomWidth="1px"
                borderColor="#E3E5E8"
              />
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default StatsPanel;

